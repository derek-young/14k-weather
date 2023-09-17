import { Input } from "@mui/material";

import { useForecastContext } from "../ForecastContext";

function CombinedInput() {
  const { coords, setCoords } = useForecastContext();

  const onChange = (e) => {
    console.log("e.target.value");
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
