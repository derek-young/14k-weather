import MuiButton from "@mui/material/Button";

function CompactButton(props) {
  return <MuiButton sx={{ minWidth: 36, width: 36 }} {...props} />;
}

export default CompactButton;
