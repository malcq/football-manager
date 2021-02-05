import React, {Suspense} from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

const Teams = React.lazy(() => import('../pages/teams'));
const Leagues = React.lazy(() => import('../pages/leagues'));
const CalendarLeague = React.lazy(() => import('../pages/calendarLeague'));
const CalendarTeam = React.lazy(() => import('../pages/calendarTeam'));

const AppRoute = () => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <Switch>
      {routes.map((router) => (
        <Route
          key={router.path}
          {...router}
          component={router.component}
        />
      ))} 
    </Switch>
  </Suspense>
  );
 
const routes = [
  {
    path: '/competitions/:id',
    exact: true,
    component: Teams
  },
  {
    path: '/competitions/:id/matches',
    exact: true,
    component: CalendarLeague
  },
  {
    path: '/teams/:id',
    exact: true,
    component: CalendarTeam
  },
  {
    path: '/',
    exact: true,
    component: Leagues
  }
];

export default AppRoute;