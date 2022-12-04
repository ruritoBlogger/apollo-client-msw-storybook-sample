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

export const clientWithoutCache = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:3000/api/graphql",
    fetch,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache"
    },
    query: {
      fetchPolicy: "no-cache"
    }
  }
});

interface TestProviderInput {
  children: JSX.Element;
  disableCache?: boolean;
}

export const TestProvider = ({ children, disableCache }: TestProviderInput): JSX.Element => {
  if (disableCache) {
    return <ApolloProvider client={clientWithoutCache}>{children}</ApolloProvider>
  }
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};