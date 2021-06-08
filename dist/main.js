'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _slicedToArray = _interopDefault(require('@babel/runtime/helpers/slicedToArray'));
var React = _interopDefault(require('react'));
var _extends = _interopDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties = _interopDefault(require('@babel/runtime/helpers/objectWithoutProperties'));
var _defineProperty = _interopDefault(require('@babel/runtime/helpers/defineProperty'));
var useEventListener = _interopDefault(require('use-event-listener'));
var reactUi = require('react-ui');
var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator = _interopDefault(require('@babel/runtime/helpers/asyncToGenerator'));
var resolveConfig = _interopDefault(require('tailwindcss/resolveConfig'));
var _typeof = _interopDefault(require('@babel/runtime/helpers/typeof'));
var deepmerge = _interopDefault(require('deepmerge'));
var Color = _interopDefault(require('color'));
var tinykeys = _interopDefault(require('tinykeys'));
var reactColor = require('react-color');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var getDefinitions = function getDefinitions(tailwindConfig) {
  tailwindConfig.theme.textAlign = {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify'
  };
  tailwindConfig.theme.fontStyle = {
    italic: 'italic',
    normal: 'normal',
    'not-italic': 'normal'
  };
  tailwindConfig.theme.lineHeight = _objectSpread({
    inherit: 'inherit'
  }, tailwindConfig.theme.lineHeight);
  tailwindConfig.theme.textDecoration = {
    underline: 'underline',
    'line-through': 'line-through',
    none: 'none'
  };
  tailwindConfig.theme.textTransform = {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    none: 'none',
    'normal-case': 'none'
  };
  tailwindConfig.theme.display = {
    block: 'block',
    flex: 'flex',
    'inline-flex': 'inline-flex',
    inline: 'inline',
    'inline-block': 'inline-block',
    hidden: 'none'
  };
  tailwindConfig.theme.justifyContent = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly'
  };
  tailwindConfig.theme.alignItems = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    baseline: 'baseline',
    stretch: 'stretch'
  };
  tailwindConfig.theme.flexDirection = {
    row: 'row',
    'row-reverse': 'row-reverse',
    col: 'column',
    'col-reverse': 'column-reverse'
  };
  tailwindConfig.theme.flexWrap = {
    wrap: 'wrap',
    'wrap-reverse': 'wrap-reverse',
    'no-wrap': 'nowrap'
  };
  tailwindConfig.theme.flexGrow = {
    "default": '1',
    '0': '0'
  };
  tailwindConfig.theme.flexShrink = {
    "default": '1',
    '0': '0'
  };
  tailwindConfig.theme.alignSelf = {
    auto: 'auto',
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch'
  };
  tailwindConfig.theme.spacing.auto = 'auto';
  tailwindConfig.theme.borderWidth = _objectSpread({
    '0': '0'
  }, tailwindConfig.theme.borderWidth);
  tailwindConfig.theme.borderStyle = {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    "double": 'double',
    none: 'none'
  };
  tailwindConfig.theme.outline = {
    browser: 'browser',
    none: '0'
  };
  tailwindConfig.theme.fill = {
    current: 'currentColor',
    none: 'none'
  };
  tailwindConfig.theme.stroke = {
    current: 'currentColor',
    none: 'none'
  };
  tailwindConfig.theme.transitionDuration = _objectSpread({
    '0': '0'
  }, tailwindConfig.theme.transitionDuration);
  tailwindConfig.theme.transitionDelay = _objectSpread({
    '0': '0'
  }, tailwindConfig.theme.transitionDelay);
  tailwindConfig.theme.accessibility = {
    visible: 'visible',
    'sr-only': 'sr-only',
    'not-sr-only': 'not-sr-only'
  };
  tailwindConfig.theme.flatColors = longNames(flatten(tailwindConfig.theme.colors));
  delete tailwindConfig.theme.spacing.px;
  var properties = [{
    name: 'display',
    scale: 'display',
    prefix: ''
  }, {
    name: 'opacity',
    scale: 'opacity',
    prefix: 'opacity-'
  }, {
    name: 'justifyContent',
    scale: 'justifyContent',
    prefix: 'justify-'
  }, {
    name: 'alignItems',
    scale: 'alignItems',
    prefix: 'items-'
  }, {
    name: 'flexDirection',
    scale: 'flexDirection',
    prefix: 'flex-'
  }, {
    name: 'flexWrap',
    scale: 'flexWrap',
    prefix: 'flex-'
  }, {
    name: 'flexGrow',
    scale: 'flexGrow',
    prefix: 'flex-grow-'
  }, {
    name: 'flexShrink',
    scale: 'flexShrink',
    prefix: 'flex-shrink-'
  }, {
    name: 'alignSelf',
    scale: 'alignSelf',
    prefix: 'self-'
  }, {
    name: 'order',
    scale: 'order',
    prefix: 'order-'
  }, {
    name: 'width',
    scale: 'width',
    prefix: 'w-'
  }, {
    name: 'height',
    scale: 'height',
    prefix: 'h-'
  }, {
    name: 'maxWidth',
    scale: 'maxWidth',
    prefix: 'max-w-'
  }, {
    name: 'maxHeight',
    scale: 'maxHeight',
    prefix: 'max-h-'
  }, {
    name: 'minWidth',
    scale: 'minWidth',
    prefix: 'min-w-'
  }, {
    name: 'minHeight',
    scale: 'minHeight',
    prefix: 'min-h-'
  }, {
    name: 'borderRadius',
    scale: 'borderRadius',
    prefix: 'rounded-'
  }, {
    name: 'spaceX',
    scale: 'space',
    prefix: 'space-x-'
  }, {
    name: 'spaceY',
    scale: 'space',
    prefix: 'space-y-'
  }, {
    name: 'margin',
    scale: 'margin',
    prefix: 'm-'
  }, {
    name: 'marginTop',
    scale: 'margin',
    prefix: 'mt-'
  }, {
    name: 'marginRight',
    scale: 'margin',
    prefix: 'mr-'
  }, {
    name: 'marginBottom',
    scale: 'margin',
    prefix: 'mb-'
  }, {
    name: 'marginLeft',
    scale: 'margin',
    prefix: 'ml-'
  }, {
    name: 'marginX',
    scale: 'margin',
    prefix: 'mx-'
  }, {
    name: 'marginY',
    scale: 'margin',
    prefix: 'my-'
  }, {
    name: 'padding',
    scale: 'padding',
    prefix: 'p-'
  }, {
    name: 'paddingTop',
    scale: 'padding',
    prefix: 'pt-'
  }, {
    name: 'paddingRight',
    scale: 'padding',
    prefix: 'pr-'
  }, {
    name: 'paddingBottom',
    scale: 'padding',
    prefix: 'pb-'
  }, {
    name: 'paddingLeft',
    scale: 'padding',
    prefix: 'pl-'
  }, {
    name: 'paddingX',
    scale: 'padding',
    prefix: 'px-'
  }, {
    name: 'paddingY',
    scale: 'padding',
    prefix: 'py-'
  }, {
    name: 'fontFamily',
    scale: 'fontFamily',
    prefix: 'font-'
  }, {
    name: 'textColor',
    scale: 'flatColors',
    prefix: 'text-'
  }, {
    name: 'fontWeight',
    scale: 'fontWeight',
    prefix: 'font-'
  }, {
    name: 'fontSize',
    scale: 'fontSize',
    prefix: 'text-'
  }, {
    name: 'textAlign',
    scale: 'textAlign',
    prefix: 'text-'
  }, {
    name: 'lineHeight',
    scale: 'lineHeight',
    prefix: 'leading-'
  }, {
    name: 'fontStyle',
    scale: 'fontStyle',
    prefix: ''
  }, {
    name: 'textDecoration',
    scale: 'textDecoration',
    prefix: ''
  }, {
    name: 'textTransform',
    scale: 'textTransform',
    prefix: ''
  }, {
    name: 'textOpacity',
    scale: 'textOpacity',
    prefix: 'text-opacity-'
  }, {
    name: 'backgroundColor',
    scale: 'flatColors',
    prefix: 'bg-'
  }, {
    name: 'backgroundOpacity',
    scale: 'backgroundOpacity',
    prefix: 'bg-opacity-'
  }, {
    name: 'borderWidth',
    scale: 'borderWidth',
    prefix: 'border-'
  }, {
    name: 'borderColor',
    scale: 'flatColors',
    prefix: 'border-'
  }, {
    name: 'borderStyle',
    scale: 'borderStyle',
    prefix: 'border-'
  }, {
    name: 'outline',
    scale: 'outline',
    prefix: 'outline-'
  }, {
    name: 'borderOpacity',
    scale: 'borderOpacity',
    prefix: 'border-opacity-'
  }, {
    name: 'color',
    scale: 'colors'
  }, {
    name: 'flatColors',
    scale: 'flatColors'
  }, {
    name: 'boxShadow',
    scale: 'boxShadow',
    prefix: 'shadow-'
  }, {
    name: 'fill',
    scale: 'fill',
    prefix: 'fill-'
  }, {
    name: 'stroke',
    scale: 'stroke',
    prefix: 'stroke-'
  }, {
    name: 'strokeWidth',
    scale: 'strokeWidth',
    prefix: 'stroke-'
  }, {
    name: 'transitionProperty',
    scale: 'transitionProperty',
    prefix: 'transition-'
  }, {
    name: 'transitionDuration',
    scale: 'transitionDuration',
    prefix: 'duration-'
  }, {
    name: 'transitionTimingFunction',
    scale: 'transitionTimingFunction',
    prefix: 'ease-'
  }, {
    name: 'transitionDelay',
    scale: 'transitionDelay',
    prefix: 'delay-'
  }, {
    name: 'animation',
    scale: 'animation',
    prefix: 'animate-'
  }, {
    name: 'accessibility',
    scale: 'accessibility',
    prefix: ''
  }];
  var screenModifiers = Object.keys(tailwindConfig.theme.screens || {});
  var pseudoModifiers = ['hover', 'focus', 'active' // 'focus-within',
  // 'disabled',
  ];
  var usedPseudoModifiers = [];
  var definitions = {};
  properties.forEach(function (_ref) {
    var name = _ref.name,
        scale = _ref.scale,
        prefix = _ref.prefix;
    var config = tailwindConfig.theme[scale];
    definitions[name] = {
      prefix: prefix,
      classNames: Object.keys(config).map(function (modifier) {
        if (modifier === 'default') return prefix.slice(0, -1);else return prefix + modifier;
      }),
      names: Object.keys(config),
      values: config,
      variants: getVariant(name, tailwindConfig)
    };
    pseudoModifiers.forEach(function (modifier) {
      if (!tailwindConfig.variants[name]) return;

      if (tailwindConfig.variants[name].includes(modifier)) {
        if (!usedPseudoModifiers.includes(modifier)) {
          usedPseudoModifiers.push(modifier);
        }

        var originalClassNames = definitions[name].classNames;
        var modifiedClassNames = [];
        originalClassNames.forEach(function (className) {
          if (!className.includes(':')) {
            // can't have double :hover:focus:
            modifiedClassNames.push(modifier + ':' + className);
          }
        });
        definitions[name].classNames = originalClassNames.concat(modifiedClassNames);
      }
    });

    if (definitions[name].variants.includes('responsive')) {
      var originalClassNames = definitions[name].classNames;
      var modifiedClassNames = [];
      screenModifiers.forEach(function (modifier) {
        originalClassNames.forEach(function (className) {
          modifiedClassNames.push(modifier + ':' + className);
        });
      });
      definitions[name].classNames = originalClassNames.concat(modifiedClassNames);
    }
  });
  tailwindConfig.usedPseudoModifiers = usedPseudoModifiers;
  return definitions;
};

function flatten(scale, prefix) {
  var flatScale = {};

  for (var key in scale) {
    var value = scale[key];

    if (_typeof(value) === 'object') {
      flatScale = deepmerge(flatScale, flatten(value, key));
    } else {
      var flatKey = prefix ? prefix + '-' + key : key;
      flatScale[flatKey] = value;
    }
  }

  return flatScale;
}

function longNames(colors) {
  var longColors = {};
  Object.keys(colors).forEach(function (name) {
    var value = colors[name];

    try {
      if (value === 'transparent') longColors[name] = value;else longColors[name] = Color(value).hex().toLowerCase();
    } catch (error) {
      longColors[name] = value;
    }
  });
  return longColors;
}

var getVariant = function getVariant(name, tailwindConfig) {
  if (tailwindConfig.variants[name]) return tailwindConfig.variants[name];
  if (name.includes('padding')) return tailwindConfig.variants.padding;
  if (name.includes('margin')) return tailwindConfig.variants.margin;
  if (name.includes('space')) return tailwindConfig.variants.margin;
  return [];
};

var shortMap = {
  xs: 'extra small',
  sm: 'small',
  "default": 'default',
  md: 'medium',
  lg: 'large',
  xl: 'Extra large',
  '2xl': '2X large',
  col: 'column',
  'col-reverse': 'column-reverse'
};

var removeHyphen = function removeHyphen(string) {
  if (string.startsWith('-')) return string;else return string.replace('-', ' ');
};

var prettify = function prettify(string) {
  var longString = shortMap[string] || string;
  return capitalize(removeHyphen(longString));
};
var hideDefault = function hideDefault(string) {
  return string.replace('default', '');
};
var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
var getWipProperty = function getWipProperty(state, property) {
  var key = getKeyWithModifier(state, property);
  return state.wipProperties[key];
};
var rgbProperties = ['backgroundColor', 'textColor', 'borderColor'];
var remProperties = ['borderRadius', 'fontSize', 'lineHeight', 'width', 'height', 'maxWidth', 'maxHeight', 'minWidth', 'minHeight', 'borderWidth', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
var getComputedProperty = function getComputedProperty(state, property, value) {
  var computedValue = value || state.computedStyles[property];
  if (rgbProperties.includes(property)) computedValue = rgbToHex(computedValue);
  if (remProperties.includes(property)) computedValue = pxTorem(computedValue);
  return getModifier(state, property, computedValue);
};
var getKeyWithModifier = function getKeyWithModifier(_ref, property) {
  var responsiveModifier = _ref.responsiveModifier,
      pseudoModifier = _ref.pseudoModifier;
  // format: prefix-value |
  // responsive:prefix-value | pseudo:prefix-value |
  // responsive:pseudo:prefix-value
  var key = '';
  if (responsiveModifier) key += responsiveModifier + ':';
  if (pseudoModifier) key += pseudoModifier + ':';
  key += property;
  return key;
};
var parseClassName = function parseClassName(state, property, className) {
  var responsiveModifers = Object.keys(state.config.theme.screens);
  var definition = state.definitions[property];
  var prefix = definition.prefix; // format: prefix-value |
  // responsive:prefix-value | pseudo:prefix-value |
  // responsive:pseudo:prefix-value

  var responsiveModifier;
  var pseudoModifier;
  var value;
  var keyvalue;
  var numberOfModifiers = className.split(':').length - 1;

  if (numberOfModifiers === 2) {
    responsiveModifier = className.split(':')[0];
    pseudoModifier = className.split(':')[1];
    keyvalue = className.split(':')[2];
  } else if (numberOfModifiers === 1) {
    var unknownModifier = className.split(':')[0];
    keyvalue = className.split(':')[1];

    if (responsiveModifers.includes(unknownModifier)) {
      responsiveModifier = unknownModifier;
    } else {
      pseudoModifier = unknownModifier;
    }
  } else {
    keyvalue = className;
  }

  if (keyvalue.includes('-')) {
    value = keyvalue.replace(prefix, '');
  } else if (prefix.replace('-', '') === keyvalue) {
    // example: rounded
    value = 'default';
  } else {
    // example: flex
    value = keyvalue;
  }

  return {
    responsiveModifier: responsiveModifier,
    pseudoModifier: pseudoModifier,
    value: value
  };
};
var getPropertyFromKey = function getPropertyFromKey(propertyWithModifiers) {
  // format: prefix-value |
  // responsive:prefix-value | pseudo:prefix-value |
  // responsive:pseudo:prefix-value
  return propertyWithModifiers.split(':').pop();
};
var getModifier = function getModifier(state, property, value) {
  var values = state.definitions[property].values;

  var type = _typeof(value);

  return Object.keys(values).find(function (key) {
    if (type === 'string') {
      if (typeof values[key] === 'string') {
        return values[key].toLowerCase() === value.toLowerCase();
      } else if (Array.isArray(values[key])) {
        // future: defaultLineHeights
        var arrayValue = values[key][0];
        return arrayValue.toLowerCase() === value.toLowerCase();
      }
    } else {
      return values[key] == value;
    }
  });
};
var pxTorem = function pxTorem(value) {
  if (value === '0px') return '0';
  var bodyFontSize = parseInt(window.getComputedStyle(document.querySelector('body')).fontSize, 10);
  return parseInt(value, 10) / bodyFontSize + 'rem';
};
var remToPx = function remToPx(value) {
  if (value === '0') return '0';
  if (value.includes('px')) return value;
  var bodyFontSize = parseInt(window.getComputedStyle(document.querySelector('body')).fontSize, 10);
  var pxs = Math.floor(parseFloat(value, 10) * bodyFontSize);
  if (pxs) return pxs + 'px';else return '';
};
var rgbToHex = function rgbToHex(rgb) {
  if (!rgb) return 'transparent';
  var color = Color(rgb);
  if (color.valpha === 0) return 'transparent';
  return Color(rgb).hex().toLowerCase();
};
var isDisabled = function isDisabled(state, variants) {
  return state.pseudoModifier && !variants.includes(state.pseudoModifier) || state.responsiveModifier && !variants.includes('responsive');
};
var isValueEmpty = function isValueEmpty(property, value) {
  if (property.includes('opacity')) return false;
  if (property.includes('margin')) return false;
  if (property.includes('padding')) return false;
  if (property.includes('flexShrink')) return false;
  if (property.includes('flexGrow')) return false;
  if (!value) return true;
  if (value === '0') return true;
  if (property === 'fontStyle' && value === 'normal') return true;
  if (property === 'outline' && value === 'browser') return true;
  if (property === 'accessibility' && value === 'visible') return true;
  if (property.includes('Color') && value === 'transparent') return true;

  if (['stroke', 'fill', 'textDecoration', 'textTransform'].includes(property) && value === 'none') {
    return true;
  }

  return false;
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var defaultConfig = resolveConfig({});
var initialState = {
  enabled: false,
  config: {},
  uuid: null,
  wipStyles: {},
  wipProperties: {},
  computedStyles: {},
  responsiveModeEnabled: false,
  responsiveModifier: '',
  pseudoModifier: null,
  spaceOverlayVisibility: false,
  experimentalSpace: true,
  shortcutsEnabled: false
};
var actions = {
  INIT: 'INIT',
  LOAD_CONFIG: 'LOAD_CONFIG',
  TOGGLE_DEVTOOLS: 'TOGGLE_DEVTOOLS',
  SELECT_ELEMENT: 'SELECT_ELEMENT',
  CHANGE_STYLE: 'CHANGE_STYLE',
  CHANGE_PROPERTY: 'CHANGE_PROPERTY',
  SAVE_CHANGES: 'SAVE_CHANGES',
  TOGGLE_RESPONSIVE_MODE: 'TOGGLE_RESPONSIVE_MODE',
  CHANGE_RESPONSIVE_MODIFIER: 'CHANGE_RESPONSIVE_MODIFIER',
  CHANGE_PSEUDO_MODIFIER: 'CHANGE_PSEUDO_MODIFIER',
  CHANGE_SPACE_OVERLAY_VISIBILITY: 'CHANGE_SPACE_OVERLAY_VISIBILITY',
  TOGGLE_EXPERIMENTAL_SPACE: 'TOGGLE_EXPERIMENTAL_SPACE',
  TOGGLE_SHORTCUTS: 'TOGGLE_SHORTCUTS'
};

var reducer = function reducer(state, action) {
  window.state = state;

  switch (action.type) {
    case actions.INIT:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          config: defaultConfig,
          definitions: getDefinitions(defaultConfig)
        });
      }

    case actions.LOAD_CONFIG:
      {
        // in case of error, keep default config
        var config = action.payload.config || defaultConfig;
        config.custom = !!action.payload.config;
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          config: config,
          definitions: getDefinitions(config)
        });
      }

    case actions.TOGGLE_DEVTOOLS:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          enabled: !state.enabled
        });
      }

    case actions.SELECT_ELEMENT:
      {
        if (!state.enabled) return state;
        var element = document.querySelector("[data-uuid=\"".concat(action.payload.uuid, "\"]"));
        if (!element) return state;
        var wipProperties = {};
        Object.keys(state.definitions).forEach(function (property) {
          var _state$definitions$pr = state.definitions[property],
              classNames = _state$definitions$pr.classNames,
              prefix = _state$definitions$pr.prefix;
          classNames.forEach(function (className) {
            if (element.classList.contains(className)) {
              var _parseClassName = parseClassName(state, property, className),
                  responsiveModifier = _parseClassName.responsiveModifier,
                  pseudoModifier = _parseClassName.pseudoModifier,
                  value = _parseClassName.value;

              var key = getKeyWithModifier({
                responsiveModifier: responsiveModifier,
                pseudoModifier: pseudoModifier
              }, property);
              wipProperties[key] = value;
            }
          });
        });
        var computedStyles = window.getComputedStyle(element);
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          uuid: action.payload.uuid,
          wipProperties: wipProperties,
          computedStyles: computedStyles,
          // reset
          pseudoModifier: null
        });
      }

    case actions.CHANGE_STYLE:
      {
        var _element = document.querySelector("[data-uuid=\"".concat(state.uuid, "\"]"));

        if (!_element) return;
        var changingStyles = false; // handle array values like future: defaultLineHeights

        Object.keys(action.payload).forEach(function (key) {
          if (Array.isArray(action.payload[key])) {
            var _action$payload$key = _slicedToArray(action.payload[key], 2),
                value = _action$payload$key[0],
                options = _action$payload$key[1];

            action.payload[key] = value;
            Object.keys(options).forEach(function (key) {
              action.payload[key] = options[key];
            });
          }
        });
        Object.keys(action.payload).forEach(function (key) {
          var value = action.payload[key];

          if (['spaceX', 'spaceY'].includes(key)) {
            var styleProperties = {
              spaceX: 'marginLeft',
              spaceY: 'marginTop'
            };

            _element.childNodes.forEach(function (child, index) {
              var property = styleProperties[key];
              if (index) child.style[property] = value;
            });
          } else if (key.startsWith('--')) {
            _element.style.setProperty(key, value);
          } else {
            _element.style[key] = value;
          }

          if (value) changingStyles = true;
        });
        if (changingStyles) _element.dataset.changing = true;else delete _element.dataset.changing;
        var _newState = state;
        if (action.effect) _newState = action.effect(_newState, action);
        return _newState;
      }

    case actions.CHANGE_PROPERTY:
      {
        var properties = {};
        Object.keys(action.payload).forEach(function (property) {
          var value = action.payload[property]; // format: prefix-value |
          // responsive:prefix-value | pseudo:prefix-value |
          // responsive:pseudo:prefix-value

          var key = getKeyWithModifier(state, property);
          properties[key] = value;
        });

        var _newState2 = _objectSpread$1(_objectSpread$1({}, state), {}, {
          wipProperties: _objectSpread$1(_objectSpread$1({}, state.wipProperties), properties)
        });

        if (action.effect) _newState2 = action.effect(_newState2, action);
        updateClassList({
          state: _newState2
        });
        flushClassList({
          state: _newState2
        });
        return _newState2;
      }

    case actions.SAVE_CHANGES:
      {
        flushClassList({
          state: newState
        });
        return state;
      }

    case actions.TOGGLE_RESPONSIVE_MODE:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          responsiveModeEnabled: !state.responsiveModeEnabled
        });
      }

    case actions.CHANGE_RESPONSIVE_MODIFIER:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          responsiveModifier: action.payload.responsiveModifier
        });
      }

    case actions.CHANGE_PSEUDO_MODIFIER:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          pseudoModifier: action.payload.pseudoModifier
        });
      }

    case actions.CHANGE_SPACE_OVERLAY_VISIBILITY:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          spaceOverlayVisibility: action.payload.spaceOverlayVisibility
        });
      }

    case actions.TOGGLE_EXPERIMENTAL_SPACE:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          experimentalSpace: !state.experimentalSpace
        });
      }

    case actions.TOGGLE_SHORTCUTS:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          shortcutsEnabled: !state.shortcutsEnabled
        });
      }

    default:
      {
        console.log('not identified', action);
      }
  }
};

