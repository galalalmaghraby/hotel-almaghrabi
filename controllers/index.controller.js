const nodemailer = require("nodemailer");

const {saveReview,getComments} = require('../model/review.model')

exports.getPage = (req,res,next)=>{
    getComments().then(comments=>{
        res.render('index',{comments:comments})
    })
}

exports.book = (req,res,next)=>{
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'galalashraf102@gmail.com',
            pass: 'wsfuocuuxbxbdsps'
        },
    });
    // make a message
    let message = `<div>
                        <em> phone  </em>
                        <br />
                        <em> ${req.body.phone} </em>
                        <hr />
                        <em> email  </em>
                        <br />
                        <em> ${req.body.email} </em>
                        <hr />
                        <em> rooms  </em>
                        <br />
                        <em> ${req.body.rooms} </em>
                        <hr />
                        <em> persons  </em>
                        <br />
                        <em> ${req.body.persons} </em>
                        <hr />
                   </div>
            `
    // send mail with defined transport object
        let info = transporter.sendMail({
            from: `galalashraf102@gmail.com`, // sender address
            to: `galalashraf102@gmail.com`, // list of receivers
            subject: "Book Room", // Subject line
            text: `Hello`,
            html: `${message}`, // html body
        })
    // to redirect
    res.redirect('/')
}
exports.review = (req,res,next)=>{
    saveReview(req.body.message).then(()=>{
        res.redirect('/')
    }).catch(err=>{
        console.log(err)
    })
}