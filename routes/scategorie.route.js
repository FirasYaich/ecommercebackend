const express = require('express');
const router = express.Router();
const scategorie=require("../models/scategorie")

//var express = require('express');
//var router = express.Router();

// afficher la liste des scategories.
router.get('/scat', async (req, res )=> {
    try {
        const cat = await scategorie.find();
        res.status(200).json(cat);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        });

// afficher la liste des scategories avec categrie.
router.get('/cat', async (req, res )=> {
    try {
        const cat = await scategorie.find().populate("categorieID");
        res.status(200).json(cat);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        });

// créer un nouvelle scatégorie
router.post('/', async (req, res) => {
    const { nomcategorie, imagecat} = req.body;
    const newScategorie = new scategorie({nomcategorie:nomcategorie,
    imagecat:imagecat})
    try {
        await newCategorie.save();
        res.status(200).json(newCategorie );
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        });

// chercher une scatégorie
router.get('/:scategorieId',async(req, res)=>{
});

// modifier une scatégorie
router.put('/:scategorieId', async (req, res)=> {
    const { nomcategorie, imagecategorie} = req.body;
    const id = req.params.categorieId;
    try {
    const cat1 = {
    nomcategorie:nomscategorie,imagecat:imagecat, _id:id };
    await Categorie.findByIdAndUpdate(id, cat1);
    res.json(cat1);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });

// Supprimer une scatégorie
router.delete('/:scategorieId', async (req, res)=> {
    const id = req.params.scategorieId;
    await Categorie.findByIdAndDelete(id);
    res.json({ message: "categorie deleted successfully." });
    });


module.exports = router;