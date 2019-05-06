require('dotenv').config();

const express = require('express');
const getIP = require('./utils/get-ip');

const app = express();

app.set('view engine', 'ejs');
app.set('trust proxy', getIP.isTrustedProxy());

app.use(getIP.extractClientIP);

app.get('/', (req, res) => {
  const { clientIP } = req;
  res.json({ clientIP });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App has been started on port ${port}`));
