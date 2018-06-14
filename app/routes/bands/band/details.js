import Route from '@ember/routing/route';

export default Route.extend({
  // [Hint] Child routes inherit the model of their parent by default:
  // model() {
  //   return this.modelFor("bands.band");
  // }

  resetController(controller) {
    controller.setProperties({
      isEditing: false,
    });
  },

  actions: {
    willTransition(transition) {
      if (this.controller.isEditing) {
        let leave = window.confirm('Are you sure?');
        if (!leave) {
          transition.abort();
        }
      }
    }
  }
});
