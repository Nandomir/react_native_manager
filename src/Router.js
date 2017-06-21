// This file is responsible for handling all scenes within the app

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm.js';
import EmployeeList from './components/EmployeeList.js';


const RouterComponent = () => {
  return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="login" component={LoginForm} title="Please login" initial />
        <Scene key="employeeList" component={EmployeeList} title="Employees" />
      </Router>
  );
};

export default RouterComponent;
