const client = require("../../bot");
const {log} = require('../../functions/logger')

client.on("shardReady", async (shardId, unavailableGuilds) => {
    log(`[Shard ${shardId}] Ready. Unaivailable Guilds: ${unavailableGuilds}`, "done")
})