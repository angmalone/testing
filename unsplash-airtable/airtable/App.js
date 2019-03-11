
import * as React from 'react';
import { DefaultTheme, Provider } from '@draftbit/ui';
import { AppLoading } from 'expo';

import cacheAssetsAsync from './utilities/cacheAssetsAsync';
import { draftbit_dark as AppTheme } from './config/Themes';
import Home from "./screens/NewHomeScreen";
import ExploreMexicoCityScreen from "./screens/explore/ExploreMexicoCityScreen";
import ExploreBeachesScreen from "./screens/explore/ExploreBeachesScreen";
import ExploreBarcelonaScreen from "./screens/explore/ExploreBarcelonaScreen";
import ProfileHeader from "./screens/user/ProfileHeader";
import CollectionsKyotoScreen from "./screens/CollectionsKyotoScreen";
import PhotoDetails from "./screens/details/PhotoDetails"
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Mexico: ExploreMexicoCityScreen,
    Beaches: ExploreBeachesScreen,
    Barcelona: ExploreBarcelonaScreen,
    Profile: ProfileHeader,
    Kyoto: CollectionsKyotoScreen,
    PhotoDetails: PhotoDetails
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