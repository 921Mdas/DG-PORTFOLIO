import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useProgress, Html } from "@react-three/drei";
import { styled } from "@mui/material/styles";

const WhiteCircularProgress = styled(CircularProgress)({
  color: "#fff",
});

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <WhiteCircularProgress
        size={500}
        variant="determinate"
        color="inherit"
        {...props}
      />

      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "white", fontSize: "1rem" }}
        >{`${Math.round(props.value)}%`}</Typography>
        {/* <Typography
          variant="caption"
          component="div"
          className="righttop"
          sx={{
            color: "#26fcdb",
            fontSize: "1.5rem",
            position: "absolute",
            bottom: "10%",
            left: "30%",
          }}
        >{`+=`}</Typography> */}
        {/* <Typography
          variant="caption"
          component="div"
          className="leftbottom"
          sx={{
            color: "#e01e22",
            fontSize: "1.5rem",
            position: "absolute",
            top: "10%",
            right: "30%",
          }}
        >{`</>`}</Typography> */}
      </Box>
    </Box>
  );
}

export default function CircularStatic() {
  const { progress } = useProgress();

  return (
    <Html center>
      <CircularProgressWithLabel value={progress} />
    </Html>
  );
}
