import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList } from 'react-native';
import { withTheme, ScreenContainer, Container } from '@draftbit/ui';

class Root extends Component {

  componentDidMount() {
    StatusBar.setBarStyle("dark-content");
  }

  render() {
    const { theme } = this.props
    return (
      <ScreenContainer
        hasSafeArea={true}
        scrollable={false}
      >
        <ScrollView
            horizontal={false}
        >
          <Container
            style={{
              width: 550,
              height: 300,
              alignContent: 'flex-start',
              marginBottom: 5,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/d3f2324e-83bd-484a-a2af-22afa14ec873"
              useThemeGutterPadding={true}
              backgroundImageResizeMode="center"
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                marginBottom: 0,
                top: 250,
              }]}
            >
            Jezael Melgoza
            </Text>
          </Container>
          <Container
            style={{
              width: 500,
              height: 750,
              marginBottom: 5,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/15746b24-30a3-489f-96df-04cfa454ebeb"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 700,
              }]}
            >
            Katelyn Barone
            </Text>
          </Container>
          <Container
            style={{
              width: 550,
              height: 300,
              marginBottom: 5,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/4615bca0-2fce-4d7f-b27c-bb546da16ffa"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 250,
              }]}
            >
            Daniel Apodaca
            </Text>
          </Container>
          <Container
            style={{
              width: 500,
              height: 650,
              marginBottom: 5,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/1a34e8a6-82c2-41e1-b324-7147904af7dd"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 600,
              }]}
            >
            Martin Robles
            </Text>
          </Container>
          <Container
            style={{
              width: 500,
              height: 650,
              marginBottom: 5,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/127f7ed5-6368-4c1a-a67b-1c8ee0dac876"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 600,
              }]}
            >
            Dennis Schrader
            </Text>
          </Container>
        </ScrollView>
      </ScreenContainer>
    );
  }
};

export default withTheme(Root)