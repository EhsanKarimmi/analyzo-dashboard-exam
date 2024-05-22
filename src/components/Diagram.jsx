import React from "react";
import Chart from "react-google-charts";
import { diagramColors, diagramData } from "../db/diagramData";

// snakey diagram options
const options = {
    tooltip: { trigger: "none" },
    sankey: {
        node: {
            width: 15,
            colors: diagramColors,
            labelPadding: 15,
            nodePadding: 20,

            label: {
                fontSize: 14,
                bold: true,
                color: "#ffffff",
            },
        },
        link: {
            colorMode: "gradient",
            colors: diagramColors,
        },
    },
};
function Diagram() {
    return (
        // chart container
        <div className="p-5 rounded-md border border-zinc-300 ">
            {/* snakey diagram */}
            <Chart
                chartType="Sankey"
                width="100%"
                height="40vh"
                data={diagramData}
                options={options}
            />
        </div>
    );
}

export default Diagram;
