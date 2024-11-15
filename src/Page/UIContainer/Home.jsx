import Sidebar from '../../Components/Sidebar';
import '../../Styles/Home.css';
import { ConfigVariable } from '../../config';
import EmployeeContainer from '../Container/EmployeeContainer';
import InvestorContainer from '../Container/InvestorContainer';
import ReportStockContainer from '../Container/ReportStockContainer';
import EmployeeSanContainer from '../Container/EmployeeSanContainer';
import StockContainer from '../Container/StockContainer';

const Home = ({role = ConfigVariable.roleNV, onLogout, onItemClick, currentView}) => {

  return (
    <div className='home'>
      <Sidebar onItemClick={onItemClick} role={role} onLogout={onLogout}/>
      <div className='homeContainer'>
        {currentView === ConfigVariable.NVtapQLNV && (
          <EmployeeContainer />
        )}

        {currentView === ConfigVariable.NVtapQLNDT && (
          <InvestorContainer />
        )}

        {currentView === ConfigVariable.NVtapQLSoDu && (
          <ReportStockContainer />
        )}

        {currentView === ConfigVariable.SoGDtapQLNVSan && (
          <EmployeeSanContainer />
        )}

        {currentView === ConfigVariable.SoGDtapQLCoPhieu && (
          <StockContainer />
        )}


        
      </div>
    </div>
  )
}

export default Home