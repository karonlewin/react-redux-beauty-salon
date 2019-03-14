import faker from 'faker';

export const generateClient = () => ({
  services: [],
  registered_at: faker.date.past(),
  name: faker.commerce.productName(),
});

export const generateService = () => ({
  category: faker.lorem.word(),
  price: faker.commerce.price(),
  name: faker.commerce.productName(),
});

export const generateServiceList = (count = 4) => {
  const services = [];
  for (let i = 0; i < count; i++) {
    services.push(generateService());
  }
  return services;
}
