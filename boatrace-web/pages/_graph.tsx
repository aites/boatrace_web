import React from 'react';
import { LineChart,ResponsiveContainer, Line, XAxis, CartesianGrid, Legend, YAxis } from "recharts";


export const Graph = () => {
  const data = [
    {name: '9/11', 収益: +4000},
    {name: '9/12', 収益: -4000},
    {name: '9/13', 収益: +2900},
    {name: '9/14', 収益: +900},
    {name: '9/15', 収益: -14000},
    {name: '9/16', 収益: +100},
    {name: '9/17', 収益: -100},
    {name: '9/18', 収益: +400},
    {name: '9/19', 収益: +3800},
    {name: '9/20', 収益: 0},
    {name: '9/21', 収益: +4000},
    {name: '9/22', 収益: -4000},
    {name: '9/23', 収益: +2900},
    {name: '9/24', 収益: +900},
    {name: '9/25', 収益: -14000},
    {name: '9/26', 収益: +100},
    {name: '9/27', 収益: -100},
    {name: '9/28', 収益: +400},
    {name: '9/29', 収益: +3800},
  ];
    
  return (  
    <ResponsiveContainer
        width="100%"
        height="100%"
      >
      <LineChart
        data={data}
        margin={{top: 5, right: 0, left: 0, bottom: 25}}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval="preserveStartEnd" />
        <YAxis interval="preserveStartEnd" />
        <Legend />
        <Line type="monotone" dataKey="収益" stroke="#FA1D1D" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
  
export default Graph