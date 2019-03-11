import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native';
import { withTheme, ScreenContainer, Container, IconButton, FieldSearchBarFull, FAB } from '@draftbit/ui';
import Modal from "react-native-modal";
import Hyperlink from 'react-native-hyperlink'
import Images from "../config/Images.js";


class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }
    state = {
        isModalVisible: false,
      };

      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

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
    }).catch(err => {
      console.log("oof")
    });
  }

  render() {
    const { theme } = this.props

    //let dimensions = Dimensions.get("window");
    //let imageHeight = Math.round((dimensions.width * 9) / 16);
    //let imageWidth = dimensions.width;


    const Photo = ({ photoURL, userName, userURL, pageURL }) => (
      <Container
                  style={{
                    flex: 10,
                    
                    marginBottom: 2,
                  }}
                    elevation={2}
                    backgroundImage={photoURL}
                    useThemeGutterPadding={true}
                >
                  <Text
                    style={[
                      theme.typography.body1, {
                      color: theme.colors.strong, 
                      top: 600,
                    }]}
                  >{userName}</Text>
                </Container>)


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
                  onPress={this._toggleModal}
              />
              <View style={{ flex: 0 }}>
                <Modal isVisible={this.state.isModalVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}
                style={styles.modal}>
                    <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this._toggleModal}>
                        <Text style={[
                            theme.typography.headline5, {
                            color: 'black', 
                            textAlign: "center", 
                            marginTop: 50}]}>Unsplash</Text>
                    </TouchableOpacity>
                    <Hyperlink linkDefault={ true }><Text style={[
                            theme.typography.headline5, {
                            color: 'black', 
                            textAlign: "center", 
                            marginTop: 20}]}>
                            Visit unsplash.com</Text></Hyperlink>
                    <Text style={[
                            theme.typography.headline5, {
                            color: 'black', 
                            textAlign: "center", 
                            marginTop: 20}]}>
                            Log Out</Text>
          </View>
        </Modal>
      </View>
              <IconButton
                style={{
                  alignSelf: 'flex-start',
                }}
                  icon="account-circle"
                  size={32}
                  color={theme.colors.surface}
                  onPress={() => this.props.navigation.navigate('Profile')}
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
            Photo by zplits
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
          ><TouchableHighlight onPress={() => this.props.navigation.navigate('Mexico')}>
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
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Beaches')}>
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
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Barcelona')}>
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
            </TouchableHighlight>
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
            <Text
              style={[
                theme.typography.headline6, {
                color: theme.colors.strong, 
                borderLeftWidth: 0,
              }]}
            >
            TESTING
            </Text>
          {this.state.photos.map(photo => <Photo {...photo.fields} /> )}
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



const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 120,
        width: 250,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.8);',
        borderRadius: 10
    },
});



export default withTheme(Root)

