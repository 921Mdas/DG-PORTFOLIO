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
        size={200}
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
          sx={{ color: "white", fontSize: "2rem" }}
        >{`${Math.round(props.value)}%`}</Typography>
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
