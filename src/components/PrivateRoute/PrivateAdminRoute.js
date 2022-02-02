import React from 'react';
import {Navigate} from 'react-router-dom';

import { isAdminTrue } from '../../utils';

function PrivateAdminRoute({ children }) {
    const isAdmin = isAdminTrue();
    return isAdmin ? children : <Navigate to="/404" />;
  }

export default PrivateAdminRoute;