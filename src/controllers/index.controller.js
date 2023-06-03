const indexCtrl = {};

indexCtrl.renderIndex = (req, res) =>{
    res.render('index')
};
indexCtrl.renderAbout = (req, res) =>{
    res.render('about')
};

indexCtrl.renderTerms = (req, res) =>{
    res.render('terms')
};

module.exports = indexCtrl;