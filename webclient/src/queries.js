import { gql, useQuery } from "@apollo/client";

const GET_FORECAST = gql`
  query GetForecast($coords: Coords!) {
    forecast(coords: $coords) {
      location {
        city
        state
      }
      temperature
      temperatureUnit
    }
  }
`;

export const useGetForecast = (coords) =>
  useQuery(GET_FORECAST, { variables: { coords } });

const GET_APP_BODY = gql`
  query GetAppBody {
    app {
      appBody {
        __typename
      }
      lookupForm {
        button {
          __typename
          ... on CompactButton {
            children
          }
          ... on OutlinedButton {
            children
          }
          ... on Error {
            message
          }
        }
        formText {
          __typename
          variant
        }
        inputs {
          ... on CoordInput {
            __typename
            type
          }
          ... on CombinedInput {
            __typename
            type
          }
        }
      }
      results {
        bodyText {
          __typename
          variant
        }
        errorText {
          __typename
          variant
        }
        loadingText {
          __typename
          variant
        }
        subText {
          __typename
          variant
        }
      }
    }
  }
`;

export const useGetAppBody = () => useQuery(GET_APP_BODY);
