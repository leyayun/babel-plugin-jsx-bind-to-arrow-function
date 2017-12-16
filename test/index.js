const fs = require('fs');
const path = require('path')
const babel = require('babel-core');
const colors = require('colors');
const BabelPluginJsxBindToArrowFunction = require('../src/index');

// case-0
const source = path.resolve(__dirname, 'cases/case-0.jsx');
const dist = path.resolve(__dirname, 'cases/case-0-compiled.jsx');

fs.readFile(source, function(err, data) {
  if(err) throw err;

  const src = data.toString();
  const out = babel.transform(src, {
    plugins: ['syntax-jsx', BabelPluginJsxBindToArrowFunction]
  });

  fs.writeFile(dist, out.code, (err) => {
    if (err) throw err;
    console.log('Test Success: case-0-compiled.jsx'.green);
  })
});
