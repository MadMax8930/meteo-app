import './style.css';
import GeoApi from './GeoApi';
import DayCell from './DayCell';
import HourCell from './HourCell';

const App = () => {

  return (
    <div className="container">
      <GeoApi/>
      <HourCell/>
      <DayCell/>
    </div>
  );
}

export default App;
