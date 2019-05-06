require('dotenv').config();

const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const { ip, ips } = req;
  const forwardedFor = req.get('X-Forwarded-For');
  console.log('X-Forwarded-For:', forwardedFor);
  res.json({ ip, ips, forwardedFor });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App has been started on port ${port}`));
