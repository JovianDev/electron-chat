import React from 'react';
import { Provider } from 'react-redux';

import HomeView from './views/Home';
import ChatView from './views/Chat';
import WelcomeView from './views/Welcome';
import SettingsView from './views/Settings';

import Navbar from './components/Navbar';
import configureStore from './store';

const store = configureStore();

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
export default function App() {
  return (
    <div className="content-wrapper">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <WelcomeView />
            </Route>
            <Route path="/home">
              <HomeView />
            </Route>
            <Route path="/chat/:id">
              <ChatView />
            </Route>
            <Route path="/settings">
              <SettingsView />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
