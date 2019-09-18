const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CakesDB', { useNewUrlParser: true })

const ReviewSchema = new mongoose.Schema({
    rater: {type: String, required: true, minlength: 2},
    comment: {type: String},
    rating: {type: Number, required: true},
})

const CakeSchema = new mongoose.Schema({
    baker: {type: String, required: true, minlength: 2},
    imageUrl: {type: String, required: true},
    review: [ReviewSchema],
}) 

const cakes = mongoose.model('cakes', CakeSchema)
// const reviews = mongoose.model('reviews', ReviewSchema)

module.exports = cakes;
