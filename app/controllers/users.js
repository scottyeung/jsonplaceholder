import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    filter: '',
    filteredItems: computed('filter', function(){
        const filterTerm = this.get('filter');
        var model = this.get('model');

        var filtered = model.filter(function(post) {
            return post.get('username').indexOf(filterTerm) !== -1;
        });
        return filtered
    })
});
