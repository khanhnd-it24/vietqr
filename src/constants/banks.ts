import {BankCode} from "./bankCode";

export interface Bank {
    code: string
    name: string
    shortName: string
    bin: string
}

const BanksObject: Record<string, Bank> = {
    [BankCode.VIB]: {
        code: BankCode.VIB,
        name: "TMCP Quốc tế Việt Nam",
        bin: "970441",
        shortName: "VIB"
    },
    [BankCode.ABB]: {
        code: BankCode.ABB,
        name: "TMCP An Bình",
        bin: "970425",
        shortName: "ABBANK"
    },
    [BankCode.ACB]: {
        code: BankCode.ACB,
        name: "TMCP Á Châu",
        bin: "970416",
        shortName: "ACB"
    },
    [BankCode.BAB]: {
        code: BankCode.BAB,
        name: "TMCP Bắc Á",
        bin: "970409",
        shortName: "Bac a"
    },
    [BankCode.BIDV]: {
        code: BankCode.BIDV,
        name: "TMCP Đầu tư và Phát triển Việt Nam",
        bin: "970418",
        shortName: "BIDV"
    },
    [BankCode.BVB]: {
        code: BankCode.BVB,
        name: "TMCP Bảo Việt",
        bin: "970438",
        shortName: "Bao viet"
    },
    [BankCode.CBB]: {
        code: BankCode.CBB,
        name: "TM TNHH MTV Xây Dựng Việt Nam",
        bin: "970444",
        shortName: "CB"
    },
    [BankCode.CCF]: {
        code: BankCode.CCF,
        name: "Hợp tác xã Việt Nam",
        bin: "970446",
        shortName: "COOPBANK"
    },
    [BankCode.CIMB]: {
        code: BankCode.CIMB,
        name: "TNHH MTV CIMB",
        bin: "422589",
        shortName: "CIMB"
    },
    [BankCode.DBS]: {
        code: BankCode.DBS,
        name: "DBS - chi nhánh HCM",
        bin: "796500",
        shortName: "DBS"
    },
    [BankCode.DOB]: {
        code: BankCode.DOB,
        name: "TMCP Đông Á",
        bin: "970406",
        shortName: "DONG A"
    },
    [BankCode.EIB]: {
        code: BankCode.EIB,
        name: "TMCP Xuất nhập khẩu Việt Nam",
        bin: "970431",
        shortName: "EXIMBANK"
    },
    [BankCode.GPB]: {
        code: BankCode.GPB,
        name: "TM TNHH MTV Dầu Khí Toàn Cầu",
        bin: "970408",
        shortName: "GPBANK"
    },
    [BankCode.HDB]: {
        code: BankCode.HDB,
        name: "TMCP Phát Triển Thành Phố Hồ Chí Minh",
        bin: "970437",
        shortName: "HD"
    },
    [BankCode.HLBVN]: {
        code: BankCode.HLBVN,
        name: "TNHH MTV Hongleong Việt Nam",
        bin: "970442",
        shortName: "HONGLEONG"
    },
    [BankCode.HSBC]: {
        code: BankCode.HSBC,
        name: "Ngân hàng TNHH MTV HSBC (Việt Nam)",
        bin: "458761",
        shortName: "HSBC"
    },
    [BankCode.IBKHN]: {
        code:BankCode.IBKHN,
        name: "IBK - chi nhánh Hà Nội",
        bin: "970455",
        shortName: "IBK"
    },
    [BankCode.IBKHCM]: {
        code: BankCode.IBKHCM,
        name: "IBK - chi nhánh HCM",
        bin: "970456",
        shortName: "IBK"
    },
    [BankCode.ICB]: {
        code: BankCode.ICB,
        name: "TMCP Công Thương Việt Nam",
        bin: "970415",

        shortName: "VIETINBANK"
    },
    [BankCode.IVB]: {
        code: BankCode.IVB,
        name: "TNHH Indovina",
        bin: "970434",
        shortName: "IVB"
    },
    [BankCode.KBHN]: {
        code: BankCode.KBHN,
        name: "Kookmin - Chi nhánh Hà Nội",
        bin: "970462",
        shortName: "KB"
    },
    [BankCode.KBHCM]: {
        code: BankCode.KBHCM,
        name: "Kookmin - Chi nhánh HCM",
        bin: "970463",
        shortName: "KB"
    },
    [BankCode.KLB]: {
        code: BankCode.KLB,
        name: "TMCP Kiên Long",
        bin: "970452",
        shortName: "KIEN LONG"
    },
    [BankCode.LPB]: {
        code: BankCode.LPB,
        name: "TMCP Bưu Điện Liên Việt",
        bin: "970449",
        shortName: "LIENVIETPOST"
    },
    [BankCode.MB]: {
        code: BankCode.MB,
        name: "TMCP Quân Đội",
        bin: "970422",
        shortName: "MB"
    },
    [BankCode.MSB]: {
        code: BankCode.MSB,
        name: "TMCP Hàng Hải Việt nam",
        bin: "970426",
        shortName: "MSB"
    },
    [BankCode.NAB]: {
        code: BankCode.NAB,
        name: "TMCP Nam Á",
        bin: "970428",
        shortName: "NAM A"
    },
    [BankCode.NCB]: {
        code: BankCode.NCB,
        name: "TMCP Quốc Dân",
        bin: "970419",
        shortName: "NCB"
    },
    [BankCode.NHBHN]: {
        code: BankCode.NHBHN,
        name: "NONGHYUP - Chi nhánh Hà Nội",
        bin: "801011",
        shortName: "NONGHYUP"
    },
    [BankCode.OCB]: {
        code: BankCode.OCB,
        name: "TMCP Phương Đông",
        bin: "970448",
        shortName: "OCB"
    },
    [BankCode.OCEANBANK]: {
        code: BankCode.OCEANBANK,
        name: "TM TNHH MTV Đại Dương",
        bin: "970414",
        shortName: "OCEANBANK"
    },
    [BankCode.PBVN]: {
        code: BankCode.PBVN,
        name: "TMCP Phát triển Nông thôn",
        bin: "970461",
        shortName: "PBVN"
    },
    [BankCode.PGB]: {
        code: BankCode.PGB,
        name: "TMCP PG Bank",
        bin: "970439",
        shortName: "PGB"
    },
    [BankCode.PVCB]: {
        code: BankCode.PVCB,
        name: "Ngân hàng TMCP Đại Chúng Việt Nam",
        bin: "970421",
        shortName: "PVCB"
    },
    [BankCode.SCB]: {
        code: BankCode.SCB,
        name: "TMCP Sài Gòn",
        bin: "970427",
        shortName: "SCB"
    },
    [BankCode.SCVN]: {
        code: BankCode.SCVN,
        name: "Ngân hàng TMCP Sài Gòn - Hà Nội",
        bin: "970465",
        shortName: "SCVN"
    },
    [BankCode.SEAB]: {
        code: BankCode.SEAB,
        name: "Ngân hàng Đông Á",
        bin: "970440",
        shortName: "SEAB"
    },
    [BankCode.SGICB]: {
        code: BankCode.SGICB,
        name: "Ngân hàng Sài Gòn",
        bin: "970455",
        shortName: "SGICB"
    },
    [BankCode.SHB]: {
        code: BankCode.SHB,
        name: "TMCP Sài Gòn – Hà Nội",
        bin: "970430",
        shortName: "SHB"
    },
    [BankCode.STB]: {
        code: BankCode.STB,
        name: "TMCP Sài Gòn Thương Tín",
        bin: "970420",
        shortName: "STB"
    },
    [BankCode.SHBVN]: {
        code: BankCode.SHBVN,
        name: "TMCP Sài Gòn - Hà Nội",
        bin: "970460",
        shortName: "SHBVN"
    },
    [BankCode.TCB]: {
        code: BankCode.TCB,
        name: "TMCP Kỹ thương Việt Nam",
        bin: "970453",
        shortName: "TCB"
    },
    [BankCode.TPB]: {
        code: BankCode.TPB,
        name: "TMCP Tiên Phong",
        bin: "970462",
        shortName: "TPB"
    },
    [BankCode.UOB]: {
        code: BankCode.UOB,
        name: "UOB - Ngân hàng United Overseas",
        bin: "970425",
        shortName: "UOB"
    },
    [BankCode.VAB]: {
        code: BankCode.VAB,
        name: "TMCP Việt Á",
        bin: "970463",
        shortName: "VAB"
    },
    [BankCode.VBA]: {
        code: BankCode.VBA,
        name: "Ngân hàng Bản Việt",
        bin: "970466",
        shortName: "VBA"
    },
    [BankCode.VCB]: {
        code: BankCode.VCB,
        name: "Ngân hàng Vietcombank",
        bin: "970417",
        shortName: "VCB"
    },
    [BankCode.VCCB]: {
        code: BankCode.VCCB,
        name: "Ngân hàng TMCP Xây dựng Việt Nam",
        bin: "970473",
        shortName: "VCCB"
    },
    [BankCode.VIETBANK]: {
        code: BankCode.VIETBANK,
        name: "Ngân hàng TMCP Việt Nam Thịnh Vượng",
        bin: "970421",
        shortName: "VIETBANK"
    },
    [BankCode.VPB]: {
        code: BankCode.VPB,
        name: "Ngân hàng VPBank",
        bin: "970451",
        shortName: "VPB"
    },
    [BankCode.CAKE]: {
        code: BankCode.CAKE,
        name: "Ngân hàng số Cake",
        bin: "970476",
        shortName: "CAKE"
    },
    [BankCode.UBANK]: {
        code: BankCode.UBANK,
        name: "Ngân hàng UBANK",
        bin: "970480",
        shortName: "UBANK"
    },
    [BankCode.VRB]: {
        code: BankCode.VRB,
        name: "Ngân hàng VietBank",
        bin: "970481",
        shortName: "VRB"
    },
    [BankCode.WVN]: {
        code: BankCode.WVN,
        name: "Ngân hàng Tây Á",
        bin: "970482",
        shortName: "WVN"
    },
    [BankCode.KBANK]: {
        code: BankCode.KBANK,
        name: "Ngân hàng Kookmin",
        bin: "970483",
        shortName: "KBANK"
    }
};

export function getBankFromCode(code: string): Bank {
    if (Object.values(BankCode).includes(code) ){
        return BanksObject[code]
    }
    throw new Error(`${code} is not a valid Bank`);
}