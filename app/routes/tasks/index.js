import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('task').then(tasks => {
      return tasks.filter(item => !item.get('isNew'));
    });
  },

  actions: {
    deleteTask(task){
      task.destroyRecord().then(() => {
        this.refresh();
      })
    }
  }
});
