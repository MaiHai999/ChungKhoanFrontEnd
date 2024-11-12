import React from 'react'
import './TableComponent.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableComponent = () => {
  
  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }

  const rows = [{
    ho:'Tran Ngoc Khanh',
    ten:'Van',
    ngaysinh:'26/02/2002',
    diachi: '97 Man Thien',
    gioitinh:'Nam',
    sodienthoai:'043782974',
    trangthai: 'ConLam'
  },
  {
    ho:'Tran Ngoc Khanh',
    ten:'Van',
    ngaysinh:'26/02/2002',
    diachi: '97 Man Thien',
    gioitinh:'Nam',
    sodienthoai:'043782974',
    trangthai: 'DaNghi'
  },
  {
    ho:'Tran Ngoc Khanh',
    ten:'Van',
    ngaysinh:'26/02/2002',
    diachi: '97 Man Thien',
    gioitinh:'Nam',
    sodienthoai:'043782974',
    trangthai: 'ConLam'
  },
  {
    ho:'Tran Ngoc Khanh',
    ten:'Van',
    ngaysinh:'26/02/2002',
    diachi: '97 Man Thien',
    gioitinh:'Nam',
    sodienthoai:'043782974',
    trangthai: 'DaNghi'
  },
  {
    ho:'Tran Ngoc Khanh',
    ten:'Van',
    ngaysinh:'26/02/2002',
    diachi: '97 Man Thien',
    gioitinh:'Nam',
    sodienthoai:'043782974',
    trangthai: 'ConLam'
  },
  {
    ho:'Tran Ngoc Khanh',
    ten:'Van',
    ngaysinh:'26/02/2002',
    diachi: '97 Man Thien',
    gioitinh:'Nam',
    sodienthoai:'043782974',
    trangthai: 'DaNghi'
  }
  ];

  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Họ</TableCell>
            <TableCell className='tableCell'>Tên</TableCell>
            <TableCell className='tableCell'>Ngày sinh</TableCell>
            <TableCell className='tableCell'>Địa chỉ</TableCell>
            <TableCell className='tableCell'>Giới tính</TableCell>
            <TableCell className='tableCell'>Số điện thoại</TableCell>
            <TableCell className='tableCell'>Trạng thái</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            // key để sắp xếp table đang để là họ sau này phải đổi theo thứ tự muốn xếp ví dụ api call thêm id của nhân viên nữa
            <TableRow key={row.ho}>
              <TableCell>{row.ho}</TableCell>
              <TableCell className='tableCell'>{row.ten}</TableCell>
              <TableCell className='tableCell'>{row.ngaysinh}</TableCell>
              <TableCell className='tableCell'>{row.diachi}</TableCell>
              <TableCell className='tableCell'>{row.gioitinh}</TableCell>
              <TableCell className='tableCell'>{row.sodienthoai}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.trangthai}`}>
                  {row.trangthai}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent