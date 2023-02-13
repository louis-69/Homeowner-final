/* eslint-disable require-jsdoc */

import React, { PureComponent } from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "",
        uv: 0,
        pv: 0,
        amt: 0,
    },

    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    {
        name: "Feb",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Mar",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Apr",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "May",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Jun",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Jul",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "Aug",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    static demoUrl = "https://codesandbox.io/s/simple-area-chart-4ujxw";

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        strokeWidth={2}
                        stroke="#FA790F"
                        fill="#84EBFF"
                    />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
