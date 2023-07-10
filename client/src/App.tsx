// @flow strict
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { Usercontext } from "./UserContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion"
import Auth from "./pages/Auth";
import HomePage from "./pages/HomePage";
const queryClient=new QueryClient()

function App() {
  // const location=useLocation()
  const [user_content,setUser_content]=useState({
    id:"",
    last_name:"",
    first_name:"",
    phone_number:0,
    email:"",
    token:""
  })
  return (
    <QueryClientProvider client={queryClient}>
      <Usercontext.Provider value={user_content}>
        <Router>
          <div className='preload'>
            <p className='fixed max-sm:left-[42vw] left-[46vw] md:left-[48vw] top-[54vh] max-sm:text-base text-lg'>Loading...</p>
          </div>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/item" element={<LandingPage/>}/>
              <Route path="/auth/*" element={<Auth/>}/>
              <Route path="/dashboard/:email" element={<Dashboard/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </AnimatePresence>
        </Router>
      </Usercontext.Provider>
    </QueryClientProvider>
  );
};

export default App;