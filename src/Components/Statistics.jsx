import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { getDonation } from '../localStorage';
const Statistics = () => {
  const totalDonation = useLoaderData();
  const totalDonationLength = totalDonation.length;

  const dataInLocalStorage = getDonation();
  const donationLength = dataInLocalStorage.length;
    const data = [
        {name: 'totalDonation', value: totalDonationLength },
        { name: 'dataInLocalStorage', value: donationLength},
      ];
      
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
    return (
     <div>
         <PieChart width={200} height={400} className='mx-auto'>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className='flex md:flex-row flex-col gap-6 justify-center'>
        <div className='flex gap-2 justify-center items-center'><p>Your Donation</p><p className='h-3 w-20 rounded-md bg-[#00C49F]'></p></div>
        <div  className='flex gap-2 justify-center items-center'><p>Total Donation</p><p className='h-3 w-20 rounded-md bg-[#0088FE]'></p></div>

      </div>
     </div>
  
    );
};
export default Statistics;