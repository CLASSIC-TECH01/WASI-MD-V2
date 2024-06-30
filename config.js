//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "2348171139637";
global.owner = process.env.OWNER_NUMBER || "2348171139637";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NCMEZEemZSZ2VRU05uNE5IL29lY200RlplLzVxZy9pdXV1bEFvbWlIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2JGcGN1UWVDY0lQMFhnT2tJUGdvaDZTbXpLSit6WTN0WDY4M00weGpuRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRVpRd3FMd3hwYVVISnNhai9PWEZZMGFLdkZ5NTVUZGg2NHI5VFpLMjJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIWUZHWkRlSzByZGdwaGR0NzBCczVBU1ZJUnp2NThoUU83bklKTkZjeGgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitGR2NleFBaTXhnc29sSWs3VnhuZ08rV2pWY0NVMTkyckhKWm95dGxjM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNWSUFMeUlDRWxnSGU3Q2F2OGJFWURCaFloMXc4WGpLdTBZUlFtc2oyem89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUR3RkZsdjZoVjJaOHJSTWVha1ZSMlV6eXFxdCtwN0JXbCt1N0dXUDJXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzJvbnZ4c3RXcFJPTzhwK1RENjZzeHBERFlzMVh5NjRyVE04MFNyMWUxQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFSejFWZEtPMWJySVRtcWo0OTF5L3JLRjBQTVhBNWd4U1VUdkNTay90NHgyUWp4dFhrWFhQTVB1ekVzazQrVUNGQnROR2ozNHBNVDMwdGkwbDVNUkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ0LCJhZHZTZWNyZXRLZXkiOiIyaTdnUVcwWWFXODFyWndpSXpNWXg1WlN5RlFYR2JlRU15Rkphb00wdnNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItTVlGdW8wZ1JtLVJoVTZMa09CVE1BIiwicGhvbmVJZCI6ImU4N2YyYWE4LTFlYjMtNGVjZC05NWQ5LTQzNDU0MGQ1NjdiYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGUkMwTEFtYjVQUHlLdlEvUzlabjFDbjAxZFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0hVRWtIQS8yUHA4QmxISkowYjdGT3h2enBvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlEyR0NWUFo2IiwibWUiOnsiaWQiOiIyMzQ4MTcxMTM5NjM3OjI5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNsYXNzaWMgR3V5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNQ2JtdDhERU11Vmc3UUdHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJUTFNrVVozN3Q0VXJxSURnQXBPMTlSVm4xa2dnbDhrZWZLWVQ4cGM0WEdRPSIsImFjY291bnRTaWduYXR1cmUiOiI5U0ZUSGJxZjJ6V1FMUmNOWEp0dGREbGpkQUt3SExSSHdlMXJZUEZDcjZ6YUxhcWxrUW8vZ1RsdFN3K1pWbUJuemZmZWNyQ3F5N25FVWtjOTZjQ3ZCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicWNaQTByaUR6VnJML0Z2MS95cWh0SG9SZU9tdVNRZFhmTnlaZmFmL29lVmNTNHIvMmpudE9PRmxBaUFxd0ROcFhXUDZaZVJ5UDVsZ3hRTU80WUVvQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTcxMTM5NjM3OjI5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlV5MHBGR2QrN2VGSzZpQTRBS1R0ZlVWWjlaSUlKZkpIbnltRS9LWE9GeGsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk3MTY1Njh9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝘾𝙇𝞓𝙎𝙎𝞘𝘾-𝙏𝞢𝘾𝞖",
  author: process.env.PACK_AUTHER || "CLASSC GUY 😎",
  packname: process.env.PACK_NAME || "𝘾𝙇𝞓𝙎𝙎𝞘𝘾-𝙏𝞢𝘾𝞖",
  botname: process.env.BOT_NAME || "𝘾𝙇𝞓𝙎𝙎𝞘𝘾-𝙏𝞢𝘾𝞖",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
