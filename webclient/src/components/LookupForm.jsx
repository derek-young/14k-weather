import { Typography } from "@mui/material";
import styled from "@emotion/styled";

import Button from "./Button";
import { useForecastContext } from "../ForecastContext";
import CoordInput from "./CoordInput";

const Form = styled.form`
  display: flex;
  align-items: center;
`;

export function LookupForm() {
  const { coords } = useForecastContext();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submitted", coords);
      }}
    >
      <Typography>Look up temp:</Typography>
      <CoordInput type="lat" />
      <CoordInput type="lng" />
      <Button sx={{ minWidth: 36, width: 36 }} type="submit">
        Go
      </Button>
    </Form>
  );
}

export function SDUILookupForm() {
  const { coords } = useForecastContext();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submitted", coords);
      }}
    >
      <Typography>Look up temp:</Typography>
      <CoordInput type="lat" />
      <CoordInput type="lng" />
      <Button sx={{ minWidth: 36, width: 36 }} type="submit">
        Go
      </Button>
    </Form>
  );
}
