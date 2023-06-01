export interface EventMessage {
    type: string,
    payload: IdCardRegistered
        | IdCardScannedAtEntranceGate
        | FractionWasDropped
        | IdCardScannedAtExitGate
}

export interface IdCardRegistered {
    card_id: string,
    person_id: string,
    street: string,
    address: string
}

export interface IdCardScannedAtEntranceGate {
    card_id: string,
    date: string
}

export interface FractionWasDropped {
    card_id: string,
    fraction_type: string
    weight: number
}

export interface IdCardScannedAtExitGate {
    card_id: string,
    date: string
}
