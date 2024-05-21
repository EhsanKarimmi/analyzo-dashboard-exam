import React from "react";
import Diagram from "./components/Diagram";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";

function App() {
    return (
        <main className="grid grid-cols-12 h-screen w-screen bg-zinc-200">
            {/* sidebar component */}
            <Sidebar />
            {/* main content -> diagram and table */}
            <div>
                {/* snakey diagram -> D3.js */}
                <Diagram />
                {/* users data table */}
                <Table />
            </div>
        </main>
    );
}

export default App;
