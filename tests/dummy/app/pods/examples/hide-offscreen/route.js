import Ember from 'ember';
import faker from 'faker';

export default Ember.Route.extend({
  model() {
    let users = [];
    for (let i = 0; i < 1000; i++) {
      let user = {
        displayName: faker.name.findName(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        company: faker.company.companyName()
      };

      users.push(user);
    }

    return users;
  }
});
