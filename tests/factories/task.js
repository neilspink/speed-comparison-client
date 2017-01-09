import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('task', {
  sequences: {
    sitename: function(num){
      return `Site ${num}`;
    }
  },
  "default": {
    sitename:  FactoryGuy.generate('sitename'),
    siteurl: "http://example.com"
  }
});
