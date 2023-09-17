import { Typography } from "@mui/material";
import styled from "@emotion/styled";

import { useAppContext } from "../AppContext";
import { useForecastContext } from "../ForecastContext";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  min-height: 80px;
`;

const StyledBody = styled.div`
  min-height: 32px;
`;

function InnerText() {
  const { forecast, error, loading } = useForecastContext();

  if (loading) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h5">Error fetching forecast</Typography>;
  }

  return (
    <Typography variant="h3">
      Temperature in {forecast.location.city}, {forecast.location.state}:
    </Typography>
  );
}

export function Results() {
  const { forecast } = useForecastContext();

  return (
    <>
      <StyledHeader>
        <InnerText />
      </StyledHeader>
      <StyledBody>
        {forecast && (
          <Typography variant="h5">
            {forecast.temperature} degrees {forecast.temperatureUnit}
          </Typography>
        )}
      </StyledBody>
    </>
  );
}

const RESULTS_COMPONENTS = {
  Typography: Typography,
};

function SDUIInnerText() {
  const { appData } = useAppContext();
  const { forecast, error, loading } = useForecastContext();

  const { __typename: bodyTextTypeName, ...bodyTextProps } =
    appData.results.bodyText;
  const { __typename: errorTextTypeName, ...errorTextProps } =
    appData.results.errorText;
  const { __typename: loadingTextTypeName, ...loadingTextProps } =
    appData.results.loadingText;

  const BodyText = RESULTS_COMPONENTS[bodyTextTypeName];
  const ErrorText = RESULTS_COMPONENTS[errorTextTypeName];
  const LoadingText = RESULTS_COMPONENTS[loadingTextTypeName];

  if (loading) {
    return <LoadingText {...loadingTextProps}>Loading...</LoadingText>;
  }

  if (error) {
    return <ErrorText {...errorTextProps}>Error fetching forecast</ErrorText>;
  }

  return (
    <BodyText {...bodyTextProps}>
      Temperature in {forecast.location.city}, {forecast.location.state}:
    </BodyText>
  );
}

export function SDUIResults() {
  const { appData } = useAppContext();
  const { forecast } = useForecastContext();
  const { __typename: subTextTypeName, ...subTextProps } =
    appData.results.subText;
  const SubText = RESULTS_COMPONENTS[subTextTypeName];

  return (
    <>
      <StyledHeader>
        <SDUIInnerText />
      </StyledHeader>
      <StyledBody>
        {forecast && (
          <SubText {...subTextProps}>
            {forecast.temperature} degrees {forecast.temperatureUnit}
          </SubText>
        )}
      </StyledBody>
    </>
  );
}
