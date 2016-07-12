module.exports = function( grunt ) {

  grunt.initConfig({

    'electron-packager': {
        'build-linux': {
          options:{
            platform  : 'linux',
            arch      : 'x64',
            dir       : '.',
            out       : './build',
            icon      : '',
            name      : 'app',
            ignore    : ['node_modules', 'Gruntfile.js', 'bower.json', 'README.md', 'build', '.gitignore'],
            version   : '1.2.6', // set version of electron
            overwrite : true
          }
        },
        'build-win': {
          options:{
            platform  : 'win32',
            arch      : 'x64',
            dir       : '.',
            out       : './build',
            icon      : '',
            name      : 'app',
            ignore    : 'node_modules',
            version   : '1.2.6', // set version of electron
            overwrite : true
          }
        },
    }

  });

  grunt.loadNpmTasks('grunt-electron-packager');
  // Tarefas que serão executadas
  grunt.registerTask( 'default', ['electron-packager:build-linux'] );

};
