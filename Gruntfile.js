module.exports = function (grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            codefire: {
                expand: true,
                cwd: 'dist/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/css/',
                ext: '.min.css'
            }
        },
        sass: {
            codefire: {
                options: {
                    style: 'expanded',
                    sourcemap: true,
                    sourceComments: 'map',
                    lineNumbers: true
                },
                files: {
                    'dist/css/code-fire.css': 'src/sass/code-fire.scss'
                }
            }
        },
        watch: {
            sass: {
                files: 'src/sass/*',
                tasks: ['default'],
                options: {
                    livereload: true,
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'cssmin']);
};