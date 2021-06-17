const router = require('express').Router();
const { Blog } = require('../../db');

// GET method
router.get("/", async (req, res) => {
    try {
        const post = await Blog.findAll({
            attributes: { 
                exclude:['content'],
            },            
            order: [ 
                ['createdAt', 'DESC']
            ],
        });
        return res.status(200).json(post);
    } catch (error) {
        return res.status(400).json(error);     
    }
});

 // GET ONE method
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const onePost = await Blog.findByPk(id);
    if (onePost) {
      return res.status(200).json(onePost);
    }
    return res.status(404).json({ mensaje: "post no encontrado" });
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ mensaje: error.message });
  }
});  

// POST method
router.post("/", async (req, res)=>{
    try {
      const post = await Blog.create(req.body);
      return res.status(200).json(post);  
    } catch (error) {
      console.log({error});
      return res.status(500).json({ mensaje: error.message });
    }
});

// PUT method
router.put("/:id", async (req, res) => {
  try {
    const { id = null } = req.params;
    if(!id) {
      return res.status(400).json({ mensaje: 'falta id' });  
    } 
    const postUpdate = await Blog.update(req.body, {
        where:{ id: req.params.id}
    });
    return res.status(204).json({mensaje: "post update"}, postUpdate);
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ mensaje: error.message });
  }
});

// DELETE method
router.delete("/:id", async (req, res) => {
  try {
    const { id = null } = req.params;
    if (!id) {
      return res.status(400).json({ mensaje: "falta id" });
    }
    await Blog.destroy({
        where: {id: req.params.id}
    });
    return res.status(204).json({mensaje: "post delete"});
  } catch (error) {
    console.log({ error });
    return res.status(500).json({ mensaje: error.message });
  }
});

module.exports = router;