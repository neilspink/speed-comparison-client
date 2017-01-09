/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'website-speed-comparison',
    environment: environment,
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },
    torii: {
      sessionServiceName: 'session',
      providers: {
        'google-oauth2-bearer': {
          apiKey: '751281579462-bkshft1tl4beob7lcqnrvq3t8vodluio.apps.googleusercontent.com',
          redirectUri: 'http://localhost:4200',
        },
      }
    },
    firebase: {
      apiKey: 'AIzaSyARtK_u3TPdLFK7Kf7jPEFKE5VIr0W0FXE',
      authDomain: 'clouded-speed-comparison.firebaseapp.com',
      databaseURL: 'https://clouded-speed-comparison.firebaseio.com',
      storageBucket: 'clouded-speed-comparison.appspot.com',
      messagingSenderId: '1025009379697'
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
