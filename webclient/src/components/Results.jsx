import { Typography } from "@mui/material";
import { useAppContext } from "../AppContext";
import styled from "@emotion/styled";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  min-height: 80px;
`;

const StyledBody = styled.div`
  min-height: 32px;
`;

function InnerText() {
  const { data, error, loading } = useAppContext();

  if (loading) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h5">Error fetching forecast</Typography>;
  }

  return (
    <Typography variant="h3">
      Temperature in {data.forecast.location}:
    </Typography>
  );
}

function Results() {
  const { data } = useAppContext();

  return (
    <>
      <StyledHeader>
        <InnerText />
      </StyledHeader>
      <StyledBody>
        {data && <Typography variant="h5">{data.forecast.text}</Typography>}
      </StyledBody>
    </>
  );
}

export default Results;
