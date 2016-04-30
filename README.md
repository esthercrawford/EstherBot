# EstherBot built using the Smooch Bot example
If you want a slightly more sophisticated setup and are comfortable using the console then go see the original here: https://github.com/smooch/smooch-bot-example 

## Build Your Bot

Creating this version will give you a web based chat app. With a few integrations inside of Smooch (like Twilio) you can have your bot talking on other platforms too including SMS, Facebook, and Telegram.  

![heroku](/img/heroku.gif)

## Get Started:

1. First, sign up for a free account at [smooch.io](https://app.smooch.io/signup)

1. With a new Smooch app created, go to the settings tab and take note of your App Token. Also, generate a new Secret Key, and take note of the key ID and secret.

    ![settings](/img/settings.png)

1. Deploy your app to Heroku using the button below. It's a service for hosting apps so go sign up if you don't already have an account – it's free. You'll need to specify your app token, key ID, and secret in the app's `SMOOCH_APP_TOKEN`, `SMOOCH_KEY_ID`, and `SMOOCH_SECRET` config settings.

    [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/esthercrawford/estherbot)

1. Your app should now be running on Heroku but you're not quite done yet. Take note of the URL where your heroku app is running, for example `https://foo-bar-4242.herokuapp.com`. You'll need to specify this in your heroku app `SERVICE_URL` config variable. You can do this in the Heroku control panel under *Settings* > *Config Variables*. Make sure to go under Deploy and connect to your GitHub repo. Then, enable Automatic Deploys from the master branch (this means anytime you make an edit to your bot's script, it'll automatically update and talk as intended in seconds.) 

1. You should be all set. Open your Heroku app and start chatting with your new bot!

##Teach Your Bot To Talk
Now that you have a bot you need to decide what it'll say. That's where the file script.json comes in. It's the document you need to edit to make your bot talk.

By clicking on the pencil icon you can edit the document. The keywords are on the left, and the bot's response is on the right. For example, if a user types "hello" then the bot will say "Sweet, let's do this..."

Keywords are not case sensitive for users.

The only two keywords you don't want to change are CONNECT ME and DISCONNECT. CONNECT ME turns the automated chat off, so the bot will stop responding to keywords. DISCONNECT will turn the bot back on. 

Also, the initial script starts with "So you want to learn about Esther? ..." but of course you'll want to change it. You can edit it in the script.js file.

##Add line breaks to your messages
If you want your bot's responses to be broken into different bubbles you'll need to add \n.
Here's an example: Hi there!\nI’m the personal bot of Esther, a Product Marketer from San Francisco.

Now that message will be broken into two bubbles. First, it'll say "Hi there!" then it'll say "I'm the personal bot of Esther, a Product Marketer from San Francisco."

##Add images to your messages
Adding pictures is super easy. Make sure you upload the files to your img folder. Then click on the image and select Raw to get the link for your image.

To add a photo you'll need to add: ![name of image](imageurl)\n

Here's an example: Hi there!\nI’m the personal bot of Esther, a Product Marketer from San Francisco.\n![esther](https://raw.githubusercontent.com/esthercrawford/smooch-bot-example/master/img/esther.jpg)\n

##Add buttons to your messages
On Facebook Messenger these buttons are called "structured messages". It makes it easier for your user to follow the script. They don't even have to type the keywords - they just have to select a button. That means fewer user errors and less frustration.

In the script.json file you'll notice this: %[I'm here for the bot](postback:here_for_the_bot)

What you need to know is that's a button. The "I'm here for the bot" piece is what the button says. The postback reference is for you to know what the button does.

Here's the syntax for a button that sends a user to an external link: %[Tweet Esther](http://bit.ly/estherbot-tweet)

Notice "Tweet Esther" is what the button says, and then inside the parenthesis you find where the button links off to.

##Bring it altogether
Read the code below and you'll see there are line breaks, an image, and 3 buttons in this bot's response.   

"BOT": "Hi there!\nI’m the personal bot of Esther, a Product Marketer from San Francisco.\n![esther](https://raw.githubusercontent.com/esthercrawford/smooch-bot-example/master/img/esther.jpg)\nWant to know more about bots or learn about Esther? %[I'm here for the bot](postback:here_for_the_bot) %[Learn about Esther](postback:learn_about_esther) %[One random fact!](postback:random_fact)",

##Bonus
Open the Smooch [control panel](https://app.smooch.io) and add more integrations. You can add new user channels like Twilio SMS, or you can add Slack or HipChat which will let you join in on the conversation along side your bot. Pretty neat!

![slack](/img/slack.png)
