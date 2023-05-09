import axios, {AxiosInstance} from "axios";
import express from "express";
import {Server} from "http";
import {routes} from "./routes";

describe("E2E happy flow", () => {
    let server: Server;
    let client: AxiosInstance;

    beforeAll(() => {
        server = express().use(routes).listen();
        client = axios.create({
            baseURL: `http://localhost:${(server.address() as any).port}/`,
        });
    });

    afterAll((done) => {
        server.close(done);
    });

    it("GET /validate returns an empty object", async () => {
        const validate = await get("/validate");
        expect(validate).toEqual({});
    });

    it("POST /calculate without history", async () => {
        const event = await post("/handle-command", {history: [], command: calculatePrice('123')});
        expect(event).toMatchObject(priceWasCalculated('123', 0.0));
    });

    function priceWasCalculated(card_id: string, price_amount: number) {
        return {
            type: "PriceWasCalculated",
            payload: {
                card_id,
                price_amount,
                price_currency: "EUR",
            },
        };

    }

    const get = async (url: string) => {
        const result = await client.get(url);
        return await result.data
    };

    const post = async (url: string, data: any = {}) => {
        const result = await client.post(url, data);
        return await result.data
    };

    function calculatePrice(card_id: string) {
        return {
            command_id: 'TODO',
            created_at: '2023-02-13T15:09:20.337466Z',
            payload: {card_id},
            type: 'CalculatePrice'
        };
    }
});
