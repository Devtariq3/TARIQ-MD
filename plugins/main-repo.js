const fetch = require('node-fetch');
const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch GitHub repository information",
    react: "📂",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/Devtariq3/TARIQ-MD';

    try {
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
        const repoData = await response.json();

        // Format 1: Classic Box
        const style1 = `╭──『 𝙏𝘼𝙍𝙄𝙌-𝙈𝘿 』──⳹
│
│ 📦 *Repository*: ${repoData.name}
│ 👑 *Owner*: ${repoData.owner.login}
│ ⭐ *Stars*: ${repoData.stargazers_count}
│ ⑂ *Forks*: ${repoData.forks_count}
│ 🔗 *URL*: ${repoData.html_url}
│
│ 📝 *Description*:
│ ${repoData.description || 'No description'}
│
╰────────────────⳹
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Tariq ❤️🔐*`;

    

        // Format 4: Code Style
        const style4 = `
┌──────────────────────┐
│  🤴 TARIQ MD  🤴 
├──────────────────────
│ • Name: ${repoData.name}
│ • Owner: ${repoData.owner.login}
│ • Stars: ${repoData.stargazers_count}
│ • Forks: ${repoData.forks_count}
│ • URL: ${repoData.html_url}
│ • Desc: ${repoData.description || 'None'}
└──────────────────────┘
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ inconnu boy*`;

        // Format 5: Modern Blocks
        const style5 = `▰▰▰▰TARIQ-MD▰▰▰▰

  🏷️  *${repoData.name}*
  👨‍💻  ${repoData.owner.login}
  
  ⭐ ${repoData.stargazers_count}  ⑂ ${repoData.forks_count}
  🔗 ${repoData.html_url}
  
  📜 ${repoData.description || 'No description'}
  
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ inconnu boy*`;

        // Format 6: Retro Terminal
        const style6 = `
╔══════════════════════╗
║ 🤴   TARIQ MD   🤴
╠══════════════════════╣
║ NAME: ${repoData.name}
║ OWNER: ${repoData.owner.login}
║ STARS: ${repoData.stargazers_count}
║ FORKS: ${repoData.forks_count}
║ URL: ${repoData.html_url}
║ DESC: ${repoData.description || 'None'}
╚══════════════════════╝
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Tariq ❤️🔐*`;

        

        // Format 8: Social Media Style
        const style8 = `✦ TARIQ MD ✦

📌 *${repoData.name}*
👤 @${repoData.owner.login}

⭐ ${repoData.stargazers_count} Stars | ⑂ ${repoData.forks_count} Forks
🔄 Last updated: ${new Date(repoData.updated_at).toLocaleDateString()}

🔗 GitHub: ${repoData.html_url}

${repoData.description || 'No description available'}

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Tariq ❤️🔐*`;


        // Format 10: Professional
        const style10 = `
┏━━━━━━━━━━━━━━━━━━┓
 🥷REPOSITORY REPORT🥷
┗━━━━━━━━━━━━━━━━━━┛

✦ Project: ${repoData.name}
✦ Maintainer: ${repoData.owner.login}
✦ Popularity: ★ ${repoData.stargazers_count} | ⑂ ${repoData.forks_count}
✦ Last Update: ${new Date(repoData.updated_at).toLocaleDateString()}
✦ URL: ${repoData.html_url}

Description:
${repoData.description || 'No description provided'}

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ Tariq ❤️🔐*`;

        const styles = [style1, style4, style5, style6, style8, style10];
        const selectedStyle = styles[Math.floor(Math.random() * styles.length)];

        // Send image with repo info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/z6xhnh.jpeg` },
            caption: selectedStyle,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363397722863547@newsletter',
                    newsletterName: 'TARIQ-MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        
    } catch (error) {
        console.error("Repo command error:", error);
        reply(`❌ Error: ${error.message}`);
    }
});

  
