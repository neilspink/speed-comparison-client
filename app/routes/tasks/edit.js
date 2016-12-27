import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params){
    return this.store.findRecord('task', params.task_id);
  },

  deactivate(){
    this.get('controller.model').rollbackAttributes();
  }
});
