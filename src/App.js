import FullName from './Profile/Profile Component/FullName';
import Bio from './Profile/Profile Component/Bio';
import Profession from './Profile/Profile Component/Profession';
import Photo from './Profile/Profile Component/Photo';
import './App.css';

function App() {
  return (
    <div className="App">
      <FullName/>
      <Bio/>
      <Profession/>
      <Photo/>
    </div>
  );
}

export default App;


/* try out

const checkpoint = ({FullName,Bio,Profession}) => {
    return (
        <div>
           <img src={img} className="u-photo" alt="photo" />
           <h3> {FullName} </h3>
           <p> {Bio} </p>
           <p> {Profession} </p>
        </div>
    )
}

*/
