import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MoviePage from "../pages/MoviePage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import LearnMorePage from "../pages/LearnMorePage";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for LandingPage outside MainLayout */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn-more" element={<LearnMorePage />} />

        {/* Routes wrapped in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/movies" element={<MoviePage />} />
        </Route>

        {/* 404 Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
