
import * as React from 'react';
import { DefaultTheme, Provider } from '@draftbit/ui';
import { AppLoading } from 'expo';

import cacheAssetsAsync from './utilities/cacheAssetsAsync';
import { draftbit_dark as AppTheme } from './config/Themes';
import PhotoDetailPageScreen from './screens/details/PhotoDetailPageScreen';
import HomeScreen from "./screens/HomeScreen";
import ExploreMexicoCityScreen from "./screens/explore/ExploreMexicoCityScreen";
import ExploreBeachesScreen from "./screens/explore/ExploreBeachesScreen";
import ExploreBarcelonaScreen from "./screens/explore/ExploreBarcelonaScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfileHeader from "./screens/user/ProfileHeader";
import CollectionsKyotoScreen from "./screens/CollectionsKyotoScreen";
import PhotoDetailPageScreenJean from './screens/details/PhotoDetailPageScreenJean';
import PhotoDetailPageScreenMat from './screens/details/PhotoDetailPageScreenMat';
import PhotoDetailPageScreenBrayden from "./screens/details/PhotoDetailPageScreenBrayden";
import PhotoDetailPageScreenYunming from "./screens/details/PhotoDetailPageScreenYunming";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Mexico: ExploreMexicoCityScreen,
    Beaches: ExploreBeachesScreen,
    Barcelona: ExploreBarcelonaScreen,
    Profile: ProfileHeader,
    Detail: PhotoDetailPageScreen,
    Kyoto: CollectionsKyotoScreen,
    Jean: PhotoDetailPageScreenJean,
    Mat: PhotoDetailPageScreenMat,
    Brayden: PhotoDetailPageScreenBrayden,
    Yunming: PhotoDetailPageScreenYunming
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