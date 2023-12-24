const client = require("../../bot");
const {log} = require('../../functions/logger')

client.on("shardReconnecting", (shardId) => {
    log(`[Shard ${shardId}] Reconnecting.`, "info")
})