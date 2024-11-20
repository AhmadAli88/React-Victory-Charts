import './App.css';
import AnimatedBarChart from './components/AnimatedBarChart';
import BarChart from './components/BarChart';
import StyledLineChart from './components/Customization';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import TooltipChart from './components/TooltipChart';

function App() {
  return (
    <div>
      <BarChart />
      <AnimatedBarChart />
      <StyledLineChart />
      <LineChart />
      <PieChart />
      <TooltipChart />
    </div>
  );
}

export default App;
