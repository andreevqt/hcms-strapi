'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */


const pluralize = require(`pluralize`);

module.exports = () => {
  pluralize.addPluralRule(/я$/i, `и`);
  pluralize.addPluralRule(/подразделение/i, `подразделения`);
  pluralize.addPluralRule(/пользователь/i, `пользователи`);
  pluralize.addPluralRule(/сотрудник/i, `сотрудники`);
  pluralize.addPluralRule(/должность/i, `должности`);
};
