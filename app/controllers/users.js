import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    init(){
        this._super(...arguments);

        this.model = this.get('model');
    },
    filter: '',
    filteredItems: computed('model.[]', 'filter', function(){
        const filterTerm = this.get('filter');
        var model = this.get('model');

        var filtered = model.filter(function(post) {
            return post.get('username').indexOf(filterTerm) !== -1;
        }
        
        );
        return filtered
    })
});
