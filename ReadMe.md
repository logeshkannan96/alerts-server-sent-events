# Server Sent Events
Traditionally, a web page has to send a request to the server to receive new data; that is, the page requests data from the server. With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page. 

Many real time services using this approach if it needs to push messages based on an event. Twitter and facebook feeds, stock market trading signals are pushed using this method. 

This repo is a simple implementation to explore exactly how Microsoft Teams pushes its incoming webhook messages to the client application. 
Update README.md

## References

- [Developing Real-Time Web Applications with Server-Sent Events](https://auth0.com/blog/developing-real-time-web-applications-with-server-sent-events/)
- [Realtime data streaming using server-sent events(SSE) with react.js and node.js](https://dev.to/techfortified/realtime-data-streaming-using-server-sent-eventssse-with-reactjs-and-nodejs-2aak)
- [MDN - Server Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
- [Twitter like application using Server Sent Events](https://hacks.mozilla.org/2011/06/a-wall-powered-by-eventsource-and-server-sent-events/)
