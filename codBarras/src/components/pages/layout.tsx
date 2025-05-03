
import { Outlet } from "react-router-dom";

export default function Layout() {


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-500">
            <div className="bg-gray-300 rounded-lg shadow-lg p-8 w-[500px] flex flex-col items-center">
                
                <Outlet/>
                
            </div>

        </div>
    );
}