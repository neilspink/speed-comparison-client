import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations, {
  validations: {
    sitename: {
      presence: true
    },
    siteurl: {
      presence: true
    }
  },
  sitename: DS.attr('string'),
  siteurl: DS.attr('string'),
  speed: DS.attr('number'),
  usability: DS.attr('number'),
  numberResources: DS.attr('number'),
  numberHosts: DS.attr('number'),
  totalRequestBytes: DS.attr('number'),
  numberStaticResources: DS.attr('number'),
  htmlResponseBytes: DS.attr('number'),
  textResponseBytes: DS.attr('number'),
  cssResponseBytes: DS.attr('number'),
  imageResponseBytes: DS.attr('number'),
  javascriptResponseBytes: DS.attr('number'),
  flashResponseBytes: DS.attr('number'),
  otherResponseBytes: DS.attr('number'),
  numberJsResources: DS.attr('number'),
  numberCssResources: DS.attr('number'),
  created: DS.attr('date', { defaultValue: () => new Date() })
});
