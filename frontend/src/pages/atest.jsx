import { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { fetchNiftyData } from '../services/fetchNiftyData';

export default function Nifty50TrendGraph() {
  const [timeframe, setTimeframe] = useState('1M');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("CALL")
    const loadData = async () => {
      setLoading(true);
      const niftyData = await fetchNiftyData(timeframe);
      setData(niftyData);
      setLoading(false);
    };
    loadData();
  }, [timeframe]);

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-[#030318] rounded-xl p-4 border border-white/20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Nifty 50 Index</h2>
        <div className="flex space-x-2">
          {['1M', '1Y', '5Y'].map((tf) => (
            <button
              key={tf}
              onClick={() => handleTimeframeChange(tf)}
              className={`px-3 py-1 rounded-md ${timeframe === tf ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64 md:h-96">
        {loading ? (
          <p className="text-center text-gray-500">Loading data...</p>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip formatter={(value) => [`₹${value}`, 'Value']} />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
                name="Nifty 50"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      
    </div>
  );
}
