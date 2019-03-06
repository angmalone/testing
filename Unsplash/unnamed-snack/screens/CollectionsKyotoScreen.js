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
        hasSafeArea={false}
        scrollable={false}
      >
        <ScrollView
            horizontal={false}
        >
          <Container
            style={{
              width: '100%',
              height: 650,
              marginBottom: 2,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/4f23192d-d5c5-421c-ab67-c84a3f90f64a"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 600,
              }]}
            >
            Yu Kato
            </Text>
          </Container>
          <Container
            style={{
              width: '100%',
              height: 350,
              marginBottom: 2,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/cc76c55b-e7a3-4b32-a79b-0d6bbe489fa6"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 300,
              }]}
            >
            JuniperPhoton
            </Text>
          </Container>
          <Container
            style={{
              width: '100%',
              height: 600,
              marginBottom: 2,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/653b8b19-dc22-4a0f-8c27-b912e1008a08"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 550,
              }]}
            >
            Dynamic Wang
            </Text>
          </Container>
          <Container
            style={{
              width: '100%',
              height: 650,
            }}
              elevation={2}
              backgroundImage="https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/bc095a28-9e75-4469-84da-0588c21641a5"
              useThemeGutterPadding={true}
          >
            <Text
              style={[
                theme.typography.body1, {
                color: theme.colors.mediumInverse, 
                    
                top: 600,
              }]}
            >
            Yu Kato
            </Text>
          </Container>
        </ScrollView>
      </ScreenContainer>
    );
  }
};

export default withTheme(Root)