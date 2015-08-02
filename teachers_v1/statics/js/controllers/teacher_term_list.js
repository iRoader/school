var app = angular.module("courseApp", ['teacher.requestSvc']);

app.controller('courseCtrl', ['$scope', 'term', '$window', function($scope, term){

	$scope.terms = [
					{"subject": '计算机', "name": '第一次模拟考试', "time": '2015-9-8'},
					{"subject": '计算机', "name": '第二次模拟考试', "time": '2015-10-8'},
					{"subject": '计算机', "name": '第二次模拟考试', "time": '2015-11-8'},
					{"subject": '计算机', "name": '第二次模拟考试', "time": '2015-12-8'},
		];

    function _getData() {
                    term.get(window.teacher).success(function(data, status) {
                        if (status == 200) {
                            $scope.terms = data.data.terms;
                        }
                    })
                }
    _getData();

    $scope.goStatistics = function($event, term, $window){
        $event.preventDefault();

        $window.location.href = '/statistics/term/'+ term.id +'/';
    }


}]);