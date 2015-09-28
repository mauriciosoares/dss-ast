var css = require('css');
var filter = require('prelude-es6/List/filter');
var reduce = require('prelude-es6/List/reduce');

var cssContent = document.querySelector('style[rel="dss"]');

var parsed = css.parse(cssContent.innerHTML);

var toParse = reduce(function(toParse, selector) {
  var validDeclarations = filter(function(declaration) {
    return declaration.value.match(/\|.+\|/);
  }, selector.declarations);

  if(validDeclarations.length) {
    toParse.push({
      declarations: validDeclarations,
      selectors: selector.selectors
    });
  }

  return toParse;
}, [], parsed.stylesheet.rules);


console.log(toParse);
