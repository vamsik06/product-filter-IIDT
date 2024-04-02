import React from 'react';
import NavItems from './NavItems';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import All from './All';





const App = () => {
  return (
    <div>
    <BrowserRouter>
    <NavItems/>
    <Routes>
      <Route path='/' element={<All/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
};

export default App;