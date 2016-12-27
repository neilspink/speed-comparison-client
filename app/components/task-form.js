import Ember from 'ember';

export default Ember.Component.extend({
  hasErrors: Ember.computed('model.errors.{sitename,siteurl}', function(){
    let keys = Object.keys(this.get('model.errors'));
    return Ember.A(keys).any((item) => {
      let key = `model.errors.${item}`;
      return !Ember.isEmpty(this.get(key));
    });
  }),
  actions: {
    submit(){
      this.get('model').validate().then(() => {
        this.sendAction('save', this.get('model'));
      }).catch(() => {});
    }
  }
});
