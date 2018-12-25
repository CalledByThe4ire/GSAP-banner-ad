// Require

const gulp = require('gulp');

// Export

module.exports = (task, core) => {
  core.symbol = false;

  task.src = core.isDevelopment
    ? [core.path.blocks('*/*/img/symbol/*.svg')]
    : core.used.symbol;

  task.data = {
    title: false,
    svgAttrs: {
      style: `position:absolute;top:0;left:0;width:1px;height:1px;visibility:hidden;opacity:0;`,
      'aria-hidden': 'true'
    },
    id: 'symbol-%f',
    templates: ['default-svg']
  };

  task.dest = file => {
    core.symbol = `./${core.path.join(
      core.config.dist.img,
      'symbol.svg'
    )}?ver=${new Date().getTime()}`;

    return core.path.IMG;
  };

  return cb => {
    if (!task.src.length > 0) return cb();

    return gulp
      .src(task.src)
      .pipe(require('gulp-plumber')(core.errorHandler))
      .pipe(require('gulp-svg-symbols')(task.data))
      .pipe(require('gulp-rename')('symbol.svg'))
      .pipe(gulp.dest(task.dest));
  };
};
