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
import { StyledCell, StyledTypography } from './components.styled';

function createData(checkInName, name, status, date) {
  return { checkInName, name, status, date };
}

const rows = [
  createData('CheckIn Name', 'Some Name', 'CHECKED_IN', 'Some Date'),
];

export default function CheckInTable() {
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role='presentation'
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CloseIcon onClick={toggleDrawer(anchor, false)} />
      <Box textAlign='center'>
        <StyledTypography> Checkin Name</StyledTypography>
        <img
          src='https://www.interactivebrokers.hu/images/web/cryptocurrency-hero.jpg'
          width={200}
          height={200}
        />
      </Box>
    </Box>
  );

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Title</TableCell>
              <TableCell align='center'>Owner</TableCell>
              <TableCell align='center'>Status</TableCell>
              <TableCell align='center'>Created at</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                onClick={toggleDrawer('right', true)}
                key={row.name}
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
