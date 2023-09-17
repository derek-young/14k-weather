import { gql, useQuery } from "@apollo/client";

const GET_FORECAST = gql`
  query GetForecast {
    forecast {
      location
      text
    }
  }
`;

const useGetForecast = () => useQuery(GET_FORECAST);

export default useGetForecast;
