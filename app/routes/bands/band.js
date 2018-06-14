import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let bands = this.modelFor('bands');
    return bands.findBy('slug', params.slug); // params.slug is now 'pearl-jam'
  },

  redirect(band) {
    if (band.description) {
      this.transitionTo('bands.band.details');
    } else {
      this.transitionTo('bands.band.songs');
    }
  }
});
