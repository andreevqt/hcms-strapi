'use strict';

module.exports = {
  hello() {
    console.log(`hello`);
  },
  
  lifecycles: {
    async beforeCreate() {
      console.log('before create');
    }
  }
}
