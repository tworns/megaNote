
angular.module('meganote.notes', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider

  .state('notes', {
      url: '/notes',
      templateUrl: '/notes/notes.html',
      controller: 'NotesController' //controller is inherited by child state
    })

  .state('notes.form', { //this is a child state
    url: '/:noteId',
    templateUrl: 'notes/notes-form.html'
  });
})

.controller('NotesController', function($scope) {//defines functionality for a given scope
  $scope.editing = false;
  $scope.notes = [];
  $scope.note = {
    title: "",
    data: ""
  };
  $scope.addNote = function(){
    $scope.notes.push($scope.note);
    $scope.note = { title: '', data: '' };
  };

});
