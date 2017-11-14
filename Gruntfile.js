module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( 'grunt-jsonlint' );
	grunt.loadNpmTasks( 'grunt-banana-checker' );
	grunt.loadNpmTasks( 'grunt-karma' );

	grunt.initConfig( {
		eslint: {
			all: [
				'**/*.js',
				'!node_modules/**',
				'!vendor/**'
			]
		},
		banana: {
			all: 'i18n/'
		},
		jsonlint: {
			all: [
				'**/*.json',
				'!node_modules/**',
				'!vendor/**'
			]
		},
		karma: {
			options: {
				files: [
					'node_modules/jquery/dist/jquery.js',
					'src/dataTypes/__namespace.js',
					'src/dataTypes/DataType.js',
					'src/dataTypes/DataTypeStore.js',
					'tests/dataTypes/*.js'
				],
				singleRun: true,
				logLevel: 'DEBUG',
				frameworks: [ 'qunit' ]
			},
			all: {
				browsers: [ 'PhantomJS' ]
			}
		}
	} );

	grunt.registerTask( 'test', [ 'jsonlint', 'banana', 'eslint', 'qunit' ] );
	grunt.registerTask( 'qunit', 'karma' );
	grunt.registerTask( 'default', 'test' );
};
