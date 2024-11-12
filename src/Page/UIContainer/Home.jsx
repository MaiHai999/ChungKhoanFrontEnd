import Sidebar from '../../Components/Sidebar';
import '../../Styles/Home.css';
import { ConfigVariable } from '../../config';
import React, { useState } from 'react';
import EmployeeContainer from '../Container/EmployeeContainer';

const Home = ({role = ConfigVariable.roleNV}) => {
  const [currentView, setCurrentView] = useState(ConfigVariable.NVtapQLNV);

  const onItemClick = (key) => {
    setCurrentView(key);
  }

  return (
    <div className='home'>
      <Sidebar onItemClick={onItemClick} role={role}/>
      <div className='homeContainer'>
        {currentView === ConfigVariable.NVtapQLNV && (
          <EmployeeContainer />
        )}
        
      </div>
    </div>
  )
}

export default Home