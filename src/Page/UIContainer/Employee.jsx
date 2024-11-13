
import TableComponent from '../../Components/TableComponent';
import '../../Styles/Employee.css';
import '../../Styles/Home.css';
import InputCustom from '../../Components/InputCustom';
import ButtonCustom from '../../Components/ButtonCustom';
import Select from 'react-select';


const Employee = ({ handleRowClick, 
                    selectedOption, setSelectedOption, 
                    name, setName, 
                    dayOfBitrh, setDayOfBitrh, 
                    address, setAddress ,
                    sex, setSex,
                    phone, setPhone,
                    onAdd, onDelete, onUpdate, data, ho, setHo, options}) => {
    const titles = ['ID', 'Họ','Tên', 'Ngày sinh', 'Địa chỉ', 'Giới tính', 'Số điện thoại', 'Trạng thái'];

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            height: 20, // Chiều cao của input
            fontSize: '12px', // Cỡ chữ
            padding: '0 5px', // Padding cho input
        }),
        option: (provided) => ({
            ...provided,
            fontSize: '12px', // Cỡ chữ trong danh sách
        }),
        singleValue: (provided) => ({
            ...provided,
            fontSize: '12px', // Cỡ chữ khi chọn giá trị
        }),
        placeholder: (provided) => ({
            ...provided,
            fontSize: '12px', // Cỡ chữ của placeholder
        }),
    };

    return (
        <div className='listContainer'>
            <div className="title1">Danh sách nhân viên</div>
            <div className="grid-container">
                <InputCustom placeholder='Họ' text={ho} setText={setHo} />
                <InputCustom placeholder='Tên' text={name} setText={setName} />
                <InputCustom placeholder='Ngày Sinh' text={dayOfBitrh} setText={setDayOfBitrh} />
                <InputCustom placeholder='Địa chỉ' text={address} setText={setAddress} />
                <InputCustom placeholder='Giới tính' text={sex} setText={setSex} />
                <InputCustom placeholder='Số điện thoại' text={phone} setText={setPhone} />
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    placeholder="Trạng thái"
                    styles={customStyles}
                />
            </div>
            <div className="grid-container">
                <div className="grid-item">
                        <ButtonCustom children="Thêm" className="input" onClick={onAdd}/>
                    </div>
                    <div className="grid-item">
                        <ButtonCustom children="Xóa" className="input" onClick={onDelete}/>
                    </div>
                    <div className="grid-item">
                        <ButtonCustom children="Sửa" className="input" onClick={onUpdate}/>
                    </div>
            </div>
                
            

            <TableComponent titles={titles} data={data} handleRowClick={handleRowClick} />
        </div>
    )
}

export default Employee;