var app = angular.module("examApp", ['teacher.requestSvc']);

app.controller('examController', ['$scope', 'class_term', function($scope, class_term){

	$scope.terms = [
					{"subject": '计算机', "name": '第一次模拟考试', "time": '2015-9-8'},
					{"subject": '计算机', "name": '第二次模拟考试', "time": '2015-10-8'},
					{"subject": '计算机', "name": '第二次模拟考试', "time": '2015-11-8'},
					{"subject": '计算机', "name": '第二次模拟考试', "time": '2015-12-8'},
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