import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Dashboard() {

  const navigate = useNavigate()

  useEffect(() => {

    const token = localStorage.getItem("token")

    if (!token) {

      navigate("/")
    }

  }, [])

  const handleLogout = () => {

    localStorage.removeItem("token")

    navigate("/")
  }

  return (

    <div className="min-h-screen bg-slate-900 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-3">
          Dashboard
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Welcome to AI Leave Management System
        </p>

        <div className="flex flex-col gap-4">

          <button
            className="bg-blue-600 text-white p-3 rounded-lg"
            onClick={() => navigate("/apply-leave")}
          >
            Apply Leave
          </button>

          <button
            className="bg-green-600 text-white p-3 rounded-lg"
            onClick={() => navigate("/leave-history")}
          >
            Leave History
          </button>

          <button
            className="bg-red-600 text-white p-3 rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  )
}

export default Dashboard