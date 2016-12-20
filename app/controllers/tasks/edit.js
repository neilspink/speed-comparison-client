import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editTask(model) {
      model.save().then(() => {
        this.transitionToRoute('tasks');
      });
    }
  }
});
