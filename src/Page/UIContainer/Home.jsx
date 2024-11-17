import Sidebar from '../../Components/Sidebar';
import '../../Styles/Home.css';
import { ConfigVariable } from '../../config';
import EmployeeContainer from '../Container/EmployeeContainer';
import InvestorContainer from '../Container/InvestorContainer';
import ReportStockContainer from '../Container/ReportStockContainer';
import EmployeeSanContainer from '../Container/EmployeeSanContainer';
import StockContainer from '../Container/StockContainer';
import StockOfNDTContainer from '../Container/StockOfNDTContainer';

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

        {currentView === ConfigVariable.NDTtapSoDu && (
          <StockOfNDTContainer/>
        )}

      </div>
    </div>
  )
}

export default Home