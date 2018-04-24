import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

export default Mixin.create({
  perfService: computed(function() {
    return getOwner(this).lookup('service:ember-perf');
  }),

  // activate() {
  //   debugger;
  //   this.alreadyActived = true;
  //   this.get('perfService').routeActivated(this);
  //   this._super(...arguments);
  // },

  setupController() {
    // if (this.alreadyActivated) {
    //   this._super(...arguments);
    //   return;
    // }

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
