import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Routes from '@routes/index';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <React.Fragment>
      <Routes/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
}

export default App;
