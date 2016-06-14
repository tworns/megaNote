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
      noteCtrl.$inject = ['$scope', '$state'];
    function noteCtrl ($scope, $state) {
      $state.go('notes.form');
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
      $scope.edit = function(note){
        $scope.note = note;
      };
    }


})();
