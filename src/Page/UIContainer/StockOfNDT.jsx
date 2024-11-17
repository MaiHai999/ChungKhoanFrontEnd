

import TableComponent from '../../Components/TableComponent';
import '../../Styles/Home.css';
import '../../Styles/Investor.css';
import InputCustom from '../../Components/InputCustom';
import ButtonCustom from '../../Components/ButtonCustom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StockOfNDT = ({dataStockSH=[], numOfAccount=0, dataStockKhop=[], 
                     selectedDate, setSelectedDate, selectedDateEnd, 
                     setSelectedDateEnd, onSaoKe
    }) => {
    const titles = ['MACP', 'Số lượng', 'Đơn giá', 'Trị giá'];
    const titles1 = ['Ngày giờ khớp', 'Mã CP', 'Loại giao dịch', 'Loại lệnh', 'Số lượng khớp', 'Giá khớp'];

    return(
        <div className='listContainer'>
             <div className="title1">Số dư chứng khoán niêm yết</div>
             <TableComponent titles={titles} data={dataStockSH} />
             <div className="title1">Số dư tài khoản</div>
             <div className="inline-container">
                <p>Tổng số dư trong các tài khoản : </p>
                <p>{numOfAccount}</p>
             </div>
             <div className="title1">Sao kê lệnh khớp</div>
             <div className="grid-container12">
                <div className="grid-item">
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)} 
                        dateFormat="dd/MM/yyyy" 
                        placeholderText="Chọn ngày bắt đầu" 
                    />
                </div>
                <div className="grid-item">
                    <DatePicker
                        selected={selectedDateEnd}
                        onChange={(date) => setSelectedDateEnd(date)} 
                        dateFormat="dd/MM/yyyy" 
                        placeholderText="Chọn ngày kết thúc" 
                    />
                </div>
                <div className="grid-item">
                    <ButtonCustom children="Sao kê" className="input" onClick={onSaoKe}/>
                </div>
                
                
             </div>
            <TableComponent titles={titles1} data={dataStockKhop} />
             
        </div>
    )
}

export default StockOfNDT;