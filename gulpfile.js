const gulp = require('gulp');

const serve = require('./gulp/tasks/serve');
const html = require('./gulp/tasks/html');
const styles = require('./gulp/tasks/styles');
const script = require('./gulp/tasks/script');
const fonts = require('./gulp/tasks/fonts');
const db = require('./gulp/tasks/db');
const imageMinify = require('./gulp/tasks/imageMinify');
const svgSprite = require('./gulp/tasks/svgSprite');
const clean = require('./gulp/tasks/clean');

const dev = gulp.parallel(html, styles, script, fonts, imageMinify, db, svgSprite);

const build = gulp.series(clean, dev);

module.exports.start = gulp.series(build, serve);
module.exports.build = build;


