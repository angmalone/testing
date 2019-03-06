import React, { Component } from 'react';
import { StatusBar, Button, StyleSheet, View, ScrollView, Image, Text, FlatList } from 'react-native';
import { withTheme, ScreenContainer, Container, IconButton } from '@draftbit/ui';
import Images from "../config/Images.js";

class Root extends Component {
  
  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: "rgba(20, 21, 33, 1)",
      borderBottomColor: "rgba(20, 21, 33, 1)",
      Color: 'white',
      zIndex: 100,
      tintColor: 'white'
      },
      headerRight: (
        <IconButton
        style={{
          marginTop: 0,
          marginRight: 10
        }}
          icon="open-in-browser"
          size={24}
          color='white'
      />)
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  render() {
    const { theme } = this.props
    return (
      <ScreenContainer
        hasSafeArea={true}
        scrollable={false}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'space-between',
        }}
      >
        
        <Image
          style={{
            width: 450,
            height: 550,
            marginTop: -50
          }}
            source={Images.ZacharyXu1410625Unsplash}
            resizeMode="cover"
        />
        <Container
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            marginHorizontal: 0,
            marginTop: 0,
            top: 50,
          }}
            elevation={2}
            useThemeGutterPadding={true}
        >
          <Text
            style={{
              color: theme.colors.strong, 
                  
            }}
          >
          Zachary XU 
          </Text>
          <IconButton
            style={{
              marginTop: 0,
            }}
              icon="arrow-downward"
              size={24}
              color={theme.colors.strong}
          />
        </Container>
      </ScreenContainer>
    );
  }
};

export default withTheme(Root)