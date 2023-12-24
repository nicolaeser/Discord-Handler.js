const {
  UserContextMenuCommandInteraction,
  ContextMenuCommandBuilder,
} = require("discord.js");
const ExtendedClient = require("../../../bot");

module.exports = {
  structure: new ContextMenuCommandBuilder()
    .setName("Test User command")
    .setType(2),
  /**
   * @param {client} client
   * @param {UserContextMenuCommandInteraction} interaction
   */
  run: async (client, interaction) => {
    await interaction.reply({
      content: "Hello user context command!",
    });
  },
};
