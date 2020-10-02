'use strict';

const getModel = async (id) => {
  return strapi.query('pages').findOne({id});
};

const generateUrl = (data) => {
  const {slug} = data;
  if (!data.parent || data.parent === '/') {
    data.url = slug;
  } else {
    data.url = data.parent.url;
  }
};

const isDirty = (model, data, attr) => {
  return model[attr] !== data[attr];
}

const flat = (data) => {

  const traverse  = () => {

  }
  if (!data.children || data.children.length === 0) {
    return 
  }

  traverse(data)
  
}

const updateDescendantsUrl = (data) => {

}

const beforeCreate = (data) => {
  generateUrl(data);
};

const beforeUpdate = async (params, data) => {
  const {id} = params;
  const model = await getModel(id);
  if (isDirty(model, data, 'slug')) {
    console.log(`should regenerate url`);
  }
};

module.exports = {
  beforeUpdate,
  beforeCreate,
  flat
};
