import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";

console.log(process.env.REACT_APP_SERVER_URL);

const link = createUploadLink({
  uri: process.env.REACT_APP_SERVER_URL,
  credentials: "include"
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
