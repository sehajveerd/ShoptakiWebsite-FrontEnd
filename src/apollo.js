import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:5000/graphql', // GraphQL API endpoint
  cache: new InMemoryCache(),
});
export default client;
