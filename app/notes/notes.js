(function(){
  angular
    .module('meganote.notes', ['ui.router'])
    .config(notesConfig)
    .controller('NotesController', noteCtrl); //controller name won't conflict with variable names. Controllers define funcitonality for given scope.

  notesConfig.$inject = ['$stateProvider']; //contains arguments to notes config IN ORDER!

  function notesConfig($stateProvider) {
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
  }
  noteCtrl.$inject = ['$scope', '$state', 'NotesService'];
  function noteCtrl ($scope, $state, NotesService) {
    $state.go('notes.form');
    NotesService.getNotes().then(function(){
      $scope.notes = NotesService.notes;
    });
    $scope.note = {
      title: '',
      body_html: ''
    };
    $scope.save = function(){
      NotesService.create($scope.note);
      $scope.note = { title: '', body_html: '' };
    };
    $scope.edit = function(note){
      $scope.note = note;
    };
    $scope.clearForm = function(){
      $scope.note = { title: '', body_html: '' };
    };
    $scope.delete = function(){
      NotesService.delete($scope.note);
      $scope.notes.shift();
      $scope.note = { title: '', body_html: '' };
    };
    $scope.update = function(){
      NotesService.update($scope.note);
      $scope.note = { title: '', body_html: '' };
    };
  }


})();
