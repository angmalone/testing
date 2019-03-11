import React, { Component } from 'react';
import { StatusBar, Button, StyleSheet, View, ScrollView, Image, Text, FlatList, Share } from 'react-native';
import { withTheme, ScreenContainer, Container, IconButton } from '@draftbit/ui';
import Images from "../../config/Images.js";

class Root extends Component {
    componentDidMount() {
        StatusBar.setBarStyle("light-content");
        this.props.navigation.setParams({ share: this._sharePhoto });
      }

  onClick() {
    Share.share({
      message: 'View this photo:',
      url: `${pageURL}`
    })
  }

  _sharePhoto = () => {
    Share.share({
      message: 'View this photo:',
      url: `${pageURL}`
    })
  };

  static navigationOptions = ({ navigation }) => {
    return {
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
          title="hi"
          size={24}
          color='white'
          onPress={navigation.getParam('share')}
        />
      ),
    }}
    
  render() {
    const { params } = this.props.navigation.state;
    const photoURL = params ? params.photoURL : null;
    const pageURL = params ? params.pageURL : null;
    const userName = params ? params.userName : null;
    const { theme } = this.props;
    return (
      <ScreenContainer
        hasSafeArea={true}
        scrollable={false}
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "space-between"
        }}
      >
        <Image
          style={{
            width: 450,
            height: 550,
            marginTop: -50
          }}
          source={{uri: photoURL}}
          resizeMode="cover"
        />
        <Container
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            marginHorizontal: 0,
            marginTop: 0,
            top: 50
          }}
          elevation={2}
          useThemeGutterPadding={true}
        >
          <Text
            style={{
              color: theme.colors.strong
            }}
          >
            {userName}
          </Text>
          <IconButton
            style={{
              marginTop: 0
            }}
            icon="arrow-downward"
            size={24}
            color={theme.colors.strong}
          />
        </Container>
      </ScreenContainer>
    );
  }
}

export default withTheme(Root);
