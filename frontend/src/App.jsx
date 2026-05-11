import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import ApplyLeave from "./pages/ApplyLeave"
import LeaveHistory from "./pages/LeaveHistory"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
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

      </Routes>

    </BrowserRouter>
  )
}

export default App