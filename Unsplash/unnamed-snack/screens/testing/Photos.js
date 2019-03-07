import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList } from 'react-native';
import { withTheme, ScreenContainer, Container, IconButton, Icon, Button } from '@draftbit/ui';
import Images from "../../config/Images.js";

class Root extends Component {

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  render() {
    const { theme } = this.props
    return (
      <ScreenContainer
        hasSafeArea={false}
        scrollable={false}
      >
        <ScrollView
            horizontal={false}
        >
         
          <Image
            style={{
              width: 450,
              height: 650,
              marginBottom: 2,
            }}
              source={Images.Cor}
              resizeMode="cover"
          />
          <Image
            style={{
              width: 450,
              height: 300,
              marginBottom: 2,
            }}
              source={Images.LJ}
          />
          <Image
            style={{
              width: 450,
              height: 650,
              marginBottom: 2,
            }}
              source={Images.OB}
          />
          <Image
            style={{
              width: 450,
              height: 300,
              marginBottom: 2,
            }}
              source={Images.CLE}
          />
          <Image
            style={{
              width: 450,
              height: 650,
              marginBottom: 2,
            }}
              source={Images.WAS}
          />
          <Image
            style={{
              width: 450,
              height: 650,
            }}
              source={Images.Chi}
          />
        </ScrollView>
      </ScreenContainer>
    );
  }
};

export default withTheme(Root)