/* global angular */
angular.module('ListApp', [])

.controller('ListCtrl',[
  function (){
    var that = this;
    this.list = ["nathan", "adam", "brian", "joe", "patrick", "rob"];
  
    this.edit = function(index) {
      that.list[index] = prompt("please edit your list item: ", that.list[index]);
    }
  
    this.add = function() {
      that.list.push(prompt("please add your list item: "));
    };
  
    this.delete = function(index) {
      that.list.splice(index, 1);
    };
  
  }
]);