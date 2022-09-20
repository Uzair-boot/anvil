import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Drawer,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { StyledCell } from './components.styled';

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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CloseIcon onClick={toggleDrawer(anchor, false)} />
    </Box>
  );

  function trigger(anchor) {
    toggleDrawer(anchor, true);
  }
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
                onClick={(right) => {
                  toggleDrawer(right, true);
                  console.log('jjkhjk');
                }}
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
                  {' '}
                  <StyledCell> {row.status}</StyledCell>
                </TableCell>
                <TableCell align='center'>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        {['left', 'right', 'top', 'bottom'].map((anchor) => (
          <React.Fragment key={anchor}>
            {console.log(anchor, 'this is acnchor')}
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
