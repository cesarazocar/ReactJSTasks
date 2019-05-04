const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => { //cuando no le agregan nada (id)
    //otra opcion, se agrega async arriba y await antes del metodo
    const tasks = await Task.find();
    //   console.log(tasks);
    res.json(tasks);
    /*Task.find(function(err, tasks){
        console.log(tasks);
    });*/
    //otra forma de escribir lo mismo (que se usaba antes)  (data en vez tasks)    
    /*Task.find()
        .then(data => console.log(data))
        .catch(err => console.error(err))*/
    //otra forma

    //res.send('Hello word');
    /*res.json({
        status:'API Works!'
    });*/
});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

router.post('/', async (req, res) => {
    //crear modelo de datos 
    const { title, description } = req.body;

    //es igual que escribir title: title, description:description    
    const task = new Task({ title, description });
    await task.save();
    res.json({ status: 'Task Saved' });
});

router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    await Task.findOneAndUpdate(req.params.id, newTask); //id del que quiero autorizar, nuevos datos
    res.json({ status: 'Task Updated' });

});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ status: 'Task Deleted' });
});

router.get('/:id', async (req, res) => {
    await Task.findById(req.params.id);
});

module.exports = router;