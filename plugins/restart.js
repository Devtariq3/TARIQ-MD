const { cmd } = require("../command");
const { sleep } = require("../Tariq/functions");

cmd({
    pattern: "restart",
    desc: "Restart  TARIQ-MD",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { reply, isCreator }) => {
    try {
        if (!isCreator) {
            return reply("⛔ Only *TARIQ-MD's owner* can use this command.");
        }

        const { exec } = require("child_process");

        await reply("♻️ *Restarting system modules...*");
        await sleep(1000);
        await reply("⚙️ *Shutting down TARIQ-MD...*");
        await sleep(1000);
        await reply("💻 *Rebooting AI core... Please wait.*");
        await sleep(1000);
        await reply("✅ *TARIQ-MD is restarting now...*");

        exec("pm2 restart all");

    } catch (e) {
        console.error(e);
        reply(`❌ *Error:* ${e.message}`);
    }
});
          
