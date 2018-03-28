const app = angular.module('WaterApp', []);

app.controller('MainController', ['$http', function($http) {
  this.hello = 'hello there'
}]); // closes app.controller
