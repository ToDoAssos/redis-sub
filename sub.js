var redis = require("redis")
const config = {
    host: 'localhost',
    port: 6379,
    password: 'root'
}
var subscriber = redis.createClient(config)

subscriber.on("message", (channel, message) => {
  console.log("Message '" + message + "' on channel '" + channel + "' arrived!")
})

subscriber.subscribe("users channel")