import React, { useEffect } from 'react';
import store from './src/redux/store';
import { Provider, useDispatch } from 'react-redux';
import RootNavigator from './src/navigators/RootNavigator';
import { getFavoriteMovies } from './src/redux/actions';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
