const client = require("../../bot");
const {log} = require('../../functions/logger')

client.on("shardError", (error, shardId) => {
    log(`[Shard ${shardId}] Error. ${error}`, "err")
})