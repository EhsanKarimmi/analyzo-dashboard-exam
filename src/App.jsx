import React from "react";
import Diagram from "./components/Diagram";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";

function App() {
    return (
        <main className="grid grid-cols-12 h-screen w-screen bg-zinc-200 overflow-x-hidden">
            {/* sidebar component */}
            <Sidebar />
            {/* main content -> diagram and table */}
            <div className="col-span-10 p-10">
                {/* snakey diagram -> D3.js */}
                <Diagram />
                {/* users data table */}
                <Table />
            </div>
        </main>
    );
}

export default App;
