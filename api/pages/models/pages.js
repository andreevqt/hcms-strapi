'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */


module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      strapi.services['slug'].beforeCreate(data);
      strapi.services['nested-url'].beforeCreate(data);
    },

    async beforeUpdate(params, data) {
      strapi.services['slug'].beforeUpdate(params, data);
      await strapi.services['nested-url'].beforeUpdate(params, data);
    },
  },
};
