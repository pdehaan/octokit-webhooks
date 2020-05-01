const { createWebhooksApi } = require("@octokit/webhooks");

require("dotenv").config();

const options = {
  secret: process.env.GH_WEBHOOK_SECRET,
};

const webhooks = new createWebhooksApi(options);

webhooks.on(["issues.opened", "issues.reopened"], ({ payload }) => {
  console.log("action:", payload.action);
  if (payload.issue) {
    console.log("\t", "issue.title:", payload.issue.title);
    console.log("\t", "issue.number:", payload.issue.number);
    console.log("\t", "issue.body:", payload.issue.body);
    console.log("\t", "issue.labels:", payload.issue.labels);
    console.log("\t", "issue.state:", payload.issue.state);
  }
  if (payload.user) {
    console.log("\t", "user.login:", payload.user.login);
  }
  if (payload.repository) {
    console.log("\t", "repository.full_name:", payload.repository.full_name);
    console.log("\t", "repository.html_url:", payload.repository.html_url);
  }
  console.log("");
});

webhooks.on("error", (error) => {
  console.log(
    `\n\n!!!Error occured in "${error.event.name} handler: ${error.stack}"\n\n`
  );
});

require("http").createServer(webhooks.middleware).listen(process.env.PORT);
