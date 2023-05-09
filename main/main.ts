import express from "express";
import {routes} from "./routes";

const app = express();

app.use(routes);

const port = process.env.port || 8000;
app.listen(port, () => {
    console.log(`⚡️ Server started on port ${port}`);
});
