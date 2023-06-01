import {PriceCalculator} from "./priceCalculator";

describe('Price Calculator', () => {
    it('No fractions delivered', async () => {
        const calculator = new PriceCalculator([
            idCardRegistered('123'),
            idCardScannedAtEntranceGate('123'),
            idCardScannedAtExitGate('123')
        ])
        expect(calculator.calculatePrice('123')).toBe(0);
    });
});

function idCardRegistered(cardId: string, personId = 'person_1', address = 'an address',
    street = 'a street') {
    return {
        type: 'IdCardRegistered',
        payload: {
            card_id: cardId,
            person_id: personId,
            address: address,
            street: street,
        },
    };
}

function idCardScannedAtEntranceGate(cardId: string, date = '2023-01-01') {
    return {
        type: 'IdCardScannedAtEntranceGate',
        payload: {
            card_id: cardId,
            date: date
        },
    };
}

function idCardScannedAtExitGate(cardId: string) {
    return {
        type: 'IdCardScannedAtExitGate',
        payload: {card_id: cardId, date: '2023-01-01'},
    };
}
