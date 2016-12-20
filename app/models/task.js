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
  created: DS.attr('date', { defaultValue: () => new Date() })
});
