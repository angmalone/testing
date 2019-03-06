import React, { Component } from 'react';
import { Dimensions, StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { withTheme, ScreenContainer, Container, IconButton, Icon, Button } from '@draftbit/ui';
import Images from "../config/Images.js";

const LikesView = () => 
<View>
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
</View>

const CollectionsView = () => 
<View>
<FlatList
            style={{
              alignItems: 'center',
            }}
               data={[{"image":"https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/4f23192d-d5c5-421c-ab67-c84a3f90f64a","title":"Kyoto","elevation":2,"numColumns":3,"aspectRatio":1.5,"description":"","textCentered":true}]}
               renderItem={({item}) => <CardInline {...item} style={{ marginBottom: theme.spacing.small }} /> }
               keyExtractor={item => item.id}
              horizontal={false}
          />
</View>

//export default class ProfileTest extends React.Component 
class Root extends Component { 
    state = {
        index: 0,
        routes: [
          { key: 'likes', title: 'LikesView' },
          { key: 'collections', title: 'CollectionsView' },
        ],
      };

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  render() {
    //const { theme } = this.props
    return (
        <TabView 
        navigationState={this.state}
        renderScene={SceneMap({
            likes: LikesView,
            collections: CollectionsView, 
        })}
        onIndexChange={index => this.setState({index})}
        intialLayout={{width: Dimensions.get('window').width}}/>
     
    );
  }
};

export default withTheme(Root)