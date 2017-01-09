import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import { manualSetup, make } from 'ember-data-factory-guy';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('task-form', 'Integration | Component | task form', {
  integration: true,
  setup() {
    manualSetup(this.container);
  },
});

test('it dont shows errors if model is valid', function(assert) {
  Ember.run(() =>{
    let save = function(){

    };
    this.set('save', save);
    let model = make('task');
    this.set('model', model);
    this.render(hbs`{{task-form model=model save=save}}`);
    Ember.run(() => {
      this.$('.btn.btn-primary.x-submit').click();
      assert.notOk(this.get('hasErrors'));
    });
  });
});

test('it calls save function', function(assert) {
  var done = assert.async();
  Ember.run(() =>{
    let save = function(model){
      assert.ok(model.get('siteurl'));
      done();
    };
    this.set('save', save);
    let model = make('task');
    this.set('model', model);
    this.render(hbs`{{task-form model=model save=save}}`);
    Ember.run(() => {
      this.$('.btn.btn-primary.x-submit').click();
    });
  });
});
