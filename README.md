# SmoochBot Examples

A set of example chat bots built on [smooch/smooch-bot](https://github.com/smooch/smooch-bot).

Before you get started with any of these samples, from this directory you should:

```
$ npm install
```

All of these samples use the same scipt defined in `script.js`. Feel free to play around with it as you go.

## Console Example (/console)

This is the simplest sample that runs via the command line and uses an in-memory store to track state.

![console](/img/console.gif)

To run it, simply:

```
$ node console
```

And start chatting with your bot on the command line.

## Heroku Example (/heroku)

This is an Express app that uses the Smooch web widget to provide the chat interface. The app makes use of `SmoochApiStore` and `SmoochApiBot` to persist conversation state and user properties via Smooch.

![heroku](/img/heroku.gif)

To deploy your own:

1. First, sign up for a free account at [smooch.io](https://app.smooch.io/signup)

1. With a new Smooch app created, go to the settings tab and take note of your App Token. Also, generate a new Secret Key, and take note of the key ID and secret.

    ![settings](/img/settings.png)

1. Deploy your app to Heroku using the button below. You'll need to specify your app token, key ID, and secret in the app's `SMOOCH_APP_TOKEN`, `SMOOCH_KEY_ID`, and `SMOOCH_SECRET` config settings.

    [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/smooch/smooch-bot-example)

1. Your app should now be running on Heroku but you're not quite done yet. Take note of the URL where your heroku app is running, for example `https://foo-bar-4242.herokuapp.com`. You'll need to specify this in your heroku app `SERVICE_URL` config variable. You can do this in the Heroku control panel under *Settings* > *Config Variables*, or if you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed you can do it like so:

        $ heroku config:set SERVICE_URL=https://foo-bar-4242.herokuapp.com -a foo-bar-4242

1. You should be all set. Open your Heroku app and start chatting with your new bot!

1. **Bonus:** Open the Smooch [control panel](https://app.smooch.io) and add more integraitons. You can add new user channels like Twilio SMS, or you can add Slack or HipChat which will let you join in on the conversation along side your bot. Pretty neat!

![slack](/img/slack.png)
