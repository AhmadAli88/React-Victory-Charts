
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";

const StyledLineChart = () => {
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        style={{
          data: { stroke: "blue", strokeWidth: 2 },
          labels: { fontSize: 12, fill: "green" },
        }}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 6 },
        ]}
        labels={({ datum }) => `y: ${datum.y}`} // Add labels to each data point
      />
    </VictoryChart>
  );
};

export default StyledLineChart;
