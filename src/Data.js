import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    revenu: 4000,
    expense: 2400,
    amt: 2400,
    value:'$2500'
  },
  {
    name: 'Feb',
    revenu: 3000,
    expense: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    revenu: 2000,
    expense: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    revenu: 2780,
    exepnse: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    revenu: 1890,
    expense: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    revenu: 2390,
    expense: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    revenu: 3490,
    expense: 4300,
    amt: 2100,
  },
];

const BarchartComponent = () => {
  return (  
    
    <BarChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis  />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenu" fill="#ca8a04" activeBar={<Rectangle fill="orange" stroke="yellow" />} />
      <Bar dataKey="expense" fill="#3b82f6" activeBar={<Rectangle fill="blue" stroke="blue" />} />
    </BarChart>
  
  );

  
}

export default BarchartComponent;
 

