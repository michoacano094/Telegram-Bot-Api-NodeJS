var TelegramBot = require('node-telegram-bot-api');

var token = '267809759:AAHT4vWihkVrsMvdBmRZUzfELjg04rRlp-w';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/texto (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  console.log(msg.from);
  var resp = match[1];
  bot.sendMessage(fromId, resp);
});


//Imagen
bot.onText(/\/imagen/, function (msg, match) {
  var fromId = msg.from.id;
  console.log(msg.from);
  var photo = './assets/images/lee.jpg';
  bot.sendPhoto(fromId, photo);
});
//Localizacion
bot.onText(/\/local/, function (msg, match) {
  var fromId = msg.from.id;
  console.log(msg.from);
  bot.sendLocation(fromId, 20.07482, -98.4033272);
});

//Documento
bot.onText(/\/documento/, function (msg, match) {
  var fromId = msg.from.id;
  console.log(msg.from);
  var document = './assets/images/IPv6.pptx';
  bot.sendDocument(fromId,document);
});


/*ny kind of message
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'cats.png';
  bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens'});
});*/