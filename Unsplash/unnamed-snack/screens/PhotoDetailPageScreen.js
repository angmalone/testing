import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList } from 'react-native';
import { withTheme, ScreenContainer, Container, IconButton } from '@draftbit/ui';
import Images from "../config/Images.js";

class Root extends Component {

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
        <Container
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingRight: 0,
            marginHorizontal: 0,
            marginBottom: 0,
            bottom: 50,
          }}
            elevation={2}
            useThemeGutterPadding={false}
        >
          <Container
            style={{
              width: 50,
              alignItems: 'center',
              flexDirection: 'row',
            }}
              elevation={2}
              useThemeGutterPadding={false}
          >
            <IconButton
              style={{
                marginTop: 0,
              }}
                icon="chevron-left"
                size={24}
                color={theme.colors.strong}
            />
            <Text
              style={{
                color: theme.colors.strong, 
                    
              }}
            >
            Back
            </Text>
          </Container>
          <IconButton
            style={{
              paddingHorizontal: 0,
              marginTop: 0,
              marginRight: 0,
            }}
              icon="open-in-browser"
              size={24}
              color={theme.colors.strong}
          />
        </Container>
        <Image
          style={{
            width: 450,
            height: 550,
            marginTop: 0,
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