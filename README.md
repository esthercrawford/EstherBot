# SmoochBot Examples

Before you get started with any of these samples, from this directory you should:

```
$ npm install
```

All of these samples use the same scipt defined in `script.js`. Feel free to play around with it as you go.

## console

This is the simplest sample that runs via the command line and uses an in-memory store to track state.

![console](/img/console.gif)

To run it, simply:

```
$ node console
```

And start chatting with your bot on the command line.

## smooch

This sample is an Express app that uses the Smooch web widget to provide the chat interface. The app makes use of `SmoochApiStore` and `SmoochApiBot` to persist conversation state and user properties via Smooch.

![heroku](/img/heroku.gif)

To deploy your own:

1. First, sign up for a free account at [smooch.io](https://app.smooch.io/signup)

1. With a new Smooch app created, go to the settings tab and take note of your App Roken. Also, generate a new Secret Key, and take note of the key ID and secret.

    ![settings](/img/settings.png)

1. Deploy your app to Heroku using the button below. You'll need to specify your app token, key ID, and secret in the app's `SMOOCH_APP_TOKEN`, `SMOOCH_KEY_ID`, and `SMOOCH_SECRET` config settings.

    [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/smooch/smooch-bot-example)

1. Your app should now be running on Heroku but you're not quite done yet. You'll need to create a Smooch webhook that will allow your app to react to message events coming from Smooch. To do this, first create a JWT. You can use the `jwt.js` script provided, like so:

        $ npm install
        $ export SMOOCH_KEY_ID=yourKeyId SMOOCH_SECRET=yourSecret
        $ export SMOOCH_JWT=`node jwt.js`

    Now run the following cURL command to create your webhook via the Smooch API (remember to replace `your-app-name` with your Heroku app's name):

        $ curl https://api.smooch.io/v1/webhooks \
             -X POST \
             -d '{"target": "https://your-app-name.herokuapp.com/webhook", "trigger": "message:appUser"}' \
             -H "content-type: application/json" \
             -H "authorization: Bearer $SMOOCH_JWT"


1. Open your Heroku app and start chatting with your new bot!

1. **Bonus:** Open the Smooch [control panel](https://app.smooch.io) and add more integraitons. You can add new user channels like Twilio SMS, or you can add Slack or HipChat which will let you join in on the conversation along side your bot. Pretty neat!

![slack](/img/slack.png)