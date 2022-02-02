import React from 'react';
import {Navigate} from 'react-router-dom';

import { isLogin } from '../../utils';

function PrivateRoute({ children }) {
    const auth = isLogin();
    return auth ? children : <Navigate to="/landing" />;
  }

export default PrivateRoute;