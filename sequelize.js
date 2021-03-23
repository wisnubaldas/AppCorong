const Sequelize = require('sequelize')
const UserModel = require('./models/user')
const BlogModel = require('./models/blog')
const TagModel = require('./models/tag')
const StatusModel = require('./models/status')
const StatusPhModel = require('./models/statusPh')

// const { Sequelize, Model, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
const sequelize = new Sequelize('mainDB', null, null, {    
  dialect: "sqlite",
  storage: './cancut.sqlite',
});


const User = UserModel(sequelize, Sequelize)
// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs
const BlogTag = sequelize.define('blog_tag', {})
const Blog = BlogModel(sequelize, Sequelize)
const Tag = TagModel(sequelize, Sequelize)
const Status = StatusModel(sequelize, Sequelize)
const StatusPh = StatusPhModel(sequelize, Sequelize)

Blog.belongsToMany(Tag, { through: BlogTag, unique: false })
Tag.belongsToMany(Blog, { through: BlogTag, unique: false })
Blog.belongsTo(User);

// table migrate
// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

module.exports = {
  User,
  Blog,
  Tag,
  Status,
  StatusPh,
}
// // cek koneksi
// sequelize
//   .authenticate()    
//   .then(function () {        
//     console.log('Koneksi ke db terlah berhasil.');    
//   })    
//   .catch(function (err) {        
//     console.log('Tidak dapat melakukan koneksi ke db: ', err);      
//   });

// const sequelize = new Sequelize('codementor', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'sqlite',
//   pool: {
//     max: 10,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// })
// mendefinisikan model
// const Job = sequelize.define('Job', {
//   name: Sequelize.STRING,
//   attack: Sequelize.INTEGER,
//   defence: Sequelize.INTEGER,
//   agility: Sequelize.INTEGER,
//   magic: Sequelize.INTEGER,
// });

// // sinkronasi skema db
// sequelize
//   .sync({ force: true })
//   .then(function () {
//       // pada saat callback ini di panggil table sudah dibuat
//       // dan kita sudah bisa memasukan data ke db
//       return Job.bulkCreate([
//           {
//               id: 1,
//               name: 'Warior',
//               attack: 100,
//               defence: 50,
//               agility: 30,
//               magic: 0,
//           },
//           {
//               id: 2,
//               name: 'Mage',
//               attack: 10,
//               defence: 20,
//               agility: 50,
//               magic: 100,
//           },
//       ]);

//   })
//   .then(function (jobs) {
//       console.log('data berhasil di masukan');
//   })
//   .catch(function (err) {
//       console.log('Error muncul saat membuat table: ', err);
//   });