'use strict';
const SlackBot = require('slackbots');
const handleMessage = require('./handleMessage');
const token = 'your token';
const name = 'Stock Bot';
const icon_emoji = 'emoji code';
const bot = new SlackBot({
  token,
  name
});

const params = {
  icon_emoji
};
bot.on('start', () => {
  bot.postMessageToChannel('general', 'Hello', params);
});

bot.on('error', err => {
  throw err;
});

bot.on('message', data => {
  if (data.type !== 'message') {
    return;
  } else {
    handleMessage(data.text, bot, params);
  }
});
