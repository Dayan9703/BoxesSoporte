const User = require("../models/User");

const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
};
indexCtrl.renderAbout = (req, res) => {
    res.render('about')
};

indexCtrl.renderTerms = (req, res) => {
    res.render('terms')
};

indexCtrl.renderAdmin = async (req, res) => {
    const user = req.user
    const data = await User.find()
    res.render('admin', { data });
};

module.exports = indexCtrl;