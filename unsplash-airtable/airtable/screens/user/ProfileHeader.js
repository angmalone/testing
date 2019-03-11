import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList } from 'react-native';
import { withTheme, ScreenContainer, Container, IconButton, Icon, Button } from '@draftbit/ui';
import {
  TabView,
  TabBar,
  SceneMap,
  type NavigationState,
} from 'react-native-tab-view';
import Images from "../../config/Images.js";
import Collections from "./Collections";
import Likes from "./Likes";
import Photos from "./Photos";

type State = NavigationState<{
  key: string,
  title: string,
}>;


class Root extends Component {

  static navigationOptions = {
    headerTransparent: 'true',
    headerTintColor: 'rgba(165, 173, 183, 1)',
    headerStyle: {
      height: 50,
      borderBottomWidth: 0,
      marginLeft: 20
      },
  };
  
  static backgroundColor = '#e91e63';
  static appbarElevation = 0;

  state = {
    index: 0,
    routes: [
      { key: 'photos', title: 'Photos' },
      { key: 'likes', title: 'Likes' },
      { key: 'collections', title: 'Collections' },
    ],
  };

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        renderIcon={this._renderIcon}
        style={styles.tabbar}
      />
    );
  };

  _renderScene = SceneMap({
    photos: Photos,
    likes: Likes,
    collections: Collections,
  });

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
          <Container
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/28af1db1-1284-44a9-8e75-4ee9da2a4624"
              useThemeGutterPadding={true}
          >
            <Container
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                top: 25,
              }}
                elevation={2}
                useThemeGutterPadding={false}
            >
              <IconButton
                  icon="chevron-left"
                  size={32}
                  color={theme.colors.medium}
              />
              <Text
                style={[
                  theme.typography.body1, {
                  color: theme.colors.medium, 
                      
                }]}
              >
              Back
              </Text>
            </Container>
            <Image
              style={{
                width: 100,
                height: 100,
                marginLeft: 15,
                marginTop: 50,
                marginBottom: 15,
                borderRadius: 50,
                overflow: 'hidden',
              }}
                source={Images.ScreenShot20190305At9}
            />
            <Text
              style={[
                theme.typography.headline4, {
                color: theme.colors.mediumInverse, 
                    
                marginLeft: 15,
              }]}
            >
            Angela Malone
            </Text>
            <Container
              style={{
                alignItems: 'space-between',
                flexDirection: 'row',
                paddingBottom: 20,
              }}
                elevation={2}
                useThemeGutterPadding={true}
            >
              <Icon
                style={{
                  marginTop: 8,
                  marginRight: 5,
                }}
                  name="location-on"
                  size={16}
                  color={theme.colors.medium}
              />
              <Text
                style={{
                  color: theme.colors.mediumInverse, 
                      
                }}
              >
              Chicago
              </Text>
            </Container>
          </Container>
         
          <TabView
        lazy
        style={this.props.style}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
        </ScrollView>
      </ScreenContainer>
    );
  }
};

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: 'rgba(20, 21, 33, 1)',
  },
  indicator: {
    backgroundColor: 'rgba(90, 69, 255, 1)',
  },
});

export default withTheme(Root)