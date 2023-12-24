const { readdirSync } = require("fs");
const { log } = require("../functions/logger");
const ExtendedClient = require("../bot");

/**
 *
 * @param {client} client
 */
module.exports = (client) => {
  for (const dir of readdirSync("../src/events/bot/")) {
    for (const file of readdirSync("../src/events/bot/" + dir).filter((f) =>
      f.endsWith(".js"),
    )) {
      const module = require("../events/bot/" + dir + "/" + file);

      if (!module) continue;

      if (!module.event || !module.run) {
        log(
          "Unable to load the event " +
            file +
            " due to missing 'name' or/and 'run' properties.",
          "warn",
        );

        continue;
      }

      log("Loaded new event: " + file, "info");

      if (module.once) {
        client.once(module.event, (...args) => module.run(client, ...args));
      } else {
        client.on(module.event, (...args) => module.run(client, ...args));
      }
    }
  }
};
