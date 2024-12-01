import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL, // Make sure this is set in .env.local
  }),
  cache: new InMemoryCache(),
});

export default client;
