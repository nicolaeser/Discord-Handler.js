const client = require("../../bot");
const {log} = require('../../functions/logger')
client.on("shardDisconnect", (closeEvent, shardId) => {
    log(`[Shard ${shardId}] Disconnected. ${closeEvent}`, "err")
})