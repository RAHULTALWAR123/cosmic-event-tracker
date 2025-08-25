import { useCompareStore } from "../stores/useCompareStore";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

function ComparePage() {
  const { selected } = useCompareStore();

  if (selected.length === 0) {
    return <p className="text-center mt-20">No asteroids selected for comparison.</p>;
  }

  const chartData = selected.map((item) => ({
    name: item.name,
    distance: parseFloat(item.close_approach_data[0].miss_distance.kilometers),
    diameter: parseFloat(item.avgDiameter),
    velocity: parseFloat(item.close_approach_data[0].relative_velocity.kilometers_per_hour),
  }));

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Asteroid Comparison</h2>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="distance" stroke="#8884d8" />
          <Line type="monotone" dataKey="diameter" stroke="#82ca9d" />
          <Line type="monotone" dataKey="velocity" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>

     
    </div>
  );
}

export default ComparePage;
