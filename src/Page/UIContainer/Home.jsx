import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css'
import ModalComponent from '../../Components/ModalComponet/ModalComponent';
import TableComponent from '../../Components/TableNV/TableComponent';
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
        <div className='listContainer'>
          <div className="listTitle">Danh sách nhân viên</div>
          <ModalComponent title="Xóa sản phẩm" open={false}>
            <div>Bạn có chắc xóa sản phẩm này không?</div>
          </ModalComponent>
          <TableComponent/>
        </div>
      </div>
    </div>
  )
}

export default Home