import Route from '@ember/routing/route';

export default Route.extend({
  // [Hint] Child routes inherit the model of their parent by default:
  // model: function() {
  //   return this.modelFor('bands.band');
  // }

  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    });
  },

  actions: {
    didTransition() {
      let band = this.modelFor('bands.band');
      document.title = `${band.name} songs - Rock & Roll`;
    }
  }
});
