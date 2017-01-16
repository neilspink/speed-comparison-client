import Ember from 'ember';

export default Ember.Controller.extend({
  sortField: 'speed',
  sortType: 'desc',

  sortedCollection: Ember.computed('model.[]', 'sortType', 'sortField', function(){
    if (!this.get('model')){
      return [];
    }
    let collection = this.get('model').toArray();
    if(this.get('sortField') && this.get('sortType')){
      collection = collection.sort((a, b) => {
        return this._sortBy(a, b);
      });
    }
    return collection;
  }),
  _sortBy(a,b){
    if (this.get('sortType') === 'asc'){
      if (a.get(this.get('sortField')) < b.get(this.get('sortField'))){
        return -1;
      }
      if (a.get(this.get('sortField')) > b.get(this.get('sortField'))){
        return 1;
      }
      return 0;
    }
    else{
      if (a.get(this.get('sortField')) < b.get(this.get('sortField'))){
        return 1;
      }
      if (a.get(this.get('sortField')) > b.get(this.get('sortField'))){
        return -1;
      }
      return 0;
    }
  },
  actions:{
    sort(type){
      if (this.get('sortField') === type){
        if (this.get('sortType') === 'asc'){
          this.set('sortType', 'desc');
        }
        else{
          this.set('sortType', 'asc');
        }
      }
      else{
        this.set('sortField', type);
        this.set('sortType', 'desc');
      }
    }
  }
});
