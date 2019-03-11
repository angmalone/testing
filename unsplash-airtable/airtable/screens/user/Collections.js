import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Image, Text, FlatList, TouchableHighlight } from 'react-native';
import { withTheme, ScreenContainer, Container, IconButton, Icon, Button, CardInline } from '@draftbit/ui';
import { withNavigation } from 'react-navigation';
import Images from "../../config/Images.js";

class Root extends Component {

  componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  render() {
    const { theme } = this.props;
    const { navigation } = this.props;

    return (
      <ScreenContainer
        hasSafeArea={false}
        scrollable={false}
      >
        <ScrollView
            horizontal={false}
        >
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Kyoto')}>
          <FlatList
          contentContainerStyle={styles.childLayout}
               data={[{"image":"https://apps-draftbit-com.s3.amazonaws.com/r9_CZrFM/assets/4f23192d-d5c5-421c-ab67-c84a3f90f64a","title":"Kyoto","elevation":2,"numColumns":3,"aspectRatio":1.5,"description":"","textCentered":true}]}
               renderItem={({item}) => <CardInline {...item} style={{ marginBottom: theme.spacing.small }} /> }
               keyExtractor={item => item.id}
              horizontal={false}
          /></TouchableHighlight>
        </ScrollView>
      </ScreenContainer>
    );
  }
};

const styles = StyleSheet.create({
  childLayout: {
    alignItems: 'center'
  }
});


export default withNavigation(withTheme(Root))