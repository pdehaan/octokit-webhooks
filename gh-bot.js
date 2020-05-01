const WebhooksApi = require("@octokit/webhooks");
const webhooks = new WebhooksApi({
  secret: process.env.GH_WEBHOOK_SECRET,
});

webhooks.on("issues", ({ id, name, payload }) => {
  console.log(name, "event received");
  console.log(id);
  console.log(payload);
});

require("http").createServer(webhooks.middleware).listen(process.env.PORT);
