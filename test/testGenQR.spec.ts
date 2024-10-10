import {GenQRInput} from "../src/qr";
import {generateQR} from "../src";
import {QRType, ServiceType} from "../src/constants/enum";

describe('VietQR Generate', () => {
    type TestCase = {
        arg: GenQRInput;
        want: string;
    };

    const testcases: TestCase[] = [
        {
            arg: {
                qrType: QRType.DYNAMIC,
                serviceType: ServiceType.ACCOUNT_NUMBER,
                code: "BIDV",
                paymentId: "02938821",
                amount: 4000,
                content: "KOVQR 00FH10 ",
            },
            want: "00020101021238520010A000000727012200069704180108029388210208QRIBFTTA5303704540440005802VN62170813KOVQR 00FH10 630421CF",
        },
        {
            arg: {
                qrType: QRType.DYNAMIC,
                serviceType: ServiceType.ACCOUNT_NUMBER,
                code: "BIDV",
                paymentId: "02938821",
                amount: 4000,
                content: "KOV03HZC",
            },
            want: "00020101021238520010A000000727012200069704180108029388210208QRIBFTTA5303704540440005802VN62120808KOV03HZC6304CF9B",
        },
    ];

    testcases.forEach((tc, index) => {
        it(`should generate correct QR code string for testcase ${index + 1}`, async () => {
            const qrString = generateQR(tc.arg);
            expect(qrString).toEqual(tc.want);
        });
    });
});