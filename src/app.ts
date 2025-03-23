import initApp from "./server";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
import http from 'http'
import fs from 'fs'
import https from 'https'

const keyPath = path.join(__dirname, 'client-key.pem');
const certPath = path.join(__dirname, 'client-cert.pem');

const options = {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath)
};
initApp().then((app) => {
    if(process.env.NODE_ENV !== 'production') {
      console.log('developmnet')
    http.createServer(app).listen(process.env.PORT);
    }
    const option= {
      key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
    };
    https.createServer(option, app).listen(process.env.PORT);
  });
    
