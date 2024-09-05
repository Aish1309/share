"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/Navbar.js

var Navbar = function Navbar(props) {
  return /*#__PURE__*/_react["default"].createElement("nav", {
    style: {
      background: '#333',
      color: '#fff',
      padding: '1rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/",
    style: {
      color: '#fff',
      marginRight: '1rem'
    }
  }, "Home"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/about",
    style: {
      color: '#fff',
      marginRight: '1rem'
    }
  }, "About"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/contact",
    style: {
      color: '#fff'
    }
  }, props.contact), /*#__PURE__*/_react["default"].createElement("h2", null, props.title));
};
var _default = exports["default"] = Navbar;