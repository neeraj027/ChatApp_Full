import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProctectRoute from "./components/auth/ProctectRoute";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/Chat"));
const NotFound = lazy(() => import("./pages/NotFound"));

const user = true;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<ProctectRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
        </Route>

        <Route
          path="/login"
          element={
            <ProctectRoute user={!user} redirect="/">
              <Login />
            </ProctectRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
