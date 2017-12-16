module.exports = function ({ types: t }) {

  const CallExpressionVisitor = {
    CallExpression(path) {
      if (path.node.callee.property.name === 'bind') {
        const parmas = path.node.arguments.slice(1);
        const memberExpression = path.get('callee').get('object');
        const expresstion = t.CallExpression(memberExpression.node, parmas);
        const arrowFunctionExpression = t.ArrowFunctionExpression(parmas, expresstion);
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