var StateContext = /*#__PURE__*/React.createContext();
var StateProvider = function StateProvider(props) {
  var _React$useReducer = React.useReducer(reducer, initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  return /*#__PURE__*/React.createElement(StateContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch,
      actions: actions
    }
  }, props.children);
};
var useState = function useState() {
  var _React$useContext = React.useContext(StateContext),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  return {
    state: state,
    dispatch: dispatch,
    actions: actions
  };
};

var updateClassList = function updateClassList(_ref) {
  var state = _ref.state;
  var element = document.querySelector("[data-uuid=\"".concat(state.uuid, "\"]"));
  if (!element) return;
  var wipProperties = mergeShorthands(state.wipProperties);
  Object.keys(wipProperties).forEach(function (propertyWithModifiers) {
    var property = getPropertyFromKey(propertyWithModifiers);
    var definition = state.definitions[property];
    var value = wipProperties[propertyWithModifiers]; // create class for value

    var prefix = propertyWithModifiers.replace(property, definition.prefix);
    var className;
    if (value === 'default') className = prefix.slice(0, -1);else className = prefix + value; // remove conficting classes for the property

    definition.classNames.forEach(function (className) {
      if (className.startsWith(prefix.slice(0, -1))) {
        element.classList.remove(className);
      }
    });

    if (isValueEmpty(property, value)) ; else {
      element.classList.add(className);
    }
  });
};

var mergeShorthands = function mergeShorthands(wipProperties) {
  if (wipProperties.paddingLeft && wipProperties.paddingLeft === wipProperties.paddingRight) {
    wipProperties.paddingX = wipProperties.paddingLeft;
    delete wipProperties.paddingLeft;
    delete wipProperties.paddingRight;
  }

  if (wipProperties.paddingTop && wipProperties.paddingTop === wipProperties.paddingBottom) {
    wipProperties.paddingY = wipProperties.paddingTop;
    delete wipProperties.paddingTop;
    delete wipProperties.paddingBottom;
  }

  if (wipProperties.marginLeft && wipProperties.marginLeft === wipProperties.marginRight) {
    wipProperties.marginX = wipProperties.marginLeft;
    delete wipProperties.marginLeft;
    delete wipProperties.marginRight;
  }

  if (wipProperties.marginTop && wipProperties.marginTop === wipProperties.marginBottom) {
    wipProperties.marginY = wipProperties.marginTop;
    delete wipProperties.marginTop;
    delete wipProperties.marginBottom;
  }

  return wipProperties;
};

var flushClassList = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref2) {
    var state, element, firstSource, source, classList, _source$split, _source$split2, filename, start, end, API_URL, response, data, notificationEl, location;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state = _ref2.state;
            element = document.querySelector("[data-uuid=\"".concat(state.uuid, "\"]"));

            if (element) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            // with multiple source tags
            // the first one is the one we are interested in
            firstSource = Object.keys(element.dataset).find(function (key) {
              return key.startsWith('source_') || key.startsWith('meta_') || key === 'source';
            });

            if (firstSource) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return");

          case 7:
            source = element.dataset[firstSource];
            classList = element.classList.value; // If using filename:start:end syntax (better for Vue and SSR)

            if (source.startsWith('/')) {
              _source$split = source.split(':'), _source$split2 = _slicedToArray(_source$split, 3), filename = _source$split2[0], start = _source$split2[1], end = _source$split2[2];
              source = {
                filename: filename,
                start: start,
                end: end
              };
            } else {
              source = JSON.parse(source);
            }

            API_URL = window.UI_DEVTOOLS_API || 'http://localhost:2406';
            _context.next = 13;
            return fetch(API_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                path: source.filename,
                lineNumber: source.start,
                start: source.start,
                end: source.end,
                className: classList
              })
            });

          case 13:
            response = _context.sent;
            _context.next = 16;
            return response.json();

          case 16:
            data = _context.sent;

            if (data.error || data.nochange) {
              notificationEl = document.querySelector('#error-notification');
              location = source.filename.split('/').pop() + ':' + source.start;
              notificationEl.innerText = "Cannot predictibly change JSX expression at ".concat(location, ", skipped code change.");
              notificationEl.style.right = '8px';
              window.setTimeout(function () {
                return notificationEl.style.right = '-300px';
              }, 7500);
            }

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function flushClassList(_x) {
    return _ref3.apply(this, arguments);
  };
}();

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var tokens = {
  name: 'React UI Light',
  space: {
    0: 0,
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px'
  },
  radii: [0, '2px', '4px', '16px', '50%'],
  fontSizes: {
    0: 0,
    1: '10px',
    2: '12px',
    3: '14px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '32px',
    8: '48px',
    9: '64px',
    10: '72px'
  },
  fontWeights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    compact: '1.2',
    "default": '1.6',
    cosy: '2'
  },
  breakpoints: {
    0: '576px',
    1: '768px',
    2: '992px'
  },
  durations: {
    0: 0,
    1: '75ms',
    2: '100ms',
    3: '150ms',
    4: '200ms',
    5: '300ms',
    6: '500ms',
    7: '1000ms',
    8: '2500ms'
  },
  // based on elevation levels
  shadows: {
    0: 'none',
    1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    4: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },
  colors: {
    white: '#fff',
    reds: {
      100: '#F8E4E4',
      200: '#EFA6A6',
      300: '#E06161',
      400: '#D95252',
      500: '#D12D2D',
      600: '#B41F1F',
      700: '#A20808',
      800: '#821919',
      900: '#5E1717'
    },
    yellows: {
      100: '#FDF3D7',
      200: '#FAECC2',
      300: '#F8E8BA',
      400: '#FAE29F',
      500: '#FFD97E',
      600: '#F4CA64',
      700: '#CAA53D',
      800: '#8C6D1F',
      900: '#5C4813'
    },
    blues: {
      100: '#EFF8FF',
      200: '#B7DBF7',
      300: '#A8D1F2',
      400: '#63A2D8',
      500: '#3793E0',
      600: '#217CC9',
      700: '#2368A2',
      800: '#1A4971',
      900: '#203D54'
    },
    greens: {
      100: '#E3FCEC',
      200: '#A8EEC1',
      300: '#8FF2B2',
      400: '#4BE38C',
      500: '#22D66F',
      600: '#38C172',
      700: '#259D58',
      800: '#197741',
      900: '#145239'
    },
    grays: {
      100: '#f5faff',
      200: '#E1E7EC',
      300: '#D1D9E0',
      400: '#C8D0D7',
      500: '#AEBECD',
      600: '#929FB1',
      700: '#6E7A8A',
      800: '#404B5A',
      900: '#202833'
    }
  }
}; // recommended: use the same space grid for size

tokens.sizes = _objectSpread$2({}, tokens.space);
/* 
  Decisions: 
  You can create aliases in scales based on the scale.
*/

tokens.colors.text = {
  subtle: 'grays.700',
  body: 'grays.800',
  link: 'blues.500',
  linkHover: 'blues.700'
};
tokens.colors.error = {
  background: 'reds.100',
  border: 'reds.300',
  text: 'reds.700'
};
tokens.colors.App = {
  backgroundColor: 'white',
  color: 'grays.900',
  borderColor: 'grays.200'
};
tokens.fontSizes.Heading = {
  page: 8,
  // reads from tokens.fontSizes.8
  section: 6,
  paragraph: 4
};
/* 
  Component styles:
  You can define styles, sizes and variants here
*/

var components = {
  /** Global */
  Global: {
    body: "\n      --reach-menu-button: 1;\n      --reach-tooltip: 1;\n      @import url('https://rsms.me/inter/inter.css');\n    ",
    '#devtool': {
      'select, button, input': {
        fontFamily: 'Inter, sans-serif'
      },
      'input::-webkit-inner-spin-button': {
        height: '32px !important'
      }
    },
    '#devtool-main': {
      display: 'flex',
      justifyContent: 'space-between'
    },
    '#devtool-wrapper': {
      flexGrow: 1,
      transition: 'max-width 300ms'
    },
    '[data-enabled] [data-hovering]': {
      transitionDelay: '16ms',
      boxShadow: 'var(--shadow, 0 0), 0px 0px 0px 1px #80afff'
    },
    '[data-enabled] [data-uuid]': {
      transition: 'all 50ms linear, box-shadow 250ms ease-in'
    },
    '[data-enabled] [data-uuid] > *': {
      transition: 'all 50ms linear'
    },
    '[data-enabled] [data-uuid]:not([data-changing])': {
      transitionDelay: '16ms',
      boxShadow: 'var(--shadow, 0 0), 0px 0px 0px 1px #3f87ff'
    },
    '[data-enabled] [data-uuid][data-changing]': {
      // in case the item is otherwise opacity:0
      opacity: 1
    },
    '[data-reach-menu-popover]': {
      zIndex: 99999
    },
    '[data-reach-tooltip]': {
      zIndex: '99999 !important;'
    },
    '[data-component="TooltipTriangle"]': {
      zIndex: '99999 !important;'
    },
    '.swatches-picker span>div[title]:focus': {
      boxShadow: '0px 0px 1px 1px #3f87ff !important'
    },
    '@keyframes shortcut-fade-in': {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    }
  },

  /** Atoms */
  Avatar: {
    sizes: {
      small: 7,
      medium: 10,
      large: 15
    },
    border: '2px solid',
    borderColor: 'grays.200'
  },
  Button: {
    fontSize: 2,
    lineHeight: 1,
    fontWeight: 'medium',
    borderRadius: 1,
    paddingLeft: 3,
    paddingRight: 3,
    border: '1px solid',
    sizes: {
      small: 6,
      medium: 8,
      large: 10
    },
    variants: {
      primary: {
        backgroundColor: 'greens.700',
        color: 'white',
        borderColor: 'greens.700',
        ':hover': {
          backgroundColor: 'greens.600',
          borderColor: 'greens.600'
        },
        ':focus': {
          outline: 'none',
          boxShadow: 1,
          backgroundColor: 'greens.600',
          borderColor: 'greens.700'
        },
        ':active': {
          backgroundColor: 'greens.800',
          borderColor: 'greens.800'
        }
      },
      secondary: {
        backgroundColor: 'grays.300',
        color: 'text.body',
        borderColor: 'grays.300',
        ':hover': {
          backgroundColor: 'grays.200',
          borderColor: 'grays.200'
        },
        ':focus': {
          outline: 'none',
          boxShadow: 1,
          backgroundColor: 'grays.200',
          borderColor: 'grays.400'
        },
        ':active': {
          backgroundColor: 'grays.400',
          borderColor: 'grays.400'
        }
      },
      destructive: {
        backgroundColor: 'reds.600',
        color: 'white',
        borderColor: 'reds.600',
        ':hover': {
          backgroundColor: 'reds.500',
          borderColor: 'reds.500'
        },
        ':focus': {
          outline: 'none',
          boxShadow: 1,
          backgroundColor: 'reds.600',
          borderColor: 'reds.900'
        },
        ':active': {
          backgroundColor: 'reds.700',
          borderColor: 'reds.700'
        }
      },
      link: {
        backgroundColor: 'transparent',
        color: 'text.link',
        borderColor: 'transparent',
        ':hover': {
          color: 'text.linkHover'
        },
        ':focus': {
          outline: 'none',
          color: 'text.linkHover'
        },
        ':active': {
          color: 'text.linkHover'
        }
      },
      text: {
        width: 'fit-content',
        color: 'grays.600',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        ':hover, :focus, :active': {
          color: 'grays.700',
          boxShadow: 'none',
          outline: 'none'
        },
        '&[aria-expanded], &[data-active="true"]': {
          color: 'grays.800',
          boxShadow: 'none',
          outline: 'none'
        }
      },
      input: {
        fontSize: 2,
        borderRadius: 1,
        fontWeight: 'medium',
        width: 120,
        backgroundImage: "url(".concat(reactUi.Select.caret, ")"),
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '50%',
        backgroundPositionX: 'calc(100% - 4px)',
        // match input padding
        justifyContent: 'space-between',
        paddingLeft: 2,
        paddingRight: 4,
        flexShrink: 0,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'text.body',
        cursor: 'default',
        ':not(:hover):not(:focus)': {
          backgroundImage: 'none'
        },
        ':hover:not(:disabled)': {
          borderColor: '#dedede'
        },
        ':focus:not(:disabled)': {
          outline: 'none',
          borderColor: '#dedede'
        },
        '&[aria-invalid]': {
          backgroundColor: 'reds.100',
          borderColor: 'reds.300'
        },
        ':disabled': {
          backgroundImage: 'none'
        },
        svg: {
          size: 4
        }
      }
    }
  },
  Checkbox: {
    border: '1px solid'
  },
  Heading: {
    /** fontSizes for heading are defined in tokens.fontSizes.Heading */
    color: 'text.body'
  },
  Image: {},
  Input: {
    // recommended: match sizes of input and buttons so
    // that they go well together in forms next to other
    sizes: {
      small: 6,
      medium: 8,
      large: 10
    },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    fontWeight: 'medium',
    backgroundColor: 'transparnet',
    borderColor: 'transparent',
    textAlign: 'center',
    color: 'text.body',
    '::placeholder': {
      color: 'text.subtle'
    },
    ':hover:not(:disabled)': {
      borderColor: '#dedede'
    },
    ':focus:not(:disabled)': {
      outline: 'none',
      borderColor: '#dedede'
    },
    '&[aria-invalid]': {
      backgroundColor: 'reds.100',
      borderColor: 'reds.300'
    }
  },
  Link: {
    variants: {
      "default": {
        color: 'text.link',
        ':hover, :focus': {
          color: 'text.linkHover'
        },
        '&[aria-current]': {
          color: 'text.linkHover'
        }
      },
      subtle: {
        color: 'text.subtle',
        textDecoration: 'none',
        ':hover': {
          color: 'text.linkHover'
        },
        '&[aria-current]': {
          color: 'text.link'
        },
        ':focus': {
          color: 'text.linkHover'
        }
      },
      body: {
        color: 'text.body',
        textDecoration: 'none',
        ':hover': {
          color: 'text.linkHover'
        },
        '&[aria-current]': {
          color: 'text.link'
        },
        ':focus': {
          color: 'text.linkHover'
        }
      }
    }
  },
  Select: {
    // recommended: match styles of input
    sizes: {
      small: 6,
      medium: 8,
      large: 10
    },
    fontSize: 2,
    borderRadius: 1,
    paddingX: 2,
    fontWeight: 'medium',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: 'text.body',
    ':not(:hover):not(:focus)': {
      backgroundImage: 'none'
    },
    ':hover:not(:disabled)': {
      borderColor: '#dedede'
    },
    ':focus:not(:disabled)': {
      outline: 'none',
      borderColor: '#dedede'
    },
    '&[aria-invalid]': {
      backgroundColor: 'reds.100',
      borderColor: 'reds.300'
    }
  },
  Skeleton: {
    backgroundColor: 'grays.300',
    highlightColor: 'grays.100',
    height: 4,
    borderRadius: 2,
    animationDuration: 8
  },
  Spinner: {
    sizes: {
      small: 4,
      medium: 6,
      large: 8
    },
    borderColor: 'grays.200',
    borderLeftColor: 'grays.600'
  },
  Switch: {
    sizes: {
      medium: 4
    },
    colors: {
      backgroundOff: 'grays.400',
      backgroundOn: 'greens.700'
    }
  },
  Text: {
    variants: {
      "default": {
        color: 'inherit'
      },
      body: {
        color: 'text.body'
      },
      subtle: {
        color: 'text.subtle'
      },
      danger: {
        color: 'error.text'
      },
      link: {
        color: 'text.link'
      }
    }
  },
  Textarea: {
    // recommended: match styles of input
    sizes: {
      small: 6,
      medium: 8,
      large: 10
    },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    paddingY: 2,
    backgroundColor: 'grays.100',
    borderColor: 'grays.400',
    color: 'text.body',
    '::placeholder': {
      color: 'text.subtle'
    },
    ':hover:not(:disabled)': {
      backgroundColor: 'grays.100',
      borderColor: 'blues.300'
    },
    ':focus:not(:disabled)': {
      outline: 'none',
      backgroundColor: 'blues.100',
      borderColor: 'blues.500'
    },
    '&[aria-invalid]': {
      backgroundColor: 'reds.100',
      borderColor: 'reds.300'
    }
  },

  /** Molecules */
  Alert: {
    fontSize: 3,
    borderRadius: 1,
    padding: 4,
    border: '1px solid',
    variants: {
      "default": {
        backgroundColor: 'grays.100',
        color: 'grays.900',
        borderColor: 'grays.200'
      },
      warning: {
        backgroundColor: 'yellows.100',
        color: 'yellows.900',
        borderColor: 'yellows.300'
      },
      success: {
        backgroundColor: 'greens.100',
        color: 'greens.900',
        borderColor: 'greens.200'
      },
      destructive: {
        backgroundColor: 'reds.100',
        color: 'reds.900',
        borderColor: 'reds.200'
      },
      info: {
        backgroundColor: 'blues.100',
        color: 'blues.900',
        borderColor: 'blues.200'
      }
    }
  },
  Breadcrumb: {
    fontSize: 3
  },
  BreadcrumbSeparator: {
    display: 'inline-block',
    color: 'text.subtle',
    paddingX: 2
  },
  BreadcrumbItem: {
    display: 'inline-block',
    '&[aria-current]': {
      color: 'text.body'
    }
  },
  Card: {
    width: '500px',
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: 'grays.200',
    padding: 5,
    borderRadius: 2,
    boxShadow: 2,
    overflow: 'hidden'
  },
  DialogContent: {
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 2,
    boxShadow: 2
  },
  DialogOverlay: {
    // use blues.900 with 90% opacity = e6 in hex
    backgroundColor: function backgroundColor(theme) {
      return theme.colors.blues[900] + 'e6';
    }
  },
  Form: {
    paddingY: 4
  },
  FormLabel: {
    fontSize: 2,
    marginBottom: 1
  },
  FormHeader: {
    color: 'text.body',
    fontSize: 5,
    fontWeight: 'normal'
  },
  MenuList: {
    backgroundColor: 'white',
    color: 'text.body',
    border: '1px solid',
    borderColor: 'grays.200',
    fontSize: 2,
    fontWeight: 500,
    borderRadius: 2,
    marginTop: '2px',
    boxShadow: 3,
    maxHeight: 256
  },
  MenuItem: {
    paddingY: 2,
    paddingX: 3,
    '&[data-selected]': {
      backgroundColor: 'grays.200'
    }
  },
  Paragraph: {},
  TabList: {
    borderColor: 'grays.200'
  },
  Tab: {
    outline: 'none',
    fontSize: 3,
    height: 8,
    marginRight: 6,
    color: 'text.body',
    ':hover': {
      color: 'text.link'
    },
    '&[data-selected]': {
      color: 'text.link'
    }
  },
  TabPanel: {
    fontSize: 3,
    paddingY: 4,
    outline: 'none'
  },
  Tooltip: {
    backgroundColor: 'grays.900',
    color: 'grays.100',
    borderRadius: 1,
    boxShadow: 2,
    paddingX: 1,
    paddingY: 1,
    fontSize: 2,
    lineHeight: 1
  }
};

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var ResponsiveTabs = function ResponsiveTabs() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var breakpoints = state.config.theme.screens;
  var modifiers = Object.keys(breakpoints);
  var wrapper = document.querySelector('#devtool-wrapper');
  var main = document.querySelector('#devtool-main');
  var targetNode = wrapper;
  var config = {
    attributes: true,
    subtree: true
  };

  var callback = function callback(mutationsList) {
    var _iterator = _createForOfIteratorHelper(mutationsList),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;

        if (mutation.type === 'attributes' && mutation.attributeName === 'class' && !mutation.target.dataset.uuid) {
          backupClassNames(mutation.target);
          filterClassList(mutation.target);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    observer.disconnect();
  };

  var observer = new MutationObserver(callback);

  var setResponsiveModifier = function setResponsiveModifier(mode) {
    var newMode = mode === state.responsiveModifier ? '' : mode;
    dispatch({
      type: actions.CHANGE_RESPONSIVE_MODIFIER,
      payload: {
        responsiveModifier: newMode
      }
    });
  };

  var resizeWrapper = function resizeWrapper() {
    var modifier = state.responsiveModifier;
    var size = modifier ? breakpoints[modifier] : 'calc(100% - 260px)';
    var bodyBackground = window.getComputedStyle(document.body).backgroundColor === 'rgba(0, 0, 0, 0)' ? 'white' : window.getComputedStyle(document.body).backgroundColor;
    wrapper.style.maxWidth = size;
    main.style.justifyContent = modifier ? 'center' : 'space-between';
    main.style.paddingRight = modifier ? '260px' : '0';
    main.style.backgroundColor = modifier ? '#1a202e' : 'transparent';
    wrapper.style.backgroundColor = modifier ? bodyBackground : 'transparent';
  };

  var backupClassNames = function backupClassNames(element) {
    if (!state.responsiveModeEnabled) return;
    var elements = element ? [element] : document.querySelectorAll('#devtool-wrapper *');
    elements.forEach(function (element) {
      // backup classnames in data attribute
      element.dataset.classNames = element.className;
    });
  };

  var restoreClassNames = function restoreClassNames() {
    document.querySelectorAll('#devtool-wrapper *').forEach(function (element) {
      if (element.dataset.classNames) {
        element.setAttribute('class', element.dataset.classNames);
      }
    });
  };

  function filterClassList(element) {
    if (!state.responsiveModifier) return;
    var elements = element ? [element] : document.querySelectorAll('#devtool-wrapper *');
    elements.forEach(function (element) {
      var properties = [];
      Object.keys(state.definitions).forEach(function (property) {
        var _state$definitions$pr = state.definitions[property],
            classNames = _state$definitions$pr.classNames,
            prefix = _state$definitions$pr.prefix;
        classNames.forEach(function (className) {
          if (element.classList.contains(className)) {
            var _parseClassName = parseClassName(state, property, className),
                responsiveModifier = _parseClassName.responsiveModifier,
                pseudoModifier = _parseClassName.pseudoModifier,
                value = _parseClassName.value;

            properties.push({
              property: property,
              responsiveModifier: responsiveModifier,
              pseudoModifier: pseudoModifier,
              prefix: prefix,
              value: value,
              className: className
            });
          }
        });
      });
      modifiers.forEach(function (modifier, index) {
        if (index > modifiers.indexOf(state.responsiveModifier)) {
          // 1. remove properties that have higher responsive modifier than selected
          properties = properties.filter(function (_ref) {
            var responsiveModifier = _ref.responsiveModifier;
            if (responsiveModifier === modifier) return false;
            return true;
          });
        }
      }); // 2. merge down classNames keeping the highest modifier

      properties = properties.filter(function (p1) {
        var anotherProperty = properties.find(function (p2) {
          return p1.property === p2.property && p1.pseudoModifier === p2.pseudoModifier && p1.className !== p2.className;
        }); // only one

        if (!anotherProperty) return true; // if this is bigger than the other, include this one

        if (modifiers.indexOf(p1.responsiveModifier) > modifiers.indexOf(anotherProperty.responsiveModifier)) {
          return true;
        }

        return false;
      }); // 3. attach without modifiers

      var classNames = properties.map(function (_ref2) {
        var className = _ref2.className,
            responsiveModifier = _ref2.responsiveModifier;
        return className.replace(responsiveModifier + ':', '');
      });
      element.setAttribute('class', classNames.join(' '));
    });
  }

  React.useEffect(function () {
    if (state.responsiveModeEnabled) {
      backupClassNames();
    } else {
      restoreClassNames(); // just to be sure

      observer.disconnect();
    }
  }, [state.responsiveModeEnabled]);
  React.useEffect(function () {
    if (!state.responsiveModeEnabled) return; // when a property changes, it resets the classname
    // to be be pure again, but only for the active element!
    // So, we repeat the process of backup
    // and then apply the modifier filter

    var selectedElement = document.querySelector("#devtool-wrapper [data-uuid=\"".concat(state.uuid, "\"]"));
    backupClassNames(selectedElement);
    filterClassList(selectedElement); // look out for other elements to change next

    observer.observe(targetNode, config);
  }, [state.wipProperties]);
  React.useEffect(function () {
    resizeWrapper(); // when modifier changes, you want a clean slate

    restoreClassNames(); // and then filter again

    filterClassList();
  }, [state.responsiveModifier]);
  var RIGHT = 39;
  var LEFT = 37;
  useEventListener('keydown', function (event) {
    if (!state.responsiveModeEnabled) return;
    var currentModifierIndex = modifiers.indexOf(state.responsiveModifier);

    if (event.which === RIGHT) {
      var nextModifier = modifiers[currentModifierIndex + 1];
      if (nextModifier) setResponsiveModifier(nextModifier);
    } else if (event.which === LEFT) {
      var previousModifier = modifiers[currentModifierIndex - 1];
      if (previousModifier) setResponsiveModifier(previousModifier);
    }
  });
  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    direction: "vertical",
    gap: 1,
    css: {
      paddingX: 3,
      paddingY: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "space-between",
    align: "flex-start"
  }, /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Emulate breakpoints"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    style: state.responsiveModeEnabled ? {
      color: 'greens.700'
    } : {},
    css: {
      paddingX: 1,
      alignItems: 'flex-start',
      marginRight: 1
    },
    onClick: function onClick() {
      dispatch({
        type: actions.TOGGLE_RESPONSIVE_MODE
      });
      setResponsiveModifier('');
    }
  }, /*#__PURE__*/React.createElement(Switch, null))), state.responsiveModeEnabled && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: 'sm: ' + breakpoints.sm + ' and bigger'
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: state.responsiveModifier === 'sm' ? 'link' : 'text',
    css: {
      width: 'fit-content',
      paddingX: 1
    },
    onClick: function onClick() {
      return setResponsiveModifier('sm');
    }
  }, /*#__PURE__*/React.createElement(Phone, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: 'md: ' + breakpoints.md + ' and bigger'
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: state.responsiveModifier === 'md' ? 'link' : 'text',
    css: {
      width: 'fit-content',
      paddingX: 1
    },
    onClick: function onClick() {
      return setResponsiveModifier('md');
    }
  }, /*#__PURE__*/React.createElement(Tablet, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: 'lg: ' + breakpoints.lg + ' and bigger'
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: state.responsiveModifier === 'lg' ? 'link' : 'text',
    css: {
      width: 'fit-content',
      paddingX: 1
    },
    onClick: function onClick() {
      return setResponsiveModifier('lg');
    }
  }, /*#__PURE__*/React.createElement(Laptop, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: 'xl: ' + breakpoints.xl + ' and bigger'
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: state.responsiveModifier === 'xl' ? 'link' : 'text',
    css: {
      width: 'fit-content',
      paddingX: 1
    },
    onClick: function onClick() {
      return setResponsiveModifier('xl');
    }
  }, /*#__PURE__*/React.createElement(Desktop, null))))));
};

