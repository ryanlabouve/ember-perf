import Mixin from '@ember/object/mixin';

export default Mixin.create({
  setupController() {
    // hack for root level route:applicaiton on an engine
    if (this._debugContainerKey === 'route:application' && this._handlerName.indexOf('engine') > -1) {
      return;
    }

    this.get('perfService').routeActivated(this);
    this._super(...arguments);
  },

  renderTemplate() {
    // hack for root level route:applicaiton on an engine
    if (this._debugContainerKey === 'route:application' && this._handlerName.indexOf('engine') > -1) {
      return;
    }

    this.get('perfService').routeWillRender(this);
    this._super(...arguments);
  }
});
