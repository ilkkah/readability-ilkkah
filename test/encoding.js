/*eslint handle-callback-err:0*/
'use strict';

var should = require('should');
var read = require('../src/readability');

describe('encoding', function() {
	it('iso-8859-2', function(done) {
		read('http://www.wprost.pl/ar/516408/w-polsce-najwiecej-wydaja-turysci-amerykanscy-ale-najwiecej-jest-niemieckich/', function(err, result) {
			result.title.should.equal('W Polsce najwięcej wydają turyści amerykańscy, ale najwięcej jest niemieckich');
			// console.log(result.content.text());
			result.content.text().length.should.be.aboveOrEqual(809);
			done();
		});
	});

	it('iso-8859-2', function(done) {
		read('http://manager.money.pl/news/artykul/analiza-stron-www-blink-pl-opracowal,29,0,1880861.html', function(err, result) {
			result.content.text().length.should.be.aboveOrEqual(3103);
			result.title.should.equal('Analiza stron www. Blink.pl opracował innowacyjne narzędzie');
			done();
		});
	});

	it('iso-8859-2', function(done) {
		read('http://www.ma.hu/kulfold/257899/Ujabb_robbanasok_tortentek_Tiencsinben', function(err, result) {
			result.title.should.equal('Újabb robbanások történtek Tiencsinben');
			// console.log(result.content.text());
			result.content.text().length.should.be.aboveOrEqual(860);
			done();
		});
	});

	it('windows-1251', function(done) {
		read('http://dariknews.bg/view_article.php?article_id=1484195', function(err, result) {
			result.title.should.equal('Борисов: Тече акция, хванали сме над 100 тона гориво без документи');
			// console.log(result.content.text());
			result.content.text().length.should.be.aboveOrEqual(1375);
			done();
		});
	});

	it('windows-1251', function(done) {
		read('http://www.gazeta.ru/business/2015/08/14/7688218.shtml', function(err, result) {
			result.title.should.equal('Что делать, если у вашего банка-кредитора отозвали лицензию или в нем введено внешнее управление - Газета.Ru');
			// console.log(result.content.text());
			result.content.text().length.should.be.aboveOrEqual(4138);
			done();
		});
	});
});
