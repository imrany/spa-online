// @flow strict
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import { useState } from "react";
import { Usercontext } from "./UserContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion"
import Auth from "./pages/Auth";
import HomePage from "./pages/HomePage";
import UserLogin from "./components/Dialogs/UserLogin";
import BookingForm from "./components/Dialogs/BookingForm";
import { status } from "./components/status";
import SearchForm from "./components/Dialogs/SearchForm";
const queryClient=new QueryClient()

function App() {
  // const location=useLocation()
  const [user_content,setUser_content]=useState({
    id:"",
    last_name:"",
    first_name:"",
    phone_number:0,
    email:"",
    token:"",
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
              <Route path="/auth/*" element={<Auth/>}/>
              <Route path="/profile/:email" element={<Profile/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </AnimatePresence>
          <UserLogin/>
          <BookingForm status={status()}/>
          <SearchForm status={status()}/>
        </Router>
      </Usercontext.Provider>
    </QueryClientProvider>
  );
};

export default App;