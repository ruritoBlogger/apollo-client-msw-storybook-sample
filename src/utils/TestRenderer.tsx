import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:3000/api/graphql",
    fetch,
  }),
  cache: new InMemoryCache(),
});

interface TestRendererInput {
  children: JSX.Element;
}

export const TestRenderer = ({ children }: TestRendererInput): JSX.Element => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
