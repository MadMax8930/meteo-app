import './style.css';
import Loader from './Loader';
import GeoApi from './GeoApi';
import DayCell from './DayCell';
import HourCell from './HourCell';

const App = () => {

  return (
    <div className="container">
      <Loader />
      <GeoApi/>
      <HourCell/>
      <DayCell/>
    </div>
  );
}

export default App;
