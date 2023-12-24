const { Routes } = require("discord-api-types/v10");
const { REST } = require("@discordjs/rest");
const client = require("../bot");
const { log } = require("../functions/logger");
require("dotenv").config();

/**
 *
 * @param {client} client
 */
module.exports = async (client) => {
  const rest = new REST({ version: "10" }).setToken(
    process.env.DISCORD_BOT_TOKEN,
  );

  try {
    log(
      "Started loading application commands... (this might take minutes!)",
      "info",
    );

    await rest.put(
      process.env.GUILD_ID
        ? Routes.applicationGuildCommands(
            process.env.DISCORD_BOT_ID,
            process.env.GUILD_ID,
          )
        : Routes.applicationCommands(process.env.DISCORD_BOT_ID),
      { body: client.applicationcommandsArray },
    );

    log("Successfully loaded application commands to Discord API.", "done");
  } catch (e) {
    log("Unable to load application commands to Discord API.", "err");
  }
};