var Desktop = function Desktop() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "38",
    viewBox: "0 0 24 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V6C22 4.89543 21.1046 4 20 4Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 22H16",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18V22",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.70834 31.5H16.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 27.7083L16.2917 31.5L12.5 35.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Laptop = function Laptop() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "38",
    viewBox: "0 0 24 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.2 8H4.8C3.80589 8 3 8.76751 3 9.71429V18.2857C3 19.2325 3.80589 20 4.8 20H19.2C20.1941 20 21 19.2325 21 18.2857V9.71429C21 8.76751 20.1941 8 19.2 8Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 22L23 22",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.70834 31.5H16.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 27.7083L16.2917 31.5L12.5 35.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Tablet = function Tablet() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "38",
    viewBox: "0 0 24 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18H12.01",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.70833 31.5H16.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 27.7083L16.2917 31.5L12.5 35.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Phone = function Phone() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "38",
    viewBox: "0 0 24 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18H12.01",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.70833 31.5H16.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 27.7083L16.2917 31.5L12.5 35.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Switch = function Switch() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18H12.01",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11H2C1.44772 11 1 11.5373 1 12.2V21.8C1 22.4627 1.44772 23 2 23H7C7.55228 23 8 22.4627 8 21.8V12.2C8 11.5373 7.55228 11 7 11Z",
    fill: "white",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var PseudoPicker = function PseudoPicker() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var modifiers = state.config.usedPseudoModifiers;
  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "flex-end",
    align: "center"
  }, modifiers.map(function (modifier) {
    return /*#__PURE__*/React.createElement(reactUi.Button, {
      key: modifier,
      variant: state.pseudoModifier === modifier ? 'link' : 'text',
      css: {
        fontSize: 2
      },
      onClick: function onClick() {
        var newModifier = state.pseudoModifier === modifier ? null : modifier;
        dispatch({
          type: actions.CHANGE_PSEUDO_MODIFIER,
          payload: {
            pseudoModifier: newModifier
          }
        });
      }
    }, ":", modifier);
  }));
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var useShortcuts = function useShortcuts() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var focus = function focus(id) {
    // if any other menu is open, cancel
    var menuOpen = document.querySelector('[data-reach-menu]');
    if (menuOpen) return;
    var element = document.querySelector('#' + id);
    if (element) element.focus();
    dispatch({
      type: actions.TOGGLE_SHORTCUTS
    });
  };

  var shortcuts = {};
  Object.keys(shortcutMap).forEach(function (property) {
    var shortcut = shortcutMap[property];

    shortcuts[shortcut] = function () {
      return focus(property);
    };
  });
  React.useEffect(function () {
    var cleanup = tinykeys(window, _objectSpread$3(_objectSpread$3({
      Shift: function Shift() {
        return dispatch({
          type: actions.TOGGLE_SHORTCUTS
        });
      }
    }, state.shortcutsEnabled ? shortcuts : {}), {}, {
      'M Y': function MY() {
        var line = document.querySelector('#constraint-y');
        console.log(line);
        line.click();
      }
    }));
    return cleanup;
  });
};
var shortcutMap = {
  display: 'D',
  opacity: 'O',
  flexDirection: 'F D',
  flexWrap: 'F W',
  justifyContent: 'F J',
  alignItems: 'F A',
  flexGrow: 'F G',
  flexShrink: 'F S',
  // alignSelf: '',
  // order: 'F O',
  width: 'W',
  height: 'H',
  // maxWidth: '',
  // maxHeight: '',
  // minWidth: '',
  // minHeight: '',
  borderRadius: 'B R',
  spaceX: 'S X',
  spaceY: 'S Y',
  // margin: '',
  marginTop: 'M T',
  marginRight: 'M R',
  marginBottom: 'M B',
  marginLeft: 'M L',
  // padding: '',
  paddingTop: 'P T',
  paddingRight: 'P R',
  paddingBottom: 'P B',
  paddingLeft: 'P L',
  fontSize: 'T S',
  fontWeight: 'T W',
  lineHeight: 'T L',
  textColor: 'T C',
  fontFamily: 'T F',
  // textAlign: '',
  // fontStyle: '',
  // textDecoration: '',
  // textTransform: '',
  textOpacity: 'T O',
  backgroundColor: 'B C',
  backgroundOpacity: 'B O',
  boxShadow: 'S H',
  borderWidth: 'B W',
  // borderColor: 'B ?',
  // borderStyle: '',
  // outline: '',
  // borderOpacity: '',
  // color: '',
  // flatColors: '',
  // fill: '',
  // stroke: '',
  // strokeWidth: '',
  transitionProperty: 'T P',
  transitionDuration: 'T D',
  transitionTimingFunction: 'T E',
  // transitionDelay: '',
  animation: 'A N',
  accessibility: 'A C'
};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ShortcutHint = function ShortcutHint(_ref) {
  var property = _ref.property;

  var _useState = useState(),
      state = _useState.state;

  if (!state.shortcutsEnabled || !shortcutMap[property]) return null;
  var rightProperties = ['marginRight', 'paddingRight'];
  return /*#__PURE__*/React.createElement("span", {
    style: _objectSpread$4({
      position: 'absolute',
      height: 0,
      width: 0,
      zIndex: 5,
      animation: 'shortcut-fade-in 250ms'
    }, rightProperties.includes(property) && {
      right: 36
    })
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    css: {
      backgroundColor: 'grays.900',
      color: 'white',
      borderRadius: 2,
      paddingX: 1,
      paddingY: '2px',
      position: ' absolute',
      left: '-6px',
      top: '6px',
      whiteSpace: 'nowrap'
    }
  }, shortcutMap[property]));
};

var ResponsiveHint = function ResponsiveHint(_ref) {
  var property = _ref.property,
      computedValue = _ref.computedValue;

  var _useState = useState(),
      state = _useState.state;

  var overridingProperty = Object.keys(state.wipProperties).find(function (key) {
    return key.endsWith(':' + property) && state.wipProperties[key] === computedValue;
  }); // mission abort

  if (!overridingProperty) return null;
  var prefix = state.definitions[property].prefix;
  var overridingModifier = overridingProperty && overridingProperty.split(':')[0];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      height: 0,
      width: 0,
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    css: {
      whiteSpace: 'pre-wrap',
      textAlign: 'left',
      paddingX: 2,
      maxWidth: 'fit-content'
    },
    label: "\nbase: ".concat(prefix).concat(state.wipProperties[property], "\noverride: ").concat(overridingModifier, ":").concat(prefix).concat(state.wipProperties[overridingProperty], "\n\n\nShowing value for base styles.\nIt is overriden by responsive styles.\n        ")
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    css: {
      position: 'absolute',
      top: '8px',
      left: '-8px',
      color: 'blues.800',
      circle: {
        fill: 'blues.100'
      }
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.49988 13.6476C10.8952 13.6476 13.6477 10.8951 13.6477 7.49973C13.6477 4.10438 10.8952 1.3519 7.49988 1.3519C4.10453 1.3519 1.35205 4.10438 1.35205 7.49973C1.35205 10.8951 4.10453 13.6476 7.49988 13.6476Z",
    stroke: "currentColor",
    strokeWidth: "0.95"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7.5",
    cy: "7.5",
    r: "6"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.50002 3.78662C7.11785 3.78662 6.81224 4.10422 6.82692 4.4861L7 8C7.01073 8.27899 7.2208 8.5 7.5 8.5C7.7792 8.5 7.98927 8.27899 8 8L8.17312 4.4861C8.18781 4.10422 7.88219 3.78662 7.50002 3.78662ZM7.49988 11.226C7.91409 11.226 8.24988 10.8902 8.24988 10.476C8.24988 10.0618 7.91409 9.72598 7.49988 9.72598C7.08566 9.72598 6.74988 10.0618 6.74988 10.476C6.74988 10.8902 7.08566 11.226 7.49988 11.226Z",
    fill: "currentColor"
  })))));
};

var Dropdown = function Dropdown(props) {
  var responsiveHint = typeof props.computedValue !== 'undefined' && props.value !== props.computedValue;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ShortcutHint, {
    property: props.property
  }), responsiveHint && /*#__PURE__*/React.createElement(ResponsiveHint, {
    property: props.property,
    computedValue: props.computedValue
  }), /*#__PURE__*/React.createElement(DropdownMenu, props));
};
var DropdownMenu = /*#__PURE__*/React.memo(function (_ref) {
  var property = _ref.property,
      value = _ref.value,
      icon = _ref.icon,
      disabled = _ref.disabled,
      prefix = _ref.prefix,
      _ref$showValue = _ref.showValue,
      showValue = _ref$showValue === void 0 ? true : _ref$showValue,
      options = _ref.options,
      onChange = _ref.onChange,
      onHover = _ref.onHover,
      onClose = _ref.onClose,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var selectedOption = options.find(function (option) {
    return option.name === value;
  }) || options[0];

  var onKeyDown = function onKeyDown(event) {
    // ESCAPE
    if (event.which === 27) {
      onClose();
      return;
    }

    var element = event.target;
    window.setTimeout(function () {
      var selectedId = element.getAttribute('aria-activedescendant');
      if (!selectedId) return;
      var index = selectedId.split('--')[0].split('option-')[1];
      var option = options[index];
      onHover(option.name);
      var selectedItem = document.querySelector('#' + selectedId);
      if (selectedItem) selectedItem.scrollIntoView({
        block: 'center'
      });
    });
  };

  return /*#__PURE__*/React.createElement(reactUi.Menu, null, function (_ref2) {
    var isExpanded = _ref2.isExpanded;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Menu.Button, {
      variant: "input",
      style: style.Button,
      id: property,
      disabled: disabled
    }, /*#__PURE__*/React.createElement(reactUi.Stack, {
      gap: 2,
      align: "center"
    }, icon ? /*#__PURE__*/React.createElement(reactUi.Stack, {
      as: reactUi.Text,
      align: "center",
      justify: "center",
      size: 2,
      color: "grays.500",
      style: {
        width: 4
      }
    }, icon) : null, /*#__PURE__*/React.createElement(reactUi.Stack, {
      gap: 1,
      align: "center"
    }, prefix && /*#__PURE__*/React.createElement(reactUi.Text, {
      variant: "subtle",
      css: {
        whiteSpace: 'nowrap'
      }
    }, prettify(prefix)), showValue && /*#__PURE__*/React.createElement(reactUi.Text, {
      css: {
        whiteSpace: 'nowrap'
      }
    }, typeof selectedOption.name === 'string' ? prettify(hideDefault(selectedOption.name)) : selectedOption.name), !prefix && selectedOption.hint && selectedOption.name !== selectedOption.hint ? /*#__PURE__*/React.createElement(reactUi.Text, {
      variant: "subtle",
      css: {
        whiteSpace: 'nowrap'
      }
    }, selectedOption.hint) : null))), isExpanded && /*#__PURE__*/React.createElement(Options, {
      options: options,
      defaultSelected: selectedOption,
      onChange: onChange,
      onHover: onHover,
      onKeyDown: onKeyDown,
      onClose: onClose
    }));
  });
}, function (prevProps, nextProps) {
  if (prevProps.value !== nextProps.value) return false;
  if (prevProps.disabled !== nextProps.disabled) return false;
  return true;
});
var Options = /*#__PURE__*/React.memo(function (_ref3) {
  var options = _ref3.options,
      defaultSelected = _ref3.defaultSelected,
      onChange = _ref3.onChange,
      onClose = _ref3.onClose,
      onKeyDown = _ref3.onKeyDown,
      onHover = _ref3.onHover;
  window.setTimeout(function () {
    // We do this in a timeout imperatively because the
    // options never update with the always true useMemo
    if (!defaultSelected) return;
    var index = options.findIndex(function (option) {
      return option.name === defaultSelected.name;
    });
    if (index === -1) return;
    var element = document.querySelector("[id^=option-".concat(index, "]"));
    if (element) element.scrollIntoView({
      block: 'center'
    });
  });
  return /*#__PURE__*/React.createElement(reactUi.Menu.List, {
    onMouseLeave: onClose,
    onKeyDown: onKeyDown
  }, options.map(function (option, index) {
    return /*#__PURE__*/React.createElement(reactUi.Stack, {
      as: reactUi.Menu.Item,
      key: option.name,
      gap: 1,
      justify: "space-between",
      align: "center",
      onSelect: function onSelect() {
        onChange(option.name);
        onClose(option.name);
      },
      onMouseOver: function onMouseOver() {
        return onHover(option.name);
      }
    }, /*#__PURE__*/React.createElement(reactUi.Text, {
      weight: option.name === defaultSelected.name ? 'semibold' : 'normal'
    }, typeof option.name === 'string' ? prettify(option.name) : option.name), option.hint ? /*#__PURE__*/React.createElement(reactUi.Text, {
      variant: "subtle",
      weight: option.name === defaultSelected.name ? 'semibold' : 'normal'
    }, option.hint) : null);
  }));
}, function () {
  return true;
});

