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
      <Photo img={src='https:png.pngtree.com/png-vector/20190330/ourmid/pngtree-img-file-document-icon-png-image_892886.jpg'}/>
    </div>
  );
}

export default App;

