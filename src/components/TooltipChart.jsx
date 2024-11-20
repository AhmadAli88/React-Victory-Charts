
import { VictoryChart, VictoryLine, VictoryTooltip, VictoryVoronoiContainer } from "victory";

const TooltipChart = () => {
  return (
    <VictoryChart
      containerComponent={<VictoryVoronoiContainer />}
    >
      <VictoryLine
        data={[
          { x: 1, y: 2, label: "Point 1" },
          { x: 2, y: 3, label: "Point 2" },
          { x: 3, y: 5, label: "Point 3" },
        ]}
        style={{
          data: { stroke: "blue", strokeWidth: 2 },
        }}
        labelComponent={
          <VictoryTooltip
            flyoutStyle={{ fill: "white", stroke: "lightgray" }}
            style={{ fontSize: 12, fill: "black" }}
          />
        }
      />
    </VictoryChart>
  );
};

export default TooltipChart;
