'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactDom = require('react-dom');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@media(prefers-reduced-motion:reduce){*,:after,:before{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}*,:after,:before{box-sizing:border-box}*{margin:0}::-moz-focus-inner{border:0}.fade-in{-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden}@keyframes fadeIn{0%{opacity:0}45%{opacity:.33}to{opacity:1}}.font-bold{font-weight:700}.text-20px{font-size:20px}.text-black{color:#101010}.bg-white{background-color:#fdfdfd}.overflow-x-hidden{overflow-x:hidden}.absolute{position:absolute}.fixed{position:fixed}.top-0per{top:0}.top-50per{top:50%}.right-0per{right:0}.bottom-0per{bottom:0}.left-0per{left:0}.left-50per{left:50%}.z-1{z-index:1}.max-w-90per{max-width:90%}.max-w-50vw{max-width:50vw}.min-w-50rem{min-width:50rem}.max-h-75vh{max-height:75vh}.p-20px{padding:20px}.mt-20px{margin-top:20px}.mb-20px{margin-bottom:20px}.animation-forwards{animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards}.animation-duration-500ms{animation-duration:.5s;-webkit-animation-duration:.5s}.shadow-small-black-5{box-shadow:5px 5px 10px -1px #4d4d4d;-webkit-box-shadow:5px 5px 10px -1px #4d4d4d;-moz-box-shadow:5px 5px 10px -1px #4d4d4d;-ms-box-shadow:5px 5px 10px -1px #4d4d4d}.backdrop-blur-30px{backdrop-filter:blur(30px);-webkit-backdrop-filter:blur(30px)}.rounded-20px{border-radius:20px}.cursor-pointer{cursor:pointer}.fill-gray{fill:#7d7d7d}@media(max-width:480px){.sm\\:min-w-90vw{min-width:90vw}}@media(min-width:481px)and (max-width:768px){.md\\:min-w-90vw{min-width:90vw}}";
styleInject(css_248z);

function CloseIcon({
  width = '20',
  height = '20'
}) {
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    className: "cursor-pointer",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    fill: "none",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    className: "fill-gray",
    d: "M5.187 4.01A.833.833 0 004.01 5.187L8.822 10l-4.814 4.813a.835.835 0 101.179 1.178L10 11.178l4.813 4.813a.833.833 0 001.178-1.178L11.178 10l4.813-4.812a.833.833 0 00-1.178-1.179L10 8.822 5.187 4.008v.001z"
  }));
}

const Modal = ({
  children,
  toggle,
  setToggle,
  className,
  backgroundAnimation = 'fade-in animation-duration-500ms animation-forwards',
  closeIcon = /*#__PURE__*/React__default["default"].createElement(CloseIcon, null),
  modalContentAnimation = 'fade-in animation-duration-500ms animation-forwards',
  useKeyInput = true
}) => {
  {
    useKeyInput === true ? React.useEffect(() => {
      //   ESC key to close the modal
      const close = e => {
        if (e.keyCode === 27) {
          setToggle();
        }
      };

      window.addEventListener('keydown', close); // CTRL + k key to open the modal

      const opener = e => {
        if (e.ctrlKey && e.key === 'k') {
          e.preventDefault();
          setToggle(true);
        }
      };

      document.addEventListener('keydown', opener);
      return () => window.removeEventListener('keydown', close) || document.removeEventListener('keydown', opener);
    }, []) : null;
  }
  return typeof window !== 'undefined' && /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, toggle && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    onClick: setToggle.bind(undefined, false),
    className: `fixed left-0per top-0per bottom-0per right-0per backdrop-blur-30px text-black ${backgroundAnimation}`,
    style: {
      backgroundColor: 'rgba(16,16,16,0.75)'
    }
  }), /*#__PURE__*/React__default["default"].createElement(ModalContent, {
    className: className,
    setToggle: setToggle,
    closeIcon: closeIcon,
    modalContentAnimation: modalContentAnimation
  }, children))), document.querySelector('#modal-portal'));
};

const ModalContent = ({
  children,
  className,
  modalContentAnimation,
  closeIcon,
  setToggle,
  ...restProps
}) => {
  const modalRef = React.useRef();
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    ref: modalRef,
    tabIndex: 0
  }, restProps, {
    className: `text-black overflow-x-hidden fixed left-50per top-50per rounded-20px bg-white min-w-50rem max-w-50vw sm:min-w-90vw md:min-w-90vw max-h-75vh shadow-small-black-5 ${className} ${modalContentAnimation}`,
    style: {
      transform: 'translate(-50%, -50%)'
    }
  }), /*#__PURE__*/React__default["default"].createElement("button", {
    onClick: setToggle.bind(undefined, false),
    className: "absolute z-1",
    style: {
      top: '20px',
      right: '20px'
    }
  }, closeIcon), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "p-20px"
  }, children));
}; // Modal header


Modal.Header = ({
  children,
  className,
  ...restProps
}) => {
  return /*#__PURE__*/React__default["default"].createElement("header", _extends({
    className: `text-20px font-bold mb-20px max-w-90per ${className}`
  }, restProps), children);
}; // Modal body


Modal.Body = ({
  children,
  className,
  ...restProps
}) => {
  return /*#__PURE__*/React__default["default"].createElement("div", _extends({
    className: `${className}`
  }, restProps), children);
}; // Modal footer


Modal.Footer = ({
  children,
  className,
  ...restProps
}) => {
  return /*#__PURE__*/React__default["default"].createElement("footer", _extends({
    className: `mt-20px ${className}`
  }, restProps), children);
}; // import React from 'react'
// export function Modal() {
//   return <div>Modal</div>
// }

exports.Modal = Modal;
