import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('user').then(function(data){
            return data;
        })
    }
});
