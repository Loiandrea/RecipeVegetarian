import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Importa HelmetProvider
import './App.css';
import HomePage from './pages/HomePage';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import { Helmet } from 'react-helmet-async'; // Importa Helmet da react-helmet-async

function App() {
  return (
    <HelmetProvider> {/* Avvolgi tutto il tuo albero di componenti */}
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Helmet>
                    <title>Home Page - My React App</title>
                  </Helmet>
                  <HomePage />
                </>
              }
            />
            <Route
              path="/recipe/:id"
              element={
                <>
                  <Helmet>
                    <title>Recipe Detail - My React App</title>
                  </Helmet>
                  <RecipeDetail />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

