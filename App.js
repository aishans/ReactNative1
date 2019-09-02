import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  View,
  Text,
  Icon,
  Footer,
  FooterTab,
  Button,
  CardItem,
  Card,
  Body,
  Right,
  Left,
  ListItem,
  CheckBox,
  Thumbnail
} from "native-base";
import { StyleSheet, Image } from "react-native";

dataArray = [
  { title: "Insta Coded", content: "First Post" },
  { title: "React Native", content: "Project One" }
];
class App extends Component {
  _renderHeader = (item, expanded) => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#A9DAD6"
        }}
      >
        <Text style={{ fontWeight: "600" }}> {item.title}</Text>
        {expanded ? (
          <Icon style={{ fontSize: 18 }} name="remove-circle" />
        ) : (
          <Icon style={{ fontSize: 18 }} name="add-circle" />
        )}
      </View>
    );
  };
  _renderContent = item => {
    return (
      <Text
        style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic"
        }}
      >
        {item.content}
      </Text>
    );
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Reminders</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Wish List</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green" />
            <Body>
              <Text>Tasks</Text>
            </Body>
          </ListItem>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZAeax-FlG6SxUIrxg4gSMG5HUFxS2ag4AGt2zELLMqUa0AXl"
                  }}
                />

                <Text>CODED</Text>
                <Text note>NativeBase</Text>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "data:image/png;base64,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"
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="heart" />
              <Text>Likes</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>User</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default App;
