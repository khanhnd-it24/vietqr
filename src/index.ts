import { GenQRInput, QRField} from "./qr";
import {getBankFromCode} from "./constants/banks";
import {QRType, ServiceType} from "./constants/enum";
import {crc16ccitt} from "crc";

function initialMethodProcessing(qrType: QRType): string {
    const initialValue = "000201";
    const value = qrType.valueOf();
    const qrField = new QRField({id:"01", value});
    return initialValue + qrField.toString();
}

function paymentAcceptorProcessing(bankId: string, paymentAccount: string, serviceType: ServiceType): string {
    let value = "0010A000000727";

    const accountDetail = calculateDestQRField(bankId, paymentAccount);
    value += accountDetail.toString();
    value += serviceCodeProcessing(serviceType);

    const qrField = new QRField({id:"38", value});
    return qrField.toString();
}

function calculateDestQRField(bankId: string, bankAccount: string): QRField {
    let value = "";
    let tempField = new QRField({id:"00", value:bankId});
    value += tempField.toString();

    tempField = new QRField({id:"01",value: bankAccount});
    value += tempField.toString();
    return new QRField({id:"01", value});
}

function serviceCodeProcessing(serviceType: ServiceType): string {
    const value = serviceType.valueOf();
    const qrField = new QRField({id:"02", value});
    return qrField.toString();
}

function currencyProcessing(): string {
    const qrField = new QRField({id:"53", value:"704"});
    return qrField.toString();
}

function amountProcessing(amount: number): string {
    const qrField = new QRField({id:"54", value:amount.toString()});
    return qrField.toString();
}

function countryCodeProcessing(): string {
    const qrField = new QRField({id:"58", value:"VN"});
    return qrField.toString();
}

function contentProcessing(content: string): string {
    const contentQRField = new QRField({id: "08", value:content});
    const qrField = new QRField({id:"62", value: contentQRField.toString()});
    return qrField.toString();
}

function crcProcessing(qrString: string): string {
    const qrField = new QRField({id:"63", len: 4, value: ""});
    const stringToCalCRC = qrString + qrField.toString();
    qrField.value = calculateCRC(stringToCalCRC).toUpperCase();
    return qrField.toString();
}

function calculateCRC(input: string): string {
    let crc = crc16ccitt(input).toString(16);
    return crc.toString().padStart(4,"0");
}

function genQrString(req: GenQRInput): string {
    let qrBuilder = "";
    const bank = getBankFromCode(req.code)
    qrBuilder += initialMethodProcessing(req.qrType);
    qrBuilder += paymentAcceptorProcessing(bank.bin, req.paymentId, req.serviceType);
    qrBuilder += currencyProcessing();
    qrBuilder += amountProcessing(req.amount);
    qrBuilder += countryCodeProcessing();
    qrBuilder += contentProcessing(req.content);
    qrBuilder += crcProcessing(qrBuilder);

    return qrBuilder;
}

export function generateQR(req: GenQRInput): string {
    return genQrString(req);
}