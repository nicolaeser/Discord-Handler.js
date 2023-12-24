const { ClusterClient, getInfo } = require("discord-hybrid-sharding");
const process = require("node:process");
const ExtendedClient = require("../src/class/ExtendedClient");
require("dotenv").config();

const client = new ExtendedClient();
client.cluster = new ClusterClient(client);
module.exports = client;
client.start();

process.on("unhandledRejection", async (reason, promise) => {
  console.log(`Unhandled Rejection at:\n${promise}\nReason:\n${reason}`);
});

process.on("uncaughtException", (err) => {
  console.log(`Uncaught Exception:\n${err}`);
});

process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(`Uncaught Exception Monitor:\n${err}\n${origin}`);
});
