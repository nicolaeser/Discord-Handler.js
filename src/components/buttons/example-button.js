const { ButtonInteraction } = require("discord.js");
const bot = require("../../bot");

module.exports = {
  customId: "example-button",
  /**
   *
   * @param {client} client
   * @param {ButtonInteraction} interaction
   */
  run: async (client, interaction) => {
    await interaction.reply({
      content: "The button has been successfully responded!",
      ephemeral: true,
    });
  },
};
