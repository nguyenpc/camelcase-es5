"use strict";

var _ava = _interopRequireDefault(require("ava"));

var _dist = _interopRequireDefault(require("./dist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _ava["default"])('camelCase', function (t) {
  t.is((0, _dist["default"])('foo'), 'foo');
  t.is((0, _dist["default"])('foo-bar'), 'fooBar');
  t.is((0, _dist["default"])('foo-bar-baz'), 'fooBarBaz');
  t.is((0, _dist["default"])('foo--bar'), 'fooBar');
  t.is((0, _dist["default"])('--foo-bar'), 'fooBar');
  t.is((0, _dist["default"])('--foo--bar'), 'fooBar');
  t.is((0, _dist["default"])('FOO-BAR'), 'fooBar');
  t.is((0, _dist["default"])('FOÈ-BAR'), 'foèBar');
  t.is((0, _dist["default"])('-foo-bar-'), 'fooBar');
  t.is((0, _dist["default"])('--foo--bar--'), 'fooBar');
  t.is((0, _dist["default"])('foo.bar'), 'fooBar');
  t.is((0, _dist["default"])('foo..bar'), 'fooBar');
  t.is((0, _dist["default"])('..foo..bar..'), 'fooBar');
  t.is((0, _dist["default"])('foo_bar'), 'fooBar');
  t.is((0, _dist["default"])('__foo__bar__'), 'fooBar');
  t.is((0, _dist["default"])('__foo__bar__'), 'fooBar');
  t.is((0, _dist["default"])('foo bar'), 'fooBar');
  t.is((0, _dist["default"])('  foo  bar  '), 'fooBar');
  t.is((0, _dist["default"])('-'), '-');
  t.is((0, _dist["default"])(' - '), '-');
  t.is((0, _dist["default"])('fooBar'), 'fooBar');
  t.is((0, _dist["default"])('fooBar-baz'), 'fooBarBaz');
  t.is((0, _dist["default"])('foìBar-baz'), 'foìBarBaz');
  t.is((0, _dist["default"])('fooBarBaz-bazzy'), 'fooBarBazBazzy');
  t.is((0, _dist["default"])('FBBazzy'), 'fbBazzy');
  t.is((0, _dist["default"])('F'), 'f');
  t.is((0, _dist["default"])('FooBar'), 'fooBar');
  t.is((0, _dist["default"])('Foo'), 'foo');
  t.is((0, _dist["default"])('FOO'), 'foo');
  t.is((0, _dist["default"])(['foo', 'bar']), 'fooBar');
  t.is((0, _dist["default"])(['foo', '-bar']), 'fooBar');
  t.is((0, _dist["default"])(['foo', '-bar', 'baz']), 'fooBarBaz');
  t.is((0, _dist["default"])(['', '']), '');
  t.is((0, _dist["default"])('--'), '');
  t.is((0, _dist["default"])(''), '');
  t.is((0, _dist["default"])('--__--_--_'), '');
  t.is((0, _dist["default"])(['---_', '--', '', '-_- ']), '');
  t.is((0, _dist["default"])('foo bar?'), 'fooBar?');
  t.is((0, _dist["default"])('foo bar!'), 'fooBar!');
  t.is((0, _dist["default"])('foo bar$'), 'fooBar$');
  t.is((0, _dist["default"])('foo-bar#'), 'fooBar#');
  t.is((0, _dist["default"])('XMLHttpRequest'), 'xmlHttpRequest');
  t.is((0, _dist["default"])('AjaxXMLHttpRequest'), 'ajaxXmlHttpRequest');
  t.is((0, _dist["default"])('Ajax-XMLHttpRequest'), 'ajaxXmlHttpRequest');
  t.is((0, _dist["default"])([]), '');
  t.is((0, _dist["default"])('mGridCol6@md'), 'mGridCol6@md');
  t.is((0, _dist["default"])('A::a'), 'a::a');
  t.is((0, _dist["default"])('Hello1World'), 'hello1World');
  t.is((0, _dist["default"])('Hello11World'), 'hello11World');
  t.is((0, _dist["default"])('hello1world'), 'hello1World');
  t.is((0, _dist["default"])('Hello1World11foo'), 'hello1World11Foo');
  t.is((0, _dist["default"])('Hello1'), 'hello1');
  t.is((0, _dist["default"])('hello1'), 'hello1');
  t.is((0, _dist["default"])('1Hello'), '1Hello');
  t.is((0, _dist["default"])('1hello'), '1Hello');
  t.is((0, _dist["default"])('h2w'), 'h2W');
});
(0, _ava["default"])('camelCase with pascalCase option', function (t) {
  t.is((0, _dist["default"])('foo', {
    pascalCase: true
  }), 'Foo');
  t.is((0, _dist["default"])('foo-bar', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('foo-bar-baz', {
    pascalCase: true
  }), 'FooBarBaz');
  t.is((0, _dist["default"])('foo--bar', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('--foo-bar', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('--foo--bar', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('FOO-BAR', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('FOÈ-BAR', {
    pascalCase: true
  }), 'FoèBar');
  t.is((0, _dist["default"])('-foo-bar-', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('--foo--bar--', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('foo.bar', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('foo..bar', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('..foo..bar..', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('foo_bar', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('__foo__bar__', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('__foo__bar__', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('foo bar', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('  foo  bar  ', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('-', {
    pascalCase: true
  }), '-');
  t.is((0, _dist["default"])(' - ', {
    pascalCase: true
  }), '-');
  t.is((0, _dist["default"])('fooBar', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('fooBar-baz', {
    pascalCase: true
  }), 'FooBarBaz');
  t.is((0, _dist["default"])('foìBar-baz', {
    pascalCase: true
  }), 'FoìBarBaz');
  t.is((0, _dist["default"])('fooBarBaz-bazzy', {
    pascalCase: true
  }), 'FooBarBazBazzy');
  t.is((0, _dist["default"])('FBBazzy', {
    pascalCase: true
  }), 'FbBazzy');
  t.is((0, _dist["default"])('F', {
    pascalCase: true
  }), 'F');
  t.is((0, _dist["default"])('FooBar', {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])('Foo', {
    pascalCase: true
  }), 'Foo');
  t.is((0, _dist["default"])('FOO', {
    pascalCase: true
  }), 'Foo');
  t.is((0, _dist["default"])(['foo', 'bar'], {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])(['foo', '-bar'], {
    pascalCase: true
  }), 'FooBar');
  t.is((0, _dist["default"])(['foo', '-bar', 'baz'], {
    pascalCase: true
  }), 'FooBarBaz');
  t.is((0, _dist["default"])(['', ''], {
    pascalCase: true
  }), '');
  t.is((0, _dist["default"])('--', {
    pascalCase: true
  }), '');
  t.is((0, _dist["default"])('', {
    pascalCase: true
  }), '');
  t.is((0, _dist["default"])('--__--_--_', {
    pascalCase: true
  }), '');
  t.is((0, _dist["default"])(['---_', '--', '', '-_- '], {
    pascalCase: true
  }), '');
  t.is((0, _dist["default"])('foo bar?', {
    pascalCase: true
  }), 'FooBar?');
  t.is((0, _dist["default"])('foo bar!', {
    pascalCase: true
  }), 'FooBar!');
  t.is((0, _dist["default"])('foo bar$', {
    pascalCase: true
  }), 'FooBar$');
  t.is((0, _dist["default"])('foo-bar#', {
    pascalCase: true
  }), 'FooBar#');
  t.is((0, _dist["default"])('XMLHttpRequest', {
    pascalCase: true
  }), 'XmlHttpRequest');
  t.is((0, _dist["default"])('AjaxXMLHttpRequest', {
    pascalCase: true
  }), 'AjaxXmlHttpRequest');
  t.is((0, _dist["default"])('Ajax-XMLHttpRequest', {
    pascalCase: true
  }), 'AjaxXmlHttpRequest');
  t.is((0, _dist["default"])([], {
    pascalCase: true
  }), '');
  t.is((0, _dist["default"])('mGridCol6@md', {
    pascalCase: true
  }), 'MGridCol6@md');
  t.is((0, _dist["default"])('A::a', {
    pascalCase: true
  }), 'A::a');
  t.is((0, _dist["default"])('Hello1World', {
    pascalCase: true
  }), 'Hello1World');
  t.is((0, _dist["default"])('Hello11World', {
    pascalCase: true
  }), 'Hello11World');
  t.is((0, _dist["default"])('hello1world', {
    pascalCase: true
  }), 'Hello1World');
  t.is((0, _dist["default"])('hello1World', {
    pascalCase: true
  }), 'Hello1World');
  t.is((0, _dist["default"])('hello1', {
    pascalCase: true
  }), 'Hello1');
  t.is((0, _dist["default"])('Hello1', {
    pascalCase: true
  }), 'Hello1');
  t.is((0, _dist["default"])('1hello', {
    pascalCase: true
  }), '1Hello');
  t.is((0, _dist["default"])('1Hello', {
    pascalCase: true
  }), '1Hello');
  t.is((0, _dist["default"])('h1W', {
    pascalCase: true
  }), 'H1W');
});
(0, _ava["default"])('invalid input', function (t) {
  t["throws"](function () {
    (0, _dist["default"])(1);
  }, /Expected the input to be/);
});