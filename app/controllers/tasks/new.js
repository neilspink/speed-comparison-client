import Ember from 'ember';

export default Ember.Controller.extend({
  model: null,

  actions: {
    addTask: function(model){
      model.save().then(() => {
        this.transitionToRoute('tasks');
      });
    }
  }
});
