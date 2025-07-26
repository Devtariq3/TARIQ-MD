const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../inconnuboy/functions');
const config = require('../config');

cmd({
    pattern: "alive",
    alias: ["bot", "live"],
    desc: "Check bot is alive or not",
    category: "main",
    react: "🤍",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const status = `
> ╭───〔 *ALIVE* 〕───◉
> │✨ *Bot is Active & Online!*
> │
> │🧠 *Dev:* Tariq ❤️ 🔐 
> │⚡ *Version:* 1.0.0
> │📝 *Prefix:* [${config.PREFIX}]
> │📳 *Mode:* [${config.MODE}]
> │💾 *RAM:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
> │🖥️ *Host:* ${os.hostname()}
> │⌛ *Uptime:* ${runtime(process.uptime())}
> ╰────────────────────◉
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Tariq ❤️🔐*`;

        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/z6xhnh.jpeg` },
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363397722863547@newsletter',
                    newsletterName: 'TARIQ-MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Alive Error:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
  
