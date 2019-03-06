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
              width: 450,
              height: 750,
              marginBottom: 5,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/b1359360-d11b-41d5-b0d0-f3b5aeee7c59"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                marginTop: 700,
              }]}
            >
            Alex Rodríguez Santibáñez
            </Text>
          </Container>
          <Container
            style={{
              width: 450,
              height: 300,
              marginBottom: 5,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/4acc8965-a4c6-4bf1-b6dc-014365d136a3"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 250,
              }]}
            >
            Edgar Chaparro
            </Text>
          </Container>
          <Container
            style={{
              width: 450,
              height: 300,
              marginBottom: 5,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/2548a278-b79b-4ed6-bf3a-055760946879"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 250,
              }]}
            >
            Daniele Angele
            </Text>
          </Container>
          <Container
            style={{
              width: 450,
              height: 600,
              marginBottom: 5,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/17db4293-f02b-4d01-b94b-e6eab12cbad2"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 550,
              }]}
            >
            Jessica To'oto'o
            </Text>
          </Container>
          <Container
            style={{
              width: 450,
              height: 750,
              marginBottom: 5,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/7769cee6-04ac-4c75-913b-f00153c3fafc"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 700,
              }]}
            >
            Steven Ramon
            </Text>
          </Container>
          <Container
            style={{
              width: 450,
              height: 300,
              marginBottom: 5,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/65f867eb-a929-496f-894b-b457bdb59ea8"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                marginTop: 250,
              }]}
            >
            Marc Schadegg
            </Text>
          </Container>
          <Container
            style={{
              width: 450,
              height: 700,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/7fe525d0-083c-4714-b874-a93f2a1b17c8"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 650,
              }]}
            >
            Ricardo Gomez Angel
            </Text>
          </Container>
        </ScrollView>
      </ScreenContainer>
    );
  }
};

export default withTheme(Root)