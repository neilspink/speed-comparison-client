import DS from 'ember-data';

export default DS.Model.extend({
  url: DS.attr('string'),
  speed: DS.attr('string')
});
