import {
  AddCircleOutline,
  ArrowUpward,
  DarkMode,
  Group,
  Laptop,
  Notifications,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Fade,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";

export default function Pupils() {
  // Modal start
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Modal end
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //   Add Pupil

  const pupilTable = useSelector((state) => state.pupils)
  console.log(pupilTable);

  const reform = useRef(null);

  const dispatch = useDispatch();
  const AddPupil = () => {
    const form = reform.current;
     const value = {
      name: form.name.value,
      direction: form.direction.value,
      phone: form.phone.value,
      pay: form.pay.value,
      group: form.group.value,
      status: false,
    };

    dispatch({ type: "ADD_NEW_PUPIL", payload: value });
  };


  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <h2>Salom Sheroz 👋</h2>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <DarkMode sx={{ color: "grey" }} />
          <AddCircleOutline sx={{ color: "grey" }} />
          <Notifications sx={{ color: "grey" }} />
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              borderRadius: "10px",
              backgroundColor: "white",
              color: "grey",
              padding: "6px 12px",
            }}
          >
            <Search />
            <input
              style={{ border: "none", outline: "none" }}
              type="text"
              placeholder="Qidiruv"
            />
          </Box>
        </Box>
      </Box>
      <Grid
        container
        gap={4}
        justifyContent={"center"}
        sx={{ backgroundColor: "#ffff", borderRadius: "25px", p: 2, mt: 2 }}
      >
        <Grid item lg={3.5} sx={{ borderRight: "2px solid #F0F0F0" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Box
              sx={{
                borderRadius: "50%",
                background:
                  "linear-gradient(201.18deg, #D3FFE7 3.14%, #EFFFF6 86.04%)",
                width: "100px",
                height: "100px",
                position: "relative",
              }}
            >
              <Group
                sx={{
                  color: "#00AC4F",
                  position: "absolute",
                  top: "30%",
                  left: "30%",
                  fontSize: "40px",
                }}
              />
            </Box>
            <Box>
              <Typography sx={{ color: "grey" }} variant="p" component={"p"}>
                Hamma o'quvchilar
              </Typography>
              <Typography
                sx={{ fontSize: "32px", fontWeight: "600" }}
                variant="p"
                component={"p"}
              >
                125 ta
              </Typography>
              <Typography
                sx={{ display: "flex", gap: "5px", alignItems: "center" }}
                variant="p"
                component={"p"}
              >
                <ArrowUpward sx={{ color: "#00AC4F", fontWeight: "bold" }} />{" "}
                <span style={{ color: "#00AC4F", fontWeight: "bold" }}>
                  16%
                </span>{" "}
                Oylik
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={3.5} sx={{ borderRight: "2px solid #F0F0F0" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Box
              sx={{
                borderRadius: "50%",
                background:
                  "linear-gradient(201.18deg, #D3FFE7 3.14%, #EFFFF6 86.04%)",
                width: "100px",
                height: "100px",
                position: "relative",
              }}
            >
              <BsFillPersonCheckFill
                style={{
                  color: "#00AC4F",
                  position: "absolute",
                  top: "30%",
                  left: "30%",
                  fontSize: "40px",
                }}
              />
            </Box>
            <Box>
              <Typography sx={{ color: "grey" }} variant="p" component={"p"}>
                Bitirganlar
              </Typography>
              <Typography
                sx={{ fontSize: "32px", fontWeight: "600" }}
                variant="p"
                component={"p"}
              >
                64 ta
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={3.5}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Box
              sx={{
                borderRadius: "50%",
                background:
                  "linear-gradient(201.18deg, #D3FFE7 3.14%, #EFFFF6 86.04%)",
                width: "100px",
                height: "100px",
                position: "relative",
              }}
            >
              <Laptop
                sx={{
                  color: "#00AC4F",
                  position: "absolute",
                  top: "30%",
                  left: "30%",
                  fontSize: "40px",
                }}
              />
            </Box>
            <Box>
              <Typography sx={{ color: "grey" }} variant="p" component={"p"}>
                Faol o'quvchilar
              </Typography>
              <Typography
                sx={{ fontSize: "32px", fontWeight: "600" }}
                variant="p"
                component={"p"}
              >
                54 ta
              </Typography>
              <Box sx={{ display: "flex", position: "relative" }}>
                <Avatar
                  sx={{ width: "25px", height: "25px" }}
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
                <Avatar
                  sx={{
                    width: "25px",
                    height: "25px",
                    left: "15%",
                    position: "absolute",
                  }}
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/3.jpg"
                />
                <Avatar
                  sx={{
                    width: "25px",
                    height: "25px",
                    left: "33%",
                    position: "absolute",
                  }}
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
                <Avatar
                  sx={{
                    width: "25px",
                    height: "25px",
                    left: "50%",
                    position: "absolute",
                  }}
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/3.jpg"
                />
                <Avatar
                  sx={{
                    width: "25px",
                    height: "25px",
                    left: "68%",
                    position: "absolute",
                  }}
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8, p: 3, backgroundColor: "white", borderRadius: "20px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "22px", fontWeight: "600" }}
              variant="p"
              component={"p"}
            >
              Hamma o'quchilar
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#16C098", mt: 1 }}
              variant="p"
              component={"p"}
            >
              Faol o'quchilar
            </Typography>
          </Box>
          <Box  sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Box>
              <Button onClick={handleOpen}>O'quvchi qo'shish</Button>
              <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <Box
                    sx={{
                      margin: "0 auto",
                      width: "500px",
                      p: 2,
                      backgroundColor: "white",
                      mt: 20,
                    }}
                  >
                    <FormControl component={"form"} ref={reform}>
                      <Box
                        sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Name"
                          variant="outlined"
                          name="name"
                        />
                        <TextField
                          id="outlined-basic"
                          label="Yo'nalish"
                          variant="outlined"
                          name="direction"
                        />
                        <TextField
                          id="outlined-basic"
                          label="Telefon Raqami"
                          variant="outlined"
                          name="phone"
                        />
                        <TextField
                          id="outlined-basic"
                          label="To'lov"
                          variant="outlined"
                          name="pay"
                        />
                        <TextField
                          id="outlined-basic"
                          label="Guruh"
                          variant="outlined"
                          fullWidth
                          name="group"
                        />
                        <Button
                          variant="contained"
                          fullWidth
                          onClick={() => {
                            AddPupil()
                            handleClose()
                            }}
                        >
                          O'quvchi qo'shish
                        </Button>
                      </Box>
                    </FormControl>
                  </Box>
                </Fade>
              </Modal>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                borderRadius: "20px",
                backgroundColor: "#F9FBFF",
                width: "200px",
                p: 1,
              }}
            >
              <Search sx={{ color: "grey" }} />
              <input
                style={{
                  outline: "none",
                  border: "none",
                  background: "none",
                  color: "grey",
                }}
                type="text"
                placeholder="Qidiruv"
              />
            </Box>
            
            <FormControl
              variant="standard"
              sx={{
                width: "200px",
                backgroundColor: "#F9FBFF",
                borderRadius: "20px",
              }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Short Status:{" "}
              </InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"faol"}>Faol</MenuItem>
                <MenuItem value={"faol emas"}>Faol emas</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Table Container */}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>F.I.O</TableCell>
                <TableCell align="right">Yo'nalish</TableCell>
                <TableCell align="right">Telefon nomer</TableCell>
                <TableCell align="right">To'lov</TableCell>
                <TableCell align="right">Guruh</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pupilTable.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.direction}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.pay}</TableCell>
              <TableCell align="right">{row.group}</TableCell>
              <TableCell align="right">
                 {row.status ? 
                    <Button variant="contained" color="success">Active</Button>:
                    <Button variant="contained" color="error" >inactive</Button>
                  }
              </TableCell>
            </TableRow>
          ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
