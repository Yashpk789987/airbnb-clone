import React from "react";

import { Text, Card, SearchBar } from "react-native-elements";
import {
  ScrollView,
  View,
  Slider,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SearchListing } from "@airbnb/controller";

interface State {
  name: string;
  guests: number;
  beds: number;
  loading: boolean;
}

export class FindListingsConnector extends React.PureComponent<{}, State> {
  state = {
    name: "",
    guests: 0,
    beds: 0,
    loading: false,
  };
  render() {
    const { name, guests, beds, loading } = this.state;
    return (
      <>
        <StatusBar />
        <SearchBar
          lightTheme={true}
          showLoading={loading}
          placeholder="search..."
          onChangeText={(text) => this.setState({ name: text })}
          value={name}
        />
        <View
          style={{
            marginTop: "8%",
            alignItems: "stretch",
            justifyContent: "center",
          }}
        >
          <Slider
            value={guests}
            onValueChange={(value) => this.setState({ guests: value })}
            step={1}
            maximumValue={5}
          />
          <Text style={{ paddingLeft: "3%" }}>Guests: {guests}</Text>
        </View>
        <View
          style={{
            marginTop: "2%",
            alignItems: "stretch",
            justifyContent: "center",
          }}
        >
          <Slider
            value={beds}
            onValueChange={(value) => this.setState({ beds: value })}
            step={1}
            maximumValue={5}
          />
          <Text style={{ paddingLeft: "3%" }}>Beds: {beds}</Text>
        </View>
        <SearchListing
          variables={{
            input: { beds, name, guests },
            limit: 5,
            offset: 0,
          }}
        >
          {({ listings, loading, hasMoreListings, loadMore }) => {
            this.setState({ loading });
            return (
              <FlatList
                ListFooterComponent={() =>
                  hasMoreListings ? (
                    <ActivityIndicator
                      style={{
                        marginTop: 10,
                      }}
                    />
                  ) : (
                    <View />
                  )
                }
                onEndReached={() => {
                  console.log("End Reached...Loading More Data");
                  loadMore();
                }}
                contentContainerStyle={{
                  marginTop: "3%",
                  paddingBottom: "50%",
                }}
                data={listings}
                keyExtractor={({ id }) => `${id}-flc`}
                renderItem={({ item }) => (
                  <Card
                    title={item.name}
                    image={
                      item.pictureUrl ? { uri: item.pictureUrl } : undefined
                    }
                  >
                    <Text style={{ marginBottom: 10 }}>
                      Owner: {item.owner.email}
                    </Text>
                  </Card>
                )}
              />
            );
          }}
        </SearchListing>
      </>
    );
  }
}

// import React from "react";

// import { Text, Card, SearchBar } from "react-native-elements";
// import {
//   ScrollView,
//   View,
//   Slider,
//   StatusBar,
//   FlatList,
//   ActivityIndicator,
//   Button,
// } from "react-native";
// import { SearchListing } from "@airbnb/controller";

// interface State {
//   name: string;
//   guests: number;
//   beds: number;
//   loading: boolean;
// }

// export class FindListingsConnector extends React.PureComponent<{}, State> {
//   state = {
//     name: "",
//     guests: 1,
//     beds: 1,
//     loading: false,
//   };
//   render() {
//     const { name, guests, beds, loading } = this.state;
//     return (
//       <>
//         <StatusBar />
//         <View>
//           <SearchBar
//             showLoading={loading}
//             placeholder="search..."
//             onChangeText={(text) => this.setState({ name: text })}
//             value={name}
//           />
//           <View
//             style={{
//               marginTop: "8%",
//               alignItems: "stretch",
//               justifyContent: "center",
//             }}
//           >
//             <Slider
//               value={guests}
//               onValueChange={(value) => this.setState({ guests: value })}
//               step={1}
//               maximumValue={5}
//             />
//             <Text style={{ paddingLeft: "3%" }}>Guests: {guests}</Text>
//           </View>
//           <View
//             style={{
//               marginTop: "2%",
//               alignItems: "stretch",
//               justifyContent: "center",
//             }}
//           >
//             <Slider
//               value={beds}
//               onValueChange={(value) => this.setState({ beds: value })}
//               step={1}
//               maximumValue={5}
//             />
//             <Text style={{ paddingLeft: "3%" }}>Beds: {beds}</Text>
//           </View>
//           <SearchListing
//             variables={{
//               input: { beds, name, guests },
//               limit: 5,
//               offset: 0,
//             }}
//           >
//             {({ listings, loading, hasMoreListings, loadMore }) => {
//               this.setState({ loading });
//               return (
//                 <FlatList
//                   ListFooterComponent={() =>
//                     hasMoreListings ? (
//                       <Button onPress={loadMore} title="load more" />
//                     ) : (
//                       <View />
//                     )
//                   }
//                   contentContainerStyle={{
//                     marginTop: "3%",
//                     paddingBottom: "50%",
//                   }}
//                   data={listings}
//                   keyExtractor={({ id }) => `${id}-flc`}
//                   renderItem={({ item }) => (
//                     <Card
//                       title={item.name}
//                       image={
//                         item.pictureUrl ? { uri: item.pictureUrl } : undefined
//                       }
//                     >
//                       <Text style={{ marginBottom: 10 }}>
//                         Owner: {item.owner.email}
//                       </Text>
//                     </Card>
//                   )}
//                 />
//               );
//             }}
//           </SearchListing>
//         </View>
//       </>
//     );
//   }
// }
