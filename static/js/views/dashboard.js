var domTools = require('../utils/dom.js');
var append = domTools.append;

var t = {
  header: require('../templates/header.js'),
  navBanner: require('../templates/nav-banner.js'),
  lexemeFraction: require('../templates/lexeme-fraction.js'),
  lexemeHollisticFraction: require('../templates/lexeme-hollistic-fraction.js'),
  barChart: require('../templates/barchart.js'),
  table: require('../templates/table.js')
};

var main = function (coreLogic, routes) {
  append(
      document.body,
      t.header(),
      t.navBanner(coreLogic, routes),
      t.lexemeFraction(coreLogic.getLexemes),
      t.lexemeHollisticFraction(coreLogic.getLexemes),
      t.barChart(coreLogic.getLexemes),
      t.table(coreLogic.getLexemes)
  );
};

module.exports = main;
