module.exports = function ({ types: t }) {

  const CallExpressionVisitor = {
    CallExpression(path) {
      if (path.node.callee.property.name === 'bind') {
        const args = path.node.arguments.slice(1);
        const restEleArg = t.Identifier('args');
        const restEle = t.RestElement(restEleArg);
        const spreadEle = t.SpreadElement(restEleArg);
        args.push(spreadEle);
        const memberExpression = path.get('callee').get('object');
        const expresstion = t.CallExpression(memberExpression.node, args);
        const arrowFunctionExpression = t.ArrowFunctionExpression([restEle], expresstion);
        path.replaceWith(arrowFunctionExpression);
      }
    }
  }

  return {
    visitor: {
      JSXExpressionContainer(path, state) {
        path.traverse(CallExpressionVisitor);
      }
    }
  }

}
