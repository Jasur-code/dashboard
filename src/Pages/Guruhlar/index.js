import {
  AddCircleOutline,
  ArrowDownward,
  ArrowUpward,
  DarkMode,
  Group,
  Laptop,
  MoreVert,
  Notifications,
  Search,
} from "@mui/icons-material";
import { Avatar, Box, Button, Fade, FormControl, Grid, LinearProgress, Modal, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

export default function Guruhlar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // Add Group

  const reform = useRef(null)

  const dispatch = useDispatch()

  const addGroup = () =>{
    const form = reform.current
    const value = {
      date: form.date.value,
      direction: form.direction.value,
      number: form.number.value,
      percentage: form.percentage.value,
    }
    dispatch({type:"ADD_NEW_GROUP", payload: value})
   
  }

  const group = useSelector((state) => state.group)

  console.log(group);
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap:"wrap" }}>
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
        sx={{ backgroundColor: "#ffff", borderRadius: "25px", p: 2, mt:2 }}
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
                Ketgan o'quvchilar
              </Typography>
              <Typography
                sx={{ fontSize: "32px", fontWeight: "600" }}
                variant="p"
                component={"p"}
              >
                10 ta
              </Typography>
              <Typography
                sx={{ display: "flex", gap: "5px", alignItems: "center" }}
                variant="p"
                component={"p"}
              >
                <ArrowDownward sx={{ color: " #D0004B", fontWeight: "bold" }} />{" "}
                <span style={{ color: " #D0004B", fontWeight: "bold" }}>
                  1%
                </span>{" "}
                Oylik
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
            flexWrap:"wrap",
            ml:5
          }}
        >
          <Typography sx={{ fontSize: "32px", fontWeight: "600" }} variant="h5">
            Guruhlar
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "600" }}
            variant="p"
            component={"p"}
          >
            Oktabr, 27
          </Typography>
        </Box>
        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}> 
             <Box sx={{display:"flex", gap:"20px", mt:3, flexWrap:"wrap", ml:5}}>
          <Box>
             <Typography sx={{ fontSize: "28px" }} variant="p" component={"p"}>
              7
            </Typography>
            <Typography
              sx={{ fontSize: "16px", color: "grey" }}
              variant="p"
              component={"p"}
            >
              Faol guruhlar
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "28px" }} variant="p" component={"p"}>
              2
            </Typography>
            <Typography
              sx={{ fontSize: "16px", color: "grey" }}
              variant="p"
              component={"p"}
            >
              Tugatgan guruh
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "28px" }} variant="p" component={"p"}>
              9
            </Typography>
            <Typography
              sx={{ fontSize: "16px", color: "grey" }}
              variant="p"
              component={"p"}
            >
              Umumiy guruh
            </Typography>
          </Box>
            </Box>
            <Box>
              <Button onClick={handleOpen}>Guruh qo'shish</Button>
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
                          label="December 20, 2022"
                          variant="outlined"
                          name="date"
                        />
                          <TextField
                          id="outlined-basic"
                          label="Yo'nalish"
                          variant="outlined"
                          name="direction"
                        />
                        <TextField
                         type={"number"}
                          id="outlined-basic"
                          label="8"
                          variant="outlined"
                          name="number"
                        />
                        <TextField
                          id="outlined-basic"
                          label="O'rtacha o'z"
                          variant="outlined"
                          name="percentage"
                        />
                    
                        <Button
                          variant="contained"
                          fullWidth
                          onClick={() => {
                            addGroup()
                            handleClose()
                            }}
                        >
                          Guruh qo'shish
                        </Button>
                      </Box>
                    </FormControl>
                  </Box>
                </Fade>
              </Modal>
            </Box>
        </Box>
       

        <Grid container justifyContent={"center"} gap={3} mt={5}>
        {group.map((v, i) => (
          <Grid item lg={3.7} md={10} xs={12}>
                <Box sx={{p:2, backgroundColor:"#FEE4CB", borderRadius:"10px"}}>
                    <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <Typography sx={{color:"grey", fontSize:"13px", fontWeight:"500"}} variant="p" component={"p"}>{v.date}</Typography>
                        <MoreVert/>
                    </Box>
                    <Box sx={{position:"relative"}}>
                        <Typography sx={{fontSize:"24px", fontWeight:"700", mt:2}} variant="p" component={"p"}>{v.direction}</Typography>
                        <Typography sx={{fontSize:"12px", fontWeight:"500", color:"grey"}} variant="p" component={"p"}>O'quvchilar soni: 6  </Typography>
                        <Typography sx={{fontSize:"12px", fontWeight:"700", mt:3}} variant="p" component={"p"}>O'rtacha o'z </Typography>
                        <LinearProgress color="warning"  variant="determinate" value={v.percentage} sx={{mt:1}} />
                        <Typography sx={{ fontSize:"12px", fontWeight:"800", mt:1, position:"absolute", right:"3%"}} variant="p" component={"p"}>{v.percentage} %</Typography>
                        <Box sx={{display:"flex", justifyContent:"space-between", mt:7}}>
                            <Typography sx={{color:"grey"}} variant="p" component={"p"}>O'qituvchi</Typography>
                            <Box sx={{display:"flex"}}> 
                            <Avatar sx={{width:"25px", height:"25px"}} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                            <Avatar sx={{width:"25px", height:"25px"}} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                            <Avatar sx={{width:"25px", height:"25px"}} alt="Remy Sharp" >+</Avatar>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        ))}
           
        </Grid>
      </Box>
    </Box>
  );
}
