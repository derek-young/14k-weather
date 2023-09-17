import axios from 'axios';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    forecast: async () => {
      const pointData = (await axios.get("https://api.weather.gov/points/40.0588,-105.1981")).data;
      let forecast;
    
      if (pointData?.properties?.forecast) {
        forecast = (await axios.get(pointData.properties.forecast)).data;
      }
      
      const nextPeriodData = forecast?.properties.periods[0]
      console.log('nextPeriodData', nextPeriodData)
      const text = nextPeriodData ? `${nextPeriodData.temperature} degress ${nextPeriodData.temperatureUnit}` : '';

      console.log('text', text)

      return { text };
    }
  },
};

export default resolvers;