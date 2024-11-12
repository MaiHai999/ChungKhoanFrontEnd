
import ModalComponent from '../../Components/ModalComponent';
import TableComponent from '../../Components/TableComponent';
import '../../Styles/Home.css';

const Employee = () => {

    return (
        <div className='listContainer'>
            <div className="listTitle">Danh sách nhân viên</div>
            <ModalComponent title="Xóa sản phẩm" open={false}>
                <div>Bạn có chắc xóa sản phẩm này không?</div>
            </ModalComponent>
            <TableComponent />
        </div>
    )
}

export default Employee;