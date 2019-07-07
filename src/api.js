import faker from 'faker';

const users = [...new Array(1000)].map(() => ({
  id: faker.random.uuid(),
  avatar: faker.image.avatar(),
  username: faker.internet.userName(),
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
}));

export const fetchUsers = async authUser =>
  authUser && authUser.groups.includes('Admins')
    ? users.map(user => ({
        ...faker.helpers.userCard(),
        ...user,
      }))
    : users;
