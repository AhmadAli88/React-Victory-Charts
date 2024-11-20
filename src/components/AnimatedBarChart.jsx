
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";

const AnimatedBarChart = () => {
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryBar
        animate={{
          duration: 1000,
          onLoad: { duration: 500 },
        }}
        data={[
          { x: "A", y: 30 },
          { x: "B", y: 80 },
          { x: "C", y: 45 },
          { x: "D", y: 60 },
        ]}
        style={{
          data: { fill: "tomato", width: 20 },
          labels: { fill: "white", fontSize: 10 },
        }}
        labels={({ datum }) => datum.y} // Show y-values as labels
      />
    </VictoryChart>
  );
};

export default AnimatedBarChart;
