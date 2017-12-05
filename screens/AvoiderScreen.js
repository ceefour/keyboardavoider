import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Header, Body, Container, Content, Form, Item, Label, Text, Input, Title } from 'native-base';

export default class AvoiderScreen extends React.Component {
  static navigationOptions = {
    title: 'Keyboard Avoider',
    header: null,
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Keyboard Avoider</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
            <Item stackedLabel>
              <Label>Something</Label>
              <Input/>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
