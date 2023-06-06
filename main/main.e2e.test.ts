import axios, {AxiosInstance} from 'axios';
import express from 'express';
import {Server} from 'http';
import {routes} from './routes';

describe('E2E happy flow', () => {
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

    it('GET / returns an empty object', async () => {
        const validate = await get('/');
        expect(validate).toMatchObject({status: 'ok'});
    });

    it('GET /validate returns an empty object', async () => {
        const validate = await get('/validate');
        expect(validate).toMatchObject({status: 'ok'});
    });

    it('POST /calculate without history', async () => {
        const event = await post('/handle-command', {
            history: [],
            command: {
                command_id: 'TODO',
                created_at: '2023-01-01T10:00:00Z',
                payload: '123',
                type: 'CalculatePrice'
            }
        });
        expect(event).toMatchObject({type: 'PriceWasCalculated'});
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
