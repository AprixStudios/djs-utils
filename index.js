const Discord = require('discord.js');

class Utils {
    constructor (client) {
        if (!client) {
            throw new Error(`client is required, but isn't given.`);
        }
        if (!client.user) {
            throw new Error(`client is not valid.`);
        }
        this.client = client;
    }
    
    // Get User Function
    async getUser(mention, mentionOnly) {
        if (!mention) {
            throw new SyntaxError(`mention is required, but isn't defined.`);
        }
        if (typeof mention !== "string") {
            throw new TypeError(`mention is not a string.`);
        }
        return new Promise(resolve => {
            if (!mention) return resolve();
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                // if it is a mention it will do this
                mention = mention.slice(2, -1);
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
                return resolve(this.client.users.cache.get(mention));
            }
            else if (!mentionOnly && this.client.users.cache.get(mention)) {
                // if it is a id it will do this
                return resolve(this.client.users.cache.get(mention));
            } else {
                // if it isn't either of them it will do this
                if (!mentionOnly && this.client.users.cache.find(u => u.tag.toLowerCase().startsWith(mention.toLowerCase()))) {
                    // if it can find a user from the input it will do this
                    return resolve(this.client.users.cache.find(u => u.tag.toLowerCase().startsWith(mention.toLowerCase())));
                }
                else {
                    // if not it wont do anything
                    return resolve(null);
                }
            }
        });
    }

    // Get Role Function
    async getRole(mention, roles) {
        if (!mention) {
            throw new SyntaxError(`mention is required, but isn't defined.`);
        }
        if (typeof mention !== "string") {
            throw new TypeError(`mention is not a string.`);
        }
        if (!roles) {
            throw new SyntaxError(`roles is required, but isn't defined.`);
        }
        if (!roles.cache) {
            throw new TypeError(`roles is not a role list.`);
        }
        return new Promise(resolve => {
            if (!mention) return resolve();
            if (mention.startsWith('<&') && mention.endsWith('>')) {
                // if it is a mention it will do this
                mention = mention.slice(2, -1);
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
                return resolve(roles.cache.get(mention));
            }
            else if (roles.cache.get(mention)) {
                // if it is a id it will do this
                return resolve(roles.cache.get(mention));
            } else {
                // if it isn't either of them it will do this
                if (roles.cache.find(r => r.name.toLowerCase().startsWith(mention.toLowerCase()))) {
                    // if it can find a role from the input it will do this
                    return resolve(roles.cache.find(r => r.name.toLowerCase().startsWith(mention.toLowerCase())));
                }
                else {
                    // if not it wont do anything
                    return resolve(null);
                }
            }
        });
    }

    // Get Channel Function
    async getChannel(mention, channels) {
        if (!mention) {
            throw new SyntaxError(`mention is required, but isn't defined.`);
        }
        if (typeof mention !== "string") {
            throw new TypeError(`mention is not a string.`);
        }
        if (!channels) {
            throw new SyntaxError(`channels is required, but isn't defined.`);
        }
        if (!channel.cache) {
            throw new TypeError(`channels is not a channel list.`);
        }
        return new Promise(resolve => {
            if (!mention) return resolve();
            if (mention.startsWith('<#') && mention.endsWith('>')) {
                // if it is a mention it will do this
                mention = mention.slice(2, -1);
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
                return resolve(channels.cache.get(mention));
            }
            else if (channels.cache.get(mention)) {
                // if it is a id it will do this
                return resolve(channels.cache.get(mention));
            } else {
                // if it isn't either of them it will do this
                if (channels.cache.find(c => c.name.toLowerCase().startsWith(mention.toLowerCase()))) {
                    // if it can find a channel from the input it will do this
                    return resolve(channels.cache.find(c => c.tag.toLowerCase().startsWith(mention.toLowerCase())));
                }
                else {
                    // if not it wont do anything
                    return resolve(null);
                }
            }
        });
    }

    // Get Time Function
    getTime(s) {
        if (!s) {
            throw new SyntaxError(`s is required, but isn't defined.`);
        }
        if (typeof s !== "number") {
            throw new TypeError(`s is not a number.`);
        }
        // make the variables
        let ms = s % 1000;
        s = (s - ms) / 1000;
        let secs = s % 60;
        s = (s - secs) / 60;
        let mins = s % 60;
        s = (s - mins) / 60
        let hours = s % 24;
        let days = (s - hours) / 24;
    
        // put them together
        // it works I swear
        let displayTime;
        if (secs >= 10) displayTime = secs;
        else if (secs <= 9) displayTime = `0${secs}`;

        if (mins >= 10) displayTime = `${mins}:${displayTime}`;
        else if (mins <= 9) displayTime = `0${mins}:${displayTime}`;

        if (hours >= 10) displayTime = `${hours}:${displayTime}`;
        else if (hours <= 9) displayTime = `0${hours}:${displayTime}`;

        if (days > 0) displayTime = `${days}:${displayTime}`;

        return displayTime;

        //return `${hours}:${mins}:${secs}`;
    }

    getStringTime(s, dontUseMs) {
        if (!s) {
            throw new SyntaxError(`s is required, but isn't defined.`);
        }
        if (typeof s !== "number") {
            throw new TypeError(`s is not a number.`);
        }
        // make the variables
        if (dontUseMs !== true) {
            let ms = s % 1000;
            s = (s - ms) / 1000;
        }
        let secs = s % 60;
        s = (s - secs) / 60;
        let mins = s % 60;
        s = (s - mins) / 60
        let hours = s % 24;
        let days = (s - hours) / 24;
    
        // put them together
        // it works I swear
        let displayTime;
        if (s === 0 && secs === 0 && mins === 0 && hours === 0 && days === 0) displayTime = `Instant`;

        if (secs !== 0) displayTime = `${secs} ${secs > 1 ? "seconds" : "second"}`;
        
        if (mins !== 0) displayTime = `${mins} ${mins > 1 ? "minutes" : "minute"}${displayTime ? " "+displayTime : ""}`;

        if (hours !== 0) displayTime = `${hours} ${hours > 1 ? "hours" : "hour"}${displayTime ? " "+displayTime : ""}`;

        if (days !== 0) displayTime = `${days} ${days > 1 ? "days" : "day"}${displayTime ? " "+displayTime : ""}`;

        return displayTime;

        //return `${hours}:${mins}:${secs}`;
    }

    async setTime(time) {
        if (!time) {
            throw new SyntaxError(`time is required, but isn't defined.`);
        }
        if (typeof time !== "string") {
            throw new TypeError(`time is not a string.`);
        }
        let times = ['s', 'm', 'h', 'd', 'w'];
        return new Promise(resolve => {
            if (!time || !times.some(letter => time.toLowerCase().endsWith(letter)) || isNaN(time.slice(0,-1))) {
                return resolve(null);
            } else if (times.some(letter => time.toLowerCase().endsWith(letter)) && !isNaN(time.slice(0,-1))) {
                let timeInd;
                let timeAt = time.slice(-1);
                if (timeAt === 's') timeInd = 1000;
                if (timeAt === 'm') timeInd = 60000;
                if (timeAt === 'h') timeInd = 3600000;
                if (timeAt === 'd') timeInd = 86400000;
                if (timeAt === 'w') timeInd = 86400000*7;
                let timeMs = time.slice(0,-1);
                let timeMsAdd = timeMs*timeInd;
                let timeMS = Date.now()+timeMsAdd;
                return resolve(timeMS);
            }
        });
    }

    getPages(fullArr, pageNum, amountPerPage) {
        if (!fullArr) {
            throw new SyntaxError(`fullArr is required, but isn't defined.`);
        }
        if (typeof fullArr !== "array") {
            throw new TypeError(`fullArr isn't an array.`);
        }
        if (!pageNum) {
            throw new SyntaxError(`pageNum is required, but isn't defined.`);
        }
        if (typeof pageNum !== "number") {
            throw new TypeError(`pageNum is not a number.`);
        }
        if (!amountPerPage) amountPerPage = 5;
        let multiNum = Math.ceil(pageNum)-1;
        if (mutliNum < 0) multiNum = 0;
        let startNum = multiNum*amountPerPage;
        let pages = Math.floor(fullArr.length/5) >= multiNum ? fullArr.slice(startNum,startNum+amountPerPage) : fullArr.slice(0,amountPerPage);
        await pages;
        let pagesAmount = Math.ceil(fullArr.length/amountPerPage);
        let pagesObj = {pages: pages, amount: `${pageNum}/${pagesAmount}`};
        return pagesObj;
    }

    setCleanTitle(message, embed, title) {
        if (!message) {
            throw new SyntaxError(`message is required, but isn't defined.`);
        }
        if (!message.content || typeof message.content !== "string") {
            throw new TypeError(`message isn't a message object.`);
        }
        if (!embed) {
            throw new SyntaxError(`embed is required, but isn't defined.`);
        }
        if (!embed.type) {
            throw new TypeError(`embed isn't a MessageEmbed object.`);
        }
        if (!title) {
            throw new SyntaxError(`title is required, but isn't defined.`);
        }
        if (typeof title !== "string") {
            throw new TypeError(`title isn't a string.`);
        }
        if (!message.content.toLowerCase().endsWith(` -c`) && !message.content.toLowerCase().endsWith(` -clean`)) embed.setTitle(title);
    }

    setCleanFooter(message, embed, footer) {
        if (!message) {
            throw new SyntaxError(`message is required, but isn't defined.`);
        }
        if (!message.content || typeof message.content !== "string") {
            throw new TypeError(`message isn't a message object.`);
        }
        if (!embed) {
            throw new SyntaxError(`embed is required, but isn't defined.`);
        }
        if (!embed.type) {
            throw new TypeError(`embed isn't a MessageEmbed object.`);
        }
        if (!title) {
            throw new SyntaxError(`title is required, but isn't defined.`);
        }
        if (typeof title !== "string") {
            throw new TypeError(`title isn't a string.`);
        }
        if (!message.content.toLowerCase().endsWith(` -c`) && !message.content.toLowerCase().endsWith(` -clean`)) embed.setFooter(footer);
    }

    sendSafeEmbed(embed, channel) {
        if (!embed) {
            throw new SyntaxError(`embed is required, but isn't defined.`);
        }
        if (!embed.type) {
            throw new TypeError(`embed isn't a MessageEmbed object.`);
        }
        if (!channel) {
            throw new SyntaxError(`channel is required, but isn't defined.`);
        }
        if (!channel.type) {
            throw new TypeError(`channel isn't a channel object.`)
        }
        channel.send(embed).catch(err => {
            let fieldsToMsg = [];
            for (i=0;i<embed.fields.length;i++) {
                fieldsToMsg.push(`**${embed.fields[i].name}**: ${embed.fields[i].value}`);
            }
            let msgToSend = `${embed.author.name ? `${embed.author.name}\n` : ""}${embed.title ? `**${embed.title}**\n` : ""}${embed.description ? `${embed.description}\n` : ""}${fieldsToMsg.join('\n')}\n${embed.footer ? `\n${embed.footer}` : ""}`;
            channel.send(msgToSend).catch(error => {throw new Error(`Error from Discord.JS: ${error}`)});
        });
    }

    unHoist(name) {
        var isHoisted = true;
        var hoistedLetters = 0;
        while (isHoisted === true) {
            let firstLetter = name[0];
            let lettersArr = ["0", firstLetter].sort();
            if (lettersArr[0] === firstLetter && firstLetter !== "0") {
                name = name.slice(1);
                hoistedLetters++;
            } else if (lettersArr[1] === firstLetter) {
                isHoisted = false;
            }
        }
        return name;
    }
}

module.exports = { Utils }