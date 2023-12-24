const client = require(`../../bot.js`);
client.cluster.on("message", (message) => {
    //console.log(message);
    if (message._type !== message._type.CUSTOM_REQUEST) return; // Check if the message needs a reply
    if (message.alive) message.reply({ content: 'Yes I am!' });
});
setInterval(() => {
    client.cluster.send({ content: 'I am alive as well!' });
}, 5000);