import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList, TouchableHighlight } from 'react-native';
import { withTheme, ScreenContainer, Container } from '@draftbit/ui';



class PhotoComponent extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const { theme } = this.props
    
    
    return (
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
          </TouchableHighlight>
    );
  }
};

export default PhotoComponent