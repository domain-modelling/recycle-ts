import {
    EventMessage,
    IdCardRegistered,
    IdCardScannedAtEntranceGate,
    FractionWasDropped,
    IdCardScannedAtExitGate
} from "./events";


export class PriceCalculator {
    constructor(history: EventMessage[]) {
        history.forEach((event) => this.handle(event));
    }

    handle(message: EventMessage) {
        switch (message.type) {
            case 'IdCardRegistered':
                const registration = message.payload as IdCardRegistered;
                console.log(`registered card ${registration.card_id}`);
                // do something with IdCardRegistered here
                break;
            case 'IdCardScannedAtEntranceGate':
                const scannedAtEntrance = message.payload as IdCardScannedAtEntranceGate;
                console.log(`card ${scannedAtEntrance.card_id} scanned at entrance gate`);
                // do something with IdCardScannedAtEntranceGate here
                break;
            case 'FractionWasDropped':
                const fractionDropped = message.payload as FractionWasDropped;
                console.log(`card ${fractionDropped.card_id} dropped some waste`)
                // do something with FractionWasDropped here
                break;
            case 'IdCardScannedAtExitGate':
                const scannedAtExit = message.payload as IdCardScannedAtExitGate;
                console.log(`card ${scannedAtExit.card_id} scanned at exit gate`)
                // do something with IdCardScannedAtExitGate here
                break;
            default:
                console.log(`Not handling [${message.type}]`)
        }
    }

    calculatePrice(cardId: string) {
        return 0;
    }
}
