import { Routes, Route } from "react-router-dom";
import { HelmetProvider, HelmetData } from "react-helmet-async";
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from './AuthContext'

import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import ApplicationForm from './pages/ApplicationForm';
import About from './pages/About';
import Error from './pages/Error';
import Auth from "./pages/Auth";
import ScrollToHash from "./components/ScrollToHash";

const helmetData = new HelmetData({});

function App() {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (loading) {
      if (window.document.readyState === "complete") {
        setLoading(!loading)
      } else {
        setLoading(false);
      }
    }
  }, [loading]);

  return (
    <HelmetProvider>
      <div className="App">
        {
          loading && <Loader />
        }
        {
          !loading && <>
            <Navbar />
            <ScrollToHash />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='apply' element={currentUser ? <ApplicationForm /> : <Auth />} />
              <Route path='about' element={<About />} />
              <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
          </>
        }
      </div>
    </HelmetProvider>
  );
}
export default App;

const { helmet } = helmetData.context;

