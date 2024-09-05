  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import DisplayFaculty from './DisplayFaculty';
  import FacultyDetails from './FacultyDetails';
  import AddFaculty from './AddFaculty';
  import EditFaculty from './EditFaculty';

  function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayFaculty />} />
        <Route path='/details/:id' element={<FacultyDetails />}/>
        <Route path='/add' element={<AddFaculty />}/>
        <Route path='/edit/:id' element={<EditFaculty />}/>
      </Routes>
      </BrowserRouter>
    );
  }

  export default App;
