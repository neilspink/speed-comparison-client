import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
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
  numberCssResources: DS.attr('number')
});
