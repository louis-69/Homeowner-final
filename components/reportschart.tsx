/* eslint-disable require-jsdoc */

import React, { PureComponent } from "react";
import {
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ComposedChart,
} from "recharts";

const data = [
    {
        name: "Jan",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
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
    {
        name: "Sep",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "Oct",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "Nov",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: "Dec",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 50,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="pv" barSize={10} fill="#1070b5" />
                    <Bar dataKey="uv" barSize={10} fill="#82ca9d" />
                    <Line dataKey="uv" strokeWidth={2} stroke="#FFBD00" />
                </ComposedChart>
            </ResponsiveContainer>
        );
    }
}
