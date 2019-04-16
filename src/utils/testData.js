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

export const generateServiceList = (count = 5) => {
  const services = [];
  for (let i = 0; i < count; i++) {
    services.push(generateService());
  }
  return services;
}

export const initialStateStore = {
    clients: [
      {name: 'Rose', services: [], registered_at: new Date()},
      {name: 'John', services: [], registered_at: new Date()},
      {name: 'Maria', services: [], registered_at: new Date()}
    ],
    services: [
      {name: 'Basic Facial', price: 55, category: 'facial'},
      {name: 'Deluxe Facial', price: 75, category: 'facial'},
      {name: 'Acne Treatment', price: 95, category: 'facial'},
      {name: 'Milk Peel', price: 330, category: 'facial'},
      {name: 'Men Hair Cut', price: 26, category: 'hair'},
      {name: 'Women Hair Cut', price: 35, category: 'hair'},
      {name: 'Children Hair Cut', price: 20, category: 'hair'},
      {name: 'Permanent Color', price: 68, category: 'hair'},
      {name: 'Scalp Treatment', price: 35, category: 'hair'},
      {name: 'Gel Nails', price: 35, category: 'nails'},
      {name: 'Acrylic Nails', price: 45, category: 'nails'},
      {name: 'Manicure', price: 20, category: 'nails'},
      {name: 'Pedicure', price: 30, category: 'nails'},
      {name: 'Hair Tincture', price: 20, category: 'products'},
      {name: 'Hair Tincture PRO', price: 40, category: 'products'},
      {name: 'Oil Hair Tretament 100ml', price: 25, category: 'products'},
      {name: 'Carolina Herrera Parfum', price: 100, category: 'others'},
      {name: 'Chocolate', price: 3, category: 'others'},
      {name: 'Coke', price: 5, category: 'others'}
    ],
    draggedService: {},
    serviceFilter: '',
    serviceCategoryFilter: ''
}
