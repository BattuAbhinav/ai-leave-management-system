import { Link, useNavigate } from "react-router-dom"

function MemberDashboard() {

  const navigate = useNavigate()

  const handleLogout = () => {

    navigate("/")
  }

  return (

    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold text-white mb-10">
        Member Dashboard
      </h1>

      <div className="flex gap-6 mb-8">

        <Link to="/apply-leave">

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
            Apply Leave
          </button>

        </Link>

        <Link to="/leave-history">

          <button className="bg-green-600 text-white px-6 py-3 rounded-xl">
            My Leaves
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

export default MemberDashboard