// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Products.belongsTo(Category, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Categories.hasMany(Products, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)

Products.belongsToMany(Tags, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)

Tags.belongsToMany(Products, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
