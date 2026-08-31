import { Link, Outlet } from "react-router-dom";

function About () {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h2 className="text-3xl font-bold text-blue-600">About Page</h2>
        <p className="text-gray-700 mt-4 text-lg">The is the page containing the details about our website..!!</p>
        
    <nav className="mt-6">
        <ul className="flex space-x-4">
            <li className = 'text-blue-500 hover:underline'><Link to = "team">Our Team</Link></li>
            <li className = 'text-blue-500 hover:underline'><Link to = '/'>Back To Home</Link></li>
        </ul>
    </nav>
    
    <div className="mt-8 w-full max-w-4xl">
        <Outlet/>
    </div>

    </div>
    );
}

export default About;