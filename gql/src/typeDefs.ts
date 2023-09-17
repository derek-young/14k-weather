// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  type Loction {
    city: String
    state: String
  }

  type Forecast {
    location: Loction
    temperature: String
    temperatureUnit: String
  }

  type Button {
    children: String
    variant: String
  }

  type Error {
    message: String
  }

  union WebItems = Button | Error

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    items: [WebItems]
    forecast: Forecast
  }
`;

export default typeDefs;
