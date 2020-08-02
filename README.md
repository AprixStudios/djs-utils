<h1 align="center">Welcome to djs-utils 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/AprixStudios/DJS-Utils#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/AprixStudios/DJS-Utils/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/AprixStudios/DJS-Utils/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/AprixStudios/djs-utils" />
  </a>
  <a href="https://twitter.com/Aprixiaa" target="_blank">
    <img alt="Twitter: Aprixiaa" src="https://img.shields.io/twitter/follow/Aprixiaa.svg?style=social" />
  </a>
</p>

> Some handy utilities for discord.js bots

### 🏠 [Homepage](https://github.com/AprixStudios/DJS-Utils#readme)

## Install

```sh
npm install djs-utilities
```

## Docs

#### Initialization:
```js
const Discord = require('discord.js');
const client = new Discord.Client();
const djsUtils = require('djs-utilities');
const utils = new djsUtils.Utils(client);
```


#### getUser

Get a Discord User securily using mention, name, or id.

| Parameters | Type | Optional | Description | Example |
| --- | --- | --- | --- | --- |
| mention | < User Mention, String > | No  | Preferably pass an argument from your arguments array. | `args[0]` |

**Returns:** UserObject

#### getRoles

Get a Discord Roles securily using mention, name, or id.

| Parameters | Type | Optional | Description | Example |
| --- | --- | --- | --- | --- |
| mention | < Role Mention, String > | No  | Preferably pass an argument from your arguments array. | `args[1]` |
| roles | < RoleManager > | No  | Must pass `guild.roles` | `guild.roles` |

**Returns:** RoleObject

#### getChannels

Get a Discord Channel securily using mention, name, or id.

| Parameters | Type | Optional | Description | Example |
| --- | --- | --- | --- | --- |
| mention | < Channel Mention, String > | No  | Preferably pass an argument from your arguments array. | `args[0]` |
| channels | < GuildChannelManager> | No  | Must pass `guild.channels` | `guild.channels` |

**Returns:** ChannelObject

#### getTime

Get a sufficient time, from ms, in a format that wont trigger OCD.

| Parameters | Type | Optional | Description | Example |
| --- | --- | --- | --- | --- |
| s   | < Number > | No  | Must be a number, as it will calculate the time from the millisecond input in this parameter. Advice: Use `endtime-Date.now()` | `res.endTime-Date.now()` |

**Returns:** String

#### setTime

Set a sufficient endtime with the choices `s`, `m`, `h`, `d`, `w`, which you can work our what does.

| Parameters | Type | Optonal | Description | Example |
| --- | --- | --- | --- | --- |
| time | < String > | No  | Must be a string as it uses both numbers and variables in the same parameter. | `args[1]` |

**Returns:** Number (milliseconds)

#### getPages

Easily get pages for your large lists.

| Parameters | Type | Optional | Description | Example |
| --- | --- | --- | --- | --- |
| fullArr | < Array > | No  | The array of which to make the pages from. | `['apple', 'pineapple', 'orange', 'grape', 'melon', 'avocado']` |
| pageNum | < Number > | No  | The page requested. | `1` |
| amountPerPage | < Number > | Yes | The amount of items per page. Please keep this consistent for the people with OCD. `default: 5` | `10` |

**Returns:** Object: {pages: pages, amount: \`\${pageNum}/\${pagesAmount}\`}

#### setCleanTitle & setCleanFooter

Check if a message ends with `-c` or `-clean`, if it does, this will make it not make a title/footer, if it does not, it will create the title/footer.

| Parameters | Type | Optional | Description | Example |
| --- | --- | --- | --- | --- |
| message | < MessageObject > | No  | The message object, of which it checks the content for. | `message` |
| embed | < MessageEmbed > | No  | The embed of which to make clean/not clean. | `embed` |
| title/footer | < String > | No  | The title/footer to put in the embed if it's not clean. | `Banned!` |

**Returns:** Promise: It sets the values in the embed.

#### sendSafeEmbed

In case the bot doesn't have permissions to send embeds, this function will try sending it. If it can't, it will send it as a normal message.

| Parameters | Type | Optional | Description | Example |
| --- | --- | --- | --- | --- |
| embed | < MessageEmbed > | No  | The embed of which we're trying to send. | `embed` |
| channel | < ChannelObject > | No  | The channel of where we will send the embed/message. | `channel` |

**Returns:** Promise: It sends the embed and sends it as a message if no perms for embeds.

## Author

👤 **AprixStudios**

* Website: https://aprixstudios.xyz/
* Twitter: [@Aprixiaa](https://twitter.com/Aprixiaa)
* Github: [@AprixStudios](https://github.com/AprixStudios)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/AprixStudios/DJS-Utils/issues). 

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/Aprixia">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License

Copyright © 2020 [AprixStudios](https://github.com/AprixStudios).<br />
This project is [MIT](https://github.com/AprixStudios/DJS-Utils/blob/master/LICENSE) licensed.