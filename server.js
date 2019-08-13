const Koa = require('koa');
const KoaBody = require('koa-body');
const mongoose = require('mongoose');
const tasksRoutes = require('./routes/tasks');

const app = new Koa();

//MW
app.use(KoaBody())
app.use(tasksRoutes.routes())


//Connect to db
mongoose.connect('mongodb://localhost:27017/koa-todo', { useNewUrlParser : true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))

//Listening port
app.listen(3000, () => console.log('App listening on port 3000!'));
