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
    },
    getPageSpeed: function(task) {

      console.log('getSpeed...' + task.get('siteurl'));

      this.store.queryRecord('site', { url: task.get('siteurl') }).then(function(result) {
        console.log('queried here it is');

        task.set('speed', result.get('speed'));
        console.log(result.get('speed'));
      });
    }
  }
});