var Display = function Display() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'display';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    css: {
      height: 9
    },
    align: "center"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name),
        effect: function effect(newState, action) {
          if (action.payload.value !== 'flex') {
            newState.wipProperties.justifyContent = '';
            newState.wipProperties.alignItems = '';
          }

          return newState;
        }
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  })));
};

var Opacity = function Opacity() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'opacity';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    align: "center"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: '%'
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  })));
};
var icon = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1.17048 7.29871C2.6305 4.65294 4.88555 3 7.5 3C10.1144 3 12.3695 4.65294 13.8295 7.29871C13.8986 7.42393 13.8986 7.57609 13.8295 7.70131C12.3695 10.3471 10.1144 12 7.5 12C4.88555 12 2.6305 10.3471 1.17048 7.70131C1.10138 7.5761 1.10138 7.42393 1.17048 7.29871ZM7.5 2C4.41479 2 1.87258 3.95663 0.294943 6.81557C0.0598947 7.24151 0.0598957 7.75852 0.294946 8.18446C1.87259 11.0434 4.41479 13 7.5 13C10.5852 13 13.1274 11.0434 14.7051 8.18446C14.9401 7.75852 14.9401 7.24151 14.7051 6.81557C13.1274 3.95663 10.5852 2 7.5 2ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
  fill: " currentColor"
}));

var JustifyStartIcon = function JustifyStartIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.05005 13.5005C1.05005 13.749 1.25152 13.9505 1.50005 13.9505C1.74858 13.9505 1.95005 13.749 1.95005 13.5005L1.95005 1.50047C1.95005 1.25194 1.74858 1.05047 1.50005 1.05047C1.25152 1.05047 1.05005 1.25194 1.05005 1.50047L1.05005 13.5005ZM11 9.00003L4.00002 9.00003L4.00002 6.00003L11 6.00003L11 9.00003ZM3.75002 10C3.33581 10 3.00002 9.66424 3.00002 9.25003L3.00002 5.75003C3.00002 5.33582 3.33581 5.00003 3.75002 5.00003L11.25 5.00003C11.6642 5.00003 12 5.33582 12 5.75003L12 9.25003C12 9.66424 11.6642 10 11.25 10L3.75002 10Z",
    fill: "currentColor"
  }));
};
var AlignStartIcon = function AlignStartIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.49956 1.05002C1.25103 1.05002 1.04956 1.25149 1.04956 1.50002C1.04956 1.74855 1.25103 1.95002 1.49956 1.95002L13.4996 1.95002C13.7481 1.95002 13.9496 1.74855 13.9496 1.50002C13.9496 1.25149 13.7481 1.05002 13.4996 1.05002H1.49956ZM6 11V3.99999H9V11H6ZM5 3.74999C5 3.33578 5.33579 2.99999 5.75 2.99999H9.25C9.66421 2.99999 10 3.33578 10 3.74999V11.25C10 11.6642 9.66421 12 9.25 12H5.75C5.33579 12 5 11.6642 5 11.25V3.74999Z",
    fill: "currentColor"
  }));
};
var CornersIcon = function CornersIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.1 3C10.5283 3 10.8194 3.00039 11.0445 3.01878C11.2637 3.03669 11.3758 3.06915 11.454 3.10899C11.6422 3.20487 11.7951 3.35785 11.891 3.54601C11.9309 3.62421 11.9633 3.73631 11.9812 3.95552C11.9996 4.18056 12 4.47171 12 4.9V5.5C12 5.77614 12.2239 6 12.5 6C12.7761 6 13 5.77614 13 5.5V4.87935C13 4.47687 13 4.14469 12.9779 3.87409C12.9549 3.59304 12.9057 3.33469 12.782 3.09202C12.5903 2.7157 12.2843 2.40973 11.908 2.21799C11.6653 2.09434 11.407 2.04506 11.1259 2.0221C10.8553 1.99999 10.5231 1.99999 10.1207 2H10.1206H10.1H9.5C9.22386 2 9 2.22386 9 2.5C9 2.77614 9.22386 3 9.5 3H10.1ZM5.5 2H4.87935H4.87934C4.47686 1.99999 4.14468 1.99999 3.87409 2.0221C3.59304 2.04506 3.33469 2.09434 3.09202 2.21799C2.7157 2.40973 2.40973 2.7157 2.21799 3.09202C2.09434 3.33469 2.04506 3.59304 2.0221 3.87409C1.99999 4.14468 1.99999 4.47686 2 4.87934V4.87935V5.5C2 5.77614 2.22386 6 2.5 6C2.77614 6 3 5.77614 3 5.5V4.9C3 4.47171 3.00039 4.18056 3.01878 3.95552C3.03669 3.73631 3.06915 3.62421 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.62421 3.06915 3.73631 3.03669 3.95552 3.01878C4.18056 3.00039 4.47171 3 4.9 3H5.5C5.77614 3 6 2.77614 6 2.5C6 2.22386 5.77614 2 5.5 2ZM13 9.5C13 9.22386 12.7761 9 12.5 9C12.2239 9 12 9.22386 12 9.5V10.1C12 10.5283 11.9996 10.8194 11.9812 11.0445C11.9633 11.2637 11.9309 11.3758 11.891 11.454C11.7951 11.6422 11.6422 11.7951 11.454 11.891C11.3758 11.9309 11.2637 11.9633 11.0445 11.9812C10.8194 11.9996 10.5283 12 10.1 12H9.5C9.22386 12 9 12.2239 9 12.5C9 12.7761 9.22386 13 9.5 13H10.1206C10.5231 13 10.8553 13 11.1259 12.9779C11.407 12.9549 11.6653 12.9057 11.908 12.782C12.2843 12.5903 12.5903 12.2843 12.782 11.908C12.9057 11.6653 12.9549 11.407 12.9779 11.1259C13 10.8553 13 10.5231 13 10.1206V9.5ZM2.5 9C2.77614 9 3 9.22386 3 9.5V10.1C3 10.5283 3.00039 10.8194 3.01878 11.0445C3.03669 11.2637 3.06915 11.3758 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.62421 11.9309 3.73631 11.9633 3.95552 11.9812C4.18056 11.9996 4.47171 12 4.9 12H5.5C5.77614 12 6 12.2239 6 12.5C6 12.7761 5.77614 13 5.5 13H4.87935C4.47687 13 4.14469 13 3.87409 12.9779C3.59304 12.9549 3.33469 12.9057 3.09202 12.782C2.7157 12.5903 2.40973 12.2843 2.21799 11.908C2.09434 11.6653 2.04506 11.407 2.0221 11.1259C1.99999 10.8553 1.99999 10.5231 2 10.1207V10.1206V10.1V9.5C2 9.22386 2.22386 9 2.5 9Z",
    fill: "currentColor"
  }));
};
var BorderStyleIcon = function BorderStyleIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H3.5C3.77614 7 4 7.22386 4 7.5C4 7.77614 3.77614 8 3.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11C1.77614 11 2 11.2239 2 11.5C2 11.7761 1.77614 12 1.5 12C1.22386 12 1 11.7761 1 11.5ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11ZM11 11.5C11 11.2239 11.2239 11 11.5 11C11.7761 11 12 11.2239 12 11.5C12 11.7761 11.7761 12 11.5 12C11.2239 12 11 11.7761 11 11.5ZM13.5 11C13.2239 11 13 11.2239 13 11.5C13 11.7761 13.2239 12 13.5 12C13.7761 12 14 11.7761 14 11.5C14 11.2239 13.7761 11 13.5 11ZM6.5 7C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H8.5C8.77614 8 9 7.77614 9 7.5C9 7.22386 8.77614 7 8.5 7H6.5ZM11 7.5C11 7.22386 11.2239 7 11.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H11.5C11.2239 8 11 7.77614 11 7.5Z",
    fill: "currentColor"
  }));
};
var SunIcon = function SunIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z",
    fill: "currentColor"
  }));
};
var FontFamilyIcon = function FontFamilyIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 4.5C2.5 3.09886 3.59886 2 5 2H12.499C12.7752 2 13 2.22386 13 2.5C13 2.77614 12.7761 3 12.5 3H8.69244L8.40509 3.85458C8.18869 4.49752 7.89401 5.37197 7.58091 6.29794C7.50259 6.52956 7.42308 6.76453 7.34332 7H8.5C8.77614 7 9 7.22386 9 7.5C9 7.77614 8.77614 8 8.5 8H7.00407C6.56724 9.28543 6.16435 10.4613 5.95799 11.0386C5.63627 11.9386 5.20712 12.4857 4.66741 12.7778C4.16335 13.0507 3.64154 13.0503 3.28378 13.05L3.25 13.05C2.94624 13.05 2.7 12.8037 2.7 12.5C2.7 12.1962 2.94624 11.95 3.25 11.95C3.64182 11.95 3.9035 11.9405 4.14374 11.8105C4.36443 11.691 4.65532 11.4148 4.92217 10.6683C5.10695 10.1514 5.45375 9.14134 5.8422 8H4.5C4.22386 8 4 7.77614 4 7.5C4 7.22386 4.22386 7 4.5 7H6.18187C6.30127 6.64785 6.42132 6.29323 6.53887 5.94559C6.85175 5.02025 7.14627 4.14631 7.36256 3.50368L7.53192 3H5C4.15114 3 3.5 3.65114 3.5 4.5C3.5 4.77614 3.27614 5 3 5C2.72386 5 2.5 4.77614 2.5 4.5Z",
    fill: "currentColor"
  }));
};
var FontSizeIcon = function FontSizeIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.78235 2.21708C2.70734 2.14206 2.6056 2.09992 2.49951 2.09992C2.39342 2.09992 2.29168 2.14206 2.21667 2.21708L0.216668 4.21708C0.0604584 4.37329 0.0604584 4.62655 0.216668 4.78276C0.372878 4.93897 0.626144 4.93897 0.782354 4.78276L2.09951 3.4656L2.09951 11.5342L0.782353 10.2171C0.626144 10.0609 0.372878 10.0609 0.216668 10.2171C0.0604582 10.3733 0.0604582 10.6266 0.216668 10.7828L2.21667 12.7828C2.29168 12.8578 2.39342 12.8999 2.49951 12.8999C2.6056 12.8999 2.70734 12.8578 2.78235 12.7828L4.78235 10.7828C4.93856 10.6266 4.93856 10.3733 4.78235 10.2171C4.62614 10.0609 4.37288 10.0609 4.21667 10.2171L2.89951 11.5342L2.89951 3.4656L4.21667 4.78276C4.37288 4.93897 4.62614 4.93897 4.78235 4.78276C4.93856 4.62655 4.93856 4.37329 4.78235 4.21708L2.78235 2.21708ZM10.5 2.74997C10.7107 2.74997 10.8989 2.88211 10.9704 3.08036L13.9704 11.3999C14.064 11.6597 13.9294 11.9462 13.6696 12.0399C13.4098 12.1336 13.1233 11.9989 13.0296 11.7392L12.0477 9.016H8.9523L7.97035 11.7392C7.87668 11.9989 7.59016 12.1336 7.33039 12.0399C7.07062 11.9462 6.93597 11.6597 7.02964 11.3999L10.0296 3.08036C10.1011 2.88211 10.2892 2.74997 10.5 2.74997ZM10.5 4.72396L11.7412 8.166H9.25881L10.5 4.72396Z",
    fill: "currentColor"
  }));
};
var FontItalicIcon = function FontItalicIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.67494 3.50017C5.67494 3.25164 5.87641 3.05017 6.12494 3.05017H10.6249C10.8735 3.05017 11.0749 3.25164 11.0749 3.50017C11.0749 3.7487 10.8735 3.95017 10.6249 3.95017H9.00587L7.2309 11.05H8.87493C9.12345 11.05 9.32493 11.2515 9.32493 11.5C9.32493 11.7486 9.12345 11.95 8.87493 11.95H4.37493C4.1264 11.95 3.92493 11.7486 3.92493 11.5C3.92493 11.2515 4.1264 11.05 4.37493 11.05H5.99397L7.76894 3.95017H6.12494C5.87641 3.95017 5.67494 3.7487 5.67494 3.50017Z",
    fill: "currentColor"
  }));
};
var FontBoldIcon = function FontBoldIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.10505 12C4.70805 12 4.4236 11.912 4.25171 11.736C4.0839 11.5559 4 11.2715 4 10.8827V4.11733C4 3.72033 4.08595 3.43588 4.25784 3.26398C4.43383 3.08799 4.71623 3 5.10505 3C6.42741 3 8.25591 3 9.02852 3C10.1373 3 11.0539 3.98153 11.0539 5.1846C11.0539 6.08501 10.6037 6.81855 9.70327 7.23602C10.8657 7.44851 11.5176 8.62787 11.5176 9.48128C11.5176 10.5125 10.9902 12 9.27734 12C8.77742 12 6.42626 12 5.10505 12ZM8.37891 8.00341H5.8V10.631H8.37891C8.9 10.631 9.6296 10.1211 9.6296 9.29877C9.6296 8.47643 8.9 8.00341 8.37891 8.00341ZM5.8 4.36903V6.69577H8.17969C8.53906 6.69577 9.27734 6.35939 9.27734 5.50002C9.27734 4.64064 8.48047 4.36903 8.17969 4.36903H5.8Z",
    fill: "currentColor"
  }));
};
var LineHeightIcon = function LineHeightIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.78235 2.21714C3.70734 2.14212 3.6056 2.09998 3.49951 2.09998C3.39342 2.09998 3.29168 2.14212 3.21667 2.21714L1.21667 4.21714C1.06046 4.37335 1.06046 4.62661 1.21667 4.78282C1.37288 4.93903 1.62614 4.93903 1.78235 4.78282L3.09951 3.46567L3.09951 11.5343L1.78235 10.2171C1.62614 10.0609 1.37288 10.0609 1.21667 10.2171C1.06046 10.3733 1.06046 10.6266 1.21667 10.7828L3.21667 12.7828C3.29168 12.8578 3.39342 12.9 3.49951 12.9C3.6056 12.9 3.70734 12.8578 3.78235 12.7828L5.78235 10.7828C5.93856 10.6266 5.93856 10.3733 5.78235 10.2171C5.62614 10.0609 5.37288 10.0609 5.21667 10.2171L3.89951 11.5343L3.89951 3.46567L5.21667 4.78282C5.37288 4.93903 5.62614 4.93903 5.78235 4.78282C5.93856 4.62661 5.93856 4.37335 5.78235 4.21714L3.78235 2.21714ZM8.5 3.99997C8.22386 3.99997 8 4.22383 8 4.49997C8 4.77611 8.22386 4.99997 8.5 4.99997H14.5C14.7761 4.99997 15 4.77611 15 4.49997C15 4.22383 14.7761 3.99997 14.5 3.99997H8.5ZM8 7.49997C8 7.22383 8.22386 6.99997 8.5 6.99997H14.5C14.7761 6.99997 15 7.22383 15 7.49997C15 7.77611 14.7761 7.99997 14.5 7.99997H8.5C8.22386 7.99997 8 7.77611 8 7.49997ZM8.5 9.99997C8.22386 9.99997 8 10.2238 8 10.5C8 10.7761 8.22386 11 8.5 11H14.5C14.7761 11 15 10.7761 15 10.5C15 10.2238 14.7761 9.99997 14.5 9.99997H8.5Z",
    fill: "currentColor"
  }));
};
var WidthIcon = function WidthIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.81812 4.68161C4.99386 4.85734 4.99386 5.14227 4.81812 5.318L3.08632 7.0498H11.9135L10.1817 5.318C10.006 5.14227 10.006 4.85734 10.1817 4.68161C10.3575 4.50587 10.6424 4.50587 10.8181 4.68161L13.3181 7.18161C13.4939 7.35734 13.4939 7.64227 13.3181 7.818L10.8181 10.318C10.6424 10.4937 10.3575 10.4937 10.1817 10.318C10.006 10.1423 10.006 9.85734 10.1817 9.68161L11.9135 7.9498H3.08632L4.81812 9.68161C4.99386 9.85734 4.99386 10.1423 4.81812 10.318C4.64239 10.4937 4.35746 10.4937 4.18173 10.318L1.68173 7.818C1.50599 7.64227 1.50599 7.35734 1.68173 7.18161L4.18173 4.68161C4.35746 4.50587 4.64239 4.50587 4.81812 4.68161Z",
    fill: "currentColor"
  }));
};
var HeightIcon = function HeightIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.1813 1.68179C7.35704 1.50605 7.64196 1.50605 7.8177 1.68179L10.3177 4.18179C10.4934 4.35753 10.4934 4.64245 10.3177 4.81819C10.142 4.99392 9.85704 4.99392 9.6813 4.81819L7.9495 3.08638L7.9495 11.9136L9.6813 10.1818C9.85704 10.0061 10.142 10.0061 10.3177 10.1818C10.4934 10.3575 10.4934 10.6424 10.3177 10.8182L7.8177 13.3182C7.73331 13.4026 7.61885 13.45 7.4995 13.45C7.38015 13.45 7.26569 13.4026 7.1813 13.3182L4.6813 10.8182C4.50557 10.6424 4.50557 10.3575 4.6813 10.1818C4.85704 10.0061 5.14196 10.0061 5.3177 10.1818L7.0495 11.9136L7.0495 3.08638L5.3177 4.81819C5.14196 4.99392 4.85704 4.99392 4.6813 4.81819C4.50557 4.64245 4.50557 4.35753 4.6813 4.18179L7.1813 1.68179Z",
    fill: "currentColor"
  }));
};
var LinkIcon = function LinkIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.62471 4.00001L4.56402 4.00001C4.04134 3.99993 3.70687 3.99988 3.4182 4.055C2.2379 4.28039 1.29846 5.17053 1.05815 6.33035C0.999538 6.61321 0.999604 6.93998 0.999703 7.43689L0.999711 7.50001L0.999703 7.56313C0.999604 8.06004 0.999538 8.38681 1.05815 8.66967C1.29846 9.8295 2.2379 10.7196 3.4182 10.945C3.70688 11.0001 4.04135 11.0001 4.56403 11L4.62471 11H5.49971C5.77585 11 5.99971 10.7762 5.99971 10.5C5.99971 10.2239 5.77585 10 5.49971 10H4.62471C4.02084 10 3.78907 9.99777 3.60577 9.96277C2.80262 9.8094 2.19157 9.21108 2.03735 8.46678C2.00233 8.29778 1.99971 8.08251 1.99971 7.50001C1.99971 6.91752 2.00233 6.70225 2.03735 6.53324C2.19157 5.78895 2.80262 5.19062 3.60577 5.03725C3.78907 5.00225 4.02084 5.00001 4.62471 5.00001H5.49971C5.77585 5.00001 5.99971 4.77615 5.99971 4.50001C5.99971 4.22387 5.77585 4.00001 5.49971 4.00001H4.62471ZM10.3747 5.00001C10.9786 5.00001 11.2104 5.00225 11.3937 5.03725C12.1968 5.19062 12.8079 5.78895 12.9621 6.53324C12.9971 6.70225 12.9997 6.91752 12.9997 7.50001C12.9997 8.08251 12.9971 8.29778 12.9621 8.46678C12.8079 9.21108 12.1968 9.8094 11.3937 9.96277C11.2104 9.99777 10.9786 10 10.3747 10H9.49971C9.22357 10 8.99971 10.2239 8.99971 10.5C8.99971 10.7762 9.22357 11 9.49971 11H10.3747L10.4354 11C10.9581 11.0001 11.2925 11.0001 11.5812 10.945C12.7615 10.7196 13.701 9.8295 13.9413 8.66967C13.9999 8.38681 13.9998 8.06005 13.9997 7.56314L13.9997 7.50001L13.9997 7.43688C13.9998 6.93998 13.9999 6.61321 13.9413 6.33035C13.701 5.17053 12.7615 4.28039 11.5812 4.055C11.2925 3.99988 10.9581 3.99993 10.4354 4.00001L10.3747 4.00001H9.49971C9.22357 4.00001 8.99971 4.22387 8.99971 4.50001C8.99971 4.77615 9.22357 5.00001 9.49971 5.00001H10.3747ZM5.00038 7C4.72424 7 4.50038 7.22386 4.50038 7.5C4.50038 7.77614 4.72424 8 5.00038 8H10.0004C10.2765 8 10.5004 7.77614 10.5004 7.5C10.5004 7.22386 10.2765 7 10.0004 7H5.00038Z",
    fill: "currentColor"
  }));
};
var LinkNoneIcon = function LinkNoneIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.56427 3.99988C4.58422 3.99989 4.60445 3.99989 4.62496 3.99989H5.49996C5.7761 3.99989 5.99996 4.22375 5.99996 4.49989C5.99996 4.77603 5.7761 4.99989 5.49996 4.99989H4.62496C4.02108 4.99989 3.78932 5.00213 3.60601 5.03713C2.80287 5.1905 2.19181 5.78883 2.03759 6.53312C2.00257 6.70212 1.99996 6.91739 1.99996 7.49989C1.99996 8.08239 2.00257 8.29766 2.03759 8.46666C2.19181 9.21095 2.80287 9.80928 3.60601 9.96265C3.78932 9.99765 4.02108 9.99989 4.62496 9.99989H5.49996C5.7761 9.99989 5.99996 10.2237 5.99996 10.4999C5.99996 10.776 5.7761 10.9999 5.49996 10.9999H4.62496C4.60445 10.9999 4.58422 10.9999 4.56427 10.9999C4.04159 11 3.70712 11 3.41845 10.9449C2.23814 10.7195 1.29871 9.82937 1.05839 8.66955C0.999782 8.38669 0.999848 8.05992 0.999947 7.56301C0.999951 7.54227 0.999955 7.52123 0.999955 7.49989C0.999955 7.47855 0.999951 7.45751 0.999947 7.43677C0.999848 6.93986 0.999782 6.61309 1.05839 6.33023C1.29871 5.17041 2.23814 4.28027 3.41845 4.05488C3.70712 3.99976 4.04159 3.99981 4.56427 3.99988ZM11.3939 5.03713C11.2106 5.00213 10.9788 4.99989 10.375 4.99989H9.49996C9.22381 4.99989 8.99996 4.77603 8.99996 4.49989C8.99996 4.22375 9.22381 3.99989 9.49996 3.99989H10.375C10.3955 3.99989 10.4157 3.99989 10.4356 3.99988C10.9583 3.99981 11.2928 3.99976 11.5815 4.05488C12.7618 4.28027 13.7012 5.17041 13.9415 6.33023C14.0001 6.61309 14.0001 6.93985 14 7.43676C14 7.4575 14 7.47854 14 7.49989C14 7.52124 14 7.54228 14 7.56302C14.0001 8.05992 14.0001 8.38669 13.9415 8.66955C13.7012 9.82937 12.7618 10.7195 11.5815 10.9449C11.2928 11 10.9583 11 10.4356 10.9999C10.4157 10.9999 10.3955 10.9999 10.375 10.9999H9.49996C9.22381 10.9999 8.99996 10.776 8.99996 10.4999C8.99996 10.2237 9.22381 9.99989 9.49996 9.99989H10.375C10.9788 9.99989 11.2106 9.99765 11.3939 9.96265C12.197 9.80928 12.8081 9.21095 12.9623 8.46666C12.9973 8.29766 13 8.08239 13 7.49989C13 6.91739 12.9973 6.70212 12.9623 6.53312C12.8081 5.78883 12.197 5.1905 11.3939 5.03713Z",
    fill: "currentColor"
  }));
};
var TextAlignCenterIcon = function TextAlignCenterIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM4 7.5C4 7.22386 4.22386 7 4.5 7H10.5C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H4.5C4.22386 8 4 7.77614 4 7.5ZM3 10.5C3 10.2239 3.22386 10 3.5 10H11.5C11.7761 10 12 10.2239 12 10.5C12 10.7761 11.7761 11 11.5 11H3.5C3.22386 11 3 10.7761 3 10.5Z",
    fill: "currentColor"
  }));
};
var TextAlignLeftIcon = function TextAlignLeftIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z",
    fill: "currentColor"
  }));
};
var TextAlignRightIcon = function TextAlignRightIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM4 10.5C4 10.2239 4.22386 10 4.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H4.5C4.22386 11 4 10.7761 4 10.5Z",
    fill: "currentColor"
  }));
};
var UnderlineIcon = function UnderlineIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.00001 2.75C5.00001 2.47386 4.77615 2.25 4.50001 2.25C4.22387 2.25 4.00001 2.47386 4.00001 2.75V8.05C4.00001 9.983 5.56702 11.55 7.50001 11.55C9.43301 11.55 11 9.983 11 8.05V2.75C11 2.47386 10.7762 2.25 10.5 2.25C10.2239 2.25 10 2.47386 10 2.75V8.05C10 9.43071 8.88072 10.55 7.50001 10.55C6.1193 10.55 5.00001 9.43071 5.00001 8.05V2.75ZM3.49998 13.1001C3.27906 13.1001 3.09998 13.2791 3.09998 13.5001C3.09998 13.721 3.27906 13.9001 3.49998 13.9001H11.5C11.7209 13.9001 11.9 13.721 11.9 13.5001C11.9 13.2791 11.7209 13.1001 11.5 13.1001H3.49998Z",
    fill: "currentColor"
  }));
};
var StrikethroughIcon = function StrikethroughIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.00003 3.25C5.00003 2.97386 4.77617 2.75 4.50003 2.75C4.22389 2.75 4.00003 2.97386 4.00003 3.25V7.10003H2.49998C2.27906 7.10003 2.09998 7.27912 2.09998 7.50003C2.09998 7.72094 2.27906 7.90003 2.49998 7.90003H4.00003V8.55C4.00003 10.483 5.56703 12.05 7.50003 12.05C9.43303 12.05 11 10.483 11 8.55V7.90003H12.5C12.7209 7.90003 12.9 7.72094 12.9 7.50003C12.9 7.27912 12.7209 7.10003 12.5 7.10003H11V3.25C11 2.97386 10.7762 2.75 10.5 2.75C10.2239 2.75 10 2.97386 10 3.25V7.10003H5.00003V3.25ZM5.00003 7.90003V8.55C5.00003 9.93071 6.11932 11.05 7.50003 11.05C8.88074 11.05 10 9.93071 10 8.55V7.90003H5.00003Z",
    fill: "currentColor"
  }));
};
var LetterCaseCapitalizeIcon = function LetterCaseCapitalizeIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.68979 2.75C3.89667 2.74979 4.08232 2.87701 4.15679 3.07003L7.36662 11.39C7.46602 11.6477 7.33774 11.9371 7.08011 12.0365C6.82247 12.1359 6.53304 12.0076 6.43365 11.75L5.38251 9.02537H2.01133L0.966993 11.749C0.868129 12.0068 0.578965 12.1357 0.321127 12.0369C0.0632883 11.938 -0.0655859 11.6488 0.0332779 11.391L3.22344 3.07099C3.29751 2.87782 3.4829 2.75021 3.68979 2.75ZM3.69174 4.64284L5.05458 8.17537H2.33724L3.69174 4.64284ZM10.8989 5.20703C9.25818 5.20703 8.00916 6.68569 8.00916 8.60972C8.00916 10.6337 9.35818 12.0124 10.8989 12.0124C11.7214 12.0124 12.5744 11.6692 13.1543 11.0219V11.53C13.1543 11.7785 13.3557 11.98 13.6043 11.98C13.8528 11.98 14.0543 11.7785 14.0543 11.53V5.72C14.0543 5.47147 13.8528 5.27 13.6043 5.27C13.3557 5.27 13.1543 5.47147 13.1543 5.72V6.22317C12.6054 5.60095 11.7924 5.20703 10.8989 5.20703ZM13.1543 9.79823V7.30195C12.7639 6.58101 11.9414 6.05757 11.0868 6.05757C10.1088 6.05757 9.03503 6.96581 9.03503 8.60955C9.03503 10.1533 10.0088 11.1615 11.0868 11.1615C11.9701 11.1615 12.772 10.4952 13.1543 9.79823Z",
    fill: "currentColor"
  }));
};
var LetterCaseUppercaseIcon = function LetterCaseUppercaseIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.6255 2.75C3.83478 2.75 4.02192 2.88034 4.09448 3.07664L7.16985 11.3962C7.2656 11.6552 7.13324 11.9428 6.87423 12.0386C6.61522 12.1343 6.32763 12.002 6.23188 11.7429L5.22387 9.01603H2.02712L1.01911 11.7429C0.923362 12.002 0.635774 12.1343 0.376762 12.0386C0.117749 11.9428 -0.0146052 11.6552 0.0811401 11.3962L3.15651 3.07664C3.22908 2.88034 3.41621 2.75 3.6255 2.75ZM3.6255 4.69207L4.90966 8.16603H2.34133L3.6255 4.69207ZM11.3719 2.75C11.5811 2.75 11.7683 2.88034 11.8408 3.07664L14.9162 11.3962C15.012 11.6552 14.8796 11.9428 14.6206 12.0386C14.3616 12.1343 14.074 12.002 13.9782 11.7429L12.9702 9.01603H9.77348L8.76547 11.7429C8.66972 12.002 8.38213 12.1343 8.12312 12.0386C7.86411 11.9428 7.73175 11.6552 7.8275 11.3962L10.9029 3.07664C10.9754 2.88034 11.1626 2.75 11.3719 2.75ZM11.3719 4.69207L12.656 8.16603H10.0877L11.3719 4.69207Z",
    fill: "currentColor"
  }));
};
var LetterCaseLowercaseIcon = function LetterCaseLowercaseIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.69899 5.20703C2.05823 5.20703 0.809204 6.68569 0.809204 8.60972C0.809204 10.6337 2.15823 12.0124 3.69899 12.0124C4.52126 12.0124 5.37402 11.6693 5.9539 11.0223V11.53C5.9539 11.7785 6.15537 11.98 6.4039 11.98C6.65243 11.98 6.8539 11.7785 6.8539 11.53V5.72001C6.8539 5.47149 6.65243 5.27001 6.4039 5.27001C6.15537 5.27001 5.9539 5.47149 5.9539 5.72001V6.22269C5.40506 5.60075 4.59218 5.20703 3.69899 5.20703ZM5.9539 9.799V7.30117C5.56339 6.58064 4.74118 6.05757 3.8868 6.05757C2.9089 6.05757 1.83508 6.96581 1.83508 8.60955C1.83508 10.1533 2.80889 11.1615 3.8868 11.1615C4.76984 11.1615 5.57141 10.4957 5.9539 9.799ZM10.799 5.20703C9.15823 5.20703 7.9092 6.68569 7.9092 8.60972C7.9092 10.6337 9.25823 12.0124 10.799 12.0124C11.6215 12.0124 12.4744 11.6692 13.0543 11.0218V11.53C13.0543 11.7785 13.2558 11.98 13.5043 11.98C13.7529 11.98 13.9543 11.7785 13.9543 11.53V5.72C13.9543 5.47147 13.7529 5.27 13.5043 5.27C13.2558 5.27 13.0543 5.47147 13.0543 5.72V6.22318C12.5055 5.60095 11.6924 5.20703 10.799 5.20703ZM13.0543 9.79822V7.30196C12.664 6.58102 11.8415 6.05757 10.9868 6.05757C10.0089 6.05757 8.93508 6.96581 8.93508 8.60955C8.93508 10.1533 9.90889 11.1615 10.9868 11.1615C11.8702 11.1615 12.672 10.4952 13.0543 9.79822Z",
    fill: "currentColor"
  }));
};
var TimerIcon = function TimerIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.49998 0.849976C7.22383 0.849976 6.99998 1.07383 6.99998 1.34998V3.52234C6.99998 3.79848 7.22383 4.02234 7.49998 4.02234C7.77612 4.02234 7.99998 3.79848 7.99998 3.52234V1.8718C10.8862 2.12488 13.15 4.54806 13.15 7.49998C13.15 10.6204 10.6204 13.15 7.49998 13.15C4.37957 13.15 1.84998 10.6204 1.84998 7.49998C1.84998 6.10612 2.35407 4.83128 3.19049 3.8459C3.36919 3.63538 3.34339 3.31985 3.13286 3.14115C2.92234 2.96245 2.60681 2.98825 2.42811 3.19877C1.44405 4.35808 0.849976 5.86029 0.849976 7.49998C0.849976 11.1727 3.82728 14.15 7.49998 14.15C11.1727 14.15 14.15 11.1727 14.15 7.49998C14.15 3.82728 11.1727 0.849976 7.49998 0.849976ZM6.74049 8.08072L4.22363 4.57237C4.15231 4.47295 4.16346 4.33652 4.24998 4.25C4.33649 4.16348 4.47293 4.15233 4.57234 4.22365L8.08069 6.74051C8.56227 7.08599 8.61906 7.78091 8.19998 8.2C7.78089 8.61909 7.08597 8.56229 6.74049 8.08072Z",
    fill: "currentColor"
  }));
};
var StopwatchIcon = function StopwatchIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z",
    fill: "currentColor"
  }));
};

