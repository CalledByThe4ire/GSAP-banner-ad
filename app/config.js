'use strict';

// Export

module.exports = {
  app: {
    lang: 'ru',
    name: 'Sedona',
    description: "training project for htmlacademy' intensive",
    domain: 'andrey-karamnoff.ru',
    preloader: false,
    responsive: true,
    microdata: false,
    jquery: false
  },

  levels: {
    common: 1,
    develop: 2,
    plugins: 3
  },

  mainLevel: 'develop',

  extnames: {
    templates: '.pug',
    scripts: '.js',
    styles: '.scss'
  },

  dist: {
    styles: 'styles',
    fonts: 'styles/fonts',
    img: 'styles/img',
    scripts: 'scripts',
    static: 'static',
    favicons: 'favicons'
  },

  head: {
    favicons: true,
    androidIcons: false,
    appleTouchIcons: false,
    msapplication: false,
    safariPinned: false,
    manifest: true
  },

  manifest: {
    appName: 'Sedona',
    appDescription: "training project for htmlacademy' intensive",
    background: '#020307',
    display: 'standalone',
    orientation: 'portrait',
    start_url: '/?homescreen=1'
  },

  blocks: {
    app: {
      'pixel-glass': '',
      'svg-sprite-inject': ''
    }
  },

  use: {
    assets: [],
    symbol: [],
    styles: [],
    scripts: ['svg-sprite-inject.min.js']
  },

  add: {
    page: `extends ../blocks/layout\n\nblock data\n\n\t- const page = { path: '[name]', title: '', description: '', styles: [], scripts: [] };\n\nblock content\n\n\n\t= nnn\n\t// Header \n\n\t+header\n\n\n\t= nnn\n\t// Content \n\n\t+content\n\n\n\t= nnn\n\t// Footer \n\n\t+footer\n\n`,
    style: '.[name] {\n  //\n}\n',
    template: `mixin [name]( bem )\n\t+b( '[name]', bem )&attributes(attributes)\n\t\tblock\n`,
    block: ''
  },

  autoCreate: false,
  autoCreateAdd: [],
  autoCreateIgnore: [],
  autoCreateCheckLevels: [],

  assetsAttr: ['href', 'src', 'srcset']
};
