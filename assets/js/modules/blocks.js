/* global angular */
angular.module('Magazine', [])

.controller('BlocksCtrl',[
  function (){
    this.squares = {
      first: 'one',
      second: 'two',
      third: 'three',
      fourth: 'four',
      fifth: 'five'
    };
  }
]);