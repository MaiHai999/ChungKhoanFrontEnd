

export const mapEmployeeData = (backendData) => {
    const propertyMapping = {
        "ID": "ID",
        "HO": "Họ",
        "TEN": "Tên",
        "NGAYSINH": "Ngày sinh",
        "DIACHI": "Địa chỉ",
        "GIOITINH": "Giới tính",
        "SDT": "Số điện thoại",
        "DANGHIVIEC": "Trạng thái",
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                if (key === "DANGHIVIEC") {
                    mappedData[propertyMapping[key]] = employee[key] === 0 ? "Đang làm việc" : "Đã nghỉ việc";
                } else {
                    mappedData[propertyMapping[key]] = employee[key];
                }
            }
        }

        return mappedData;
    });
};

export const mapInvestorData = (backendData) => {
    const propertyMapping = {
        "MATK": "MATK",
        "HO": "Họ",
        "TEN": "Tên",
        "NGAYSINH": "Ngày sinh",
        "NOISINH": "Nơi sinh",
        "DIACHI": "Địa chỉ",
        "GIOITINH": "Giới tính",
        "EMAIL": "Email",
        "CMND": "CMND",
        "NGAYCAP": "Ngày Cấp",
        "MATKHAU": "Mật khẩu",
        "MATKHAUDATLENH": "Mật khẩu đặt lệnh"
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};

export const mapBankData = (backendData) => {
    const propertyMapping = {
        "ID": "value",
        "TENNGANHANG": "label",
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};

export const mapBankAccountData = (backendData) => {
    const propertyMapping = {
        "MATK": "MATK",
        "TENTAIKHOAN": "Tên tài khoản",
        "TENNGANHANG": "Ngân hàng",
        "SODU": "Số dư",
        "IDNGANHANG" : "ID Ngan hàng"
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};

export const mapInvestorDataCompobox = (backendData) => {
    const propertyMapping = {
        "MATK": "value",
        "TEN": "label",
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};


export const mapReportSoHuuCP = (backendData) => {
    const propertyMapping = {
        "GIA": "Đơn giá",
        "GIATRI": "Trị giá",
        "MACP": "MACP",
        "SOLUONG": "Số lượng",
    };

    const mappedData = {};

    return backendData.map(employee => {
        const mappedData = {};

        for (const key in employee) {
            if (propertyMapping[key]) {
                mappedData[propertyMapping[key]] = employee[key];
            }
        }

        return mappedData;
    });
};




