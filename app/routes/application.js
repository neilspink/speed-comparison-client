import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    login(){
      this.get('session').authenticate('authenticator:firebase-simple-auth','firebase-simple-auth',{
        provider: 'google'
      }).then(() => this.transitionTo('tasks'));
    },

    logout(){
      this.get('session').invalidate().then(() => this.transitionTo('home'));
    }
  }
});
