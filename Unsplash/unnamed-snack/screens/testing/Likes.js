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
        scrollable={true}
      >
        <ScrollView
            horizontal={false}
        >
          
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