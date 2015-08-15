/*eslint handle-callback-err:0*/
'use strict';

var read = require('../src/readability');

describe('result', function() {
	it('should get document', function(done) {
		read('http://www.whitehouse.gov/', function(err, result) {
			result.title.should.equal('The White House');
			done();
		});
	});
});
