const Sequelize = require('sequelize');

const BlogModel = require('./models/blogPosts');

const sequelize = new Sequelize('5jGaN0Luov', '5jGaN0Luov', 'YzUZtwqp7E', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const Blog = BlogModel(sequelize, Sequelize);

sequelize.sync({force: false})
.then(() =>{
    console.log('tablas sincronizadas');
});

module.exports = {
    Blog
}