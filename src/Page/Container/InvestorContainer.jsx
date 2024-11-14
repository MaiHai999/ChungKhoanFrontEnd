
import Investor from "../UIContainer/Investor";
import React, { useState, useEffect } from 'react';
import * as investorService from "../../Services/InvestorService";
import { mapInvestorData } from "../../Utils/mapData";


const InvestorContainer = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [name, setName] = useState(null);
    const [matknh, setMatknh] = useState(null);
    const [dayOfBitrh, setDayOfBitrh] = useState(null);
    const [address, setAddress] = useState(null);
    const [sex, setSex] = useState(null);
    const [password, setPassword] = useState(null);
    const [dataNDT, setDataNDT] = useState([]);
    const [dataTKNH, setDataTKNH] = useState([]);
    const [ho, setHo] = useState([]);
    const [cmnd, setCmnd] = useState(null);
    const [email, setEmail] = useState(null);
    const [placeOfBirth, setPlaceOfBirth] = useState(null);
    const [passwordCommand, setPasswordCommand] = useState(null);
    const [ngaycap, setNgayCap] = useState(null);
    const [sodu, setSoDu] = useState(null);
    const [tenTKNH, setTenTKNH] = useState(null);
    const [maNDT, setMaNDT] = useState(null);

    const options = [
        { value: 1, label: 'Đã nghỉ việc' },
        { value: 0, label: 'Đang làm việc' },
    ];

    const initDta = async() => {
        const response = await investorService.getInvestor();
        if(response.isSuccess){
            const dataProcess = await mapInvestorData(response.data.data);
            setDataNDT(dataProcess);
        }
    }

    const handleRowClick = async(rowData) => {
        setName(rowData["Tên"]?.trim() || null);
        setHo(rowData["Họ"]?.trim() || null);
        setMaNDT(rowData["MATK"] || null);
        setDayOfBitrh(rowData["Ngày sinh"] || null);
        setAddress(rowData["Địa chỉ"] || null);
        setSex(rowData["Giới tính"] || null);
        setPassword(rowData["Mật khẩu"] || null);
        setPasswordCommand(rowData["Mật khẩu đặt lệnh"] || null);
        setCmnd(rowData["CMND"] || null);
        setEmail(rowData["Email"] || null);
        setPlaceOfBirth(rowData["Nơi sinh"] || null);
        setNgayCap(rowData["Ngày Cấp"] || null);
    }

    const onRefresh = () => {
        setName('');
        setHo('');
        setMatknh('');
        setDayOfBitrh('');
        setAddress('');
        setSex('');
        setPassword('');
        setPasswordCommand('');
        setCmnd('');
        setEmail('');
        setPlaceOfBirth('');
        setNgayCap('');
        initDta();
    }

    const onAdd = async() => {
        const response = await investorService.addInvestor({ho:ho, ten:name, ngaySinh:dayOfBitrh, diaChi:address,
                                                            gioiTinh:sex,noisinh:placeOfBirth,email:email,cmnd:cmnd,
                                                            ngaycap:ngaycap,matkhau:password, matkhaudatlenh:passwordCommand
                                                            });
        
        if(response.isSuccess){
            alert('Thêm thành công');
            initDta();
        }else{
            alert('Thêm thất bại');
        }
    }

    const onUpdate = async() => {
        const response = await investorService.updateInvestor({idNDT:maNDT,ho:ho, ten:name, ngaySinh:dayOfBitrh, diaChi:address,
                                                                gioiTinh:sex,noisinh:placeOfBirth,email:email,cmnd:cmnd,
                                                                ngaycap:ngaycap,matkhau:password, matkhaudatlenh:passwordCommand
                                                            });

        if(response.isSuccess){
            alert('Sửa thành công');
            initDta();
        }else{
            alert('Sửa thất bại');
        }
    }

    const onDelete = async() => {
        const response = await investorService.deleteInvestor({id:maNDT});
        if(response.isSuccess){
            alert('Xóa thành công');
            initDta();
        }else{
            alert('Xóa thất bại');
        }
    }

    useEffect(() => {
        initDta();
    },[]);

    return(
        <Investor options={options} 
                  setSelectedOption={setSelectedOption} selectedOption={selectedOption}
                  ho={ho} setHo={setHo}
                  setName={setName} name={name}
                  setCmnd={setCmnd} cnmd={cmnd}
                  setAddress={setAddress} address={address}
                  setDayOfBitrh={setDayOfBitrh} dayOfBitrh={dayOfBitrh}
                  setEmail={setEmail} email={email}
                  setPlaceOfBirth={setPlaceOfBirth} placeOfBirth={placeOfBirth}
                  setPassword={setPassword} password={password}
                  setSex={setSex} sex={sex}
                  setMaTKNH={setMatknh} maTKNH={matknh}
                  setPasswordCommand={setPasswordCommand} passwordCommand={passwordCommand}
                  setNgayCap={setNgayCap} ngayCap={ngaycap}
                  setSoDu={setSoDu} soDu={sodu}
                  setTenTKNH={setTenTKNH} tenTKNH={tenTKNH}
                  dataNDT={dataNDT} dataTKNH={dataTKNH}
                  handleRowClick={handleRowClick}
                  onRefresh={onRefresh}
                  onAdd={onAdd}
                  onDelete={onDelete} onUpdate={onUpdate}
        />
    )
}

export default InvestorContainer;







