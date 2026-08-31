import { useNavigate, useSearchParams } from "react-router-dom";

function Dashboard () {

    const navigate = useNavigate();
    const [searchParam, setSearchParams] = useSearchParams();

    const topic = searchParam.get("topic") || "General";

    const handleTopic = (newTopic) => {
        setSearchParams({topic : newTopic});
    }


    const handleLogout= () => {
        navigate('/');
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h2 className="text-3xl font-bold text-blue-600">Dashboard Page</h2>
            <p className="text-gray-700 mt-4 text-lg">Welcome to the Dashboard!!</p>
            
            <div className="mt-3">
                <h3 className="text-gray-700 mt-4 text-lg italic underline">Choose a topic : {topic}</h3>

                <div className="mt-2 flex space-x-4">
                    <button onClick = {() => handleTopic("Team")} className="bg-gray-400 text-white rounded-lg px-2 py-1 hover:bg-black">Team</button>
                    <button onClick = {() => handleTopic("Mission")} className="bg-gray-400 text-white rounded-lg px-2 py-1 hover:bg-black">Mission</button>
                    <button onClick = {() => handleTopic("Vision")} className="bg-gray-400 text-white rounded-lg px-2 py-1 hover:bg-black">Vision</button>
                </div>
            </div>

            <button className="text-white rounded bg-gray-500 px-2 py-1 mt-2" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;