
import Sell from "../UIContainer/Order";
import React, { useState, useEffect } from 'react';
import * as mapData from "../../Utils/mapData";
import * as stockService from "../../Services/StockService";
import * as bankService from "../../Services/BankService";

const OrderContainer = () => {
    const [options, setOptions] = useState([]);
    const [optionsTKNH, setOptionsTKNH] = useState([]);
    const [price, setPrice] = useState(null);
    const [priceHight, setPriceHight] = useState(null);
    const [priceLow, setPriceLow] = useState(null);

    const [formData, setFormData] = useState({
        stock: "",
        orderType: "LO",
        account: "",
        quantity: "",
        price: "",
        password: "",
      });

    const initData = async() => {
        const response = await stockService.getStock();
        if(response.isSuccess){
            const dataProcess = await mapData.mapStockCompoboxData(response.data.data);
            setOptions(dataProcess);
        }
    }

    const initDataTKNH = async() => {
        const response = await bankService.getBankAccount({idNDT:0});
        if(response.isSuccess){
            const dataProcess = await mapData.mapBankAccountCompoboxData(response.data.data);
            setOptionsTKNH(dataProcess);
        }
    }

    const initDataPrice = async(macp) => {
        const response = await stockService.getStockPriceNow({macp:macp});
        if(response.isSuccess){
            const price = response.data.data;
            setPrice(price.price);
            setPriceLow(price.priceLow);
            setPriceHight(price.priceHight);
        }
    }

    const handleChange = (selectedOption) => {
        setFormData((prevData) => ({
          ...prevData,
          stock: selectedOption ? selectedOption.value : "",
        }));
        initDataPrice(selectedOption.value);
      };

    useEffect(() => {
        initData();
        initDataTKNH();
    }, []);

    return(
        <Sell options={options} 
              formData={formData} 
              setFormData={setFormData} 
              optionsTKNH={optionsTKNH}
              price={price}
              priceHight={priceHight}
              priceLow={priceLow}
              handleChange={handleChange}
        />
    )
}

export default OrderContainer;
