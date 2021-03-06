var domTools = require('../utils/dom.js');
var append = domTools.append;
var el = domTools.el;

var t = {
    navElement: function (innerText, onClick) {
        var ne = el('span');
        ne.innerText = innerText;
        ne.addEventListener('click', onClick);
        return ne;
    }
};


module.exports = function (coreLogic, routes) {
  var selectedLanguage = coreLogic.getSelectedLanguage();

  var banner = el('div', 'nav-banner');
  var languageText = 'languages';
  languageText += selectedLanguage ? ': ' + selectedLanguage : '';
  
  var languages = t.navElement(languageText, routes.languages);
  var logout = t.navElement('logout', function () {
    coreLogic.logout();
    routes.logout();
  });

  append(banner, languages);

  if (coreLogic.getSelectedLanguage()) {
    var enterText = t.navElement('enter text', routes.main);
    var flashcards = t.navElement('flashcards', routes.flashcards);
    var dashboard = t.navElement('dashboard', routes.dashboard);
    append(banner, enterText, flashcards, dashboard);
  }   
  
  append(banner, logout);  

  return banner;
};

