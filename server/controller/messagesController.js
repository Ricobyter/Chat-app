const messageModel = require('../model/messageModel')
const CryptoJS = require("crypto-js");

module.exports.addMessage = async (req, res, next) => {
    try {
        const { from, to, message } = req.body;

        // Encrypt the message
        const encryptedMessage = CryptoJS.AES.encrypt(message, 'secret_key').toString();

        const data = await messageModel.create({
            message: { text: encryptedMessage },
            users: [from, to],
            sender: from,
        });

        if (data) {
            return res.json({ msg: "Message added successfully." });
        } else {
            return res.json({ msg: "Failed to add message to database" });
        }
    } catch (ex) {
        next(ex);
    }
};

// module.exports.addMessage = async(req, res, next) => {
// try{
// const{from, to, message} = req.body;
// const data  = await messageModel.create({
//     message: {text: message},
//     users: [from, to],
//     sender: from,
// });
// if(data){
//     return res.json({msg: "Message added succesfully."})
// } else {
//     return res.json({msg: "Failed to add message to database"})
// }
// }catch(ex){
//  next(ex)
// }
// };

// module.exports.getAllMessage = async(req, res, next) => {
//   try{
//      const{from, to} = req.body;
//      const messages = await messageModel.find({
//         users : {
//             $all : [from, to]
//         },
//      }).sort({updatedAt: 1});
//     const projectMessages = messages.map((msg) =>{
//         return {
//             fromSelf : msg.sender.toString() === from,
//             message : msg.message.text
//         }
//     });
//     res.json(projectMessages);

//   }catch(ex){
//     next(ex)
//   } 
// };

module.exports.getAllMessage = async (req, res, next) => {
    try {
        const { from, to } = req.body;
        const messages = await messageModel.find({
            users: {
                $all: [from, to]
            },
        }).sort({ updatedAt: 1 });

        const projectMessages = messages.map((msg) => {
            // Decrypt the message
            const decryptedMessage = CryptoJS.AES.decrypt(msg.message.text, 'secret_key').toString(CryptoJS.enc.Utf8);
            return {
                fromSelf: msg.sender.toString() === from,
                message: decryptedMessage
            };
        });

        res.json(projectMessages);

    } catch (ex) {
        next(ex);
    }
};