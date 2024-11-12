import React from 'react'
import { AiOutlineStock } from "react-icons/ai";
import './Sidebar.css'
import { FaPeopleGroup } from "react-icons/fa6";
import { SiShutterstock } from "react-icons/si";
import { FaSellcast } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { MdPriceChange } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
        <span className='logo'><AiOutlineStock /></span>
        <span className='stock'>Sàn giao dịch chứng khoán</span>
        </div>
        <hr/>
        <div className='center'>
          <ul>
            <p className='title'>CÔNG TY</p>
            <li>
              <FaPeopleGroup className='icon'/>
              <span>Quản trị nhân viên</span>
            </li>
            <li>
              <RiAlignItemBottomFill className='icon'/>
              <span>Quản trị nhà đầu tư</span>
            </li>
            <li>
              <FaMoneyBillAlt className='icon'/>
              <span>Tra cứu số dư</span>
            </li>
            <p className='title'>SỞ GIAO DỊCH</p>
            <li>  
              <SiShutterstock className='icon'/>
              <span>Quản trị cổ phiếu</span>
            </li>
            <li>
              <MdPriceChange className='icon'/>
              <span>Tính giá tham chiếu cổ phiếu</span>
            </li>
            <p className='title'>NHÀ ĐẦU TƯ</p>
            <li>
              <FaMoneyBillAlt className='icon'/>
              <span>Tra cứu số dư</span>
            </li>
            <li>
              <FaSellcast className='icon'/>
              <span>Đặt lệnh mua</span>
            </li>
            <li>
              <FaSellcast className='icon'/>
              <span>Đặt lệnh bán</span>
            </li>
            <p className='title'>TÀI KHOẢN</p>
            <li>
              <MdAccountBox className='icon'/>
              <span>Hồ sơ cá nhân</span>
            </li>
            <li>
              <IoLogOut className='icon'/>
              <span>Đăng xuất</span>
            </li>
          </ul>
        </div>
        <div className='bottom'></div>
    </div>
  )
}

export default Sidebar