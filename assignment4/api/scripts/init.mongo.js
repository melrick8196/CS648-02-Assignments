/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo productTracker scripts/init.mongo.js
 * Atlas:
 */

/* global db print */
/* eslint no-restricted-globals: "off" */

db.products.remove({});

const initialProducts = [
  {
    id: 1,
    name: "Levi's",
    category: 'Jeans',
    price: '30',
    imageUrl: 'https://picsum.photos/500/500',
  },
  {
    id: 2,
    name: 'LV',
    category: 'Shirts',
    price: '30',
    imageUrl: 'https://picsum.photos/500/500',
  },
];

db.products.insertMany(initialProducts);
const count = db.products.count();
print('Inserted total of ', count, 'products');

db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });

db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ name: 1 });
db.products.createIndex({ price: 1 });
db.products.createIndex({ category: 1 });