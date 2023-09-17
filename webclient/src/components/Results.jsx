import { Typography } from "@mui/material";
import styled from "@emotion/styled";

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

export function SDUIResults() {
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
