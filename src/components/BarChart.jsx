
import { VictoryChart, VictoryBar } from "victory";

const BarChart = () => {
  return (
    <VictoryChart>
      <VictoryBar
        data={[
          { x: "A", y: 30 },
          { x: "B", y: 80 },
          { x: "C", y: 45 },
          { x: "D", y: 60 },
        ]}
      />
    </VictoryChart>
  );
};

export default BarChart;
