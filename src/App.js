import FullName from './Profile/Profile Component/FullName';
import Bio from './Profile/Profile Component/Bio';
import Profession from './Profile/Profile Component/Profession';
import Photo from './Profile/Profile Component/Photo';
import './App.css';

function App() {
  return (
    <div className="App">
      <FullName name={'Firas Essid'} />
      <Bio bio={'Currently Student At GoMyCode'}/>
      <Profession profession ={'Student'}/>
      <Photo/>
    </div>
  );
}

export default App;

