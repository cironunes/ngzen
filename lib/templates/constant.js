(function() {
	'use strict';

	angular.module('<%= moduleName %>')
		.constant('<%= name %>', {
			FOO: 42
		});
}());