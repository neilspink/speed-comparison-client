import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    return this.store.findAll('task').then(tasks => {
      return tasks.filter(item => !item.get('isNew'));
    });
  },

  actions: {
    speed() {
      console.log('check speed of all sites...');

      this.store.findAll('task').then(tasks => {

        tasks.forEach(item => {

          console.log('url:' + item.get('siteurl'));

          this.store.queryRecord('site', { url: item.get('siteurl') }).then(function(result) {

            console.log('speed: ' + result.get('speed'));

            item.set('speed', result.get('speed'));
            item.set('usability', result.get('usability'));
            item.set('numberResources', result.get('numberResources'));
            item.set('numberHosts', result.get('numberHosts'));
            item.set('totalRequestBytes', result.get('totalRequestBytes'));
            item.set('numberStaticResources', result.get('numberStaticResources'));
            item.set('htmlResponseBytes', result.get('htmlResponseBytes'));
            item.set('textResponseBytes', result.get('textResponseBytes'));
            item.set('cssResponseBytes', result.get('cssResponseBytes'));
            item.set('imageResponseBytes', result.get('imageResponseBytes'));
            item.set('javascriptResponseBytes', result.get('javascriptResponseBytes'));
            item.set('flashResponseBytes', result.get('flashResponseBytes'));
            item.set('otherResponseBytes', result.get('otherResponseBytes'));
            item.set('numberJsResources', result.get('numberJsResources'));
            item.set('numberCssResources', result.get('numberCssResources'));

            item.save();
          });

         });
      });

    },
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
        task.set('usability', result.get('usability'));
        console.log(result.get('speed'));
      });
    }

  }
});
