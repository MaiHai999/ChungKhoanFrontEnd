import React from 'react'
import { AiOutlineStock } from "react-icons/ai";
import '../Styles/Sidebar.css'
import { FaPeopleGroup } from "react-icons/fa6";
import { SiShutterstock } from "react-icons/si";
import { FaSellcast } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { MdPriceChange } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { ConfigVariable } from '../config';


const Sidebar = ({ onItemClick, role }) => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'><AiOutlineStock /></span>
        <span className='stock'>Sàn giao dịch chứng khoán</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          {role === ConfigVariable.roleNV && (
            <>
              <p className='title'>CÔNG TY</p>
              <li onClick={() => onItemClick(ConfigVariable.NVtapQLNV)}>
                <FaPeopleGroup className='icon' />
                <span>Quản trị nhân viên</span>
              </li>
              <li onClick={() => onItemClick(ConfigVariable.NVtapQLNDT)}>
                <RiAlignItemBottomFill className='icon' />
                <span>Quản trị nhà đầu tư</span>
              </li>
              <li onClick={() => onItemClick(ConfigVariable.NDTtapSoDu)}>
                <FaMoneyBillAlt className='icon' />
                <span>Tra cứu số dư</span>
              </li>
            </>
          )}

          {role === ConfigVariable.roleSoGD && (
            <>
              <p className='title'>SỞ GIAO DỊCH</p>
              <li onClick={() => onItemClick(ConfigVariable.SoGDtapQLCoPhieu)}>
                <SiShutterstock className='icon' />
                <span>Quản trị cổ phiếu</span>
              </li>
              <li onClick={() => onItemClick(ConfigVariable.SoGDtapQLNVSan)}>
                <MdPriceChange className='icon' />
                <span>Quan lý nhân viên sàn</span>
              </li>
            </>
          )}

          {role === ConfigVariable.roleNDT && (
            <>
              <p className='title'>NHÀ ĐẦU TƯ</p>
              <li onClick={() => onItemClick(ConfigVariable.NDTtapSoDu)}>
                <FaMoneyBillAlt className='icon' />
                <span>Tra cứu số dư</span>
              </li>
              <li onClick={() => onItemClick(ConfigVariable.NDTtapMua)}>
                <FaSellcast className='icon' />
                <span>Đặt lệnh mua</span>
              </li>
              <li onClick={() => onItemClick(ConfigVariable.NDTtapBan)}>
                <FaSellcast className='icon' />
                <span>Đặt lệnh bán</span>
              </li>
            </>
          )}

          <p className='title'>TÀI KHOẢN</p>
          <li>
            <IoLogOut className='icon' />
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
      <div className='bottom'></div>
    </div>
  )
}

export default Sidebar