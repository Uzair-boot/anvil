import * as React from 'react';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Drawer,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  StyledCell,
  StyledTypography,
  StyledTableCell,
} from './components.styled';

export default function CheckInTable() {
  const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

  const [state, setState] = React.useState({ right: false });

  const [data, setData] = React.useState({ name: '' });

  const toggleDrawer = (anchor, open, row) => (event) => {
    if (row != undefined) {
      setData(row);
    } else {
      setData({});
    }

    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const rows = [
    {
      checkInName: 'Some',
      name: 'randy',
      status: 'CHECK_IN',
      date: currentDate,
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVfwvLnpVeA7Ypyr0ByTfPI9Dt4Q9pLyHeA&usqp=CAU',
    },
    {
      checkInName: 'Dummy',
      name: 'Rock',
      status: 'CHECK_IN',
      date: currentDate,
      image_url:
        'https://www.interactivebrokers.hu/images/web/cryptocurrency-hero.jpg',
    },
    {
      checkInName: 'Data',
      name: 'Dwyne',
      status: 'CHECK_IN',
      date: currentDate,
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZUyBwWbNu3UVD-oT0Ft4oTlY9eoU9HaFse530jJMVmfcAnjFaUh9KSoeB6dBdv9SrBo&usqp=CAU',
    },
    {
      checkInName: 'Loop',
      name: 'Jhon',
      status: 'CHECK_IN',
      date: currentDate,
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XbaubOoRuhP3I-JN7K7ls6N-t6DRy5_uCx9LFWEkHO-JO20aR3WPG4988i1fzZxzvLg&usqp=CAU',
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role='presentation'
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CloseIcon onClick={toggleDrawer(anchor, false)} />
      <Box textAlign='center'>
        <StyledTypography>{data.name}</StyledTypography>
        <img src={data.image_url} width={200} height={200} />
      </Box>
    </Box>
  );

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>Title</StyledTableCell>
              <StyledTableCell align='center'>Owner</StyledTableCell>
              <StyledTableCell align='center'>Status</StyledTableCell>
              <StyledTableCell align='center'>Created at</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                onClick={toggleDrawer('right', true, row)}
                key={index}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  cursor: 'pointer',
                }}
              >
                <TableCell component='th' scope='row' align='center'>
                  {row.checkInName}
                </TableCell>
                <TableCell align='center'>{row.name}</TableCell>
                <TableCell align='center'>
                  <StyledCell> {row.status}</StyledCell>
                </TableCell>
                <TableCell align='center'>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        {['right'].map((item) => (
          <React.Fragment key={item}>
            <Drawer
              anchor={item}
              open={state[item]}
              onClose={toggleDrawer(item, false)}
            >
              {list(item)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
