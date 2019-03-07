import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList } from 'react-native';
import { withTheme, ScreenContainer, Container, IconButton, Icon, Button, CardInline } from '@draftbit/ui';
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
                  name="map"
                  size={16}
                  color={theme.colors.mediumInverse}
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
            >
              Photos
            </Button>
            <Button
                type="text"
            >
              Likes
            </Button>
            <Button
                type="text"
            >
              Collections
            </Button>
          </Container>
          <FlatList
            style={{
              alignItems: 'center',
            }}
               data={[{"image":"https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/4f23192d-d5c5-421c-ab67-c84a3f90f64a","title":"Kyoto","elevation":2,"numColumns":3,"aspectRatio":1.5,"description":"","textCentered":true}]}
               renderItem={({item}) => <CardInline {...item} style={{ marginBottom: theme.spacing.small }} /> }
               keyExtractor={item => item.id}
              horizontal={false}
          />
        </ScrollView>
      </ScreenContainer>
    );
  }
};

export default withTheme(Root)