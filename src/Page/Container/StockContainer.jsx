import Stock from "../UIContainer/Stock";
import * as stockService from "../../Services/StockService";
import React, { useState, useEffect } from 'react';
import { mapStockData } from "../../Utils/mapData";



const StockContainer = () => {
    const [dataStock, setDataStock] = useState([]);
    const [macp, setMacp] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [fax, setFax] = useState(null);
    const [name, setName] = useState(null);
    const [numCP, setNumCP] = useState(null);

    const initData = async() => {
        const response = await stockService.getStock();
        if(response.isSuccess){
            const dataProcess = await mapStockData(response.data.data);
            setDataStock(dataProcess);
        }
    }

    useEffect(() => {
        initData();
    }, []);

    const handleRowClick = (rowData) => {
        setMacp(rowData.MACP ?? '');
        setPhone(rowData["Số điện thoại"] ?? '');
        setAddress(rowData["Địa chỉ"] ?? '');
        setEmail(rowData.Email ?? '');
        setFax(rowData.Fax ?? '');
        setName(rowData["Tên công ty"] ?? '');
        setNumCP(rowData["Số lượng cổ phiếu"] ?? '');
    }

    const onRefresh = () => {
        setMacp('');
        setPhone('');
        setAddress('');
        setEmail('');
        setFax('');
        setName('');
        setNumCP('');
    }

    return(
        <Stock 
            dataStock={dataStock} 
            setMacp={setMacp} macp={macp}
            setPhone={setPhone} phone={phone}
            setAddress={setAddress} address={address}
            setEmail={setEmail} email={email}
            setFax={setFax} fax={fax}
            setName={setName} name={name}
            setNumCP={setNumCP} numCP={numCP}
            handleRowClick={handleRowClick} onRefresh={onRefresh}/>
    )
}

export default StockContainer;