import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import OverviewStack from './Overview';
import Task from '../screens/Task';

export default createDrawerNavigator({
  OverviewStack,
  Task
});