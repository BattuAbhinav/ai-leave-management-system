import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import ApplyLeave from "./pages/ApplyLeave"
import LeaveHistory from "./pages/LeaveHistory"
import MemberDashboard from "./pages/MemberDashboard"
import AdminDashboard from "./pages/AdminDashboard"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/apply-leave"
          element={<ApplyLeave />}
        />

        <Route
          path="/leave-history"
          element={<LeaveHistory />}
        />
        <Route
          path="/member-dashboard"
          element={<MemberDashboard />}
        />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />
      </Routes>

    </BrowserRouter>
  )
}

export default App