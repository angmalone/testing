import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList, TouchableHighlight } from 'react-native';
import { withTheme, ScreenContainer, Container, IconButton, Icon, Button } from '@draftbit/ui';
import { withNavigation } from 'react-navigation';
import Images from "../../config/Images.js";

class Root extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
    fetch('https://api.airtable.com/v0/appKX1EmOPeAFm3Gn/Likes?api_key=key4cMUqaFrAHjaTn')
    .then((resp) => resp.json())
    .then(data => {
       this.setState({ photos: data.records });
    }).catch(err => {
      console.log("oof")
    });
    
  }

  render() {
    const { theme } = this.props
    const NewPhoto = ({ photoURL, userName, pageURL }) => (
      <TouchableHighlight onPress={() => this.props.navigation.navigate(`PhotoDetails`, {photoURL: photoURL, userName: userName, pageURL: pageURL})}>
      <Container
          style={{
              flex: 10,
              width: 450,
              height: 650,
              marginBottom: 2,
            }}
              elevation={2}
              backgroundImage={photoURL}
              useThemeGutterPadding={true}
              resizeMode="contain"
      >
      <Text
          style={[
                theme.typography.body1, {
                color: theme.colors.strong, 
                top: 600,
              }]}>{userName}</Text>
        </Container>
        </TouchableHighlight>)

    
    return (
      <ScreenContainer
        hasSafeArea={false}
        scrollable={false}
      >
        <ScrollView
            horizontal={false}
        >
        {this.state.photos.map(photo => <NewPhoto {...photo.fields} /> )}
        </ScrollView>
      </ScreenContainer>
    );
  }
};

export default withNavigation(withTheme(Root))