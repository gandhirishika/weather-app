import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ThemeToggle from './components/themeToggle';
import Form from './components/form';
import WeatherCard from './components/weatherCard';
import {useSelector} from "react-redux";
function App(){
  const theme = useSelector((state) =>state.theme);
  return( 
    <div className={theme?"App Dark":"App " }>
      <ThemeToggle/>
      <Form/>
      <WeatherCard/>
   </div>
   
  );
}

export default App;
