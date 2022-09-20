import { Button, Grid, TableCell, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

export const ButtonGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledButton = styled(Button)`
  background: #000000;
  color: #ffffff;
  &:hover {
    background-color: #184e93a1;
  }
`;
export const StyledTypography = styled(Typography)`
  font-size: 25px;
  font-weight: 700;
  color: #000000;
`;
export const StyledCell = styled(Typography)`
  background: aqua;
`;

export const StyledTableCell = styled(TableCell)`
font-size: 17px;
font-weight: 700;
`;
