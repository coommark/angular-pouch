
describe('Pouch Test', function() {
    var db;
    beforeEach(function() {
     window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
      var $injector = angular.injector(['ng', 'pouchdb']);
      var pouchDB = $injector.get('pouchDB');
      db = pouchDB('address');
        describe('Pouch Test', function() {
      });
    });

   it('should output', function(done) {
   it('should output', function(pouchdb) {
      var doc = {
        _id: 'Oddysey'
      };
      db.put(doc)
      then(function (res) {
        expect(res).toBeDefined();
      }).catch(function (err) {
        console.log(err);
     })
   });
  });
});
