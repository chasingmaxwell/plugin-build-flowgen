'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fs = require('fs');
var fastGlob = _interopDefault(require('fast-glob'));
var util = require('util');
var path = require('path');
var flowgen = require('flowgen');

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

const writeFile = util.promisify(fs.writeFile);
function build(_x) {
  return _build.apply(this, arguments);
}

function _build() {
  _build = _asyncToGenerator(function* ({
    out,
    reporter
  }) {
    yield Promise.all((yield fastGlob([`${path.join(out, 'dist-types')}/**/*.d.ts`])).map(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(function* (file) {
        return writeFile(path.join(file.replace(/.d.ts$/, '.js.flow')), flowgen.compiler.compileDefinitionFile(file));
      });

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }()));
    reporter.created(path.join(out, 'dist-types', 'index.js.flow'), 'types');
  });
  return _build.apply(this, arguments);
}

exports.build = build;
