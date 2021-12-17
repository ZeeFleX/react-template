import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './utils/privateRoute';
import { useStores } from './hooks/useStores';

// Components
import Mainpage from 'pages/mainpage';
import Dashboard from 'pages/dashboard';
import Signin from 'pages/signin';
import Signup from 'pages/signup';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Mainpage />} />
          <Route element={<PrivateRoute />} path="/dashboard/*">
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
