import type { AppProps } from "next/app";
import { StyledEngineProvider } from "@mui/material";
import { createEmotionCache } from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

const cache = createEmotionCache();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <StyledEngineProvider injectFirst>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}

export default MyApp;
