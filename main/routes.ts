import {Router} from "express";
import bodyParser from "body-parser";

const routes = Router();
routes.use(bodyParser.json());

routes.get("/validate", (request, response, next) => {
    return response.json({});
});

routes.post("/calculate", (request, response, next) => {
    const {events, command} = request.body
    console.log({events, command})
    return response.json({priceWasCalculated: {id: 1, price: {amount: 0, currency: "euro"}}});
});

export {routes}
