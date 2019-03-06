import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList } from 'react-native';
import { withTheme, ScreenContainer, Container, IconButton, Icon, Button } from '@draftbit/ui';
import Images from "../config/Images.js";

class Root extends Component {

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  render() {
    const { theme } = this.props
    return (
      <ScreenContainer
        hasSafeArea={false}
        scrollable={true}
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
                marginBottom: 20,
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
          <Container
            style={{
              justifyContent: 'space-evenly',
              flexDirection: 'row',
            }}
              elevation={2}
              useThemeGutterPadding={true}
          >
            <Button
                type="text"
                onPress={() => this.props.navigation.navigate('Profile')}
            >
              Photos
            </Button>
            <Button
                type="text"
                onPress={() => this.props.navigation.navigate('Likes')}
            >
              Likes
            </Button>
            <Button
                type="text"
                onPress={() => this.props.navigation.navigate('Collections')}
            >
              Collections
            </Button>
          </Container>
          <Container
            style={{
              width: 450,
              height: 650,
              marginBottom: 2,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/31d897e8-db33-4e82-b076-f6d279dd34fd"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 600,
              }]}
            >
            Norali Emilio
            </Text>
          </Container>
          <Container
            style={{
              width: 450,
              height: 300,
              marginBottom: 2,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/41fe97ca-35e5-40d4-87fa-227e19827419"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 250,
              }]}
            >
            Jon Tyson
            </Text>
          </Container>
          <Container
            style={{
              width: 450,
              height: 650,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/4c5121f4-0a91-4b8c-a322-c788e3ed7a1f"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 600,
              }]}
            >
            Martin Adams
            </Text>
          </Container>
        </ScrollView>
      </ScreenContainer>
    );
  }
};

export default withTheme(Root)