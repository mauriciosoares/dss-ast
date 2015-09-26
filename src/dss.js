var css = require('css');
var _ = require('lodash');
var cssContent = document.querySelector('style[rel="dss"]');

var parsed = css.parse(cssContent.innerHTML);

var toParse = _.reduce(parsed.stylesheet.rules, function(toParse, selector) {
  var validDeclarations = _.filter(selector.declarations, function(declaration) {
    return declaration.value.match(/\|.+\|/);
  });

  if(validDeclarations.length) {
    toParse.push({
      declarations: validDeclarations,
      selectors: selector.selectors
    });
  }

  return toParse;
}, []);


console.log(toParse);
