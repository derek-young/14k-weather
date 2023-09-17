import { Input } from "@mui/material";

import { useForecastContext } from "../ForecastContext";

function CoordInput({ type }) {
  const { coords, setCoords } = useForecastContext();

  const onChange = (e) => {
    if (e.target.value === "") return setCoords((c) => ({ ...c, [type]: "" }));

    setCoords((c) => ({ ...c, [type]: e.target.value }));
  };

  return (
    <Input
      onChange={onChange}
      placeholder={type}
      sx={{
        maxWidth: 72,
        marginX: 1,
        textAlign: "center",
      }}
      value={coords[type]}
    />
  );
}

export default CoordInput;
