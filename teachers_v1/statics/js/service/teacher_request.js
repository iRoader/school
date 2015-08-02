/**
 * User:KiRoader
 * Date: 15-7-6
 * Time: 下午14:38
 */
(function (angular) {
    angular.module('teacher.requestSvc', ['ngResource'])
        .config(['$httpProvider', '$resourceProvider', function ($httpProvider, $resourceProvider) {

            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
            $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

            $resourceProvider.defaults.stripTrailingSlashes = false;
        }])

        .factory('message', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/teacher/:teacher_id/messages/';

            return {
                get: function(id){
                    return requestHelper.get(_baseUrl, {teacher_id:id},{});
                }
            }
        }])

        .factory('student', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/class/:school_class_id/students/';

            return {
                get: function(id){
                    return requestHelper.get(_baseUrl, {school_class_id:id},{});
                }
            }
        }])

        .factory('classes', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/teacher/:teacher_id/classes/';
                _baseUrl2 = '/teacher/create/term/';

            return {
                get: function(id){
                    return requestHelper.get(_baseUrl, {teacher_id:id},{});
                },

                post: function(data){
                    return requestHelper.post(_baseUrl2, {}, data);
                }
            }
        }])

        .factory('student_grade', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/teacher/class/:school_class_id/students/';
                _baseUrl2 = '/teacher/handle/grade/'
            return {
                get: function(id){
                    return requestHelper.get(_baseUrl, {school_class_id:id},{});
                },
                post: function(data){
                    return requestHelper.post(_baseUrl2, {}, data);
                },

            }
        }])

        .factory('grades', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/term/:term_id/students/grade/';

            return {
                get: function(id){
                    return requestHelper.get(_baseUrl, {term_id:id},{});
                }
            }
        }])


        .factory('term', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/teacher/:teacher_id/terms/';

            return {
                get: function(id){
                    return requestHelper.get(_baseUrl, {teacher_id:id},{});
                }
            }
        }])

        .factory('class_term', ['requestHelper', function(requestHelper){
            var _baseUrl = 'http://192.168.101.100:8888/api/teacher/class/:school_class_id/terms/';

            return {
                get: function(id, data){
                    return requestHelper.get(_baseUrl, {school_class_id:id}, data);
                }
            }
        }])


        .factory('trades', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/trades/',
                _baseUrl2 = "/api/trades/:id/";

            return {
                get: function(id, params){
                    return requestHelper.get(_baseUrl2, {id:id}, params);
                },
                post: function(data){
                    return requestHelper.post(_baseUrl, {}, data);
                },
                delete: function(id){
                    return requestHelper.delete(_baseUrl2, {id:id});
                }
            }
        }])

        .factory('record', ['requestHelper', function(requestHelper){
            var _baseUrl = '/teacher/handle/grade/';

            return {
                post: function(data){
                    return requestHelper.post(_baseUrl, {}, data);
                }
            }
        }])

        .factory('jump', ['requestHelper', function(requestHelper){
            var _baseUrl = '/teacher/record/grade/';

            return {
                get: function(data){
                    return requestHelper.get(_baseUrl, {}, data);
                }
            }
        }])

        .factory('userTrade', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/users/trades/';

            return {
                get: function(params){
                    return requestHelper.get(_baseUrl, {}, params);
                }
            }
        }])

        .factory('banks', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/banks/';

            return {
                get: function(params){
                    return requestHelper.get(_baseUrl, {}, params);
                }
            }
        }])

        .factory('login', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/users/login/';

            return {
                post: function(data){
                    return requestHelper.post(_baseUrl, {}, data);
                }
            }
        }])

        .factory('verifyCode', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/send/verify/';

            return {
                post: function(data){
                    return requestHelper.post(_baseUrl, {}, data);
                }
            }
        }])

        //获取门票信息
        .factory('tickets', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/tickets/:id/';

            return {
                get: function(id, params){
                    return requestHelper.get(_baseUrl, {id:id}, params);
                }
            }
        }])

        //修改门票绑定用户信息
        .factory('ticketsModify', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/tickets/:id/modify/';

            return {
                post: function (id, data) {
                    return requestHelper.post(_baseUrl, {id: id}, data);
                }
            }
        }])

        .factory('ticketSchedule', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/tickets/:id/schedules/';

            return {
                get: function(id, params){
                    return requestHelper.get(_baseUrl,{id:id}, params);
                }
            }
        }])

        .factory('ticketOrder', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/tickets/:id/order/';

            return {
                post: function(id,data){
                    return requestHelper.post(_baseUrl, {id:id}, data);
                }
            }
        }])

        .factory('cancelOrder', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/tickets/:id/order/cancel/';

            return {
                post: function(id, data){
                    return requestHelper.post(_baseUrl, {id:id}, data);
                }
            }
        }])

        .factory('register', ['requestHelper', function(requestHelper){
            var _baseUrl = '/api/users/register/';

            return {
                post: function(data){
                    return requestHelper.post(_baseUrl, {}, data);
                }
            }
        }])

        .factory('requestHelper', function ($http) {
            /**
             * @param url "/hello/:id"
             * @param data "{id:1}"
             */
            function formatUrl(url, data) {
                var _reg;
                if (!data) {
                    return url;
                }
                else if (!angular.isObject(data)) {
                    return url + data + "/";
                } else {
                    for (var key in data) {
                        _reg = new RegExp(":" + key);
                        url = url.replace(_reg, data[key]);
                    }

                    return url;
                }

            }

            return {
                get: function (url, urlData, params) {
                    var _config = {
                        url: formatUrl(url, urlData),
                        method: 'GET',
                        params: params
                    };

                    return $http(_config)
                },
                post: function (url, urlData, data) {
                    var _config = {
                        url: formatUrl(url, urlData),
                        method: 'POST',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    };

                    return $http(_config)
                },
                put: function (url, urlData, data) {
                    var _config = {
                        url: formatUrl(url, urlData),
                        method: 'PUT',
                        data: data,
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    };

                    return $http(_config);
                },
                delete: function (url, urlData, data) {
                    var _config = {
                        url: formatUrl(url, urlData),
                        method: 'DELETE',
                        data: data
                    };

                    return $http(_config);
                }

            }
        });

}(angular));
