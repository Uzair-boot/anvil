import * as React from "react";
import { useQuery } from "@apollo/client";
import Moment from "react-moment";
import CloseIcon from "@mui/icons-material/Close";
import { GET_CHARACTERS } from "./Quries_gql";
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
  Typography,
} from "@mui/material";
import {
  StyledCell,
  StyledTypography,
  StyledTableCell,
} from "./components-styled";

export default function CheckInTable() {
  const [state, setState] = React.useState({ right: false });

  const [drawerData, setDrawerData] = React.useState({ name: "" });

  const [gqlData, setGqlData] = React.useState({});

  const { data, loading, error } = useQuery(GET_CHARACTERS);

  React.useEffect(() => {
    setGqlData(data?.check_in);
  }, [data]);

  if (error) {
    return (
      <Typography>Some error occured while fetching data from API</Typography>
    );
  } else if (loading) {
    return <Typography>Loading....</Typography>;
  }

  const rows = [];
  if (gqlData) {
    gqlData.map((item) => {
      rows.push(item);
    });
  }

  const list = (anchor) => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CloseIcon onClick={toggleDrawer(anchor, false)} />
      <Box textAlign="center">
        <StyledTypography>{drawerData.name}</StyledTypography>
        <img
          src={drawerData.image_url}
          alt="Image from API"
          width={200}
          height={200}
        />
      </Box>
    </Box>
  );
  const toggleDrawer = (anchor, open, row) => (event) => {
    if (row != undefined) {
      setDrawerData(row);
    } else {
      setDrawerData({});
    }

    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Owner</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Created at</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows &&
              rows.map((row, index) => (
                <TableRow
                  onClick={toggleDrawer("right", true, row)}
                  key={index}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">
                    <StyledCell> {row.__typename}</StyledCell>
                  </TableCell>
                  <TableCell align="center">
                    <Moment format="DD/MM/YYYY">{row.created_at}</Moment>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div>
        {["right"].map((item) => (
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
