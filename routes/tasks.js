const Router = require('koa-router');
const router = new Router();
const Task = require('../models/Task');

router.get('/tasks', async ctx => {
    await Task.find({})
            .then(tasks => ctx.body = tasks)
            .catch(err => console.log(err))
});
router.post('/task/add', async ctx => {
    const { title } = ctx.request.body
    const newTask = new Task({
        title
    })
    await newTask.save()
            .then(task => ctx.body = task)
            .catch(err => console.log(err))
});
router.post('/task/remove/:id', async ctx => {
    const id = ctx.params.id
    await Task.findByIdAndDelete(id)
            .then(() => ctx.body = 'OK')
            .catch(err => console.log(err))
});
router.post('/task/update/:id', async ctx => {
    const id = ctx.params.id
    const newTask = {
        title : ctx.request.body.title
    }
    await Task.findByIdAndUpdate(id, newTask)
            .then(() => ctx.body = 'OK')
            .catch(err => console.log(err))
});


module.exports = router;