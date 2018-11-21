import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    init(){
        this._super(...arguments);

        this.model = this.get('model');
    },
    filter: '',
    filteredItems: computed('model.[]', 'filter', function(){
        const filterTerm = this.get('filter').toLowerCase();

        let filtered = this.model.filter((post)=>{
            return post.get('username').toLowerCase().indexOf(filterTerm) !== -1;
        });
        
        return filtered;
    })
});
