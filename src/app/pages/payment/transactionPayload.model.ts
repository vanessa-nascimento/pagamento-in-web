export interface TransactionPayload {
    card: {
        card_number: string;
        cvv: number;
        expiry_date: string;
    };
    destination_user_id: number;
    value: number;
}


export interface CardInfo {
    card_number: string;
    cvv: number;
    expiry_date: string;
}
