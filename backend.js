const mongoose = require('mongoose');
// connect to telegram bot
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();
const token = process.env.TELEGRAM_TOKEN;


mongoose.connect()
const questSchema = new mongoose.Schema({
    tasks:{ type:Array, required:true },
    rewards:{ type:Array, required:true },
    chatId:{ type:Number, required:true },
    creator:{ type:String, required:true },
})

const Quests = mongoose.model('Quests', questSchema)

/*
    sample quest
    {
        tasks:[
            {
                id:'xxx-xx-xxx',
                name:'task 1',
                type:'comment',
                description:'comment on a post',
                meta:{
                    message_id:'xxx-xx-xxx',
                    chat_id:'xxx-xx-xxx',
                }
            },
            {
                id:'xxx-xx-xxx',
                name:'task 2',
                type:'react',
                description:'react on a post',
                meta:{
                    message_id:'xxx-xx-xxx',
                    chat_id:'xxx-xx-xxx',
                    allowedReactions:['👍','❤️','😂','😮','😢','😡'],
                }
            },
        ],
        rewards:[
            {
                id:'xxx-xx-xxx',
                name:'reward 1',
                type:'claim',
                description:'claim reward',
                value:1  
            },
            {
                id:'xxx-xx-xxx',
                name:'reward 2',
                type:'tlg_premium',
                description:'telegram premium',
                value:1  
            },
        ]
    }

*/



const bot = new TelegramBot(token, { polling: true });


const processMessage = (msg) => {
    const { chat, text, user: from, date, entities, message_id } = msg;
    console.log(msg)
}

bot.on('message', (msg) => {
    processMessage(msg)
});

bot.on('edited_message', (msg) => {
    processMessage(msg)
});
// reactions
bot.on('sticker', (msg) => {
    console.log('sticker')
    console.log(msg)
})



// const getMessageDetails = (msg) => {
    
//     //get single message from telegram servers
//     bot.getMessage(msg.chat.id, msg.message_id)
//     .then(message => {
//         console.log(message)
//     })
//     .catch(error => {
//         console.log(error)
//     })


// }



// getMessageDetails({chat: {id: -1002099163634}, message_id: 7})