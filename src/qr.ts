import {QRType, ServiceType} from "./constants/enum";

export interface QRFieldInput {
    id: string;
    value: string;
    len?: number;
}

export class QRField {
    private readonly id: string;
    private len!: number;
    value!: string;

    public constructor(input: QRFieldInput) {
        this.id = input.id;
        this.value = input.value;
        this.len = input.value.length;
        if (!!input.len) {
            this.len = input.len;
        }
    }


    public toString() {
        return `${this.id}${this.len.toString().padStart(2,"0")}${this.value}`;
    }
}


export class GenQRInput {
    qrType: QRType;
    code: string;
    paymentId: string;
    serviceType: ServiceType;
    amount: number;
    content: string;

    constructor(qrType: QRType, code: string, paymentId: string, serviceType: ServiceType, amount: number, content: string) {
        this.qrType = qrType;
        this.code = code;
        this.paymentId = paymentId;
        this.amount = amount;
        this.content = content;
        this.serviceType=serviceType;
    }
}