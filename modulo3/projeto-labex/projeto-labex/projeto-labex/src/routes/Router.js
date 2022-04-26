import { BrowserRouter } from "react-router-dom";
import { HomePages } from "../components/HomePages";
import { Routes, Route } from "react-router-dom";
import { ListTripsPage } from "../components/ListTripsPage";
import { AplicationFormPage } from "../components/AplicationFormPage";
import { LoginPage } from "../components/LoginPage";
import { AdminHomePage } from "../components/AdminHomePage";
import { CreateTripPage } from "../components/CreateTripPage";
import { TripDetailsPage } from "../components/TripDetailsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePages />} />
        <Route path="/trips/list" element={<ListTripsPage />} />
        <Route path="/trips/application" element={<AplicationFormPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/trips/list" element={<AdminHomePage />} />
        <Route path="/admin/trips/create" element={<CreateTripPage />} />
        <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
