# octokit-webhooks

Testing @octokit/webhooks for bot excellence.

## SETUP

1. Clone repo and set your `GH_WEBHOOK_SECRET` and `PORT` environment variables in a .env file.
2. Deploy your server to The Cloud(tm) or test locally using something like ngrok (to start your proxy server locally on port 80, use <kbd>./ngrok http 80</kbd>). If you're using ngrok, don't forget to also start your Node service locally using <kbd>node gh-bot</kbd>.
3. Go to your `https://github.com/<user>/<repo>/settings/hooks` settings and click the "Add webhook" button.
4. Set your "Payload URL" to your deployed server or ngrok tunnel URL.
5. Set your "Content type" to "application/json".
6. Type/paste in the GitHub webhook secret that you set in your .env file above.
7. Select the events you want to trigger the webhook; in our case it will just be "Issues", but feel free to get a little silly with it.
8. When you're done, click the "Add webhook" button.
9.  If you get a delivery error, keep hacking and click the "Redeliver" button to retry. If you're using ngrok, there is a handy web interface on http://127.0.0.1:4040 that is useful for debugging requests and received payloads.
