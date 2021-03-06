(function(){
  angular.module('meganote.notes')
  .service('NotesService',NotesService);
  NotesService.$inject = ['$http'];
  function NotesService($http){
    var service = this;
    service.notes = [];


    service.getNotes = function(){
      var notesPromise = $http.get('https://meganote.herokuapp.com/notes') ;
      notesPromise.then(function(res){
        service.notes =res.data;
      });
      return notesPromise;
    };
    service.create = function(note){
      var notesPromise =  $http.post('https://meganote.herokuapp.com/notes', {
        note: note
      });
      notesPromise.then(function(res){
        if(res.status === 200) {
          service.success();
          service.notes.unshift(res.data.note);
          service.note = res.data.note;
        }
        else{
          service.error(res.data);
        }

      },function(res){
        if(res.status === 200) {
          service.success();
          service.notes.unshift(res.data.note);
          service.note = res.data.note;
        }
        else{
          service.error(res.data|| 'Request Failed');
        }
      });
      return notesPromise;
    };
    service.delete = function(note) {
      var notesPromise = $http.delete('https://meganote.herokuapp.com/notes/' + note._id, { note: note});
      notesPromise.then(function(res){
        if(res.status === 200) {
          service.success();
          service.removeById(res.data._id);
        }
        else{
          service.error(res.data);
        }


      },function(res){
        if(res.status === 200) {
          service.success();
          service.notes.unshift(res.data.note);
          service.note = res.data.note;
        }
        else{
          service.error(res.data|| 'Request Failed');
        }
      });
      return notesPromise;

    };
    service.update = function(note) {
      var notesPromise = $http.put('https://meganote.herokuapp.com/notes/' + note._id, { note: note});
      notesPromise.then(function(res){
        if(res.status === 200) {
          service.success();
          service.removeById(res.data.note._id);
          service.notes.unshift(res.data.note);
        }
        else{
          NotesService.error(res.data);
        }
      },function(res){
        if(res.status === 200) {
          service.success();
          service.notes.unshift(res.data.note);
          service.note = res.data.note;
        }
        else{
          service.error(res.data || 'Request Failed');
        }
      });
      return notesPromise;

    };
    service.removeById = function (id){
      for(var i = 0; i < service.notes.length; i++){
        if(id === service.notes[i]._id){
          return service.notes.splice(i,1);
        }
      }
    };
    service.error = function(errorData) {
      alert(errorData);
    };
    service.success = function(){

    };
  }
})();
