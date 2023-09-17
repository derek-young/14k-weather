import axios from "axios";

import { Resolvers } from "./__generated__/resolvers-types";

const resolvers: Resolvers = {
  AppBody: {
    __resolveType: (obj) => {
      if (obj.type === "AppBody1") {
        return "AppBody1";
      }

      if (obj.type === "AppBody2") {
        return "AppBody2";
      }

      return null;
    },
  },
  Inputs: {
    __resolveType: (obj) => {
      if (obj.type === "lat" || obj.type === "lng") {
        return "CoordInput";
      }

      if (obj.type === "combined") {
        return "CombinedInput";
      }

      return null;
    },
  },
  WebButton: {
    __resolveType: (obj) => {
      if ("variant" in obj && obj.variant === "outlined") {
        return "OutlinedButton";
      }

      if ("variant" in obj) {
        return "CompactButton";
      }

      return null;
    },
  },
  Query: {
    app: (parent, args, contextValue, info) => {
      const now = contextValue.getDateNow();

      if (now % 2 === 0) {
        return {
          appBody: { type: "AppBody2" },
          lookupForm: {
            button: { children: "Let's Go", variant: "outlined" },
            formText: { variant: "subtitle2" },
            inputs: [{ type: "combined" }],
          },
          results: {
            bodyText: { variant: "h2" },
            errorText: { variant: "h4" },
            loadingText: { variant: "h4" },
            subText: { variant: "h4" },
          },
        };
      }

      return {
        appBody: { type: "AppBody1" },
        lookupForm: {
          button: { children: "Go", variant: "contained" },
          formText: { variant: undefined },
          inputs: [{ type: "lat" }, { type: "lng" }],
        },
        results: {
          bodyText: { variant: "h3" },
          errorText: { variant: "h5" },
          loadingText: { variant: "h5" },
          subText: { variant: "h5" },
        },
      };
    },
    forecast: async () => {
      const pointData = (
        await axios.get("https://api.weather.gov/points/40.0588,-105.1981")
      ).data;
      let forecast;

      if (pointData?.properties?.forecast) {
        forecast = (await axios.get(pointData.properties.forecastHourly)).data;
      }

      const locationProperties =
        pointData.properties.relativeLocation.properties;
      const nextPeriodData = forecast?.properties.periods[0];

      return {
        location: {
          city: locationProperties.city,
          state: locationProperties.state,
        },
        temperature: nextPeriodData.temperature,
        temperatureUnit: nextPeriodData.temperatureUnit,
      };
    },
  },
};

export default resolvers;
