(function(){
  angular.module('meganote.notes')
  .service('NotesService',NotesService);
  NotesService.$inject = ['$http'];
  function NotesService($http){
    var service = this;
    var notesPromise = $http.get('https://meganote.herokuapp.com/notes') ;
    service.getNotes = function(){
    return notesPromise;
  };
}
})();
