# Bitfinex Websocket API usage example

## Description

Implementation of a user interface to display data from a trading pair using Bitfinex websocket API

resilient WS connection with a visual indicator of the ws status on the top right of the page
ws connection will attempt to reconnect automatically if connection is dropped

ws and api endpoints are configurable in `.env` file

## What could be improved

- load pairs dynamically - currently hardcoded

- handle unsub messages - at the moment channel unsubscription is fire-and-forget and we assume the unsubscription was successfull

- handle channel heartbeats

- more testing