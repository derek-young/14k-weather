import { Typography } from "@mui/material";
import styled from "@emotion/styled";

import CompactButton from "./CompactButton";
import CombinedInput from "./CombinedInput";
import CoordInput from "./CoordInput";
import OutlinedButton from "./OutlinedButton";
import { useAppContext } from "../AppContext";
import { useForecastContext } from "../ForecastContext";

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
      <CompactButton type="submit">Go</CompactButton>
    </Form>
  );
}

const LOOKUP_FORM_COMPONENTS = {
  CompactButton: CompactButton,
  CombinedInput: CombinedInput,
  CoordInput: CoordInput,
  OutlinedButton: OutlinedButton,
  Typography: Typography,
};

export function SDUILookupForm() {
  const { appData } = useAppContext();
  const { coords } = useForecastContext();
  const { __typename: buttonTypeName, ...buttonProps } =
    appData.lookupForm.button;
  const { __typename: formTextTypeName, ...formTextProps } =
    appData.lookupForm.formText;

  const ButtonComponent = LOOKUP_FORM_COMPONENTS[buttonTypeName];
  const FormText = LOOKUP_FORM_COMPONENTS[formTextTypeName];

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submitted", coords);
      }}
    >
      <FormText {...formTextProps}>Look up temp:</FormText>
      {appData.lookupForm.inputs.map(({ __typename, ...props }) => {
        const Component = LOOKUP_FORM_COMPONENTS[__typename];

        return <Component {...props} />;
      })}
      <ButtonComponent type="submit" {...buttonProps} />
    </Form>
  );
}
