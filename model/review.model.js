const mongoose = require("mongoose");
const DB =
'mongodb+srv://galal:galal@cluster0.qpipnoy.mongodb.net/?retryWrites=true&w=majority';
const reviewSchema = mongoose.Schema({
    text:String
});
const Review = mongoose.model("review", reviewSchema);

exports.saveReview = text => {
    return new Promise((resolve,reject)=>{
        mongoose.connect(DB).then(()=>{
            let review = new Review({
                text:text
            })
            review.save()
            resolve()
        }).catch(err=>{
            reject(err)
        })
        
})}
exports.getComments = ()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(DB).then(()=>{
            Review.find({}).then(comments=>{
                resolve(comments)
            }).catch(err=>{
                reject(err)
            })
        })
})}