import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList, TouchableHighlight } from 'react-native';
import { withTheme, ScreenContainer, Container } from '@draftbit/ui';

class Root extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  static navigationOptions = {
    title: 'Barcelona',
    headerStyle: {
      zIndex: 100,
      },
  };

  componentDidMount() { 
    StatusBar.setBarStyle("dark-content");
    fetch('https://api.airtable.com/v0/appKX1EmOPeAFm3Gn/Barcelona?api_key=key4cMUqaFrAHjaTn')
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
        hasSafeArea={true}
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

export default withTheme(Root)