
import ModalComponent from '../../Components/ModalComponent';
import TableComponent from '../../Components/TableComponent';
import '../../Styles/Employee.css';
import '../../Styles/Home.css';

const Employee = ({handleRowClick}) => {
    const titles = ['Tên', 'Ngày sinh', 'Địa chỉ', 'Giới tính', 'Giới tính', 'Số điện thoại', 'Trạng thái'];

    const data = [
        {
            'Tên': 'Nguyễn Văn A',
            'Ngày sinh': '01/01/1990',
            'Địa chỉ': 'Hà Nội',
            'Giới tính': 'Nam',
            'Số điện thoại': '0123456789',
            'Trạng thái': 'Đang làm việc'
        },
        {
            'Tên': 'Trần Thị B',
            'Ngày sinh': '15/03/1992',
            'Địa chỉ': 'Hồ Chí Minh',
            'Giới tính': 'Nữ',
            'Số điện thoại': '0987654321',
            'Trạng thái': 'Đang nghỉ phép'
        },]

    return (
        <div className='listContainer'>
            <div className="title1">Danh sách nhân viên</div>

            <TableComponent titles={titles} data={data} handleRowClick={handleRowClick} />
        </div>
    )
}

export default Employee;