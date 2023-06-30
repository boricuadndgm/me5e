import gulp, { dest, src } from "gulp";
import gulpESLint from "gulp-eslint-new"

function compileJavscript() {
  src(['./src/*.mjs'])
    .pipe(gulpESLint({ fix: true }))
    .pipe(gulpESLint.fix())
    .pipe(gulpESLint.format())
    .pipe(gulpESLint.failAfterError());
}

// Default export - build CSS and watch for updates
export default gulp.series(compileJavscript);

// Build all artifacts
// export const buildAll = gulp.parallel();
