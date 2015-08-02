var app = angular.module("examApp", ['teacher.requestSvc']);

app.controller('examController', ['$scope', 'class_term', function($scope, class_term){

	$scope.terms = [
					{"subject": '计算机', "score": '90'},
					{"subject": '计算机', "score": '90'},
					{"subject": '计算机', "score": '90'},
					{"subject": '计算机', "score": '90'}
		];
        
	_params = {
	    type: 9,
	}

    function _getData() {
                    class_term.get(window.school_class, _params).success(function (data, status) {
                        if (status == 200) {
                            $scope.terms = data.data.terms;
                        }
                    })
                }
    _getData();

}]);