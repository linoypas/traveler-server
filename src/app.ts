import initApp from "./server";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

initApp().then((app) => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}).catch((err) => {
    console.error(err);
    });