var JustifyContent = function JustifyContent() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'justifyContent';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  var flexDirection = state.computedStyles.flexDirection;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    key: flexDirection,
    icon: flexDirection === 'column' || flexDirection === 'column-reverse' ? /*#__PURE__*/React.createElement(AlignStartIcon, null) : /*#__PURE__*/React.createElement(JustifyStartIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    style: {
      Button: {
        flexShrink: 1
      }
    },
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};

var AlignItems = function AlignItems() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'alignItems';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  var flexDirection = state.computedStyles.flexDirection;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    key: flexDirection,
    disabled: isDisabled(state, variants),
    icon: flexDirection === 'column' || flexDirection === 'column-reverse' ? /*#__PURE__*/React.createElement(JustifyStartIcon, null) : /*#__PURE__*/React.createElement(AlignStartIcon, null),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    style: {
      Button: {
        flexShrink: 1
      }
    },
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};

var FlexDirection = function FlexDirection() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'flexDirection';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};

var FlexWrap = function FlexWrap() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'flexWrap';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$1,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};
var icon$1 = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M4.35355 12.8536C4.54882 12.6583 4.54882 12.3417 4.35355 12.1464L3.20711 11L6.5 11L8 11C10.7614 11 13 8.76142 13 6L13 4L13 2.5C13 2.22386 12.7761 2 12.5 2C12.2239 2 12 2.22386 12 2.5L12 4L12 6C12 8.20914 10.2091 10 8 10L6.5 10L3.20711 10L4.35355 8.85355C4.54882 8.65829 4.54882 8.34171 4.35355 8.14645C4.15829 7.95118 3.84171 7.95118 3.64645 8.14645L1.64645 10.1464C1.45118 10.3417 1.45118 10.6583 1.64645 10.8536L3.64645 12.8536C3.84171 13.0488 4.15829 13.0488 4.35355 12.8536Z",
  fill: "currentColor"
}));

var FlexGrow = function FlexGrow() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'flexGrow';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$2,
    showValue: false,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: values[name] === '1' ? 'Grow' : "Don't grow"
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};
var icon$2 = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  id: "horizontal",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  strokeWidth: "1",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    transform: 'rotate(45deg)'
  }
}, /*#__PURE__*/React.createElement("polyline", {
  points: "15 3 21 3 21 9"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "9 21 3 21 3 15"
}), /*#__PURE__*/React.createElement("line", {
  x1: "21",
  y1: "3",
  x2: "14",
  y2: "10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "21",
  x2: "10",
  y2: "14"
}));

var FlexShrink = function FlexShrink() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'flexShrink';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$3,
    showValue: false,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: values[name] === '1' ? 'Shrink' : "Don't shrink"
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};
var icon$3 = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  id: "horizontal",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  strokeWidth: "1",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    transform: 'rotate(45deg)'
  }
}, /*#__PURE__*/React.createElement("polyline", {
  points: "4 14 10 14 10 20"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "20 10 14 10 14 4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "14",
  y1: "10",
  x2: "21",
  y2: "3"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "21",
  x2: "10",
  y2: "14"
}));

var AlignSelf = function AlignSelf(_ref) {
  var parentFlexDirection = _ref.parentFlexDirection;

  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'alignSelf';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    key: parentFlexDirection,
    disabled: isDisabled(state, variants),
    prefix: "Align",
    icon: parentFlexDirection === 'column' || parentFlexDirection === 'column-reverse' ? /*#__PURE__*/React.createElement(JustifyStartIcon, null) : /*#__PURE__*/React.createElement(AlignStartIcon, null),
    options: names.map(function (name) {
      return {
        name: name,
        hint: values[name]
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var FlexOrder = function FlexOrder() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'order';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$4,
    prefix: property,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};
var icon$4 = /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  strokeWidth: "1",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "9",
  x2: "20",
  y2: "9"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "15",
  x2: "20",
  y2: "15"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10",
  y1: "3",
  x2: "8",
  y2: "21"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  y1: "3",
  x2: "14",
  y2: "21"
}));

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Size = function Size() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var initialiseValues = function initialiseValues() {
    var computedWidth = getComputedProperty(state, 'width');
    var computedHeight = getComputedProperty(state, 'height');
    return {
      maintainRatio: false,
      width: getWipProperty(state, 'width') || computedWidth,
      height: getWipProperty(state, 'height') || computedHeight,
      computedWidth: computedWidth,
      computedHeight: computedHeight
    };
  };

  var _React$useState = React.useState(initialiseValues),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  React.useEffect(function () {
    setValues(initialiseValues);
  }, [state.uuid, state.responsiveModifier, state.pseudoModifier]);

  var setMaintainRatio = function setMaintainRatio(maintainRatio) {
    setValues(_objectSpread$5(_objectSpread$5({}, values), {}, {
      maintainRatio: maintainRatio
    }));
  };

  var onChange = function onChange(action, property, value) {
    setValues(function (values) {
      var newValues;

      if (values.maintainRatio) {
        newValues = _objectSpread$5(_objectSpread$5({}, values), {}, {
          width: value,
          height: value
        });
      } else newValues = _objectSpread$5(_objectSpread$5({}, values), {}, _defineProperty({}, property, value));

      var _newValues = newValues,
          width = _newValues.width,
          height = _newValues.height;
      dispatch({
        type: action,
        payload: {
          width: width,
          height: height
        }
      });
      if (action === actions.CHANGE_PROPERTY) return newValues;else return values;
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Width, {
    value: values.width,
    computedValue: values.computedWidth,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(MaintainRatio, {
    maintainRatio: values.maintainRatio,
    setMaintainRatio: setMaintainRatio
  }), /*#__PURE__*/React.createElement(Height, {
    value: values.height,
    computedValue: values.computedHeight,
    onChange: onChange
  }));
};

var Width = function Width(_ref) {
  var value = _ref.value,
      computedValue = _ref.computedValue,
      _onChange = _ref.onChange;
  var property = 'width';

  var _useState2 = useState(),
      state = _useState2.state,
      actions = _useState2.actions;

  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(WidthIcon, null),
    style: {
      Button: {
        width: 88
      }
    },
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      return _onChange(actions.CHANGE_PROPERTY, property, name);
    },
    onHover: function onHover(name) {
      return _onChange(actions.CHANGE_STYLE, property, values[name]);
    },
    onClose: function onClose() {
      return _onChange(actions.CHANGE_STYLE, property, null);
    }
  }));
};

var Height = function Height(_ref2) {
  var value = _ref2.value,
      computedValue = _ref2.computedValue,
      _onChange2 = _ref2.onChange;
  var property = 'height';

  var _useState3 = useState(),
      state = _useState3.state,
      actions = _useState3.actions;

  var _state$definitions$pr2 = state.definitions[property],
      names = _state$definitions$pr2.names,
      values = _state$definitions$pr2.values,
      variants = _state$definitions$pr2.variants;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(HeightIcon, null),
    style: {
      Button: {
        width: 88
      }
    },
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      return _onChange2(actions.CHANGE_PROPERTY, property, name);
    },
    onHover: function onHover(name) {
      return _onChange2(actions.CHANGE_STYLE, property, values[name]);
    },
    onClose: function onClose() {
      return _onChange2(actions.CHANGE_STYLE, property, null);
    }
  }));
};

