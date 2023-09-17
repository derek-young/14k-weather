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
    app {
      appBody {
        __typename
      }
      lookupForm {
        button {
          __typename
          ... on Button {
            children
            variant
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
        bodytext {
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
