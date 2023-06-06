import {Router} from 'express';
import {v4 as uuid} from 'uuid';
import bodyParser from 'body-parser';
import {PriceCalculator} from "./priceCalculator";

const routes = Router();
routes.use(bodyParser.json());

routes.get('/', (request, response, next) => {
    return response.json({
        status: 'ok',
        message: 'please enter a public URL to this site on https://domainmodelling.dev, as specified in the readme'
    });
});


routes.get('/validate', (request, response, next) => {
    return response.json({});
});

routes.post('/handle-command', (request, response, next) => {
    const {history, command} = request.body;

    // If you have no inspiration to start implementing, uncomment this part:
    // const price = new PriceCalculator(history).calculatePrice(command.payload.card_id);
    const price = 1;

    const answer = {
        event_id: uuid(),
        created_at: new Date().toISOString(),
        type: 'PriceWasCalculated',
        payload: {
            card_id: command.payload.card_id,
            price_amount: price,
            price_currency: 'EUR',
        },
    };
    // console.log({answer})
    return response.json(answer);
});

export {routes}
