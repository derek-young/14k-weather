import { Input } from "@mui/material";
import { useAppContext } from "../AppContext";

function CoordInput({ type }) {
  const { coords, setCoords } = useAppContext();

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
