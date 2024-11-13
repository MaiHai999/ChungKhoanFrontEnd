import Employee from "../UIContainer/Employee";
import React, { useState, useEffect } from 'react';
import * as employeeService from "../../Services/EmployeeService";
import { mapEmployeeData } from '../../Utils/mapData';
import * as validation from "../../Utils/ValidationHanler";

const EmployeeContainer = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [name, setName] = useState(null);
    const [id, setID] = useState(null);
    const [dayOfBitrh, setDayOfBitrh] = useState(null);
    const [address, setAddress] = useState(null);
    const [sex, setSex] = useState(null);
    const [phone, setPhone] = useState(null);
    const [data, setData] = useState([]);
    const [ho, setHo] = useState([]);
    const options = [
        { value: 1, label: 'Đã nghỉ việc' },
        { value: 0, label: 'Đang làm việc' },
    ];

    const onAdd = async() => {
        try{
            validation.inputNullValidation({values:ho, notification:"Họ không để trống"});
            validation.inputNullValidation({values:name, notification:"Tên không để trống"});
            validation.inputNullValidation({values:dayOfBitrh, notification:"NGày sinh không để trống"});
            validation.inputNullValidation({values:address, notification:"Địa chỉ không để trống"});
            validation.inputNullValidation({values:phone, notification:"Số điện thoại không để trống"});

            const response = await employeeService.addEmployee({ho:ho, ten:name, ngaySinh:dayOfBitrh, diaChi:address, gioiTinh:sex, sdt:phone, daNghiViec:selectedOption.value});
            if(response.isSuccess){
                initData();
                alert("Thêm thành công")
            }else{
                alert("Thêm thất bại");
            }

        }catch(error){
            alert(error);
        }
    }

    const onDelete = async() => {
        try{
            validation.inputNullValidation({values:id, notification:"Chưa chọn dòng xóa"});
            const response = await employeeService.deleteEmployee({id:id});
            if(response.isSuccess){
                initData();
                alert("Xóa thành công");
            }else{
                alert("Xóa thất bại");
            }
        }catch(error){
            alert(error);
        }
        
    }

    const onUpdate = async() => {
        try{
            validation.inputNullValidation({values:ho, notification:"Họ không để trống"});
            validation.inputNullValidation({values:name, notification:"Tên không để trống"});
            validation.inputNullValidation({values:dayOfBitrh, notification:"NGày sinh không để trống"});
            validation.inputNullValidation({values:address, notification:"Địa chỉ không để trống"});
            validation.inputNullValidation({values:phone, notification:"Số điện thoại không để trống"});

            const response = await employeeService.updateEmployee({IDNV:id,ho:ho, ten:name, ngaySinh:dayOfBitrh, diaChi:address, gioiTinh:sex, sdt:phone, daNghiViec:selectedOption.value});
            if(response.isSuccess){
                initData();
                alert("Sửa thành công");
            }else{
                alert("Sửa thất bại");
            }
        }catch(error){
            alert(error);
        }
       
    }

    const handleRowClick = (rowData) => {
        console.log(rowData);
        setHo(rowData["Họ"]);
        setID(rowData["ID"]);
        setName(rowData["Tên"]);
        setDayOfBitrh(rowData["Ngày sinh"]);
        setAddress(rowData["Địa chỉ"]);
        setSex(rowData["Giới tính"]);
        setPhone(rowData["Số điện thoại"]);
        const status = rowData["Trạng thái"];
        if(status === 'Đang làm việc'){
            const defaultOption = options.find(option => option.value === 0);
            setSelectedOption(defaultOption);
        }else{
            const defaultOption = options.find(option => option.value === 1);
            setSelectedOption(defaultOption);
        }

    }

    const initData = async() => {
        const response = await employeeService.getEmployee();
        const processData = mapEmployeeData(response.data.data);
        setData(processData);
    }

    useEffect(() => {
        initData()
    }, []);

    return(
        <Employee 
            handleRowClick={handleRowClick} 
            selectedOption={selectedOption} 
            setSelectedOption={setSelectedOption}
            name={name}
            setName={setName}
            dayOfBitrh={dayOfBitrh}
            setDayOfBitrh={setDayOfBitrh}
            setAddress={setAddress}
            address={address}
            setSex={setSex}
            sex={sex}
            setPhone={setPhone}
            phone={phone}
            onAdd={onAdd}
            onDelete={onDelete}
            onUpdate={onUpdate}
            data={data}
            ho={ho}
            setHo={setHo}
            options={options}
        />
    )
}

export default EmployeeContainer;