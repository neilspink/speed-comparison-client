import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    return this.store.findAll('task').then(tasks => {
      return tasks.filter(item => !item.get('isNew'));
    });
  },

  actions: {
    deleteTask(task){
      task.destroyRecord().then(() => {
        this.refresh();
      });
    }
  }
});
