(function(){
	angular.module("myApp").directive('timePicker', timePicker);
	timePicker.$inject = [];
	function timePicker() {
		return {
			link : link,
			templateUrl: 'template.html'
		}

		function link(scope, element, attr) {
			
		}
	}
})();