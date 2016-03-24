'use strict';

const _ = require('lodash');
const Script = require('smooch-bot').Script;

const scriptRules = require('./script.json');

module.exports = new Script({
    processing: {
        //prompt: (bot) => bot.say('Beep boop...'),
        receive: () => 'processing'
    },

    start: {
        receive: (bot) => {
            return bot.say('So you want to learn about Esther? Just say HELLO to get started.')
                .then(() => 'speak');
        }
    },

    speak: {
        receive: (bot, message) => {
            let imessage = message.text.toUpperCase();

            switch (imessage) {
                case "CONNECT ME":
                    bot.setProp("silent", true);
                    break;
                case "DISCONNECT":
                    return bot.setProp("silent", false).then(() => {
                        return bot.say(scriptRules[imessage]).then(() => 'speak');
                    });
            }

            return bot.getProp("silent").then((isSilent) => {

                if (isSilent) {
                    return new Promise(() => 'speak');
                }

                if (!_.has(scriptRules, imessage)) {
                    return bot.say(`I didn't understand that.`).then(() => 'speak');
                }

                var response = scriptRules[imessage];

                // todo handle images

                return bot.say(scriptRules[imessage]).then(() => 'speak');

            });
        }
    },
});