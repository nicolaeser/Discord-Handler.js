const { log } = require("../../../functions/logger");
const client = require("../../../bot");

module.exports = {
  event: "ready",
  once: true,
  /**
   *
   * @param {client} _
   * @param {import('discord.js').Client<true>} client
   * @returns
   */
  run: (_, client) => {
    log("Logged in as: " + client.user.tag, "done");
  },
};
