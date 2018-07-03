module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //less: {
        //    development: {
        //        options: {
        //            compress: true,
        //            yuicompress: true,
        //            optimization: 2
        //        },
        //        files: {
        //            "css/Subway.css": "css/Subway.less" // target : src
        //        }
        //    }
        //},
        copy: {
            main: {
                src: 'node_modules/bootstrap/dist/fonts/*',
                dest: 'fonts/',
                flatten: true,
                expand: true
            },
        },
        concat: {
            options: {
                separator: ';'
            },
            libraries: {
                src: [
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/signalr/jquery.signalR.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'node_modules/angular/angular.min.js',
                    'node_modules/angular-animate/angular-animate.min.js',
                    //'lib/angular_1_router.min.js',
                    'lib/angular_1_router_orig_bower.js',
                    'node_modules/angular-signalr-hub/signalr-hub.min.js',
                    'node_modules/babel-polyfill/dist/polyfill.min.js'
                ],
                dest: 'dist/libraries.js'
            },
            //app: {
            //    src: [
            //        '../Common/*.js', //common modules/services outside our module
            //        'SubwayApp/module.js',
            //        'SubwayApp/subway-app-root.component.js',
            //        'SubwayApp/Components/**/*.js', //folder and subfolders
            //    ],
            //    dest: 'build/app_joined.js'
            //}
        },
        concat_css: {
            options: {},
            all: {
                src: ['lib/bootstrap_slate.min.css'],
                dest: "dist/libraries.css"
            },
        },
        //jshint: {
        //  options: {
        //    /*http://jshint.com/docs/options/*/
        //    asi: true
        //  },
        //  all: ['public/App/DashComponents/*.js', 'public/App/*.js', 'public/App/Common/*.js', 'public/App/DashComponents/Common/*.js']
        //},

        //babel: {
        //  options: {
        //    sourceMap: true,
        //    presets: ['env']
        //  },
        //  dist: {
        //    files: {
        //      'build/app_es5.js': 'build/app_es6.js' //target : src
        //    }
        //  }
        //},
        //uglify: {
        //    options: {
        //        compress: true,
        //        mangle: false,
        //        sourceMap: false
        //    },
        //    target: {
        //        src: ['build/app_joined.js'],
        //        dest: 'dist/app.min.js'
        //    }
        //},
        //https://github.com/gruntjs/grunt-contrib-clean
        //clean: {
        //    folder: ['build/'],
        //}

    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //todo: enable if needed
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-clean');

    //grunt.registerTask('default', ["less", "copy", "concat", "concat_css", "uglify", "clean"]);

};
