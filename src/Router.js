// This file is responsible for handling all scenes within the app

import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm.js';
import EmployeeList from './components/EmployeeList.js';
import EmployeeCreate from './components/EmployeeCreate.js';


const RouterComponent = () => {
  return (
      <Router sceneStyle={{ paddingTop: 65 }}>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please login" initial />
        </Scene>

        <Scene key="main">
          <Scene 
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList" 
            component={EmployeeList} 
            title="Employees"
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create employee" />
        </Scene>

      </Router>
  );
};

export default RouterComponent;
