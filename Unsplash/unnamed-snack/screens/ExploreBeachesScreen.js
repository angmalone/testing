import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList } from 'react-native';
import { withTheme, ScreenContainer, Container } from '@draftbit/ui';

class Root extends Component {

  static navigationOptions = {
    title: 'Beaches',
    headerStyle: {
      zIndex: 100,
      },
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content");
  }

  render() {
    const { theme } = this.props
    return (
      <ScreenContainer
        hasSafeArea={true}
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
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/8e77dab7-ff2e-4556-b62d-651d0c6b60ba"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 600,
              }]}
            >
            Nathan Dumlao
            </Text>
          </Container>
          <Container
            style={{
              width: 450,
              height: 300,
              marginBottom: 2,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/c0ae7530-5b66-48a5-b94c-e76bbd5aa0e4"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 250,
              }]}
            >
            Mark Tegethoff
            </Text>
          </Container>
          <Container
            style={{
              width: 500,
              height: 500,
              marginBottom: 2,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/bfa64c4a-e596-47d0-8a3f-11d4fd3006ba"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                marginTop: 450,
              }]}
            >
            Kunj Parekh
            </Text>
          </Container>
          <Container
            style={{
              width: 450,
              height: 550,
              marginBottom: 2,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/0d0591f0-aa00-481a-99c2-db947ebce8c2"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 450,
              }]}
            >
            Elizabeth Lies
            </Text>
          </Container>
          <Container
            style={{
              width: 450,
              height: 300,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/444c0491-600d-4e37-88d4-c409737af7ff"
              useThemeGutterPadding={true}
          >
            <Text
              style={{
                color: theme.colors.strong, 
                    
                top: 250,
              }}
            >
            Robert Bye
            </Text>
          </Container>
        </ScrollView>
      </ScreenContainer>
    );
  }
};

export default withTheme(Root)