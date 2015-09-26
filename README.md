# DSS with AST

My goal here is to show a possibility of implementing the cool [DSS](https://github.com/guisouza/dss) project using [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree). And not to reimplement DSS itself.

It makes things WAY easier, and you don't have to deal with crazy ass regexes (because someone already did it for you).

Unfortunately the project size will increase (maybe a lot), but it'll make new features way easier to implement, and less prone to bugs.

This project will require the [css](https://www.npmjs.com/package/css) npm module and [browserify](https://github.com/substack/node-browserify). I also use [lodash](https://www.npmjs.com/package/lodash) as a helper, but it's not required at all.

## What this project does

For now it only gets the valid selectors that has any **DSS** syntax on it. And the ones that doesn't have any, are not returned at all.

For example:

```html
<style rel="dss">
  body {
    background-color: #E0E0E0;
  }

  .example {
    background-color: rgb(|x|, 123, |z|);
  }

  body .div, body .div2 {
    background-color: blue;
    top: |x|px;
    left: |y|px;
  }
</style>
```

would return:

```js
[{
  declarations: [{
    position: '...', // this index may be useless
    type: 'declaration', // this index may also be useless
    property: 'background-color',
    value: 'rgb(|x|, 123, |z|)'
  }],
  selectors: ['.example']
},

{
  declarations: [{
    property: 'top',
    value: '|x|px'
  }, {
    property: 'left',
    value: '|y|px'
  }],
  selectors: ['body .div', 'body .div2']
}]
```

See?? I wrote 20 lines of code, and all the magic happened :D

The `body` selector was ignored, and I got an nice array with all I need.

## Coding on this project

```
  # install dependencies
  npm install

  # run the watch command to start your magic!
  npm run watch
```

you may want to run a server, if you have python installed (default in mac computers), you can just run `python -m SimpleHTTPServer`.
