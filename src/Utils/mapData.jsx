

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

