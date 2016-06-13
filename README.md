# EstherBot built using the Smooch Bot example
If you want a slightly more sophisticated setup and are comfortable using the console then go see the original here: https://github.com/smooch/smooch-bot-example 

Or if you want to test out EstherBot live go say hi on your platform of choice:
http://estherbot.com

# Build Your Bot

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

Here's an example of the syntax for adding an image: 

    Hi there!\nI'm the personal bot of Esther, a Product Marketer from San Francisco.\n![esther](https://raw.githubusercontent.com/esthercrawford/EstherBot/master/img/esther.jpg)

##Add buttons to your messages
On Facebook Messenger these buttons are called "structured messages". It makes it easier for your user to follow the script. They don't even have to type the keywords - they just have to select a button. That means fewer user errors and less frustration.

In the script.json file you'll notice this: 

    %[Tweet Esther](http://bit.ly/estherbot-tweet)

This is a smiple link button. When the user taps it, they will open the link in a new browser window.

If you want to have a button trigger your bot to do something, you can use a postback buttons that looks like this:

    %[Tell her](postback:twitter)

The syntax is similar to a link button, but note the `postback:` prefix. The "Tell her" piece is what the button says, and the "twitter" part after the `postback:` prefix is an extra note you can include in the notificaiton your bot receieves when the user taps the button.

⚠️ **Note:** Postback buttons work using Smooch webhooks. This means that your bot needs to be deployed to heroku before the buttons will do anything. If you want to test your bot on your local machine you'll have to use a tunnel service such as [ngrok.io](https://ngrok.io) to make your internet visible, and set your local `SERVICE_URL` environment variable appropraitely. For more information bout postbacks, you can check out the Smooch docs here:

- Postbacks: http://docs.smooch.io/#postbacks
- Webhooks: http://docs.smooch.io/rest/#webhooks

The good news is Estherbot is clever, and simplifies much of this! Estherbot [will automatically](https://github.com/esthercrawford/EstherBot/blob/master/heroku/index.js#L113) accept postback events and treat them as if they were a keyword sent by the user. For example, when a user taps a postback button such as `%[Tell her](postback:twitter)` Estherbot will react as if they had typed out the message `Tell her`.

##Bring it altogether
Read the JSON below and you'll see there are line breaks, an image, and 3 buttons in this bot's response.   

    {
        "BOT": "Hi there!\nI’m the personal bot of Esther, a Product Marketer from San Francisco.\n![esther](https://raw.githubusercontent.com/esthercrawford/smooch-bot-example/master/img/esther.jpg)\nWant to know more about bots or learn about Esther? %[I'm here for the bot](postback:here_for_the_bot) %[Learn about Esther](postback:learn_about_esther) %[One random fact!](postback:random_fact)"
    }

⚠️ **Note:** If you're not familiar with the JSON syntax you can always paste your script into http://jsonlint.com/ to make sure your syntax in order.

##Bonus
Open the Smooch [control panel](https://app.smooch.io) and add more integrations. You can add new user channels like Twilio SMS, or you can add Slack or HipChat which will let you join in on the conversation along side your bot. Pretty neat!

![slack](/img/slack.png)

# Troubleshooting your bot

Is your bot misbehaving? Not working? Here are some steps you can follow to figure out what's going wrong.

**Warning:** command line instructions incoming. You may not be accustomed to using the command line but don't worry, it's much easier than you think.


## Check your bot's logs on heroku

If there's a bug in your code, checking the heroku logs is the best way to figure out what's going wrong. Here's how:

1. Install the heroku toolbelt: https://toolbelt.heroku.com/ These are power tools that let you do a lot more than what Heroku dashboard alone allows.

2. Next, open your preferred terminal app. On OSX the default Terminal app will work fine here.

3. Log in to the heroku toolbelt with the following command:

        heroku login

    If the command heroku isn't found, try restarting your terminal app. Once logged in you should be able to list all of your heroku apps like so:

        heroku apps

    which should give you something like this:

        $ heroku apps
        === My Apps
        your-app

4. Now you can check the logs of your heroku app like so:

        heroku logs -a your-app

    This will give you a dump of your most recent app logs. They will look something like the following. Can you spot the error below?

        2016-05-09T14:08:34.966358+00:00 heroku[slug-compiler]: Slug compilation started
        2016-05-09T14:08:34.966363+00:00 heroku[slug-compiler]: Slug compilation finished
        2016-05-09T14:08:34.946344+00:00 heroku[web.1]: State changed from up to starting
        2016-05-09T14:08:34.945605+00:00 heroku[web.1]: Restarting
        2016-05-09T14:08:37.860802+00:00 heroku[web.1]: Stopping all processes with SIGTERM
        2016-05-09T14:08:39.493078+00:00 heroku[web.1]: Process exited with status 143
        2016-05-09T14:08:41.182450+00:00 heroku[web.1]: Starting process with command `npm start`
        2016-05-09T14:08:45.818995+00:00 app[web.1]:
        2016-05-09T14:08:45.819017+00:00 app[web.1]: > smooch-bot-example@1.0.0 start /app
        2016-05-09T14:08:45.819018+00:00 app[web.1]: > node heroku
        2016-05-09T14:08:45.819019+00:00 app[web.1]:
        2016-05-09T14:08:46.601444+00:00 app[web.1]: module.js:433
        2016-05-09T14:08:46.601454+00:00 app[web.1]:     throw err;
        2016-05-09T14:08:46.601455+00:00 app[web.1]:     ^
        2016-05-09T14:08:46.601456+00:00 app[web.1]:
        2016-05-09T14:08:46.601457+00:00 app[web.1]: SyntaxError: /app/script.json: Unexpected token }
        2016-05-09T14:08:46.601458+00:00 app[web.1]:     at Object.parse (native)
        2016-05-09T14:08:46.601458+00:00 app[web.1]:     at Object.Module._extensions..json (module.js:430:27)
        2016-05-09T14:08:46.601459+00:00 app[web.1]:     at Module.load (module.js:357:32)
        2016-05-09T14:08:46.601460+00:00 app[web.1]:     at Function.Module._load (module.js:314:12)
        2016-05-09T14:08:46.601460+00:00 app[web.1]:     at Module.require (module.js:367:17)
        2016-05-09T14:08:46.601461+00:00 app[web.1]:     at require (internal/module.js:20:19)
        2016-05-09T14:08:46.601462+00:00 app[web.1]:     at Object.<anonymous> (/app/script.js:6:21)
        2016-05-09T14:08:46.601473+00:00 app[web.1]:     at Module._compile (module.js:413:34)
        2016-05-09T14:08:46.601474+00:00 app[web.1]:     at Object.Module._extensions..js (module.js:422:10)
        2016-05-09T14:08:46.601474+00:00 app[web.1]:     at Module.load (module.js:357:32)

    Did you notice the `SyntaxError` part? It looks like there's a problem in my script.json. If I inspect that file in github I'll see that indeed, I have a stray comma at the end if the second to last line.

    ![image](/img/script-error.png)

    After I remove that comma and redeploy, everything will return to normal.

## How do I deploy my fixes to Heroku?

Great question! Now that you've found your bug and fixed it, you want to redeploy your app. With Heroku you can trigger a deployment using git. Without going into detail, git is a code versioning system it's where github gets its name. Git is the software, github.com is a separate company that hosts git code repositories. If you're using a Mac you should already have git installed. Although git is a very complex tool, it's worth [learning if you're eager](https://www.atlassian.com/git/tutorials/what-is-git), but for this guide's purposes we'll be using only the most basic concepts of git, `pull`ing changes from a remote github repository, `commit`ing changes, and then `push`ing those changes out to a remote repository.

1. To deploy using git you first have to download a copy of your heroku app's code, like so:

        git clone https://github.com/your-github-username/your-app

    Note that git will prompt you to enter your github credentials.

2. This will create a new git copy of your code in a new folder. You can go into that folder like so:

        cd your-app

3. Now you can use the heroku toolbelt to link this git copy up to your heroku app with the following command:

        heroku git:remote -a your-app

4. Once that's done, you can now deploy to heroku directly from this directory. If you've made any fixes on github directly, be sure to sync them here like so:

        git pull origin master
        git push heroku master

5. You can also make changes to your local copy of the code. To do this, edit whatever file you wish in your preferred text editor, and then commit and push them up to github. You'll add a commit message, which is a short sentence decribing what you changed.

        git commit -a -m 'Your commit message'
        git push origin master

    Then, you can deploy those changes to heroku in the same way:

        git push heroku master

