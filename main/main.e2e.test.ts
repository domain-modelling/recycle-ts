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
        await expect(get("/validate")).resolves.toEqual({});
    });

    it("POST /calculate returns calculation", async () => {
        const data = {
            events: [],
            command: {}
        };
        await expect(post("/calculate", data)).resolves.toEqual({
            priceWasCalculated: {
                id: 1,
                price: {
                    amount: 0,
                    currency: "euro"
                }
            }
        });
    });

    const get = (url: string) =>
        client
            .get(url)
            .then((response) => response.data)
            .catch((e) => e.response);

    const post = (url: string, data: any = {}) =>
        client
            .post(url, data)
            .then((response) => response.data)
            .catch((e) => e.response);

});
