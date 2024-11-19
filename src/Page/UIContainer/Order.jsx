import React, { useState } from 'react'
import '../../Styles/Sell.css';
import Select from 'react-select';

const Sell = ({options=[],formData, setFormData, optionsTKNH=[], tongMoneySell=0, isClose= false, 
               price, priceLow, priceHight, handleChange
            }) => {

      const customStyles = {
        control: (provided) => ({
            ...provided,
            height: 20, 
            fontSize: '12px', 
            padding: '0 5px', 
        }),
        option: (provided) => ({
            ...provided,
            fontSize: '12px', 
        }),
        singleValue: (provided) => ({
            ...provided,
            fontSize: '12px', 
        }),
        placeholder: (provided) => ({
            ...provided,
            fontSize: '12px', 
        }),
    };

      const handleChange1 = (selectedOption) => {
        setFormData((prevData) => ({
          ...prevData,
          orderType: selectedOption ? selectedOption.value : "",
        }));
      };
    
      return (
        <form
          className="sell-order-form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form data:", formData);
            alert("Lệnh đã được gửi!");
          }}
        >
          <h2>ĐẶT LỆNH BÁN</h2>
          <div className="form-group">
            <label>Chứng khoán</label>
            <Select
                value={options.find((option) => option.value === formData.stock)}
                onChange={handleChange} 
                options={options}
                placeholder="Mã cổ phiếu"
                styles={customStyles}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "gray" }}>
                <span>Giá tham chiếu: {price}</span>
                <span>Giá sàn: {priceLow}</span>
                <span>Giá trần: {priceHight}</span>
            </div>
          </div>
          <div className="form-group">
            <label>Loại lệnh</label>
            <div className="order-types">
              <label>
                <input
                  type="radio"
                  name="orderType"
                  value="LO"
                  checked={true}
                  onChange={(e) =>
                    setFormData({ ...formData, orderType: e.target.value })
                  }
                />
                Lệnh giới hạn (LO)
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Tài khoản tiền</label>
            <Select
                value={optionsTKNH.find((option) => option.value === formData.stock)}
                onChange={handleChange1} 
                options={optionsTKNH}
                placeholder="Chọn tài khoản ngân hàng"
                styles={customStyles}
            />
          </div>
          <div className="form-group">
            <label>Số lượng</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              placeholder="Nhập số lượng"
            />
          </div>
          <div className="form-group">
            <label>Giá</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              placeholder="Nhập giá"
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu đặt lệnh</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div className="total-sell-price">
          <p>Tổng số tiền mua: <b>{tongMoneySell}</b></p>
          </div>
          <div className="form-footer">
            <button type="submit" disabled>Đặt lệnh bán</button>
          </div>
          {isClose && (
             <p className="notification">HOSE: Đã kết thúc ngày làm việc.</p>
          )}
        </form>
      )
}

export default Sell;