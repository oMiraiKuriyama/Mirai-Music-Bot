const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

let VOICE_CHANNEL = '000'; // Set this to the voice channel of your choice.
let message = context.params.event.content;

await lib.discord.voice['@0.0.1'].channels.disconnect({
  guild_id: `${context.params.event.guild_id}`
});
await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `Đã rời khỏi <#${VOICE_CHANNEL}>!`,
});
