import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

export default FirebaseAdapter.extend({
  firebase: inject.service(),
  session: inject.service(),

  pathForType(type) {
    let uid = this.get('session.session.content.authenticated.uid');
    let path = Ember.String.pluralize(type);
    return `users/${uid}/${path}`;
  }
});
