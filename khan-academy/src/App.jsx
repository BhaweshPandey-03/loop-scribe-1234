import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

<<<<<<< Updated upstream
// import './App.css'
import { useEffect, useState } from 'react'
import { AllRoutes } from './AllRoutes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
=======
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import AllRoutes from "./Allroutes/MainRoute";

>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <>
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <AllRoutes/>
    </div>
    </>
  )
=======
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <div className="App">
            <Navbar />

            <AllRoutes />

            <Footer />
        
          </div>
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  );
>>>>>>> Stashed changes
}

export default App;
