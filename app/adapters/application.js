import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://jsonplaceholder.typicode.com',
    primaryKey: '_id',
    ajaxOptions() {
        let hash = this._super.apply(this, arguments);
        hash.data = hash.data || {};
        hash.dataType = 'jsonp';
        return hash;
    }
});