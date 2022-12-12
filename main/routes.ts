import {Router} from "express";
import bodyParser from "body-parser";

const routes = Router();
routes.use(bodyParser.json());

routes.get("/validate", (request, response, next) => {
    return response.json({});
});

routes.post("/handle-command", (request, response, next) => {
    const {events, command} = request.body
    console.log({events, command})
    return response.json({
        event_id: "foo",
        created_at: new Date().toISOString(),
        type: "PriceWasCalculated",
        payload: {
            person_id: "Tom",
            price_amount: 15.9,
            price_currency: "EUR",
        },
    });
});

export {routes}
