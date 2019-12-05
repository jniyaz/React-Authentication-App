import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './styles/tailwind.css';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import GuestRoute from './components/GuestRoute';
import AuthRoute from './components/AuthRoute';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <div className="bg-gray-500 h-screen">
            <Route path="/" />
            <GuestRoute path="/login" component={Login} />
            <GuestRoute path="/register" component={Register} />
            <AuthRoute path="/profile" component={Profile} />
        </div>
      </Layout>
    </Router>
  );
}

export default App;
