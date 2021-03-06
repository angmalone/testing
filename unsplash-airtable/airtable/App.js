
import * as React from 'react';
import { DefaultTheme, Provider } from '@draftbit/ui';
import { AppLoading } from 'expo';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';
import { draftbit_dark as AppTheme } from './config/Themes';
import Home from "./screens/HomeScreen";
import CollectionsKyoto from "./screens/explore/CollectionsKyoto"
import ExploreBarcelona from "./screens/explore/ExploreBarcelona";
import ExploreBeaches from "./screens/explore/ExploreBeaches";
import ExploreMexicoCity from "./screens/explore/ExploreMexicoCity";
import ProfileHeader from "./screens/user/ProfileHeader";
import PhotoDetails from "./screens/details/PhotoDetails"

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Mexico: ExploreMexicoCity,
    Beaches: ExploreBeaches,
    Barcelona: ExploreBarcelona,
    Profile: ProfileHeader,
    Kyoto: CollectionsKyoto,
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