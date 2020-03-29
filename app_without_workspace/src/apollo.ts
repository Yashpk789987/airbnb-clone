import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { Platform } from "react-native";

const host =
  Platform.OS === "ios" ? "http://localhost:4000" : "http://192.168.43.59:4000";

console.log(host);
export const client = new ApolloClient({
  link: new HttpLink({
    uri: host
  }),
  cache: new InMemoryCache()
});
