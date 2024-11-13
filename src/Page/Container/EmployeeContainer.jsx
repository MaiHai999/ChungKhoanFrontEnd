import Employee from "../UIContainer/Employee";
import React, { useState, useEffect } from 'react';
import * as employeeService from "../../Services/EmployeeService";

const EmployeeContainer = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [name, setName] = useState(null);
    const [dayOfBitrh, setDayOfBitrh] = useState(null);
    const [address, setAddress] = useState(null);
    const [sex, setSex] = useState(null);
    const [phone, setPhone] = useState(null);
    const [data, setData] = useState([]);

    const onAdd = () => {

    }

    const onDelete = () => {

    }

    const onUpdate = () => {

    }

    const handleRowClick = (rowData) => {
        console.log(rowData);
    }

    useEffect(() => {
        const initData = async() => {
            const response = await employeeService.getEmployee();
            console.log(response.isSuccess);
            console.log(response.data.data);
        }

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
        />
    )
}

export default EmployeeContainer;