var MaintainRatio = function MaintainRatio(_ref3) {
  var maintainRatio = _ref3.maintainRatio,
      setMaintainRatio = _ref3.setMaintainRatio;
  return /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Maintain width = height"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      width: 10,
      transform: 'rotate(90deg)'
    },
    marginRight: 2,
    justify: "center",
    "data-active": maintainRatio,
    onClick: function onClick() {
      return setMaintainRatio(!maintainRatio);
    }
  }, maintainRatio ? /*#__PURE__*/React.createElement(LinkIcon, null) : /*#__PURE__*/React.createElement(LinkNoneIcon, null)));
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var MinSize = function MinSize() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var initialiseValues = function initialiseValues() {
    var computedMinWidth = getComputedProperty(state, 'minWidth');
    var computedMinHeight = getComputedProperty(state, 'minHeight');
    return {
      maintainRatio: false,
      minWidth: getWipProperty(state, 'minWidth') || computedMinWidth,
      minHeight: getWipProperty(state, 'minHeight') || computedMinHeight,
      computedMinWidth: computedMinWidth,
      computedMinHeight: computedMinHeight
    };
  };

  var _React$useState = React.useState(initialiseValues),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  React.useEffect(function () {
    setValues(initialiseValues);
  }, [state.uuid, state.responsiveModifier, state.pseudoModifier]);

  var setMaintainRatio = function setMaintainRatio(maintainRatio) {
    setValues(_objectSpread$6(_objectSpread$6({}, values), {}, {
      maintainRatio: maintainRatio
    }));
  };

  var onChange = function onChange(action, property, value) {
    setValues(function (values) {
      var newValues;

      if (values.maintainRatio) {
        newValues = _objectSpread$6(_objectSpread$6({}, values), {}, {
          minWidth: value,
          minHeight: value
        });
      } else newValues = _objectSpread$6(_objectSpread$6({}, values), {}, _defineProperty({}, property, value));

      var _newValues = newValues,
          minWidth = _newValues.minWidth,
          minHeight = _newValues.minHeight;
      dispatch({
        type: action,
        payload: {
          minWidth: minWidth,
          minHeight: minHeight
        }
      });
      if (action === actions.CHANGE_PROPERTY) return newValues;else return values;
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MinWidth, {
    value: values.minWidth,
    computedValue: values.computedMinWidth,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(MaintainRatio$1, {
    maintainRatio: values.maintainRatio,
    setMaintainRatio: setMaintainRatio
  }), /*#__PURE__*/React.createElement(MinHeight, {
    value: values.minHeight,
    computedValue: values.computedMinHeight,
    onChange: onChange
  }));
};

var MinWidth = function MinWidth(_ref) {
  var value = _ref.value,
      computedValue = _ref.computedValue,
      _onChange = _ref.onChange;
  var property = 'minWidth';

  var _useState2 = useState(),
      state = _useState2.state,
      actions = _useState2.actions;

  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(WidthIcon, null),
    style: {
      Button: {
        width: 96
      }
    },
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      return _onChange(actions.CHANGE_PROPERTY, property, name);
    },
    onHover: function onHover(name) {
      return _onChange(actions.CHANGE_STYLE, property, values[name]);
    },
    onClose: function onClose() {
      return _onChange(actions.CHANGE_STYLE, property, null);
    }
  });
};

var MinHeight = function MinHeight(_ref2) {
  var value = _ref2.value,
      computedValue = _ref2.computedValue,
      _onChange2 = _ref2.onChange;
  var property = 'minHeight';

  var _useState3 = useState(),
      state = _useState3.state,
      actions = _useState3.actions;

  var _state$definitions$pr2 = state.definitions[property],
      names = _state$definitions$pr2.names,
      values = _state$definitions$pr2.values,
      variants = _state$definitions$pr2.variants;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(HeightIcon, null),
    style: {
      Button: {
        width: 96
      }
    },
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      return _onChange2(actions.CHANGE_PROPERTY, property, name);
    },
    onHover: function onHover(name) {
      return _onChange2(actions.CHANGE_STYLE, property, values[name]);
    },
    onClose: function onClose() {
      return _onChange2(actions.CHANGE_STYLE, property, null);
    }
  });
};

var MaintainRatio$1 = function MaintainRatio(_ref3) {
  var maintainRatio = _ref3.maintainRatio,
      setMaintainRatio = _ref3.setMaintainRatio;
  return /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      width: 10
    },
    marginRight: 2,
    justify: "center",
    "data-active": maintainRatio,
    onClick: function onClick() {
      return setMaintainRatio(!maintainRatio);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "6",
    height: "12",
    viewBox: "0 0 12 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 15V18C11 18.6566 10.8707 19.3068 10.6194 19.9134C10.3681 20.52 9.99983 21.0712 9.53553 21.5355C9.07124 21.9998 8.52004 22.3681 7.91342 22.6194C7.30679 22.8707 6.65661 23 6 23C5.34339 23 4.69321 22.8707 4.08658 22.6194C3.47995 22.3681 2.92876 21.9998 2.46447 21.5355C2.00017 21.0712 1.63188 20.52 1.3806 19.9134C1.12933 19.3068 1 18.6566 1 18L1 15M1 9L1 6C1 5.34339 1.12933 4.69321 1.3806 4.08658C1.63188 3.47995 2.00017 2.92876 2.46447 2.46447C3.40215 1.52678 4.67392 1 6 1C7.32608 1 8.59785 1.52678 9.53553 2.46447C10.4732 3.40215 11 4.67392 11 6L11 9",
    stroke: "currentColor"
  }), maintainRatio ? /*#__PURE__*/React.createElement("path", {
    d: "M6 8L6 16",
    stroke: "currentColor"
  }) : null));
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var MaxSize = function MaxSize() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var initialiseValues = function initialiseValues() {
    var computedMaxWidth = getComputedProperty(state, 'maxWidth');
    var computedMaxHeight = getComputedProperty(state, 'maxHeight');
    return {
      maintainRatio: false,
      maxWidth: getWipProperty(state, 'maxWidth') || computedMaxWidth,
      maxHeight: getWipProperty(state, 'maxHeight') || computedMaxHeight,
      computedMaxWidth: computedMaxWidth,
      computedMaxHeight: computedMaxHeight
    };
  };

  var _React$useState = React.useState(initialiseValues),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  React.useEffect(function () {
    setValues(initialiseValues);
  }, [state.uuid, state.responsiveModifier, state.pseudoModifier]);

  var setMaintainRatio = function setMaintainRatio(maintainRatio) {
    setValues(_objectSpread$7(_objectSpread$7({}, values), {}, {
      maintainRatio: maintainRatio
    }));
  };

  var onChange = function onChange(action, property, value) {
    setValues(function (values) {
      var newValues;

      if (values.maintainRatio) {
        newValues = _objectSpread$7(_objectSpread$7({}, values), {}, {
          maxWidth: value,
          maxHeight: value
        });
      } else newValues = _objectSpread$7(_objectSpread$7({}, values), {}, _defineProperty({}, property, value));

      var _newValues = newValues,
          maxWidth = _newValues.maxWidth,
          maxHeight = _newValues.maxHeight;
      dispatch({
        type: action,
        payload: {
          maxWidth: maxWidth,
          maxHeight: maxHeight
        }
      });
      if (action === actions.CHANGE_PROPERTY) return newValues;else return values;
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MaxWidth, {
    value: values.maxWidth,
    computedValue: values.computedMaxWidth,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(MaintainRatio$2, {
    maintainRatio: values.maintainRatio,
    setMaintainRatio: setMaintainRatio
  }), /*#__PURE__*/React.createElement(MaxHeight, {
    value: values.maxHeight,
    computedValue: values.computedMaxHeight,
    onChange: onChange
  }));
};

var MaxWidth = function MaxWidth(_ref) {
  var value = _ref.value,
      computedValue = _ref.computedValue,
      _onChange = _ref.onChange;
  var property = 'maxWidth';

  var _useState2 = useState(),
      state = _useState2.state,
      actions = _useState2.actions;

  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    computedValue: computedValue,
    disabled: isDisabled(state, variants),
    icon: /*#__PURE__*/React.createElement(WidthIcon, null),
    style: {
      Button: {
        width: 96
      }
    },
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      return _onChange(actions.CHANGE_PROPERTY, property, name);
    },
    onHover: function onHover(name) {
      return _onChange(actions.CHANGE_STYLE, property, values[name]);
    },
    onClose: function onClose() {
      return _onChange(actions.CHANGE_STYLE, property, null);
    }
  });
};

var MaxHeight = function MaxHeight(_ref2) {
  var value = _ref2.value,
      computedValue = _ref2.computedValue,
      _onChange2 = _ref2.onChange;
  var property = 'maxHeight';

  var _useState3 = useState(),
      state = _useState3.state,
      actions = _useState3.actions;

  var _state$definitions$pr2 = state.definitions[property],
      names = _state$definitions$pr2.names,
      values = _state$definitions$pr2.values,
      variants = _state$definitions$pr2.variants;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    computedValue: computedValue,
    disabled: isDisabled(state, variants),
    icon: /*#__PURE__*/React.createElement(HeightIcon, null),
    style: {
      Button: {
        width: 96
      }
    },
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      return _onChange2(actions.CHANGE_PROPERTY, property, name);
    },
    onHover: function onHover(name) {
      return _onChange2(actions.CHANGE_STYLE, property, values[name]);
    },
    onClose: function onClose() {
      return _onChange2(actions.CHANGE_STYLE, property, null);
    }
  });
};

var MaintainRatio$2 = function MaintainRatio(_ref3) {
  var maintainRatio = _ref3.maintainRatio,
      setMaintainRatio = _ref3.setMaintainRatio;
  return /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      width: 10
    },
    marginRight: 2,
    justify: "center",
    "data-active": maintainRatio,
    onClick: function onClick() {
      return setMaintainRatio(!maintainRatio);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "6",
    height: "12",
    viewBox: "0 0 12 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 15V18C11 18.6566 10.8707 19.3068 10.6194 19.9134C10.3681 20.52 9.99983 21.0712 9.53553 21.5355C9.07124 21.9998 8.52004 22.3681 7.91342 22.6194C7.30679 22.8707 6.65661 23 6 23C5.34339 23 4.69321 22.8707 4.08658 22.6194C3.47995 22.3681 2.92876 21.9998 2.46447 21.5355C2.00017 21.0712 1.63188 20.52 1.3806 19.9134C1.12933 19.3068 1 18.6566 1 18L1 15M1 9L1 6C1 5.34339 1.12933 4.69321 1.3806 4.08658C1.63188 3.47995 2.00017 2.92876 2.46447 2.46447C3.40215 1.52678 4.67392 1 6 1C7.32608 1 8.59785 1.52678 9.53553 2.46447C10.4732 3.40215 11 4.67392 11 6L11 9",
    stroke: "currentColor"
  }), maintainRatio ? /*#__PURE__*/React.createElement("path", {
    d: "M6 8L6 16",
    stroke: "currentColor"
  }) : null));
};

var BorderRadius = function BorderRadius() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'borderRadius';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(CornersIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var SpaceX = function SpaceX() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'spaceX';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var value = getWipProperty(state, property);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    icon: icon$5,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      var value = values[name];
      var hint = value === 0 ? null : remToPx(value);
      return {
        name: name,
        hint: hint
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};
var icon$5 = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M14 13.5L14 1.5",
  stroke: "currentColor",
  strokeWidth: "0.9",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 13.5L1 1.5",
  stroke: "currentColor",
  strokeWidth: "0.9",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M11.8515 7.18144C12.0272 7.35718 12.0272 7.6421 11.8515 7.81784L10.0181 9.65117C9.8424 9.82691 9.55748 9.82691 9.38174 9.65117C9.20601 9.47544 9.20601 9.19051 9.38174 9.01478L10.4469 7.94964L4.553 7.94964L5.61814 9.01478C5.79388 9.19051 5.79388 9.47544 5.61814 9.65117C5.4424 9.82691 5.15748 9.82691 4.98174 9.65117L3.14841 7.81784C3.06402 7.73345 3.01661 7.61899 3.01661 7.49964C3.01661 7.38029 3.06402 7.26583 3.14841 7.18144L4.98174 5.34811C5.15748 5.17237 5.4424 5.17237 5.61814 5.34811C5.79388 5.52385 5.79388 5.80877 5.61814 5.98451L4.553 7.04964L10.4469 7.04964L9.38174 5.98451C9.20601 5.80877 9.20601 5.52385 9.38174 5.34811C9.55748 5.17237 9.84241 5.17237 10.0181 5.34811L11.8515 7.18144Z",
  fill: "currentColor"
}));

var SpaceY = function SpaceY() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'spaceY';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var value = getWipProperty(state, property);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    icon: icon$6,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      var value = values[name];
      var hint = value === 0 ? null : remToPx(value);
      return {
        name: name,
        hint: hint
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};
var icon$6 = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M13.5 1L1.5 0.999999",
  stroke: "currentColor",
  strokeWidth: "0.9",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 14L1.5 14",
  stroke: "currentColor",
  strokeWidth: "0.9",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7.18144 3.14846C7.35718 2.97273 7.6421 2.97273 7.81784 3.14846L9.65117 4.9818C9.82691 5.15753 9.82691 5.44246 9.65117 5.61819C9.47544 5.79393 9.19051 5.79393 9.01478 5.61819L7.94964 4.55306L7.94964 10.4469L9.01478 9.3818C9.19051 9.20606 9.47544 9.20606 9.65117 9.3818C9.82691 9.55753 9.82691 9.84246 9.65117 10.0182L7.81784 11.8515C7.73345 11.9359 7.61899 11.9833 7.49964 11.9833C7.38029 11.9833 7.26584 11.9359 7.18144 11.8515L5.34811 10.0182C5.17237 9.84246 5.17237 9.55753 5.34811 9.3818C5.52385 9.20606 5.80877 9.20606 5.98451 9.3818L7.04964 10.4469L7.04964 4.55306L5.98451 5.61819C5.80877 5.79393 5.52385 5.79393 5.34811 5.61819C5.17237 5.44246 5.17237 5.15753 5.34811 4.9818L7.18144 3.14846Z",
  fill: "currentColor"
}));

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ConstrainedGroup = function ConstrainedGroup(_ref) {
  var propertyGroup = _ref.propertyGroup;

  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var properties = {
    Top: propertyGroup + 'Top',
    Right: propertyGroup + 'Right',
    Bottom: propertyGroup + 'Bottom',
    Left: propertyGroup + 'Left'
  }; // TODO: These values don't change with responsive mode changing

  var initialiseValues = function initialiseValues() {
    var _ref2;

    var computedTop = getComputedProperty(state, properties.Top);
    var computedRight = getComputedProperty(state, properties.Right);
    var computedBottom = getComputedProperty(state, properties.Bottom);
    var computedLeft = getComputedProperty(state, properties.Left);
    return _ref2 = {
      constraints: {
        x: false,
        y: false,
        all: false
      }
    }, _defineProperty(_ref2, properties.Top, getWipProperty(state, properties.Top) || computedTop), _defineProperty(_ref2, properties.Right, getWipProperty(state, properties.Right) || computedRight), _defineProperty(_ref2, properties.Bottom, getWipProperty(state, properties.Bottom) || computedBottom), _defineProperty(_ref2, properties.Left, getWipProperty(state, properties.Left) || computedLeft), _defineProperty(_ref2, 'computed' + properties.Top, computedTop), _defineProperty(_ref2, 'computed' + properties.Right, computedRight), _defineProperty(_ref2, 'computed' + properties.Bottom, computedBottom), _defineProperty(_ref2, 'computed' + properties.Left, computedLeft), _ref2;
  };

  var _React$useState = React.useState(initialiseValues),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  React.useEffect(function () {
    setValues(initialiseValues);
  }, [state.uuid, state.responsiveModifier, state.pseudoModifier]);

  var setConstraints = function setConstraints(constraints) {
    setValues(_objectSpread$8(_objectSpread$8({}, values), {}, {
      constraints: constraints
    }));
  };

  var onChange = function onChange(action, property, value) {
    setValues(function (values) {
      var constraints = values.constraints;
      var newValues;

      if (constraints.all) {
        var _objectSpread2;

        newValues = _objectSpread$8(_objectSpread$8({}, values), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, properties.Top, value), _defineProperty(_objectSpread2, properties.Right, value), _defineProperty(_objectSpread2, properties.Bottom, value), _defineProperty(_objectSpread2, properties.Left, value), _objectSpread2));
      } else if (constraints.x && [properties.Left, properties.Right].includes(property)) {
        var _objectSpread3;

        newValues = _objectSpread$8(_objectSpread$8({}, values), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, properties.Left, value), _defineProperty(_objectSpread3, properties.Right, value), _objectSpread3));
      } else if (constraints.y && [properties.Top, properties.Bottom].includes(property)) {
        var _objectSpread4;

        newValues = _objectSpread$8(_objectSpread$8({}, values), {}, (_objectSpread4 = {}, _defineProperty(_objectSpread4, properties.Top, value), _defineProperty(_objectSpread4, properties.Bottom, value), _objectSpread4));
      } else {
        newValues = _objectSpread$8(_objectSpread$8({}, values), {}, _defineProperty({}, property, value));
      }

      var payload = {}; // only dispatch properties that have changed

      if (newValues[properties.Top] !== values[properties.Top]) {
        payload[properties.Top] = newValues[properties.Top];
      }

      if (newValues[properties.Right] !== values[properties.Right]) {
        payload[properties.Right] = newValues[properties.Right];
      }

      if (newValues[properties.Bottom] !== values[properties.Bottom]) {
        payload[properties.Bottom] = newValues[properties.Bottom];
      }

      if (newValues[properties.Left] !== values[properties.Left]) {
        payload[properties.Left] = newValues[properties.Left];
      }

      dispatch({
        type: action,
        payload: payload
      });
      if (action === actions.CHANGE_PROPERTY) return newValues;else return values;
    });
  };

  var onMouseOver = function onMouseOver() {// dispatch({
    //   type: 'CHANGE_SPACE_OVERLAY_VISIBILITY',
    //   payload: { spaceOverlayVisibility: true },
    // })
  };

  var onMouseLeave = function onMouseLeave() {// dispatch({
    //   type: 'CHANGE_SPACE_OVERLAY_VISIBILITY',
    //   payload: { spaceOverlayVisibility: false },
    // })
  };

  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    direction: "vertical",
    gap: 1,
    css: {
      paddingY: 4,
      flexShrink: 0
    },
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5,
      textTransform: 'capitalize'
    }
  }, propertyGroup), /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "center",
    align: "center",
    css: {
      height: 10
    }
  }, /*#__PURE__*/React.createElement(Select2, {
    direction: "Top",
    property: propertyGroup + 'Top',
    value: values[propertyGroup + 'Top'],
    computedValue: values['computed' + propertyGroup + 'Top'],
    onChange: onChange,
    definition: state.definitions[propertyGroup + 'Top']
  })), /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "center",
    align: "center",
    css: {
      height: 10
    }
  }, /*#__PURE__*/React.createElement(Select2, {
    direction: "Left",
    property: propertyGroup + 'Left',
    value: values[propertyGroup + 'Left'],
    computedValue: values['computed' + propertyGroup + 'Left'],
    onChange: onChange,
    definition: state.definitions[propertyGroup + 'Left']
  }), /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "center",
    align: "center",
    gap: 1,
    css: {
      height: 10,
      width: 12,
      color: 'text.subtle'
    }
  }, /*#__PURE__*/React.createElement(Constraints, {
    constraints: values.constraints,
    setConstraints: setConstraints
  })), /*#__PURE__*/React.createElement(Select2, {
    direction: "Right",
    property: propertyGroup + 'Right',
    value: values[propertyGroup + 'Right'],
    computedValue: values['computed' + propertyGroup + 'Right'],
    onChange: onChange,
    definition: state.definitions[propertyGroup + 'Right']
  })), /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "center",
    align: "center",
    css: {
      height: 10
    }
  }, /*#__PURE__*/React.createElement(Select2, {
    direction: "Bottom",
    property: propertyGroup + 'Bottom',
    value: values[propertyGroup + 'Bottom'],
    computedValue: values['computed' + propertyGroup + 'Bottom'],
    onChange: onChange,
    definition: state.definitions[propertyGroup + 'Bottom']
  })));
};

