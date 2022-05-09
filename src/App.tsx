import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Routes from '@routes/index';
import { ToastContainer } from 'react-toastify';
import FilterProvider from './context/filter-provider';

function App() {
  return (
    <React.Fragment>
      <FilterProvider>
        <Routes/>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </FilterProvider>
    </React.Fragment>
  );
}

export default App;
