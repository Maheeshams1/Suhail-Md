const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94704051516";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_58_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgxLFxuICAgICAgICA4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY1LFxuICAgICAgICA1OCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNixcbiAgICAgICAgODIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM3LFxuICAgICAgICA5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOCxcbiAgICAgICAgODIsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjExLFxuICAgICAgICA5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU4LFxuICAgICAgICA4MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OSxcbiAgICAgICAgODMsXG4gICAgICAgIDM0LFxuICAgICAgICAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDcyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlxQjlqTXhRVXNhTmtnL25PMmdMRW5zVDUyb3p2MUYwdEduSHgwb3BmTjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjA5MTMyNDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI2RTNEMzE5OUU1MEQ0MUVFQzBDRjNBMEEwQUFGMzMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTk5MTUyNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCa2dsR3p0QVR2aVBHOHpEZndPaGdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhiNDc4MzMxLWM5MTctNDM2NS1hYmFjLTNlYmVmN2FkMjEyMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDE4NCxcbiAgICAgIDEzMixcbiAgICAgIDEwMixcbiAgICAgIDE2MixcbiAgICAgIDAsXG4gICAgICAxMDMsXG4gICAgICAxNDQsXG4gICAgICAyNDIsXG4gICAgICAxNSxcbiAgICAgIDkxLFxuICAgICAgMTQzLFxuICAgICAgMTI5LFxuICAgICAgNzgsXG4gICAgICAxNjYsXG4gICAgICA0NCxcbiAgICAgIDE4NyxcbiAgICAgIDE2MixcbiAgICAgIDE4MixcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICAyMzgsXG4gICAgICAxMTEsXG4gICAgICAyNTQsXG4gICAgICAxNDMsXG4gICAgICAyNDgsXG4gICAgICAxNzQsXG4gICAgICAxNDIsXG4gICAgICAxMzgsXG4gICAgICAyMjEsXG4gICAgICA0MSxcbiAgICAgIDE1NyxcbiAgICAgIDEwMCxcbiAgICAgIDI0MSxcbiAgICAgIDUwLFxuICAgICAgNDksXG4gICAgICAyNDgsXG4gICAgICA5NyxcbiAgICAgIDIyLFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktENkVFTURCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MDkxMzI0NDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDE0MzM3MDkzMTQxMTI6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKL1F6dVlFRU51Q2pyVUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlQ3YW1haWtjM0dJeGtwODY2RU82dUFYa2NaQzRJcHh4NzRraDlKNE1nUlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQVlQSWxoMzN1dWhJTXlCN3BzZGJSL0hYWjVEaVRWOEVWODI1ZUhnRW0ranVETkZUbWJscjUxNm0xMC9jTy85cVkzMy90K2M2cVUzWTVtemgraytrQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMFBjSHRoOWZIOER2YTliUU9mN0tVNXFoemQrUjd3STNVRlZaYjVOb0t4Yld4TlQ4TDJIN0Q5UXBFeUE3dlhzTEVoN1NyM0RZT1VmWndNU21CRmV3aVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjA5MTMyNDQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxOTkxNTE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSmNGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKY0YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPMzk3VnFSbFNmRWxXTWJYTE5DRlNFUkJGWXc4R0tNWWUxeHVzeTB2Um9BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyODg5Mzk1NTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ -CP』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝗖𝗛𝗔𝗧𝗛𝗨𝗥𝗔",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
