# Node-Chat-Application (Room based)
A chat app based on NodeJS, Express and Socket.io

Clone the repository to your local machine folder using ```git clone```

Run ```npm install``` to install the node_modules. 

To run the application on your local machine run 
```node server/server.js```

This app is configured to work on Heroku. To create a new heroku application. 

You need to have a existing heroku account, if not create a new account and connect your machine to heroku using command ```heroku login```

1. Create a new heroku app from the terminal/command prompt using ```heroku create``` or ```heroku create app-name``` if you want to create a custom app
2. This name will be used in the heroku URL and should be unique. 
3. Once the application is created the remote to the heroku repository is automatically added to your local repository.
4. To verify type ```git remote -v``` which displays all the existing remotes to your repository.
5. Once everything is successfull. Run ```git push heroku master```
6. Once the application is successfully deployed, you can grab the URL from the terminal window or run command ```heroku open``` to open the application in your default browser.