var Constraints = function Constraints(_ref3) {
  var constraints = _ref3.constraints,
      setConstraints = _ref3.setConstraints;
  var x = constraints.x,
      y = constraints.y,
      all = constraints.all;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "23",
    rx: "4.5",
    stroke: "#D2D4D7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 0.5V24M12 0.5H9M12 0.5H15M9 23.5H15",
    stroke: "#D2D4D7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 12H24M23.5 15V9M0.5 14.5V9",
    stroke: "#D2D4D7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "23",
    rx: "4.5",
    stroke: "black",
    strokeOpacity: all ? '1' : '0',
    onClick: function onClick() {
      return setConstraints(_objectSpread$8(_objectSpread$8({}, constraints), {}, {
        all: !all
      }));
    }
  }), /*#__PURE__*/React.createElement(reactUi.Element, {
    as: "g",
    tabIndex: 0,
    css: {
      '&:hover, &:focus': {
        outline: 'none',
        path: {
          strokeOpacity: y || all ? 1 : 0.5
        }
      }
    },
    onClick: function onClick() {
      return setConstraints(_objectSpread$8(_objectSpread$8({}, constraints), {}, {
        y: !y
      }));
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0.5V24M12 0.5H9M12 0.5H15M9 23.5H15",
    stroke: "black",
    strokeOpacity: y || all ? '1' : '0'
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 1H20L12.5 11.5L20 23H4L11.5 11.5L4 1Z",
    fill: "black",
    fillOpacity: "0"
  })), /*#__PURE__*/React.createElement(reactUi.Element, {
    as: "g",
    tabIndex: 0,
    css: {
      '&:hover, &:focus': {
        outline: 'none',
        path: {
          strokeOpacity: x || all ? 1 : 0.5
        }
      }
    },
    onClick: function onClick() {
      return setConstraints(_objectSpread$8(_objectSpread$8({}, constraints), {}, {
        x: !x
      }));
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 4L23 20L12 12.5L0.999999 20L1 4L12 11.5L23 4Z",
    fill: "black",
    fillOpacity: "0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 12H24M23.5 15V9M0.5 14.5V9",
    stroke: "black",
    strokeOpacity: x || all ? '1' : '0'
  }))));
};

var Select2 = function Select2(_ref4) {
  var property = _ref4.property,
      value = _ref4.value,
      computedValue = _ref4.computedValue,
      _onChange = _ref4.onChange,
      definition = _ref4.definition;

  var _useState2 = useState(),
      state = _useState2.state;

  var names = definition.names,
      values = definition.values,
      variants = definition.variants;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    computedValue: computedValue,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      var value = values[name];
      var hint = ['0', 'auto'].includes(value) ? null : remToPx(value);
      return {
        name: name,
        hint: hint
      };
    }),
    style: {
      Button: {
        width: 88,
        justifyContent: 'center',
        paddingLeft: 3
      }
    },
    onChange: function onChange(name) {
      return _onChange('CHANGE_PROPERTY', property, name);
    },
    onHover: function onHover(name) {
      _onChange('CHANGE_STYLE', property, values[name]);
    },
    onClose: function onClose() {
      _onChange('CHANGE_STYLE', property, null);
    }
  }));
};

var FontFamily = function FontFamily() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'fontFamily';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var value = getWipProperty(state, property);
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    icon: /*#__PURE__*/React.createElement(FontFamilyIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ColorPicker = function ColorPicker(_ref) {
  var property = _ref.property,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      computedValue = _ref.computedValue,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      _ref$onHover = _ref.onHover,
      onHover = _ref$onHover === void 0 ? function () {} : _ref$onHover,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose;

  var _useState = useState(),
      state = _useState.state;

  var values = state.definitions.color.values;
  var flatValues = state.definitions.flatColors.values;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisibility = _React$useState2[1];

  var inputRef = React.useRef();
  var colorValue;
  if (color === 'transparent') colorValue = 'transparent';else colorValue = flatValues[color] || 'currentColor';
  var configColors = convertObjectToArray(values);
  var borderColor = colorValue;

  try {
    borderColor = Color(colorValue).contrast(Color('#ffffff')) < 1.5 ? '#dedede' : colorValue;
  } catch (err) {}

  var internalOnChange = function internalOnChange(color) {
    onChange(color);
    setVisibility(false);
  };

  var getPosition = function getPosition() {
    var HEIGHT = 282; // based on tailwind-ui config

    var position = {
      top: inputRef.current.getBoundingClientRect().top + 32,
      right: 3
    }; // keep it inside

    if (position.top + HEIGHT > window.innerHeight) {
      position.top = window.innerHeight - HEIGHT - 8;
    }

    return position;
  };

  return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(ShortcutHint, {
    property: property,
    computedValue: computedValue
  }), computedValue && color !== computedValue && /*#__PURE__*/React.createElement(ResponsiveHint, {
    property: property,
    computedValue: computedValue
  }), /*#__PURE__*/React.createElement(reactUi.Stack, {
    gap: 1,
    align: "center",
    css: {
      height: 8,
      width: 120,
      paddingLeft: 3,
      border: '1px solid',
      borderRadius: 1,
      borderColor: 'transparent',
      opacity: disabled ? 0.4 : 1,
      ':hover, :focus-within': {
        borderColor: disabled ? 'trasparent' : '#dedede'
      }
    },
    style: {
      marginLeft: 0
    }
  }, /*#__PURE__*/React.createElement(reactUi.Element, {
    as: "button",
    id: property,
    tabIndex: 0,
    disabled: disabled,
    css: {
      border: '1px solid',
      borderColor: borderColor,
      width: 4,
      height: 4,
      borderRadius: 1,
      backgroundColor: colorValue,
      boxShadow: 'inset 0 1px 2px 0 rgba(0,0,0,0.1)',
      flexShrink: 0,
      zIndex: 3,
      cursor: 'default !important'
    },
    onClick: function onClick() {
      return setVisibility(!visible);
    }
  }), /*#__PURE__*/React.createElement(reactUi.Input, {
    type: "text",
    ref: inputRef,
    disabled: disabled,
    css: {
      textAlign: 'left',
      fontSize: 2,
      width: 72,
      zIndex: 1,
      height: 30,
      border: 'none',
      cursor: 'default !important'
    },
    style: {
      paddingLeft: '2px',
      paddingRight: 0
    },
    value: prettify(color),
    onClick: function onClick() {
      return setVisibility(!visible);
    },
    onChange: function onChange(event) {
      return internalOnChange({
        hex: event.target.value
      });
    }
  })), visible && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zoomIndex: 2
    },
    onClick: function onClick() {
      onClose();
      setVisibility(false);
    }
  }), /*#__PURE__*/React.createElement(reactUi.Element, {
    css: _objectSpread$9(_objectSpread$9({
      position: 'fixed'
    }, getPosition()), {}, {
      zIndex: 99999
    })
  }, /*#__PURE__*/React.createElement(reactColor.SwatchesPicker, {
    width: "auto",
    height: "auto",
    color: color,
    colors: configColors,
    onChange: internalOnChange,
    onSwatchHover: onHover
  }))));
};

var convertObjectToArray = function convertObjectToArray(values) {
  var arr = [];
  var ungrouped = [];
  Object.keys(values).map(function (key) {
    var value = values[key];

    if (_typeof(value) === 'object') {
      var group = Object.values(value);
      arr.push(group);
    } else {
      ungrouped.push(value);
    }
  });
  arr.push(ungrouped);
  return arr;
};

var TextColor = function TextColor() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'textColor';
  var variants = state.definitions[property].variants;
  var computedValue = getComputedProperty(state, property, state.computedStyles.color);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ColorPicker, {
    property: property,
    computedValue: computedValue,
    color: value,
    disabled: isDisabled(state, variants),
    onChange: function onChange(color) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, getModifier(state, property, color.hex))
      });
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          color: null
        }
      });
    },
    onHover: function onHover(color) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          color: color.hex
        }
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          color: null
        }
      });
    }
  }));
};

var FontWeight = function FontWeight() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'fontWeight';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(FontBoldIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: values[name]
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var FontSize = function FontSize() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'fontSize';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(FontSizeIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      var _payload3;

      dispatch({
        type: actions.CHANGE_STYLE,
        payload: (_payload3 = {}, _defineProperty(_payload3, property, null), _defineProperty(_payload3, "lineHeight", null), _payload3)
      });
    }
  });
};

var TextAlign = function TextAlign() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'textAlign';
  var variants = state.definitions[property].variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;

  var setAlignment = function setAlignment(alignment) {
    dispatch({
      type: actions.CHANGE_PROPERTY,
      payload: _defineProperty({}, property, alignment)
    });
  };

  var onHover = function onHover(alignment) {
    dispatch({
      type: actions.CHANGE_STYLE,
      payload: _defineProperty({}, property, alignment)
    });
  };

  var onCancel = function onCancel() {
    dispatch({
      type: actions.CHANGE_STYLE,
      payload: _defineProperty({}, property, null)
    });
  };

  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    css: {
      height: 9,
      width: 120
    },
    align: "center"
  }, /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Align left"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      return setAlignment('left');
    },
    onMouseOver: function onMouseOver() {
      return onHover('left');
    },
    onMouseOut: onCancel,
    "data-active": value === 'left' ? true : null,
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(TextAlignLeftIcon, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Align center"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      return setAlignment('center');
    },
    onMouseOver: function onMouseOver() {
      return onHover('center');
    },
    onMouseOut: onCancel,
    "data-active": value === 'center' ? true : null,
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(TextAlignCenterIcon, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Align right"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      return setAlignment('right');
    },
    onMouseOver: function onMouseOver() {
      return onHover('right');
    },
    onMouseOut: onCancel,
    "data-active": value === 'right' ? true : null,
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(TextAlignRightIcon, null))));
};

var LineHeight = function LineHeight() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'lineHeight';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(LineHeightIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var FontStyle = function FontStyle(_ref) {
  var parentValue = _ref.parentValue;

  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'fontStyle';
  var variants = state.definitions[property].variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Italics"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      return dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, value === 'normal' || value === 'not-italic' ? 'italic' : parentValue === 'italic' ? 'not-italic' : 'normal')
      });
    },
    "data-active": value === 'italic',
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(FontItalicIcon, null)));
};

var TextDecoration = function TextDecoration() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'textDecoration';
  var variants = state.definitions[property].variants;
  var value = getWipProperty(state, property) || getComputedProperty(state, property, state.computedStyles.textDecorationLine);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Underline"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      return dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, value !== 'underline' ? 'underline' : 'none')
      });
    },
    "data-active": value === 'underline',
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(UnderlineIcon, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Line through"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      return dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, value !== 'line-through' ? 'line-through' : 'none')
      });
    },
    "data-active": value === 'line-through',
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(StrikethroughIcon, null))));
};

var TextTransform = function TextTransform(_ref) {
  var parentValue = _ref.parentValue;

  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'textTransform';
  var variants = state.definitions[property].variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Uppercase"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, value === 'uppercase' ? 'none' : 'uppercase')
      });
    },
    "data-active": value === 'uppercase',
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(LetterCaseUppercaseIcon, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Capitalize"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, value === 'capitalize' ? 'none' : 'capitalize')
      });
    },
    "data-active": value === 'capitalize',
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(LetterCaseCapitalizeIcon, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Lowercase"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, value === 'lowercase' ? 'none' : 'lowercase')
      });
    },
    "data-active": value === 'lowercase',
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(LetterCaseLowercaseIcon, null))));
};

var TextOpacity = function TextOpacity() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'textOpacity';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property, state.computedStyles.textColor ? Color(state.computedStyles.textColor).valpha : 1);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    computedValue: computedValue,
    icon: icon$7,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: '%'
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          '--text-opacity': values[name]
        }
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          '--text-opacity': null
        }
      });
    }
  });
};
var icon$7 = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1.17048 7.29871C2.6305 4.65294 4.88555 3 7.5 3C10.1144 3 12.3695 4.65294 13.8295 7.29871C13.8986 7.42393 13.8986 7.57609 13.8295 7.70131C12.3695 10.3471 10.1144 12 7.5 12C4.88555 12 2.6305 10.3471 1.17048 7.70131C1.10138 7.5761 1.10138 7.42393 1.17048 7.29871ZM7.5 2C4.41479 2 1.87258 3.95663 0.294943 6.81557C0.0598947 7.24151 0.0598957 7.75852 0.294946 8.18446C1.87259 11.0434 4.41479 13 7.5 13C10.5852 13 13.1274 11.0434 14.7051 8.18446C14.9401 7.75852 14.9401 7.24151 14.7051 6.81557C13.1274 3.95663 10.5852 2 7.5 2ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
  fill: " currentColor"
}));

var BackgroundColor = function BackgroundColor() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'backgroundColor';
  var variants = state.definitions[property].variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(ColorPicker, {
    property: property,
    computedValue: computedValue,
    color: value,
    disabled: isDisabled(state, variants),
    onChange: function onChange(color) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, getModifier(state, property, color.hex))
      });
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          backgroundColor: null
        }
      });
    },
    onHover: function onHover(color) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          backgroundColor: color.hex
        }
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          backgroundColor: null
        }
      });
    }
  });
};

var BackgroundOpacity = function BackgroundOpacity() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'backgroundOpacity';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property, state.computedStyles.backgroundColor ? Color(state.computedStyles.backgroundColor).valpha : 1);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$8,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: '%'
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          '--border-opacity': values[name]
        }
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          '--border-opacity': null
        }
      });
    }
  });
};
var icon$8 = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1.17048 7.29871C2.6305 4.65294 4.88555 3 7.5 3C10.1144 3 12.3695 4.65294 13.8295 7.29871C13.8986 7.42393 13.8986 7.57609 13.8295 7.70131C12.3695 10.3471 10.1144 12 7.5 12C4.88555 12 2.6305 10.3471 1.17048 7.70131C1.10138 7.5761 1.10138 7.42393 1.17048 7.29871ZM7.5 2C4.41479 2 1.87258 3.95663 0.294943 6.81557C0.0598947 7.24151 0.0598957 7.75852 0.294946 8.18446C1.87259 11.0434 4.41479 13 7.5 13C10.5852 13 13.1274 11.0434 14.7051 8.18446C14.9401 7.75852 14.9401 7.24151 14.7051 6.81557C13.1274 3.95663 10.5852 2 7.5 2ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
  fill: " currentColor"
}));

var BorderWidth = function BorderWidth() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'borderWidth';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$9,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: values[name]
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};
var icon$9 = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1 0.75H14C14.1381 0.75 14.25 0.861929 14.25 1V14C14.25 14.1381 14.1381 14.25 14 14.25H1C0.861929 14.25 0.75 14.1381 0.75 14V1C0.75 0.861929 0.861929 0.75 1 0.75ZM0 1C0 0.447715 0.447715 0 1 0H14C14.5523 0 15 0.447715 15 1V14C15 14.5523 14.5523 15 14 15H1C0.447715 15 0 14.5523 0 14V1ZM7.5 5C7.22386 5 7 5.22386 7 5.5C7 5.77614 7.22386 6 7.5 6C7.77614 6 8 5.77614 8 5.5C8 5.22386 7.77614 5 7.5 5ZM7 3.5C7 3.22386 7.22386 3 7.5 3C7.77614 3 8 3.22386 8 3.5C8 3.77614 7.77614 4 7.5 4C7.22386 4 7 3.77614 7 3.5ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8C7.77614 8 8 7.77614 8 7.5C8 7.22386 7.77614 7 7.5 7ZM5 7.5C5 7.22386 5.22386 7 5.5 7C5.77614 7 6 7.22386 6 7.5C6 7.77614 5.77614 8 5.5 8C5.22386 8 5 7.77614 5 7.5ZM3.5 7C3.22386 7 3 7.22386 3 7.5C3 7.77614 3.22386 8 3.5 8C3.77614 8 4 7.77614 4 7.5C4 7.22386 3.77614 7 3.5 7ZM9 7.5C9 7.22386 9.22386 7 9.5 7C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8C9.22386 8 9 7.77614 9 7.5ZM11.5 7C11.2239 7 11 7.22386 11 7.5C11 7.77614 11.2239 8 11.5 8C11.7761 8 12 7.77614 12 7.5C12 7.22386 11.7761 7 11.5 7ZM7 9.5C7 9.22386 7.22386 9 7.5 9C7.77614 9 8 9.22386 8 9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5ZM7.5 11C7.22386 11 7 11.2239 7 11.5C7 11.7761 7.22386 12 7.5 12C7.77614 12 8 11.7761 8 11.5C8 11.2239 7.77614 11 7.5 11Z",
  fill: "currentColor"
}));

var BorderColor = function BorderColor() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'borderColor';
  var variants = state.definitions[property].variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(ColorPicker, {
    property: property,
    computedValue: computedValue,
    color: value,
    disabled: isDisabled(state, variants),
    onChange: function onChange(color) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, getModifier(state, property, color.hex))
      });
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          borderColor: null
        }
      });
    },
    onHover: function onHover(color) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          borderColor: color.hex
        }
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          borderColor: null
        }
      });
    }
  });
};

var BorderStyle = function BorderStyle() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'borderStyle';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(BorderStyleIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var BorderOpacity = function BorderOpacity() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'borderOpacity';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property, state.computedStyles.borderColor ? Color(state.computedStyles.borderColor).valpha : 1);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$a,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: '%'
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          '--border-opacity': values[name]
        }
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          '--border-opacity': null
        }
      });
    }
  });
};
var icon$a = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1.17048 7.29871C2.6305 4.65294 4.88555 3 7.5 3C10.1144 3 12.3695 4.65294 13.8295 7.29871C13.8986 7.42393 13.8986 7.57609 13.8295 7.70131C12.3695 10.3471 10.1144 12 7.5 12C4.88555 12 2.6305 10.3471 1.17048 7.70131C1.10138 7.5761 1.10138 7.42393 1.17048 7.29871ZM7.5 2C4.41479 2 1.87258 3.95663 0.294943 6.81557C0.0598947 7.24151 0.0598957 7.75852 0.294946 8.18446C1.87259 11.0434 4.41479 13 7.5 13C10.5852 13 13.1274 11.0434 14.7051 8.18446C14.9401 7.75852 14.9401 7.24151 14.7051 6.81557C13.1274 3.95663 10.5852 2 7.5 2ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
  fill: " currentColor"
}));

var Outline = function Outline() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'outline';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(reactUi.Element, {
      css: {
        size: 3,
        borderRadius: 1,
        boxShadow: value === 'none' ? '#aebecd 0px 0px 0px 1px' : '#4299e180 0px 0px 0px 2px'
      }
    }),
    disabled: isDisabled(state, variants),
    prefix: "Outline",
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var BoxShadow = function BoxShadow() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'boxShadow';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  window.dispatch = dispatch;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(SunIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null),
        effect: function effect(newState) {
          var selectedElement = document.querySelector("[data-uuid=\"".concat(newState.uuid, "\"]"));
          selectedElement.style.setProperty('--shadow', values[name]);
          return newState;
        }
      });
    }
  });
};

var StrokeWidth = function StrokeWidth() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'strokeWidth';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$b,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: values[name]
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};
var icon$b = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "4",
  x2: "21",
  y2: "4",
  strokeWidth: "1"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3.5",
  y1: "11",
  x2: "20.5",
  y2: "11",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3.5",
  y1: "18",
  x2: "20.5",
  y2: "18",
  strokeWidth: "3"
}));

var StrokeColor = function StrokeColor() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'stroke';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    align: "center"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};

var FillColor = function FillColor() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'fill';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    align: "center"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};

var TransitionProperty = function TransitionProperty() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'transitionProperty';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var TransitionDuration = function TransitionDuration() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'transitionDuration';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(StopwatchIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: 'ms'
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var TransitionDelay = function TransitionDelay() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'transitionDelay';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(TimerIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: 'ms delay'
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var TransitionTimingFunction = function TransitionTimingFunction() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'transitionTimingFunction';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var Animation = function Animation() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'animation';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    css: {
      height: 9
    },
    align: "center"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  })));
};

var Accessibility = function Accessibility() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'accessibility';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var value = getWipProperty(state, property);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    css: {
      height: 9
    },
    align: "center"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  })));
};

var inWrapper = function inWrapper(element) {
  var ids = ['devtool-wrapper'];
  var main = document.querySelector('#devtool-wrapper');

  if (window.UI_DEVTOOLS_FRAMEWORK === 'nuxt') {
    // Avoid selecting Nuxt and Layout divs
    main = document.querySelector('#__layout') || document.querySelector('#__nuxt') || main;
    ids.push('__nuxt', '__layout');
  }

  if (main.contains(element) && ids.includes(element.id) === false) return true;
};

