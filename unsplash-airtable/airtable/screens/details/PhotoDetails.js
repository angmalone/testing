import React, { Component } from 'react';
import { StatusBar, Button, StyleSheet, View, ScrollView, Image, Text, FlatList, Share, Linking } from 'react-native';
import { withTheme, ScreenContainer, Container, IconButton } from '@draftbit/ui';
import Images from "../../config/Images.js";
import { HyperlinkedText } from "react-native-hyperlinked-text"

class Root extends Component {
      onClick() {
        Share.share({
          message: 'View this photo:',
          url: this.props.navigation.state.params.pageURL
        })
      }


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
    
      componentDidMount() {
        StatusBar.setBarStyle("light-content");
        this.props.navigation.setParams({ share: this._sharePhoto });
      }
    

      _sharePhoto = () => {
        Share.share({
          message: 'View this photo:',
          url: this.props.navigation.state.params.pageURL
        })
      };
    

  render() {
    const { params } = this.props.navigation.state;
    const photoURL = this.props.navigation.state.params.photoURL;
    const userName = this.props.navigation.state.params.userName;
    const pageURL = this.props.navigation.state.params.pageURL;
   
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
            onPress={() => {Linking.openURL(pageURL)}}
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
