import Home from "../containers/home";
export default function Layout() {


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-gray-200 rounded-lg shadow-lg p-8 w-[500px] flex flex-col items-center">
                <Home />
            </div>

        </div>
    );
}