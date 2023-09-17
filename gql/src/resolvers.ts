import axios from "axios";

const resolvers = {
  WebItems: {
    __resolveType: (obj) => {
      if (obj.variant) {
        return "Button";
      }

      return null;
    },
  },
  Query: {
    items: (parent, args, contextValue, info) => {
      const now = contextValue.getDateNow();

      if (now % 2 === 0) {
        return [{ children: "Let's Go", variant: "contained" }];
      }

      return [{ children: "Go", variant: "outlined" }];
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
