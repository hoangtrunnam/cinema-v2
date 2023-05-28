import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import { IRouteType } from './components/Types';

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route: IRouteType, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          if (route?.layout) {
            Layout = route?.layout;
          } else if (route?.layout === null) {
            Layout = Fragment as any;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
