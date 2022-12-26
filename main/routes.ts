import {Router} from "express";
import bodyParser from "body-parser";

const routes = Router();
routes.use(bodyParser.json());

routes.get("/validate", (request, response, next) => {
    return response.json({});
});

routes.post("/handle-command", (request, response, next) => {
    const {history, command} = request.body
    let answer = {
        event_id: "foo",
        created_at: new Date().toISOString(),
        type: "PriceWasCalculated",
        payload: {
            person_id: "Tom",
            price_amount: 0,
            price_currency: "EUR",
        },
    };
    console.log({history, command, answer})
    return response.json(answer);
});

export {routes}
