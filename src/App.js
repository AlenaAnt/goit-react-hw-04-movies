import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import style from './App.module.css';

import routes from './routes';

const HomePage = lazy(() =>
  import('./view/HomePage' /* webpackChunkName: "HomePage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./view/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const MoviesPage = lazy(() =>
  import('./view/MoviesPage' /* webpackChunkName: "MoviesPage */),
);
// const Reviews = lazy(() =>
//   import('./view/Reviews' /* webpackChunkName: "Reviews;" */),
// );
// const Cast = lazy(() =>
//   import('./view/Cast' /* webpackChunkName: "home-view" */),
// );

const App = () => (
  <Suspense fallback={<h1>Загружаем...</h1>}>
    <Switch>
      <div className={style.container}>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.moviedetails} component={MovieDetailsPage} />
      </div>
      {/* <Route path={routes.cast} component={Cast} />
      <Route path={routes.reviews} component={Reviews} /> */}
    </Switch>
  </Suspense>
);
export default App;
