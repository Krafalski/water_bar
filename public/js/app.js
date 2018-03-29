const app = angular.module('WaterApp', []);

app.controller('MainController', ['$http', function($http) {
  this.hello = 'Water Bar';
  this.createForm = {};
  this.waters = [];

  this.includePath = 'partials/menu.html';
  this.changeInclude = function(path){
  this.includePath = 'partials/'+ path +'.html';
}

  this.createWater = ()=>{
    $http({
      method: 'POST',
      url: '/waters',
      data: this.createForm
    }).then( response => {
      console.log(response.data);
      this.createForm = {};
    }, error => {
      console.log(error);
    })
  }

  this.getWater = () =>{
    $http({
      method: 'GET',
      url: '/waters'
    }).then( response => {
      this.waters = response.data;
    }, error => console.log( error ))
  }

  this.getWater();
}]); // closes app.controller
