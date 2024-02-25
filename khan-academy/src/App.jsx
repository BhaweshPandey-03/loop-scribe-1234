import "./App.css";
import { Provider } from "react-redux";
import { AllRoutes } from './AllRoutes/AllRoutes';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./Redux/store";
import Navbar from "./components/Navbar";


function App() {
  return (
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
}

export default App;
