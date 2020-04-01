import { Session } from "../../types/graphql-utils";

export const isAuthenticated = (session: Session) => {
  if (!session.userId) {
    // User Is Not Logged In
    throw new Error("not authenticated");
  }
};
