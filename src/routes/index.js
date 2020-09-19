const express = require('express');
const router = express.Router();  //leer doc de esta vola

router.get('/', (req, res) => {
    res.render('index.html', {title: 'Kasino'});
});
 
router.get('/ruleta', (req, res) => {
    res.render('ruleta.html', {title: 'Ruleta'});
});

router.get('/dados', (req, res) => {
    res.render('dados.html', {title: 'Dados'});
});

router.get('/moneda', (req, res) => {
    res.render('moneda.html', {title: 'Cara o Sello'});
});


module.exports = router;


