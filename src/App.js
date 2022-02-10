import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

function App() {
  return (
      <Switch>
        <Route exact path='/'>
          <AllMeetupsPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route path='/new-meetups'>
          <NewMeetupPage />
        </Route>
      </Switch>
  );
}

export default App;
