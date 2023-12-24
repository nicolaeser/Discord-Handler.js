const { log } = require("../../../functions/logger");
const client = require("../../../bot");

module.exports = {
  event: "interactionCreate",
  /**
   *
   * @param {client} client
   * @param {import('discord.js').Interaction} interaction
   * @returns
   */
  run: (client, interaction) => {
    if (interaction.isButton()) {
      const component = client.collection.components.buttons.get(
        interaction.customId,
      );

      if (!component) return;

      try {
        component.run(client, interaction);
      } catch (error) {
        log(error, "error");
      }

      return;
    }

    if (interaction.isAnySelectMenu()) {
      const component = client.collection.components.selects.get(
        interaction.customId,
      );

      if (!component) return;

      try {
        component.run(client, interaction);
      } catch (error) {
        log(error, "error");
      }

      return;
    }

    if (interaction.isModalSubmit()) {
      const component = client.collection.components.modals.get(
        interaction.customId,
      );

      if (!component) return;

      try {
        component.run(client, interaction);
      } catch (error) {
        log(error, "error");
      }

      return;
    }
  },
};
