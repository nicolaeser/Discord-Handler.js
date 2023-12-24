const fs = require("fs");
const { log } = require('../functions/logger');
const client = require('../bot')
/**
 *
 * @param {client} client
 */
module.exports = (client) => {
    fs.readdirSync('./events/shards/').filter((file) => file.endsWith('.js')).forEach((event) => {
        require(`../events/shards/${event}`);
    })
    log(
        "Loaded Shard Events.",
        "done"
    );
};
