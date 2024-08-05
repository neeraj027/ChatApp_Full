import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";

export const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px",
});

export const Link = styled(LinkComponent)({
  textDecoration: "none",
  color: "black",
  padding: "1rem",
  ":hover": {
    backgroundColor: "#f0f0f0",
  },
});

export const InputBox = styled("input")({
  padding: "0.5rem",
  width: "100%",
  border: "none",
  outline: "none",
  backgroundColor: "#00000",
  borderRadius: "0.5rem",
  margin: "0.5rem 0",
  fontSize: "1rem",
});
