import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import fetch from 'cross-fetch';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:3000/api/graphql",
    fetch,
  }),
  cache: new InMemoryCache(),
});

interface TestProviderInput {
  children: JSX.Element;
}

export const TestProvider = ({ children }: TestProviderInput): JSX.Element => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};