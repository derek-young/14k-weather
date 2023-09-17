import { gql, useQuery } from "@apollo/client";

const GET_FORECAST = gql`
  query GetForecast {
    forecast {
      location {
        city
        state
      }
      temperature
      temperatureUnit
    }
  }
`;

export const useGetForecast = () => useQuery(GET_FORECAST);

const GET_APP_BODY = gql`
  query GetAppBody {
    items {
      __typename
      ... on Button {
        children
        variant
      }
      ... on Error {
        message
      }
    }
  }
`;

export const useGetAppBody = () => useQuery(GET_APP_BODY);
