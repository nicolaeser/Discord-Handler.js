const {
  Client,
  Partials,
  Collection,
  GatewayIntentBits,
} = require("discord.js");
const commands = require("../handlers/commands");
const shards = require("../handlers/shards");
const components = require("../handlers/components");
const events = require("../handlers/events");
const deploy = require("../handlers/deploy");
const { getInfo } = require("discord-hybrid-sharding");
const { PrismaClient } = require("@prisma/client");
const NodeCache = require("node-cache");

module.exports = class extends Client {
  collection = {
    interactioncommands: new Collection(),
    prefixcommands: new Collection(),
    aliases: new Collection(),
    components: {
      buttons: new Collection(),
      selects: new Collection(),
      modals: new Collection(),
    },
    prisma: new PrismaClient(),
    exampleCache: new NodeCache({
      stdTTL: 60,
      checkperiod: 3,
      deleteOnExpire: true,
    }),
  };
  applicationcommandsArray = [];

  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        //GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.AutoModerationExecution,
      ],
      partials: [
        Partials.Channel,
        Partials.Message,
        Partials.User,
        Partials.GuildMember,
        Partials.Reaction,
      ],
      shards: getInfo().SHARD_LIST,
      shardCount: getInfo().TOTAL_SHARDS,
      presence: {
        activities: [
          {
            name: "Hello",
            type: 4,
            state: "Test",
          },
        ],
      },
    });
  }

  start = async () => {
    commands(this);
    events(this);
    components(this);
    shards(this);

    await this.login(process.env.CLIENT_TOKEN);

    if (process.env.DEPLOY === true) deploy(this);
  };
};
