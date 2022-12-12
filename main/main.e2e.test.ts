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

    it("POST /calculate returns a calculation", async () => {
        const event = await post("/handle-command", {events: [], command: {}});
        expect(event).toMatchObject({
            event_id: "foo",
            type: "PriceWasCalculated",
            payload: {
                person_id: "Tom",
                price_amount: 15.9,
                price_currency: "EUR",
            },
        });
    });

    const get = async (url: string) => {
        const result = await client.get(url);
        return await result.data
    };

    const post = async (url: string, data: any = {}) => {
        const result = await client.post(url, data);
        return await result.data
    };

});
