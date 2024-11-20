
import { VictoryPie } from "victory";

const PieChart = () => {
  return (
    <VictoryPie
      data={[
        { x: "Cats", y: 35 },
        { x: "Dogs", y: 40 },
        { x: "Birds", y: 25 },
      ]}
      colorScale={["tomato", "orange", "gold"]}
    />
  );
};

export default PieChart;
