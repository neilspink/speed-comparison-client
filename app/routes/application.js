import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
    login(){
      var route = this;
      this.get('session').authenticate('authenticator:firebase-simple-auth','firebase-simple-auth',{
        provider: 'google'
      }).then(() => {
        console.log('authenticated now transition to tasks');
        route.transitionTo('tasks');
      }, function(error){
        console.log('Simple auth error: '+error.message);
        route.transitionTo('tasks');
      });
    },
    logout(){
      this.get('session').invalidate().then(() => this.transitionTo('home'));
    }
  }
});
