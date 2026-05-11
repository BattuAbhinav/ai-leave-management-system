import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import ApplyLeave from "./pages/ApplyLeave"
import LeaveHistory from "./pages/LeaveHistory"

import {
  Routes,
  Route
} from "react-router-dom"

function App() {

  return (

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
  )
}

export default App