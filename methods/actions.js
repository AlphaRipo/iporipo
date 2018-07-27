
var functions = {
    send_email: function (req, res) {
        console.log(req.body)
        
        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'roma.sumbadze@gmail.com',
                pass: 'goliminda'
            }
        });
        var message="";
        for(var attributename in req.body){
            message+=(attributename + ":" + req.body[attributename]+"\n\n");
            
        }
        var mailOptions = {
            from: 'roma.sumbadze@gmail.com',
            to: 'roma.sumbadze@alphait.us',
            subject:'RipMessage',
            text: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);

                res.json({success:false, msg:'Failed to send'})
            } else {
                console.log('Email sent: ' + info.response);

                return res.json({success:true, msg:'sent'})
                // return res.json(req.body)
            }
        });
    }

}

module.exports = functions;
