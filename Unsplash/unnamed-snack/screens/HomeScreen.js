import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList } from 'react-native';
import { withTheme, ScreenContainer, Container, IconButton, FieldSearchBarFull, FAB } from '@draftbit/ui';
import Images from "../config/Images.js";

class Root extends Component {

  componentDidMount() {
    StatusBar.setBarStyle("dark-content");
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
            style={{
              height: 300,
              justifyContent: 'space-between',
              alignItems: 'center',
              alignContent: 'center',
              paddingTop: 60,
            }}
              elevation={2}
              backgroundColor={theme.colors.background}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/4789a9e6-7796-4996-a690-ac5505b1ded6"
              useThemeGutterPadding={true}
          >
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              <IconButton
                style={{
                  alignSelf: 'flex-end',
                }}
                  icon="account-circle"
                  size={32}
                  color={theme.colors.surface}
                  onPress={() => this.props.navigation.navigate('Mexico')}
              />
              <IconButton
                style={{
                  alignSelf: 'flex-start',
                }}
                  icon="account-circle"
                  size={32}
                  color={theme.colors.surface}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
              }}
            >
              <Text
                style={[
                  theme.typography.headline3, {
                  color: theme.colors.strong, 
                  textAlign: "auto", 
                      
                }]}
              >
              Photos for Everyone
              </Text>
              <FieldSearchBarFull
                style={{
                  marginHorizontal: 100,
                }}
                  onSubmit={this.onSubmit}
                  placeholder="Search photos"
              />
            </View>
            <Text
              style={{
                color: theme.colors.mediumInverse, 
                    
                marginBottom: 10,
              }}
            >
            zplits
            </Text>
          </Container>
          <Container
            style={{
              marginTop: 20,
            }}
              elevation={2}
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.headline6, {
                color: theme.colors.strong, 
                    
                borderLeftWidth: 0,
              }]}
            >
            Explore
            </Text>
          </Container>
          <ScrollView
            style={{
              padding: 20,
            }}
              horizontal={true}
          >
            <Container
              style={{
                width: 300,
                height: 200,
                justifyContent: 'center',
                marginRight: 20,
                
              }}
                elevation={2}
                backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/d3f2324e-83bd-484a-a2af-22afa14ec873"
                useThemeGutterPadding={true}
                onPress={() => this.props.navigation.navigate('Mexico')}
                
            >
              <Text
                style={[
                  theme.typography.headline4, {
                  color: theme.colors.strong, 
                  textAlign: "center", 
                      
                }]}
              >
              Mexico City
              </Text>
            </Container>
            <Container
              style={{
                width: 300,
                height: 200,
                justifyContent: 'center',
                marginRight: 20,
              }}
                elevation={2}
                backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/8e77dab7-ff2e-4556-b62d-651d0c6b60ba"
                useThemeGutterPadding={true}
            >
              <Text
                style={[
                  theme.typography.headline4, {
                  color: theme.colors.strong, 
                  textAlign: "center", 
                      
                }]}
              >
              Beaches
              </Text>
            </Container>
            <Container
              style={{
                width: 300,
                height: 200,
                justifyContent: 'center',
                marginRight: 20,
              }}
                elevation={2}
                backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/b1359360-d11b-41d5-b0d0-f3b5aeee7c59"
                useThemeGutterPadding={true}
            >
              <Text
                style={[
                  theme.typography.headline4, {
                  color: theme.colors.strong, 
                  textAlign: "center", 
                      
                }]}
              >
              Barcelona
              </Text>
            </Container>
            <Image
              style={{
                width: 300,
                height: 200,
                borderRadius: theme.borderRadius.global,
                overflow: 'hidden',
              }}
                source={Images.Photo15015323491c215c24f718}
                onPress={() => this.props.navigation.navigate('Mexico')}
            />
            <Image
              style={{
                width: 300,
                height: 200,
                marginLeft: 20,
              }}
                source={Images.Photo15464384861f90eb9213b3}
            />
            <Image
              style={{
                width: 300,
                height: 200,
                marginLeft: 20,
                borderRadius: theme.borderRadius.global,
                overflow: 'hidden',
              }}
                source={Images.Photo1500213408922Ec89a234e034}
            />
          </ScrollView>
          <Container
              elevation={2}
              useThemeGutterPadding={false}
          >
            <Text
              style={[
                theme.typography.headline6, {
                color: theme.colors.strong, 
                    
                marginVertical: 20,
                marginLeft: 20,
              }]}
            >
            New
            </Text>
            <Container
              style={{
                width: 500,
                height: 750,
                marginBottom: 2,
              }}
                elevation={2}
                backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/c274b27c-0eea-4a04-8538-759523115376"
                useThemeGutterPadding={true}
            >
              <Text
                style={[
                  theme.typography.body1, {
                  color: theme.colors.strong, 
                      
                  marginLeft: 0,
                  top: 700,
                }]}
              >
              Jean Philippe Delberg
              </Text>
            </Container>
            <Container
              style={{
                width: '100%',
                height: 650,
                marginBottom: 2,
              }}
                elevation={2}
                backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/b0025916-5dd2-4007-bb7f-6fa292392954"
                useThemeGutterPadding={true}
            >
              <Text
                style={[
                  theme.typography.body1, {
                  color: theme.colors.strong, 
                      
                  top: 600,
                }]}
              >
              Zachary Xu 
              </Text>
            </Container>
            <Container
              style={{
                width: '100%',
                height: 650,
                marginBottom: 2,
              }}
                elevation={2}
                backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/1477d543-1981-421d-8ab8-8ad69d5f2a4c"
                useThemeGutterPadding={true}
            >
              <Text
                style={[
                  theme.typography.body1, {
                  color: theme.colors.strong, 
                      
                  top: 600,
                }]}
              >
              Mat Reding
              </Text>
            </Container>
            <Container
              style={{
                width: '100%',
                height: 650,
                marginBottom: 2,
              }}
                elevation={2}
                backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/8ec98308-bbc6-4934-8324-3eeb74f62580"
                useThemeGutterPadding={true}
            >
              <Text
                style={[
                  theme.typography.body1, {
                  color: theme.colors.strong, 
                      
                  top: 600,
                }]}
              >
              Brayden Law
              </Text>
            </Container>
            <Container
              style={{
                width: '100%',
                height: 650,
                marginBottom: 2,
              }}
                elevation={2}
                backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/84e99a6b-4618-43c6-ba81-577c0f2373b4"
                useThemeGutterPadding={true}
            >
              <Text
                style={[
                  theme.typography.body1, {
                  color: theme.colors.strong, 
                      
                  top: 600,
                }]}
              >
              Yunming Wang
              </Text>
            </Container>
          </Container>
        </ScrollView>
        <FAB
          style={{
            right: 20,
            bottom: 20,
            position: 'absolute',
          }}
            icon="add"
            type="standard"
            color={theme.colors.lightInverse}
        />
      </ScreenContainer>
    );
  }
};

export default withTheme(Root)