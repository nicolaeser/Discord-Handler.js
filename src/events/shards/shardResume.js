const client = require("../../bot");
const {log} = require('../../functions/logger')

client.on("shardResume", async(shardId, replayedEvents) => {
    log(`[Shard ${shardId}] Resumed. ${replayedEvents}`, "info")

})