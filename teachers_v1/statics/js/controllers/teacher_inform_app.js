var app = angular.module("informApp", ['teacher.requestSvc']);

app.controller('informController', ['$scope', '$window', 'message', function($scope, $window, message){

	$scope.messages = [
					{"type": '学校', "created_time": '6月30号', "content": '明天下午三点理工一129开会'},
					{"type": '家长', "created_time": '6月27号', "content": '明天下午三点理工一129开会'},
					{"type": '学校', "created_time": '6月24号', "content": '明天下午三点理工一129开会'},
					{"type": '家长', "created_time": '6月21号', "content": '明天下午三点理工一129开会'},
	];

    function _getData() {
                    message.get(window.teacher).success(function (data, status) {
                        if (status == 200) {
                            $scope.messages = data.data.teacherMessages;
                        }
                    })
                }
    _getData();

	$scope.goDetails = function($event, msg){
                    $event.preventDefault();
                    $window.location.href = "/teacher/message/" + msg.id + "/";
                };
	
}]);