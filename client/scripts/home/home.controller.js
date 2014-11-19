'use strict';
//export controller function
//because of the structure of the code for use with browswerify
//it is difficult for ngAnnotate to correctly parse where it should
//add annotations, thus the ngInject comment is required
module.exports = /*@ngInject*/ function($scope){
  $scope.text = 'Hello World';
};