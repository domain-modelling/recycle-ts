[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=595110868)
# Recycle Typescript Client
This is the javascript client to use when participating in the Domain Modeling hands-on.

# Codespaces

1. Wait until the Codespace is completely started.
1. Run `npm start` in the terminal.
1. Go into the `PORTS` tab in the bottom half of your screen. Change the visibility of the public api port from Private to Visible
(Right click -> Port Visibility -> Public).
1. Now you can copy the Local Address and use that in the workshop.

# Getting started
## Installing dependencies
run `npm install` or `yarn`

## Starting your server
Start the application the runner of your choice: `npm start`, `yarn start` or however you see fit

This will start your server locally on port `8000`

## Setting up ngrok
Make sure you have ngrok configured correctly. If unsure, please visit https://dashboard.ngrok.com/get-started/your-authtoken

`ngrok http 8000` should  setup the tunnel. Copy the generated url from the commandline.
You can also visit https://dashboard.ngrok.com/cloud-edge/endpoints to see the endpoints you are exposing.

## Registering on the hands-on server
Go to https://domain-modelling.fly.dev/ and start a session.

Add the url you got from ngrok as a client url when asked, and validate the connection.

You are now ready to start. Follow the instructions for the exercises.

## For professionals only: running your tests :0
- To run them once: `npm test` or `yarn test`
- To run them continuously: `npm run test: watch` or `yarn test:watch`
