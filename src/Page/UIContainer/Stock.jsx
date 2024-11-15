
import TableComponent from '../../Components/TableComponent';
import '../../Styles/Home.css';
import '../../Styles/Investor.css';
import InputCustom from '../../Components/InputCustom';
import ButtonCustom from '../../Components/ButtonCustom';
import Select from 'react-select';


const Stock = ({macp, setMacp, name, setName, dataStock=[], handleRowClick,
                address, setAddress, phone, setPhone, fax, setFax, email, setEmail,
                numCP, setNumCP, onAdd , onDelete, onUpdate, onRefresh,
}) => {

    const titles = ['MACP', 'Tên công ty','Địa chỉ', 'Số điện thoại', 'Fax', 'Email', 'Số lượng cổ phiếu'];

    return(
        <div className='listContainer'>
             <div className="title1">Danh sách cổ phiếu</div>
            <div className="grid-container">
                <InputCustom placeholder='MACP' text={macp} setText={setMacp}/>
                <InputCustom placeholder='Tên công ty' text={name} setText={setName}  />
                <InputCustom placeholder='Địa chỉ'  text={address} setText={setAddress}/>
                <InputCustom placeholder='Số điện thoại' text={phone} setText={setPhone}/>
                <InputCustom placeholder='Fax'  text={fax} setText={setFax}/>
                <InputCustom placeholder='Email' text={email} setText={setEmail} />
                <InputCustom placeholder='Số lượng cổ phiếu' text={numCP} setText={setNumCP} />
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
                    <div className="grid-item">
                        <ButtonCustom children="Làm mới" className="input" onClick={onRefresh}/>
                    </div>
            </div>
            
            <TableComponent titles={titles} data={dataStock} handleRowClick={handleRowClick} />
        </div>
    )
}

export default Stock;