'use strict';

const slugify = require('slugify');

const beforeCreate = (data) => {
  if (data.title) {
    data.slug = slugify(data.title, {lower: true});
  }
}

const beforeUpdate = (params, data) => {
  if (data.title) {
    data.slug = slugify(data.title, {lower: true});
  }
}

module.exports = {
  beforeCreate,
  beforeUpdate
};
