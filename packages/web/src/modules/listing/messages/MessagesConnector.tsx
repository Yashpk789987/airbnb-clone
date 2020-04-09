import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ViewMessages } from "@airbnb/controller";

export class MessageConnector extends React.PureComponent<
  RouteComponentProps<{
    listingId: string;
  }>
> {
  render() {
    const {
      match: {
        params: { listingId },
      },
    } = this.props;
    return (
      <ViewMessages listingId={listingId}>
        {({ loading, messages }) => {
          console.log(messages);
          if (loading) {
            return <div>...loading</div>;
          }

          if (messages === null) {
            return null;
          }

          return (
            <div>
              {messages.map((m, i) => (
                <div key={`${i}-lm`}>{m.text}</div>
              ))}
            </div>
          );
        }}
      </ViewMessages>
    );
  }
}
