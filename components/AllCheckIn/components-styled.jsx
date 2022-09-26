import { styled } from '@mui/system'
import { Box, Button, Dialog, Grid, TableCell, Typography } from '@mui/material'

export const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`

export const ButtonGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const StyledButton = styled(Button)`
  background: #000000;
  color: #ffffff;
  &:hover {
    background-color: #184e93a1;
  }
`
export const StyledTypography = styled(Typography)`
  font-size: 25px;
  font-weight: 700;
  color: #000000;
`
export const StyledCell = styled(Typography)`
  background: aqua;
`

export const StyledTableCell = styled(TableCell)`
  font-size: 17px;
  font-weight: 700;
`

export const DialogBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`

export const SubmitButton = styled(Button)`
  background: #000000;
  color: #ffffff;
  &:hover {
    background-color: #184e93a1;
  }
`

export const StyledDialog = styled(Dialog)(() => ({
  '& .MuiDialog-container': {
    '& .MuiPaper-root': {
      width: '100%',
      maxWidth: '500px',
    },
  },
}))
