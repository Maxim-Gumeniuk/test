import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

enum Path {
    HOME = "/",
    NOT_FOUND = "*",
}

function App() {
    return (
        <div className="bg-[#f5f5f8]">
            <Routes>
                <Route path={Path.HOME} element={<Home />} />
                <Route path={Path.NOT_FOUND} element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
