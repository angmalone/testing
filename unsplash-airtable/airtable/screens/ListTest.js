import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList, TouchableHighlight, List } from 'react-native';
import { withTheme, ScreenContainer, Container, IconButton, FieldSearchBarFull, FAB } from '@draftbit/ui';
import Images from "../config/Images.js";


class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {
          photos: [],
        }}

  static navigationOptions = {
    header: null,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: "rgba(20, 21, 33, 1)",
      borderBottomColor: "rgba(20, 21, 33, 1)",
      Color: 'white',
      zIndex: 100,
      tintColor: 'white'
      },
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content");
    fetch('https://api.airtable.com/v0/appKX1EmOPeAFm3Gn/Photos?api_key=key4cMUqaFrAHjaTn')
    .then((resp) => resp.json())
    .then(data => {
       this.setState({ photos: data.records });
       console.log('hi');
    }).catch(err => {
      // Error 🙁
    });
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

            

            <TouchableHighlight onPress={() => this.props.navigation.navigate('Jean')}>
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
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail')}>
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
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Mat')}>
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
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Brayden')}>
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
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Yunming')}>
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
            </TouchableHighlight>
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

const Photo = ({ photoURL, userName, userURL }) => (
  <Image source={{ uri: photoURL[0].url }}
   style={{width: 400, height: 400}} />
 );
 