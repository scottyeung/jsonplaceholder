import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    init(){
        this._super(...arguments);
    },
    filter: '',
    filteredItems: computed('model.[]', 'filter', function(){
        const filterTerm = this.get('filter').toLowerCase();

        let filtered = this.model.filter((post)=>{
            const {username, email} = post.getProperties('username','email');
            return post.get('username').toLowerCase().indexOf(filterTerm) !== -1 ? true : post.get('email').toLowerCase().indexOf(filterTerm) !== -1;
        });
        
        return filtered;
    })
});
