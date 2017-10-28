'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _wolfy87Eventemitter = require('wolfy87-eventemitter');

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data = [{
  icebox: true,
  type: 'First Icebox',
  content: [{
    id: 100,
    name: 'Build application server'
  }, {
    id: 101,
    name: 'Continue Coding'
  }]
}, {
  type: 'Icebox',
  content: [{
    id: 104,
    name: 'Programming'
  }]
}];
var newId = 0;
var listener = new _wolfy87Eventemitter2.default();

var createNewData = function createNewData() {
  newId = Math.floor(Math.random() * 100000000000);
  data[0].content.push({
    id: newId,
    name: ''
  });
  console.log('Modified data', data);
  listener.emit('moved');
};

var editData = function editData(itemType, id, idx, editedText) {
  data = data.map(function (obj) {
    var rObj = obj;
    if (rObj.type === itemType) {
      rObj.content = rObj.content.map(function (obj) {
        if (obj.id === id) {
          return _extends({}, obj, {
            name: editedText
          });
        }
        return obj;
      });
    }
    return rObj;
  });
  console.log(data);
  listener.emit('moved');
};

var mutateData = function mutateData(id, value, currentType, type) {
  data = data.map(function (obj) {
    var rObj = obj;
    if (rObj.type === currentType) {
      // We have to remove the element
      rObj.content = rObj.content.filter(function (obj) {
        return obj.id !== id;
      });
      console.log('Content: ', rObj.content);
    }
    if (rObj.type === type) {
      console.log('Value: ', value);
      rObj.content.push({
        id: id,
        name: value
      });
    }
    return rObj;
  });
  console.log('Modified data: ', data);
  listener.emit('moved');
};

//ReactDnDHTML5Backend

var itemTypes = {
  CARD: 'card'
};

var CardDrop = function (_React$Component) {
  _inherits(CardDrop, _React$Component);

  function CardDrop() {
    _classCallCheck(this, CardDrop);

    return _possibleConstructorReturn(this, (CardDrop.__proto__ || Object.getPrototypeOf(CardDrop)).apply(this, arguments));
  }

  _createClass(CardDrop, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          connectDropTarget = _props.connectDropTarget,
          isOver = _props.isOver,
          children = _props.children;

      return connectDropTarget(_react2.default.createElement(
        'div',
        { className: 'drop-area' },
        children
      ));
    }
  }]);

  return CardDrop;
}(_react2.default.Component);

var cardTarget = {
  drop: function drop(props, monitor) {
    var items = monitor.getItem();
    var type = props.type;
    var currentType = items.currentType,
        value = items.value,
        id = items.id;
    // Mutate data

    console.log('Item: ', value, id);
    mutateData(id, value, currentType, type);
  }
};

var collectDrop = function collectDrop(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

CardDrop = (0, _reactDnd.DropTarget)(itemTypes.CARD, cardTarget, collectDrop)(CardDrop);

var Card = function (_React$Component2) {
  _inherits(Card, _React$Component2);

  function Card(props) {
    _classCallCheck(this, Card);

    var _this2 = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

    _this2.state = {
      focus: false
    };
    return _this2;
  }

  _createClass(Card, [{
    key: 'loseFocus',
    value: function loseFocus() {
      this.setState({
        focus: false
      });
      newId = 0;
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {}
  }, {
    key: 'edit',
    value: function edit() {
      console.log('Edited');

      this.setState({
        focus: true
      });
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      console.log('Going toPreparing to focus');
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      console.log('Value preparing to change', e.target.value);
      var _props2 = this.props,
          pos = _props2.pos,
          id = _props2.id,
          type = _props2.type;

      console.log('DOM', _reactDom2.default.findDOMNode(this.refs.textarea).rows);
      console.log('Val: ', this.refs.textarea.value);
      editData(type, id, pos, e.target.value);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var newItem = this.props.newItem;

      console.log('New: ', newItem);
      if (newItem) {
        _reactDom2.default.findDOMNode(this.refs.textarea).focus();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var focus = this.state.focus;

      if (focus) {
        _reactDom2.default.findDOMNode(this.refs.textarea).focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          value = _props3.value,
          isDragging = _props3.isDragging,
          empty = _props3.empty,
          connectDragSource = _props3.connectDragSource,
          newItem = _props3.newItem,
          pos = _props3.pos,
          id = _props3.id;

      console.log('Id: ', id, 'Valuess: ', value);
      return connectDragSource(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'label-wrapper' },
          _react2.default.createElement('textarea', { onKeyUp: function onKeyUp() {
              return _this3.handleKeyUp();
            }, onFocus: this.onFocus,
            onChange: function onChange(e) {
              return _this3.onChange(e);
            }, autofocus: this.state.focus, ref: 'textarea', onBlur: function onBlur() {
              return _this3.loseFocus();
            }, className: 'label', type: 'text', value: value, placeholder: 'Placeholder', disabled: !this.state.focus && !newItem }),
          _react2.default.createElement(
            'a',
            { 'class': 'btn', onClick: function onClick() {
                return _this3.edit();
              } },
            _react2.default.createElement('i', { className: 'fa fa-pencil-square-o', 'aria-hidden': 'true' })
          )
        )
      ));
    }
  }]);

  return Card;
}(_react2.default.Component);

var collect = function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

var cardSource = {
  beginDrag: function beginDrag(props) {
    console.log('Props: ', props);
    return {
      value: props.value,
      currentType: props.type,
      id: props.id
    };
  }
};

Card = (0, _reactDnd.DragSource)(itemTypes.CARD, cardSource, collect)(Card);

var CardDeck = function (_React$Component3) {
  _inherits(CardDeck, _React$Component3);

  function CardDeck(props) {
    _classCallCheck(this, CardDeck);

    var _this4 = _possibleConstructorReturn(this, (CardDeck.__proto__ || Object.getPrototypeOf(CardDeck)).call(this, props));

    _this4.state = {
      data: data
    };
    listener.on('moved', function (changes) {
      console.log(data);
      _this4.setState({
        data: data
      });
    });
    return _this4;
  }

  _createClass(CardDeck, [{
    key: 'addItem',
    value: function addItem() {
      console.log('We have added items');
      createNewData();
    }
  }, {
    key: 'renderCards',
    value: function renderCards() {
      var _this5 = this;

      console.log('Updated data: ', this.state.data);
      return this.state.data.map(function (obj) {
        var containerStyle = (0, _classnames2.default)({
          'label-container': true,
          'icebox': false
        });
        console.log('Content: ', obj);
        return _react2.default.createElement(
          'div',
          { className: containerStyle },
          _react2.default.createElement(
            'div',
            { className: 'panel' },
            _react2.default.createElement(
              'h3',
              { className: 'panel-label' },
              obj.type
            )
          ),
          _react2.default.createElement(
            CardDrop,
            { type: obj.type },
            obj.content.map(function (val, idx) {
              var empty = val.name === '';
              var newItem = val.id === newId;
              console.log('name: ', val.name);
              return _react2.default.createElement(Card, { empty: empty, type: obj.type, pos: idx, id: val.id, value: val.name, newItem: newItem });
            }),
            obj.icebox && _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this5.addItem();
                }, className: 'plus', type: 'button' },
              '+'
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'tag-wrapper' },
        this.renderCards()
      );
    }
  }]);

  return CardDeck;
}(_react2.default.Component);

var Container = function (_React$Component4) {
  _inherits(Container, _React$Component4);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(CardDeck, null);
    }
  }]);

  return Container;
}(_react2.default.Component);

Container = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(Container);

module.exports = Container;