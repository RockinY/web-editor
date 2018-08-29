"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createStore = function createStore(initialState) {
  var state = initialState || {};
  var listeners = {};

  var subscribeToItem = function subscribeToItem(key, callback) {
    listeners[key] = listeners[key] || [];
    listeners[key].push(callback);
  };

  var unsubscribeFromItem = function unsubscribeFromItem(key, callback) {
    listeners[key] = listeners[key].filter(function (listener) {
      return listener !== callback;
    });
  };

  var updateItem = function updateItem(key, item) {
    state = _objectSpread({}, state, _defineProperty({}, key, item));

    if (listeners[key]) {
      listeners[key].forEach(function (listener) {
        return listener(state[key]);
      });
    }
  };

  var getItem = function getItem(key) {
    return state[key];
  };

  return {
    subscribeToItem: subscribeToItem,
    unsubscribeFromItem: unsubscribeFromItem,
    updateItem: updateItem,
    getItem: getItem
  };
};

var _default = createStore;
exports.default = _default;