import { Link, useNavigate } from "react-router-dom"

function AdminDashboard() {

  const navigate = useNavigate()

  const handleLogout = () => {

    navigate("/")
  }

  return (

    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold text-white mb-10">
        Admin Dashboard
      </h1>

      <div className="flex gap-6 mb-8">

        <Link to="/leave-history">

          <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
            Manage Leaves
          </button>

        </Link>

      </div>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-6 py-3 rounded-xl"
      >
        Logout
      </button>

    </div>
  )
}

export default AdminDashboard