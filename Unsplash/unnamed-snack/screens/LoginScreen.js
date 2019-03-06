import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList } from 'react-native';
import { withTheme, ScreenContainer, Container, TextField, Button } from '@draftbit/ui';

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
        <Container
          style={{
            alignItems: 'center',
          }}
            elevation={2}
            useThemeGutterPadding={true}
        >
          <Text
            style={[
              theme.typography.headline4, {
              color: theme.colors.strong, 
              textAlign: "center", 
                  
            }]}
          >
          Log In
          </Text>
          <TextField
            style={{
              marginHorizontal: 20,
            }}
              type="underline"
              label="Username"
              leftIconMode="inset"
              onChangeText={this.onChangeText}
          />
          <TextField
            style={{
              marginHorizontal: 20,
            }}
              type="underline"
              label="Password "
              leftIconMode="inset"
              onChangeText={this.onChangeText}
              secureTextEntry={true}
          />
          <Button
            style={{
              marginHorizontal: 20,
            }}
              type="solid"
              color={theme.colors.medium}
          >
            Log In
          </Button>
          <Text
            style={{
              color: theme.colors.strong, 
              textAlign: "center", 
                  
            }}
          >
          Forgot your password? 
          </Text>
          <Text
            style={{
              color: theme.colors.strong, 
              textAlign: "center", 
                  
            }}
          >
          Don't have an account? Join
          </Text>
        </Container>
      </ScreenContainer>
    );
  }
};

export default withTheme(Root)