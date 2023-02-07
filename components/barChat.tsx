import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const BarChart = () => {
    const data = [
        {
            country: "AD",
            "hot dog": 37,
            "hot dogColor": "hsl(2, 70%, 50%)",
            burger: 192,
            burgerColor: "hsl(36, 70%, 50%)",
            sandwich: 50,
            sandwichColor: "hsl(273, 70%, 50%)",
            kebab: 36,
            kebabColor: "hsl(263, 70%, 50%)",
            fries: 185,
            friesColor: "hsl(300, 70%, 50%)",
            donut: 40,
            donutColor: "hsl(134, 70%, 50%)",
        },
        {
            country: "AE",
            "hot dog": 74,
            "hot dogColor": "hsl(111, 70%, 50%)",
            burger: 64,
            burgerColor: "hsl(216, 70%, 50%)",
            sandwich: 128,
            sandwichColor: "hsl(139, 70%, 50%)",
            kebab: 9,
            kebabColor: "hsl(210, 70%, 50%)",
            fries: 138,
            friesColor: "hsl(277, 70%, 50%)",
            donut: 162,
            donutColor: "hsl(347, 70%, 50%)",
        },
        {
            country: "AF",
            "hot dog": 44,
            "hot dogColor": "hsl(346, 70%, 50%)",
            burger: 187,
            burgerColor: "hsl(348, 70%, 50%)",
            sandwich: 191,
            sandwichColor: "hsl(194, 70%, 50%)",
            kebab: 199,
            kebabColor: "hsl(337, 70%, 50%)",
            fries: 182,
            friesColor: "hsl(356, 70%, 50%)",
            donut: 170,
            donutColor: "hsl(31, 70%, 50%)",
        },
        {
            country: "AG",
            "hot dog": 35,
            "hot dogColor": "hsl(207, 70%, 50%)",
            burger: 176,
            burgerColor: "hsl(334, 70%, 50%)",
            sandwich: 133,
            sandwichColor: "hsl(177, 70%, 50%)",
            kebab: 123,
            kebabColor: "hsl(198, 70%, 50%)",
            fries: 199,
            friesColor: "hsl(277, 70%, 50%)",
            donut: 198,
            donutColor: "hsl(63, 70%, 50%)",
        },
        {
            country: "AI",
            "hot dog": 101,
            "hot dogColor": "hsl(283, 70%, 50%)",
            burger: 111,
            burgerColor: "hsl(299, 70%, 50%)",
            sandwich: 178,
            sandwichColor: "hsl(277, 70%, 50%)",
            kebab: 169,
            kebabColor: "hsl(213, 70%, 50%)",
            fries: 11,
            friesColor: "hsl(218, 70%, 50%)",
            donut: 198,
            donutColor: "hsl(141, 70%, 50%)",
        },
        {
            country: "AL",
            "hot dog": 58,
            "hot dogColor": "hsl(98, 70%, 50%)",
            burger: 85,
            burgerColor: "hsl(155, 70%, 50%)",
            sandwich: 142,
            sandwichColor: "hsl(200, 70%, 50%)",
            kebab: 151,
            kebabColor: "hsl(168, 70%, 50%)",
            fries: 110,
            friesColor: "hsl(148, 70%, 50%)",
            donut: 15,
            donutColor: "hsl(359, 70%, 50%)",
        },
        {
            country: "AM",
            "hot dog": 12,
            "hot dogColor": "hsl(29, 70%, 50%)",
            burger: 139,
            burgerColor: "hsl(154, 70%, 50%)",
            sandwich: 148,
            sandwichColor: "hsl(135, 70%, 50%)",
            kebab: 16,
            kebabColor: "hsl(20, 70%, 50%)",
            fries: 182,
            friesColor: "hsl(61, 70%, 50%)",
            donut: 151,
            donutColor: "hsl(80, 70%, 50%)",
        },
    ];
    return (
        <>
            <ResponsiveBar
                data={data}
                keys={[
                    "hot dog",
                    "burger",
                    "sandwich",
                    "kebab",
                    "fries",
                    "donut",
                ]}
                indexBy="country"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                padding={0.3}
                groupMode="grouped"
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "nivo" }}
                defs={[
                    {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "#38bcb2",
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "#eed312",
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                    },
                ]}
                fill={[
                    {
                        match: {
                            id: "fries",
                        },
                        id: "dots",
                    },
                    {
                        match: {
                            id: "sandwich",
                        },
                        id: "lines",
                    },
                ]}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "country",
                    legendPosition: "middle",
                    legendOffset: 32,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "food",
                    legendPosition: "middle",
                    legendOffset: -40,
                }}
                enableLabel={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                }}
                legends={[
                    {
                        dataFrom: "keys",
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function (e) {
                    return (
                        e.id +
                        ": " +
                        e.formattedValue +
                        " in country: " +
                        e.indexValue
                    );
                }}
            />
        </>
    );
};

export default BarChart;
