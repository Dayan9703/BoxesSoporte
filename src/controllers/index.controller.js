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

indexCtrl.renderEditForm = async (req, res) => {
    const userEdit = await User.findById(req.params.id)
    res.render('users/edit-user', { userEdit });
};

indexCtrl.updateUser = async (req, res) => {
    const { userType } = req.body
    await User.findByIdAndUpdate(req.params.id, { userType })
    res.redirect('/admin')
}

module.exports = indexCtrl;