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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_50_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICA0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY2LFxuICAgICAgICA5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NixcbiAgICAgICAgMjMwLFxuICAgICAgICA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNixcbiAgICAgICAgMjA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA2LFxuICAgICAgICA2MixcbiAgICAgICAgMTg2LFxuICAgICAgICA5NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg1LFxuICAgICAgICA5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgODUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NixcbiAgICAgICAgNzIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGRy9iL0J5cWFvd3hXOGFFOTFZWnFGdERyMllQT3gva0UrOG93cWRrRzRJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYc0JEcTdXUlJYS3Y4aG52c0VpS3RRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE0OWMyYjg2LTM5NmYtNDk1Mi04ZjVkLTYzNzgyMGYyMGJjOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDE3OCxcbiAgICAgIDUxLFxuICAgICAgMjQ1LFxuICAgICAgMTUyLFxuICAgICAgMjI1LFxuICAgICAgMjQyLFxuICAgICAgODQsXG4gICAgICAxNzQsXG4gICAgICA2MyxcbiAgICAgIDk5LFxuICAgICAgNjksXG4gICAgICA3NixcbiAgICAgIDIwOCxcbiAgICAgIDMyLFxuICAgICAgMzMsXG4gICAgICAxNTMsXG4gICAgICAxLFxuICAgICAgMTI4LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgNjMsXG4gICAgICAyLFxuICAgICAgMTM0LFxuICAgICAgMTM0LFxuICAgICAgMjQyLFxuICAgICAgMTk3LFxuICAgICAgMTYsXG4gICAgICAxNjksXG4gICAgICAyMCxcbiAgICAgIDEyLFxuICAgICAgNjQsXG4gICAgICAxOTIsXG4gICAgICAxNTYsXG4gICAgICAxMjIsXG4gICAgICAxNTMsXG4gICAgICAyMzYsXG4gICAgICAxNzMsXG4gICAgICA4LFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdSTDlCNllEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1NTgyMDEyMTA6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5Mzk2NDQxNDE1OTAzOjYwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0o3ZXVPc0NFSnpQMXJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRExxeWRXQkV6OUhVdEw4dkg2TitNYzJ5RHZYcGlVL2RXNUhNZm92SFJEQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFK3JHaFBqU1JyenF3RGNMdlRVNFdIcU05Ykg3M1k0aGpRcjZETWh2Z0tYNkUySHJsYm9zQmgxRkN0SlM4Q2lhQmFuUitra3BNVUYyRm5RdXBJeHZDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBbFFQYVl1SVM2TFVDVlFBczVWTkVjWTNoYXJhUzJjQ1lHbGFuejJ0cGtzU0lDYk5ISi9RWWxEbW95bzlMRE12UnZRdDNOa2VYSXk3N3c2TStIOVJEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1NTgyMDEyMTA6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDgzODA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFhOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIWE4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKWWRhWnJTdWxkeE1WdU12RERNRjA0UzRBWUtrWE9zclhnVEl6c05YY1pVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc2MjE5NTc0MSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
