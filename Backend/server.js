const http = require('http');
const https = require('https');
const fs = require('fs');
const app = require('./app');

const port = process.env.PORT ?? 3000;
const httpsPort = process.env.HTTPS_PORT ?? 3443;

// Load SSL/TLS certificates
const sslOptions = {
    key: fs.readFileSync('./certs/server.key'),
    cert: fs.readFileSync('./certs/server.crt'),
};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(sslOptions, app);

httpServer.listen(port, '0.0.0.0');
httpsServer.listen(httpsPort, '0.0.0.0');