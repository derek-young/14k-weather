import { Input } from "@mui/material";

function CombinedInput() {
  const onChange = (e) => {
    console.log("e.target.value", e.target.value);
  };

  return (
    <Input
      onChange={onChange}
      placeholder="Lat, lng"
      sx={{
        maxWidth: 72,
        marginX: 1,
        textAlign: "center",
      }}
    />
  );
}

export default CombinedInput;
