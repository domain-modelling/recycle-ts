import {Router} from "express";
import bodyParser from "body-parser";

const routes = Router();
routes.use(bodyParser.json());

routes.get("/validate", (request, response, next) => {
    return response.json({});
});

routes.post("/handle-command", (request, response, next) => {
    console.log(JSON.stringify(request.body))
    let answer = {
        event_id: "foo",
        created_at: new Date().toISOString(),
        type: "PriceWasCalculated",
        payload: {
            card_id: '123',
            price_amount: 1,
            price_currency: "EUR",
        },
    };
    return response.json(answer);
});

export {routes}
