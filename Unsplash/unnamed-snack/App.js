
import * as React from 'react';
import { DefaultTheme, Provider } from '@draftbit/ui';
import { AppLoading } from 'expo';

import cacheAssetsAsync from './utilities/cacheAssetsAsync';
import { draftbit_dark as AppTheme } from './config/Themes';
import PhotoDetailPageScreen from './screens/PhotoDetailPageScreen';
import HomeScreen from "./screens/HomeScreen";
import ExploreMexicoCityScreen from "./screens/ExploreMexicoCityScreen"
import ExploreBeachesScreen from "./screens/ExploreBeachesScreen";
import ExploreBarcelonaScreen from "./screens/ExploreBarcelonaScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfilePagePhotosViewScreen from './screens/ProfilePagePhotosViewScreen';
import ProfilePageLikesViewScreen from "./screens/ProfilePageLikesViewScreen";
import ProfilePageCollectionsViewScreen from "./screens/ProfilePageCollectionsViewScreen"
import ProfileTest from "./screens/ProfileTest";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ProfileTest: ProfileTest, 
    Mexico: ExploreMexicoCityScreen,
    Beaches: ExploreBeachesScreen,
    Barcelona: ExploreBarcelonaScreen,
    Profile: ProfilePagePhotosViewScreen,
    Collections: ProfilePageCollectionsViewScreen,
    Likes: ProfilePageLikesViewScreen,
    Detail: PhotoDetailPageScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.PureComponent {

  
  state = {
    isReady: false
  }
  
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={cacheAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }

    return (
      <Provider theme={AppTheme}>
        <AppContainer />
      </Provider>
    )
  }
}