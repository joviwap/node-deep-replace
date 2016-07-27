(function(){
	'use strict';

  var expect = require("chai").expect;
  var dr     = require('./deepReplace');

	function replacerSync(str){
    return str.replace(/1/g,'2');
  }

	function replacerAsync(str, callback){
		callback(null, str.replace(/1/g,'2'));
	}

  describe('[Unit] deepReplace', function() {

		describe('Sync', function() {

	    describe('directly', function() {

	      it('should not replace a number', function(){
	        var test = dr.sync(123, replacerSync);
	        expect(test).to.be.equal(123);
	      });

	      it('must replace a simple string', function(){
	        var test = dr.sync('123', replacerSync);
	        expect(test).to.be.equal('223');
	      });

	      it('must replace an array', function(){
	        var arr = ['111', '123', '135'];
	        var test = dr.sync(arr, replacerSync);
	        expect(test[0]).to.be.equal('222');
	        expect(test[1]).to.be.equal('223');
	        expect(test[2]).to.be.equal('235');
	      });

	      it('must replace an object', function(){
	        var arr = {a:'111', b:'123', c:'135'};
	        var test = dr.sync(arr, replacerSync);
	        expect(test.a).to.be.equal('222');
	        expect(test.b).to.be.equal('223');
	        expect(test.c).to.be.equal('235');
	      });
	    });

	    describe('in an object', function() {

	      it('should not replace a number', function(){
	        var test = dr.sync({a:123}, replacerSync);
	        expect(test.a).to.be.equal(123);
	      });

	      it('must replace a simple string', function(){
	        var test = dr.sync({a:'123'}, replacerSync);
	        expect(test.a).to.be.equal('223');
	      });

	      it('must replace an array', function(){
	        var arr = {a:['111', '123', '135']};
	        var test = dr.sync(arr, replacerSync);
	        expect(test.a[0]).to.be.equal('222');
	        expect(test.a[1]).to.be.equal('223');
	        expect(test.a[2]).to.be.equal('235');
	      });

	      it('must replace an object', function(){
	        var arr = {a:{a:'111', b:'123', c:'135'}};
	        var test = dr.sync(arr, replacerSync);
	        expect(test.a.a).to.be.equal('222');
	        expect(test.a.b).to.be.equal('223');
	        expect(test.a.c).to.be.equal('235');
	      });
	    });

	    describe('in an array', function() {

	      it('should not replace a number', function(){
	        var test = dr.sync([123], replacerSync);
	        expect(test[0]).to.be.equal(123);
	      });

	      it('must replace a simple string', function(){
	        var test = dr.sync(['123'], replacerSync);
	        expect(test[0]).to.be.equal('223');
	      });

	      it('must replace an array', function(){
	        var arr = [['111', '123', '135']];
	        var test = dr.sync(arr, replacerSync);
	        expect(test[0][0]).to.be.equal('222');
	        expect(test[0][1]).to.be.equal('223');
	        expect(test[0][2]).to.be.equal('235');
	      });

	      it('must replace an object', function(){
	        var arr = [{a:'111', b:'123', c:'135'}];
	        var test = dr.sync(arr, replacerSync);
	        expect(test[0].a).to.be.equal('222');
	        expect(test[0].b).to.be.equal('223');
	        expect(test[0].c).to.be.equal('235');
	      });
	    });

	  });

		describe('Async', function() {

	    describe('directly', function() {

	      it('should not replace a number', function(done){
	        dr.async(123, replacerAsync, function(err, test){
						expect(test).to.be.equal(123);
						done();
					});
	      });

	      it('must replace a simple string', function(done){
	        dr.async('123', replacerAsync, function(err, test){
						expect(test).to.be.equal('223');
						done();
					});
	      });

	      it('must replace an array', function(done){
	        var arr = ['111', '123', '135'];
	        dr.async(arr, replacerAsync, function(err, test){
						expect(test[0]).to.be.equal('222');
						expect(test[1]).to.be.equal('223');
						expect(test[2]).to.be.equal('235');
						done();
					});
	      });

	      it('must replace an object', function(done){
	        var arr = {a:'111', b:'123', c:'135'};
	        dr.async(arr, replacerAsync, function(err, test){

						expect(test.a).to.be.equal('222');
						expect(test.b).to.be.equal('223');
						expect(test.c).to.be.equal('235');
						done();
					});
	      });
	    });

	    describe('in an object', function() {

	      it('should not replace a number', function(done){
	        dr.async({a:123}, replacerAsync, function(err, test){
						expect(test.a).to.be.equal(123);
						done();
					});
	      });

	      it('must replace a simple string', function(done){
	        dr.async({a:'123'}, replacerAsync, function(err, test){
						expect(test.a).to.be.equal('223');
						done();
					});
	      });

	      it('must replace an array', function(done){
	        var arr = {a:['111', '123', '135']};
	        dr.async(arr, replacerAsync, function(err, test){
						expect(test.a[0]).to.be.equal('222');
						expect(test.a[1]).to.be.equal('223');
						expect(test.a[2]).to.be.equal('235');
						done();
					});
	      });

	      it('must replace an object', function(done){
	        var arr = {a:{a:'111', b:'123', c:'135'}};
	        dr.async(arr, replacerAsync, function(err, test){
						expect(test.a.a).to.be.equal('222');
						expect(test.a.b).to.be.equal('223');
						expect(test.a.c).to.be.equal('235');
						done();
					});
	      });
	    });

	    describe('in an array', function() {

	      it('should not replace a number', function(done){
	        dr.async([123], replacerAsync, function(err, test){
						expect(test[0]).to.be.equal(123);
						done();
					});
	      });

	      it('must replace a simple string', function(done){
	        dr.async(['123'], replacerAsync, function(err, test){
						expect(test[0]).to.be.equal('223');
						done();
					});
	      });

	      it('must replace an array', function(done){
	        var arr = [['111', '123', '135']];
	        dr.async(arr, replacerAsync, function(err, test){
						expect(test[0][0]).to.be.equal('222');
						expect(test[0][1]).to.be.equal('223');
						expect(test[0][2]).to.be.equal('235');
						done();
					});
	      });

	      it('must replace an object', function(done){
	        var arr = [{a:'111', b:'123', c:'135'}];
	        dr.async(arr, replacerAsync, function(err, test){
						expect(test[0].a).to.be.equal('222');
						expect(test[0].b).to.be.equal('223');
						expect(test[0].c).to.be.equal('235');
						done();
					});
	      });
	    });

	  });

  });

})();
