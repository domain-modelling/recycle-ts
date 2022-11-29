import express, { Router } from "express";
import bodyParser from "body-parser";

const port = 8001;
const app = express();

const routes = Router();
routes.use(bodyParser.json());

routes.get("/validate", (request, response, next) => {
  return response.json({});
});

routes.get("/calculate", (request, response, next) => {
  const { events, command } = request.body
  console.log({events, command})
  return response.json({ priceWasCalculated: {id: 1, price: { amount: 0, currency: "euro"}}});
});

app.use(routes);

app.listen(port, () => {
  console.log(`⚡️ Server started on port ${port}`);
});
