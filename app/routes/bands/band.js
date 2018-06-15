import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('band', params.id)
  },

  redirect(band) {
    if (band.description) {
      this.transitionTo('bands.band.details');
    } else {
      this.transitionTo('bands.band.songs');
    }
  }
});
