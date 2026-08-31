import { useNavigate } from "react-router-dom";

function Dashboard () {

    const navigate = useNavigate();

    const handleLogout= () => {
        navigate('/');
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h2 className="text-3xl font-bold text-blue-600">Dashboard Page</h2>
            <p className="text-gray-700 mt-4 text-lg">Welcome to the Dashboard!!</p>
            <button className="text-white rounded bg-gray-500 px-2 py-1" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;