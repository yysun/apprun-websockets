import app from 'apprun';

import Layout from './layout';

const ws = new WebSocket(`ws://${location.host}`);
ws.onmessage = function (msg) {
  const {event, state} = JSON.parse(msg.data);
  app.run(event, state);
}

app.on('//ws:', (event, state, ...args) => {
  const msg = { event, state, args };
  ws.send(JSON.stringify(msg));
});

app.render(document.getElementById('main'), <Layout />);

