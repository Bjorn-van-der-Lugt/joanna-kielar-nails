(function () {
  'use strict';

  let _WINDOW = {};
  let _DOCUMENT = {};

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
  } catch (e) {}

  const {
    userAgent = ''
  } = _WINDOW.navigator || {};
  const WINDOW = _WINDOW;
  const DOCUMENT = _DOCUMENT;
  const IS_BROWSER = !!WINDOW.document;
  const IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  const IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var a = "classic",
      r = "sharp",
      o = "sharp-duotone";

  var et$1 = {
    classic: {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    sharp: {
      900: "fass",
      400: "fasr",
      300: "fasl",
      100: "fast"
    },
    "sharp-duotone": {
      900: "fasds"
    }
  };
  var bt = {
    kit: {
      fak: "kit",
      "fa-kit": "kit"
    },
    "kit-duotone": {
      fakd: "kit-duotone",
      "fa-kit-duotone": "kit-duotone"
    }
  };
  var lo = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
    },
    "sharp-duotone": {
      "fa-solid": "fasds"
    }
  },
      no = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
    },
    "sharp-duotone": {
      fasds: "fa-solid"
    }
  },
      fo = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab"
    },
    sharp: {
      solid: "fass",
      regular: "fasr",
      light: "fasl",
      thin: "fast"
    },
    "sharp-duotone": {
      solid: "fasds"
    }
  },
      ho = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands"
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin"
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid"
    }
  };
  var Io = {
    kit: {
      "fa-kit": "fak"
    },
    "kit-duotone": {
      "fa-kit-duotone": "fakd"
    }
  },
      Fo = {
    kit: {
      fak: "fa-kit"
    },
    "kit-duotone": {
      fakd: "fa-kit-duotone"
    }
  },
      So = {
    kit: {
      kit: "fak"
    },
    "kit-duotone": {
      "kit-duotone": "fakd"
    }
  };

  const NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  const PRODUCTION = (() => {
    try {
      return "production" === 'production';
    } catch (e$$1) {
      return false;
    }
  })();

  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get(target, prop) {
        return prop in target ? target[prop] : target[a];
      }

    });
  }

  const _PREFIX_TO_STYLE = { ...ho
  };
  _PREFIX_TO_STYLE[a] = { ...ho[a],
    ...bt['kit'],
    ...bt['kit-duotone']
  };
  const PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
  const _STYLE_TO_PREFIX = { ...fo
  };
  _STYLE_TO_PREFIX[a] = { ..._STYLE_TO_PREFIX[a],
    ...So['kit'],
    ...So['kit-duotone']
  };
  const STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
  const _PREFIX_TO_LONG_STYLE = { ...no
  };
  _PREFIX_TO_LONG_STYLE[a] = { ..._PREFIX_TO_LONG_STYLE[a],
    ...Fo['kit']
  };
  const PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
  const _LONG_STYLE_TO_PREFIX = { ...lo
  };
  _LONG_STYLE_TO_PREFIX[a] = { ..._LONG_STYLE_TO_PREFIX[a],
    ...Io['kit']
  };
  const LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
  const _FONT_WEIGHT_TO_PREFIX = { ...et$1
  };
  const FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
  const prefixes = new Set();
  Object.keys(STYLE_TO_PREFIX[a]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[r]).map(prefixes.add.bind(prefixes));
  Object.keys(STYLE_TO_PREFIX[o]).map(prefixes.add.bind(prefixes));

  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn(...args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }

  const w$1 = WINDOW || {};
  if (!w$1[NAMESPACE_IDENTIFIER]) w$1[NAMESPACE_IDENTIFIER] = {};
  if (!w$1[NAMESPACE_IDENTIFIER].styles) w$1[NAMESPACE_IDENTIFIER].styles = {};
  if (!w$1[NAMESPACE_IDENTIFIER].hooks) w$1[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w$1[NAMESPACE_IDENTIFIER].shims) w$1[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w$1[NAMESPACE_IDENTIFIER];

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce((acc, iconName) => {
      const icon = icons[iconName];
      const expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});
  }

  function defineIcons(prefix, icons) {
    let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const {
      skipHooks = false
    } = params;
    const normalized = normalizeIcons(icons);

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = { ...(namespace.styles[prefix] || {}),
        ...normalized
      };
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var icons = {
    
    "bars": [448,512,["navicon"],"f0c9","M0 80c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 96C7.2 96 0 88.8 0 80zM0 240c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 256c-8.8 0-16-7.2-16-16zM448 400c0 8.8-7.2 16-16 16L16 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l416 0c8.8 0 16 7.2 16 16z"],
    "caret-down": [320,512,[],"f0d7","M165.6 349.8c-1.4 1.3-3.5 2.2-5.6 2.2s-4.2-.8-5.6-2.2L34.2 236.3c-1.4-1.3-2.2-3.2-2.2-5.2c0-3.9 3.2-7.1 7.1-7.1l241.7 0c3.9 0 7.1 3.2 7.1 7.1c0 2-.8 3.8-2.2 5.2L165.6 349.8zm22 23.3L307.7 259.6c7.8-7.4 12.3-17.7 12.3-28.4c0-21.6-17.5-39.1-39.1-39.1L39.1 192C17.5 192 0 209.5 0 231.1c0 10.8 4.4 21.1 12.3 28.5L132.4 373.1c7.4 7 17.3 10.9 27.6 10.9s20.1-3.9 27.6-10.9z"],
    "caret-up": [320,512,[],"f0d8","M154.4 162.2c1.4-1.3 3.5-2.2 5.6-2.2s4.2 .8 5.6 2.2L285.8 275.7c1.4 1.3 2.2 3.2 2.2 5.2c0 3.9-3.2 7.1-7.1 7.1L39.1 288c-3.9 0-7.1-3.2-7.1-7.1c0-2 .8-3.8 2.2-5.2L154.4 162.2zm-22-23.3L12.3 252.4C4.4 259.8 0 270.1 0 280.9C0 302.5 17.5 320 39.1 320l241.7 0c21.6 0 39.1-17.5 39.1-39.1c0-10.8-4.4-21.1-12.3-28.4L187.6 138.9c-7.4-7-17.3-10.9-27.6-10.9s-20.1 3.9-27.6 10.9z"],
    "house": [576,512,["63500","63498","127968","home","home-alt","home-lg-alt"],"f015","M298.6 4c-6-5.3-15.1-5.3-21.2 0L5.4 244c-6.6 5.8-7.3 16-1.4 22.6s16 7.3 22.6 1.4L64 235l0 197c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-197 37.4 33c6.6 5.8 16.7 5.2 22.6-1.4s5.2-16.7-1.4-22.6L298.6 4zM96 432l0-225.3L288 37.3 480 206.7 480 432c0 26.5-21.5 48-48 48l-64 0 0-160c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32l0 160-64 0c-26.5 0-48-21.5-48-48zm144 48l0-160 96 0 0 160-96 0z"],
    "location-dot": [384,512,["map-marker-alt"],"f3c5","M352 192c0-88.4-71.6-160-160-160S32 103.6 32 192c0 15.6 5.4 37 16.6 63.4c10.9 25.9 26.2 54 43.6 82.1c34.1 55.3 74.4 108.2 99.9 140c25.4-31.8 65.8-84.7 99.9-140c17.3-28.1 32.7-56.3 43.6-82.1C346.6 229 352 207.6 352 192zm32 0c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192zm-240 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z"],
    "money-bill-wave": [576,512,[],"f53a","M32 184c35.3 0 64-28.7 64-64l0-.5c-18.5-1.4-37.1-4.4-55.8-9.5c-2.2-.6-4.9-.2-6.9 1.2c-.9 .6-1.2 1.1-1.3 1.2c0 0 0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 .1L32 184zm0 192l0 46.3c0 6.8 3.7 10.4 6.2 11.3C57.3 440.8 76.5 445 96 446.8l0-6.8c0-35.3-28.7-64-64-64zm0-32c53 0 96 43 96 96l0 8c44.7-1 91.1-11.7 141.3-24.5c4.3-1.1 8.6-2.2 13-3.3c51.8-13.3 108-27.6 165.7-28.6c.2-52.8 43.1-95.6 96-95.6l0-128c-53 0-96-43-96-96l0-8c-44.7 1-91.1 11.7-141.3 24.5c-4.3 1.1-8.6 2.2-13 3.3c-51.8 13.3-108 27.6-165.7 28.6c-.2 52.8-43.1 95.6-96 95.6l0 128zm503.8 58c2.2 .6 4.9 .2 6.9-1.2c.9-.6 1.2-1.1 1.3-1.2c0 0 0 0 0 0l0-.1 0-71.5c-35.3 0-64 28.7-64 64l0 .5c18.5 1.4 37.1 4.4 55.8 9.5zM480 72c0 35.3 28.7 64 64 64l0-46.3c0-6.8-3.7-10.4-6.2-11.3C518.7 71.2 499.5 67 480 65.2l0 6.8zM0 422.3L0 112.5C0 88.6 25.6 72.8 48.7 79.1c79.8 21.8 159.6 1.5 239.3-18.9c87-22.2 174-44.4 261-11.9c16.9 6.3 27 23.2 27 41.3l0 309.9c0 23.9-25.6 39.7-48.7 33.4c-79.8-21.8-159.6-1.5-239.3 18.9c-87 22.2-174 44.4-261 11.9c-16.9-6.3-27-23.2-27-41.3zM224 256c0 47 31.3 80 64 80s64-33 64-80s-31.3-80-64-80s-64 33-64 80zm64-112c55.6 0 96 53 96 112s-40.4 112-96 112s-96-53-96-112s40.4-112 96-112z"],
    "phone": [512,512,["128379","128222"],"f095","M375.8 275.2c-16.4-7-35.4-2.4-46.7 11.4l-33.2 40.6c-46-26.7-84.4-65.1-111.1-111.1L225.3 183c13.8-11.3 18.5-30.3 11.4-46.7l-48-112C181.2 6.7 162.3-3.1 143.6 .9l-112 24C13.2 28.8 0 45.1 0 64c0 0 0 0 0 0C0 300.7 183.5 494.5 416 510.9c4.5 .3 9.1 .6 13.7 .8c0 0 0 0 0 0c0 0 0 0 .1 0c6.1 .2 12.1 .4 18.3 .4c0 0 0 0 0 0c18.9 0 35.2-13.2 39.1-31.6l24-112c4-18.7-5.8-37.6-23.4-45.1l-112-48zM447.7 480C218.1 479.8 32 293.7 32 64c0 0 0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c0-3.8 2.6-7 6.3-7.8l112-24c3.7-.8 7.5 1.2 9 4.7l48 112c1.4 3.3 .5 7.1-2.3 9.3l-40.6 33.2c-12.1 9.9-15.3 27.2-7.4 40.8c29.5 50.9 71.9 93.3 122.7 122.7c13.6 7.9 30.9 4.7 40.8-7.4l33.2-40.6c2.3-2.8 6.1-3.7 9.3-2.3l112 48c3.5 1.5 5.5 5.3 4.7 9l-24 112c-.8 3.7-4.1 6.3-7.8 6.3c-.1 0-.2 0-.3 0z"]

  };
  var prefixes$1 = [null    ,'fal',
    ,'fa-light'

  ];
  bunker(() => {
    for (const prefix of prefixes$1) {
      if (!prefix) continue;
      defineIcons(prefix, icons);
    }
  });

}());