var SelectedElement = function SelectedElement() {
  var _useState = useState(),
      state = _useState.state,
      actions = _useState.actions,
      dispatch = _useState.dispatch;

  var elementStack = [];
  var selectedElement = document.querySelector("[data-uuid=\"".concat(state.uuid, "\"]"));
  elementStack.unshift(selectedElement);
  var parent = selectedElement.parentElement;

  if (parent && inWrapper(parent)) {
    elementStack.unshift(parent);
    var grandParent = parent.parentElement;
    if (grandParent && inWrapper(grandParent)) elementStack.unshift(grandParent);
  }

  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "flex-end"
  }, /*#__PURE__*/React.createElement(reactUi.Stack, {
    align: "center",
    marginX: 3,
    css: {
      width: 'fit-content',
      paddingY: 2,
      '> span:not([data-selected])': {
        opacity: 0,
        width: 0,
        paddingX: 0,
        position: 'relative',
        right: -20,
        transition: 'right 200ms, opacity 200ms'
      },
      '[data-selected]': {
        zIndex: 2
      },
      ':hover': {
        '> span': {
          opacity: 1,
          paddingX: 2,
          width: 'auto',
          right: 0
        }
      }
    }
  }, elementStack.map(function (element, index) {
    var isSelected = index === elementStack.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: index
    }, /*#__PURE__*/React.createElement(reactUi.Text, {
      "data-selected": isSelected ? true : null,
      size: 1,
      weight: "semibold",
      css: {
        width: 'fit-content',
        paddingX: 2,
        paddingY: 1,
        borderRadius: 2,
        backgroundColor: isSelected ? 'blues.100' : 'grays.100',
        color: isSelected ? 'blues.800' : 'grays.800',
        cursor: 'pointer',
        opacity: isSelected ? 1 : 0.75,
        border: '1px solid',
        borderColor: isSelected ? 'blues.300' : 'transparent',
        transition: 'border-color 100ms linear',
        ':hover': {
          opacity: 1,
          backgroundColor: 'blues.100'
        }
      },
      onMouseOver: function onMouseOver() {
        var el = elementStack[index];
        el.dataset.hovering = true;
      },
      onMouseOut: function onMouseOut() {
        var el = elementStack[index];
        delete el.dataset.hovering;
      },
      onClick: function onClick() {
        var uuid = parseInt(selectedElement.dataset.uuid, 10) + 1;
        delete selectedElement.dataset.uuid;
        var newElement = elementStack[index];
        delete newElement.dataset.hovering;
        newElement.dataset.uuid = uuid;
        dispatch({
          type: actions.SELECT_ELEMENT,
          payload: {
            uuid: uuid
          }
        });
      }
    }, element.tagName.toLowerCase(), element.id ? "#".concat(element.id) : ''), index < elementStack.length - 1 && /*#__PURE__*/React.createElement(reactUi.Text, {
      css: {
        color: 'grays.400'
      }
    }, caret));
  })));
};
var caret = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6.18194 4.18185C6.35767 4.00612 6.6426 4.00612 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));

var ServerInfo = function ServerInfo() {
  var _useState = useState(),
      state = _useState.state;

  var sourceExists = hasSourceData();

  if (!state.config.custom) {
    return /*#__PURE__*/React.createElement(reactUi.Stack, {
      direction: "vertical",
      css: {
        paddingY: 3,
        paddingLeft: 4,
        backgroundColor: 'yellows.100',
        color: 'yellows.800',
        borderBottom: '1px solid',
        borderColor: 'yellows.600'
      }
    }, /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "Devtools server not connected."), /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "- not syncing changes to source"), /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "- using default tailwind config"));
  } else if (!sourceExists) {
    return /*#__PURE__*/React.createElement(reactUi.Stack, {
      direction: "vertical",
      css: {
        paddingY: 3,
        paddingLeft: 4,
        backgroundColor: 'yellows.100',
        color: 'yellows.800',
        borderBottom: '1px solid',
        borderColor: 'yellows.600'
      }
    }, window.UI_DEVTOOLS_FRAMEWORK === 'vue' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "Source plugin not configured."), /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "Follow", ' ', /*#__PURE__*/React.createElement(reactUi.Link, {
      href: "https://github.com/ui-devtools/tailwind-vue-experimental#usage",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "step 3 in Usage"), ' ', "to make sure the vue-template-compiler plugin is setup properly.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "Babel plugin not configured."), /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "Follow", ' ', /*#__PURE__*/React.createElement(reactUi.Link, {
      href: "https://github.com/ui-devtools/tailwind#usage",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "step 3 in Usage"), ' ', "to make sure the babel plugin is setup properly.")));
  }

  return null;
};

var hasSourceData = function hasSourceData() {
  var wrapper = document.querySelector('#devtool-wrapper');

  if (wrapper && wrapper.children) {
    if (window.UI_DEVTOOLS_FRAMEWORK === 'nuxt') {
      return true;
    }

    return Array.from(wrapper.children).find(function (child) {
      var dataset = child.dataset;
      var keys = Object.keys(dataset);
      var sourceExists = keys.find(function (key) {
        return key.startsWith('source') || key.startsWith('meta');
      });
      return sourceExists;
    });
  }
};

var version = "0.5.9";

var Feedback = function Feedback(props) {
  return /*#__PURE__*/React.createElement(reactUi.Button, _extends({
    variant: "input",
    align: "center",
    style: {
      backgroundImage: 'none',
      cursor: 'pointer',
      position: 'fixed',
      bottom: 2,
      right: '268px'
    },
    onClick: function onClick() {
      window.open('https://github.com/ui-devtools/tailwind/issues/new');
    }
  }, props), /*#__PURE__*/React.createElement(reactUi.Text, {
    variant: "subtle"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  }))), /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    variant: "subtle",
    marginLeft: 1
  }, "Send feedback - v", version));
};

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var count = 0;
var Devtool = function Devtool(_ref) {
  var _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled,
      setEnabled = _ref.setEnabled;

  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  React.useEffect(function () {
    if (enabled !== state.enabled) setEnabled(state.enabled);
  }, [state.enabled]);
  React.useEffect(function () {
    if (!state.definitions) dispatch({
      type: actions.INIT
    });
  }, [state.definitions]);
  React.useEffect(function () {
    if (window.SKIP_CONFIG) return;

    if (state.enabled && !state.config.custom) {
      var API_URL = window.UI_DEVTOOLS_API || 'http://localhost:2406';
      fetch(API_URL + '/config', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
      }).then(function (config) {
        return dispatch({
          type: actions.LOAD_CONFIG,
          payload: {
            config: config
          }
        });
      })["catch"](function () {
        dispatch({
          type: actions.LOAD_CONFIG,
          payload: {}
        });
      });
    }
  }, [state.enabled]);
  useEventListener('keydown', function (event) {

    if (event.which === 192) {
      dispatch({
        type: 'TOGGLE_DEVTOOLS'
      });
    }
  });
  useEventListener('mouseover', function (event) {
    if (!state.enabled) return;
    if (notInWrapper(event.target)) return;
    event.stopPropagation();
    event.target.dataset.hovering = true;

    var _window$getComputedSt = window.getComputedStyle(event.target),
        boxShadow = _window$getComputedSt.boxShadow;

    event.target.style.setProperty('--shadow', boxShadow === 'none' ? '0 0' : boxShadow);
  });
  useEventListener('mouseout', function (event) {
    // if (notInWrapper(event.target)) return
    event.stopPropagation();
    delete event.target.dataset.hovering; // if (!event.target.dataset.uuid) {
    //   // don't reset if this is the selected property
    //   event.target.style.setProperty('--shadow', '0 0')
    // }
  });
  useEventListener('click', function (event) {
    if (!state.enabled) return;
    event.preventDefault();
    event.stopPropagation();
    if (notInWrapper(event.target)) return;
    var previousElement = document.querySelector('[data-uuid]');
    if (previousElement) delete previousElement.dataset.uuid; // set uuid because state depends on it now

    var uuid = event.target.dataset.uuid || ++count;
    event.target.dataset.uuid = uuid;
    dispatch({
      type: actions.SELECT_ELEMENT,
      payload: {
        uuid: uuid
      }
    });
  });
  useShortcuts();

  var _React$useState = React.useState(localStorage.TOGGLE_FLEX === 'true'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      advancedFlexOpen = _React$useState2[0],
      setAdvancedFlex = _React$useState2[1];

  var _React$useState3 = React.useState(localStorage.TOGGLE_SIZE === 'true'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      advancedSizeOpen = _React$useState4[0],
      setAdvancedSize = _React$useState4[1];

  var _React$useState5 = React.useState(localStorage.TOGGLE_BORDER === 'true'),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      advancedBorderOpen = _React$useState6[0],
      setAdvancedBorder = _React$useState6[1];

  var _React$useState7 = React.useState(localStorage.TOGGLE_TEXT === 'true'),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      advancedTextOpen = _React$useState8[0],
      setAdvancedText = _React$useState8[1];

  localStorage.TOGGLE_FLEX = advancedFlexOpen;
  localStorage.TOGGLE_SIZE = advancedSizeOpen;
  localStorage.TOGGLE_BORDER = advancedBorderOpen;
  localStorage.TOGGLE_TEXT = advancedTextOpen;
  if (!state.enabled) return /*#__PURE__*/React.createElement(Switcher, null);
  if (!state.uuid) return /*#__PURE__*/React.createElement(Empty, null); // conditional properties

  var flexed = state.wipProperties.display === 'flex' || state.computedStyles.display === 'flex' || state.wipProperties.display === 'inline-flex' || state.computedStyles.display === 'inline-flex'; // parent styles

  var parentStyles = {};
  var element = document.querySelector("[data-uuid=\"".concat(state.uuid, "\"]"));

  if (element && element.parentElement) {
    parentStyles = window.getComputedStyle(element.parentElement);
  }

  return /*#__PURE__*/React.createElement(reactUi.ThemeProvider, {
    tokens: tokens,
    components: components
  }, /*#__PURE__*/React.createElement(reactUi.Stack, {
    id: "devtools",
    direction: "vertical",
    css: {
      position: 'fixed',
      zIndex: 998,
      right: 0,
      top: 0,
      width: 260,
      height: '100vh',
      fontFamily: 'Inter, sans-serif',
      flexShrink: 0,
      backgroundColor: 'white',
      borderLeft: '1px solid',
      borderColor: '#dedede',
      overflowY: 'scroll',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(reactUi.Stack, {
    direction: state.responsiveModeEnabled ? 'vertical' : 'horizontal',
    justify: "space-between",
    css: {
      position: 'fixed',
      zIndex: 100,
      width: 260,
      backgroundColor: 'white',
      borderBottom: '1px solid',
      borderColor: 'grays.200'
    }
  }, /*#__PURE__*/React.createElement(ResponsiveTabs, null), /*#__PURE__*/React.createElement(PseudoPicker, null)), /*#__PURE__*/React.createElement(Section, {
    marginTop: 12
  }, /*#__PURE__*/React.createElement(ServerInfo, null)), /*#__PURE__*/React.createElement(SelectedElement, {
    key: state.uuid
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Display"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Display, null), flexed ? null : /*#__PURE__*/React.createElement(Opacity, null)), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: flexed
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(FlexDirection, null), /*#__PURE__*/React.createElement(FlexWrap, null)), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(JustifyContent, null), /*#__PURE__*/React.createElement(AlignItems, null)), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Opacity, null)))), parentStyles.display.includes('flex') && /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "space-between",
    align: "center",
    css: {
      height: 5,
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium"
  }, "Flex Child"), /*#__PURE__*/React.createElement(Toggle, {
    open: advancedFlexOpen,
    setOpen: setAdvancedFlex
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(FlexGrow, null), /*#__PURE__*/React.createElement(FlexShrink, null)), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: advancedFlexOpen
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(AlignSelf, {
    parentFlexDirection: parentStyles.flexDirection
  }), /*#__PURE__*/React.createElement(FlexOrder, null)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "space-between",
    align: "center",
    css: {
      height: 5,
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium"
  }, "Size"), /*#__PURE__*/React.createElement(Toggle, {
    open: advancedSizeOpen,
    setOpen: setAdvancedSize
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Size, null)), !advancedSizeOpen && /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(BorderRadius, null)), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: advancedSizeOpen,
    css: {
      paddingTop: 1,
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    variant: "subtle",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Min Size"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(MinSize, null)), /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    variant: "subtle",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Max Size"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(MaxSize, null)), /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    variant: "subtle",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Border Radius"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(BorderRadius, null)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Space"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(SpaceX, null), /*#__PURE__*/React.createElement(SpaceY, null))), /*#__PURE__*/React.createElement(ConstrainedGroup, {
    propertyGroup: "margin"
  }), /*#__PURE__*/React.createElement(ConstrainedGroup, {
    propertyGroup: "padding"
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "space-between",
    align: "center",
    css: {
      height: 5,
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium"
  }, "Text"), /*#__PURE__*/React.createElement(Toggle, {
    open: advancedTextOpen,
    setOpen: setAdvancedText
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(FontSize, null), /*#__PURE__*/React.createElement(FontWeight, null)), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(LineHeight, null), /*#__PURE__*/React.createElement(TextColor, null)), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: advancedTextOpen
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(FontFamily, null), /*#__PURE__*/React.createElement(TextOpacity, null)), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    css: {
      height: 9,
      width: 120
    }
  }, /*#__PURE__*/React.createElement(TextDecoration, null), /*#__PURE__*/React.createElement(FontStyle, {
    parentValue: parentStyles.fontStyle
  })), /*#__PURE__*/React.createElement(reactUi.Stack, {
    css: {
      height: 9,
      paddingLeft: 1
    }
  }, /*#__PURE__*/React.createElement(TextTransform, null))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TextAlign, null)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Fill"), element.tagName === 'svg' ? /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(FillColor, null)) : /*#__PURE__*/React.createElement(Row, {
    css: {
      '> div': {
        paddingLeft: 2
      }
    }
  }, /*#__PURE__*/React.createElement(BackgroundColor, null), /*#__PURE__*/React.createElement(BackgroundOpacity, null))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Shadow"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(BoxShadow, null))), element.tagName === 'svg' ? /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    align: "center",
    justify: "space-between",
    marginX: 4
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    css: {
      height: 5
    }
  }, "Stroke")), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(StrokeWidth, null), /*#__PURE__*/React.createElement(StrokeColor, null))) : /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "space-between",
    align: "center",
    css: {
      height: 5,
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium"
  }, "Border"), /*#__PURE__*/React.createElement(Toggle, {
    open: advancedBorderOpen,
    setOpen: setAdvancedBorder
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(BorderWidth, null), /*#__PURE__*/React.createElement(BorderColor, null)), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: advancedBorderOpen
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(BorderStyle, null), /*#__PURE__*/React.createElement(BorderOpacity, null)), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Outline, null)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Transition"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TransitionProperty, null), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: state.wipProperties.transitionProperty
  }, /*#__PURE__*/React.createElement(TransitionDuration, null))), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: state.wipProperties.transitionProperty
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TransitionTimingFunction, null), /*#__PURE__*/React.createElement(TransitionDelay, null)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Animation"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Animation, null))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Accessibility"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Accessibility, null))), /*#__PURE__*/React.createElement(reactUi.Stack, {
    marginBottom: 16
  }), /*#__PURE__*/React.createElement(Feedback, null)), /*#__PURE__*/React.createElement(reactUi.Stack, {
    id: "error-notification",
    css: {
      position: 'fixed',
      fontSize: 2,
      zIndex: 999,
      top: 2,
      right: -300,
      width: 244,
      paddingX: 4,
      paddingY: 2,
      borderRadius: 2,
      backgroundColor: 'reds.100',
      color: 'reds.900',
      border: '1px solid',
      borderColor: 'reds.200',
      transition: 'right 150ms ease-out'
    }
  }, "Cannot predictibly change JSX expression, skipped code change."));
};

var Toggle = function Toggle(_ref2) {
  var open = _ref2.open,
      setOpen = _ref2.setOpen;
  return /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 200ms'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })));
};

var AdvancedOptions = function AdvancedOptions(_ref3) {
  var open = _ref3.open,
      children = _ref3.children,
      _ref3$css = _ref3.css,
      css = _ref3$css === void 0 ? {} : _ref3$css;
  return /*#__PURE__*/React.createElement(reactUi.Element, {
    css: _objectSpread$a({
      opacity: open ? 1 : 0,
      height: open ? 'auto' : 0,
      overflow: open ? 'visible' : 'hidden',
      marginTop: open ? 0 : -16,
      marginBottom: open ? 0 : 3,
      transitionProperty: 'all',
      transitionDuration: open ? 3 : 5
    }, css)
  }, children);
};

var Row = function Row(_ref4) {
  var children = _ref4.children,
      _ref4$css = _ref4.css,
      css = _ref4$css === void 0 ? {} : _ref4$css,
      props = _objectWithoutProperties(_ref4, ["children", "css"]);

  return /*#__PURE__*/React.createElement(reactUi.Stack, _extends({
    css: _objectSpread$a({
      height: 9,
      marginX: 2
    }, css),
    gap: 1,
    align: "center"
  }, props), children);
};

var Section = function Section(props) {
  return /*#__PURE__*/React.createElement(reactUi.Stack, _extends({
    direction: "vertical",
    css: {
      paddingY: 4,
      flexShrink: 0
    }
  }, props), props.children);
};

var Switcher = function Switcher(props) {
  var _useState2 = useState(),
      dispatch = _useState2.dispatch,
      actions = _useState2.actions;

  return /*#__PURE__*/React.createElement(reactUi.ThemeProvider, {
    tokens: tokens,
    components: components
  }, /*#__PURE__*/React.createElement(reactUi.Stack, _extends({
    id: "devtools-switcher",
    justify: "center",
    align: "center",
    css: {
      position: 'fixed',
      zIndex: 998,
      top: 3,
      right: 3,
      cursor: 'pointer',
      backgroundColor: '#fff',
      padding: '9px 7px 7px 9px',
      borderRadius: '5px',
      border: '2px solid #eee',
      color: '#6E7A8A',
      transition: 'border-color 250ms ease',
      path: {
        transition: 'all 250ms ease'
      },
      ':hover': {
        borderColor: '#ddd',
        color: '#111',
        '#rect': {
          color: '#3793E0'
        }
      }
    },
    onClick: function onClick() {
      dispatch({
        type: actions.TOGGLE_DEVTOOLS
      });
    }
  }, props), /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 27 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    id: "rect",
    d: "M22.8824 15V5C22.8824 2.79086 21.0915 1 18.8823 1H5C2.79086 1 1 2.79087 1 5.00001V18.8824C1 21.0915 2.79086 22.8824 5 22.8824H14.5",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5294 16.5293L20.0584 24.9999L21.3113 21.3112L25 20.0583L16.5294 16.5293Z",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.5209 21.521L25.5209 25.521",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
};

var Empty = function Empty() {
  var _React$useState9 = React.useState(0),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      width = _React$useState10[0],
      setWidth = _React$useState10[1];

  React.useEffect(function () {
    if (width === 0) setWidth(260);
  });
  return /*#__PURE__*/React.createElement(reactUi.ThemeProvider, {
    tokens: tokens,
    components: components
  }, /*#__PURE__*/React.createElement(reactUi.Stack, {
    direction: "vertical",
    gap: 4,
    justify: "center",
    align: "center",
    css: {
      paddingBottom: '40vh',
      position: 'fixed',
      zIndex: 998,
      right: 0,
      top: 0,
      width: width,
      height: '100vh',
      transition: 'width 400ms ease',
      fontFamily: 'Inter, sans-serif',
      flexShrink: 0,
      backgroundColor: 'white',
      borderLeft: '1px solid',
      borderColor: '#dedede'
    }
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    variant: "subtle",
    css: {
      opacity: width ? 1 : 0,
      transition: 'opacity 500ms ease',
      transitionDelay: '250ms'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 27 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    id: "rect",
    d: "M22.8824 15V5C22.8824 2.79086 21.0915 1 18.8823 1H5C2.79086 1 1 2.79087 1 5.00001V18.8824C1 21.0915 2.79086 22.8824 5 22.8824H14.5",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5294 16.5293L20.0584 24.9999L21.3113 21.3112L25 20.0583L16.5294 16.5293Z",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.5209 21.521L25.5209 25.521",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement(reactUi.Text, {
    variant: "subtle",
    size: 3,
    css: {
      opacity: width ? 1 : 0,
      transition: 'opacity 500ms ease',
      transitionDelay: '250ms',
      willChange: 'opacity'
    }
  }, "Select an element to inspect")));
};

var notInWrapper = function notInWrapper(element) {
  var main = document.querySelector('#devtool-wrapper');
  if (!main.contains(element)) return true;
};

var Provider = function Provider(props) {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      enabled = _React$useState2[0],
      setEnabled = _React$useState2[1];

  React.useEffect(function () {
    if (typeof window === 'undefined') return;
    var wrapper = document.getElementById('devtool-wrapper');
    var main = document.querySelector('#devtool-main');

    if (wrapper) {
      wrapper.style.maxWidth = enabled ? 'calc(100% - 260px)' : '100%';
      if (!enabled) main.style.paddingRight = '0';
      if (enabled) wrapper.dataset.enabled = true;else delete wrapper.dataset.enabled;
    }
  }, [enabled]);
  return /*#__PURE__*/React.createElement(StateProvider, null, /*#__PURE__*/React.createElement("main", {
    id: "devtool-main"
  }, /*#__PURE__*/React.createElement("div", {
    id: "devtool-wrapper"
  }, props.children), typeof window === 'undefined' ? /*#__PURE__*/React.createElement(Switcher, null) : /*#__PURE__*/React.createElement(Devtool, {
    enabled: enabled,
    setEnabled: setEnabled
  })));
};

var Devtools = Provider;

exports.Devtools = Devtools;
