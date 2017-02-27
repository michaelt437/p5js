var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync");

gulp.task("default",
    gulp.series(
        html,
        styles,
        scripts,
        gulp.parallel(serve, watch)
    )
);

function html() {
    return gulp.src("./app/src/**/*.html")
        .pipe(gulp.dest("./app/dist"))
        .pipe(browserSync.stream())
}

function styles() {
    return gulp.src("./app/src/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./app/dist/css"))
        .pipe(browserSync.stream())
}

function scripts() {
    return gulp.src("./app/src/scripts/**/*.js")
        .pipe(gulp.dest("./app/dist/scripts"))
        .pipe(browserSync.stream())
}

function serve() {
    browserSync.init({
        server: "./app/dist/"
    })
}

function watch() {
    gulp.watch("./app/src/**/*.html", html);
    gulp.watch("./app/src/sass/**/*.scss", styles);
    gulp.watch("./app/src/scripts/**/*.js", scripts);

}
