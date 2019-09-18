const cakes = require('./models');
// const reviews = require('./models');

module.exports = {
    allCakes: function (req, res) {
        console.log("all Cakes route");
        cakes.find()
            .then(data => res.json({ 'info': data }))
            .catch(err => res.json({'error': err}))
    },
    oneCake: function (req, res) {
        console.log("creating cakes route");
        cakes.findOne({ _id: req.params.id })
            .then(data => res.json({ 'info': data }))
            .catch(err => res.json({'error': err}))
    },
    createCake: function (req, res) {
        cakes.create(req.body)
            .then(data => res.json({ 'info': data }))
            .catch(err => res.json({'error': err}))
    },
    updateCake: function (req, res) {
        console.log("update Cakes route");
        console.log(req.params.id);
        console.log(`CAKE******************${JSON.stringify(req.params.id)}88888888888888888888888888888888CAKE`);
        console.log(req.body);
        console.log(`REview******************${JSON.stringify(req.body)}88888888888888888888888888888888Review`);

        cakes.updateOne({ _id: req.params.id }, { $push: { review: req.body }})//check to see if field name matches in models
            .then(data => res.json({ 'info': data }))
            .catch(err => res.json({'error': err}))
    },
    deleteCake: function (req, res) {
        cakes.remove({ _id: req.params.id })
            .then(data => res.json({ 'info': data }))
            .catch(err => res.json({'error': err}))
    },

    // reviewCake: function (req, res) {
    //     console.log(req.body);
    //     cakes.findByIdAndUpdate({_id: req.params.id}, {$push: {reviews: req.body}})
    //         .then(data => res.json({ 'info': data }))
    //         .catch(err => res.json({ 'error': err }))
    // },
}