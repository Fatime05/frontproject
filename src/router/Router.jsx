import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";  
import Home from "../pages/home/Home";
import UserDashboard from "../pages/home/components/user/UserDashboard";
import HotelDetails from "../pages/home/components/details/HotelDetails";
import Contact from "../pages/home/components/contact/Contact";
import AdminPanel from "../pages/home/components/admin/AdminPanel";
import Login from "../pages/home/components/login/Login";
import SignUp from "../pages/home/components/signup/SignUp";
import RoomsPage from "../pages/home/components/available/RoomsPage";
import Accommodation from "../pages/home/components/rooms/Accommodation";
import Firstroom from "../pages/home/components/firstroom/Firstroom";
import SecondRoom from "../pages/home/components/secondroom/SecondRoom";
import Thirdroom from "../pages/home/components/thirdroom/Thirdroom";
import Fourthroom from "../pages/home/components/fourthroom/Fourthroom";
import Fifthroom from "../pages/home/components/fifthrooms/Fifthroom";
import Sixth from "../pages/home/components/sixth/Sixth";
import Sevenroom from "../pages/home/components/sevenroom/Sevenroom";
import AdminLayout from "../pages/home/components/layout/AdminLayout";
import AdminRooms from "../pages/home/components/admin/AdminRooms";
import AdminBookings from "../pages/home/components/admin/AdminBookings";
import AdminUsers from "../pages/home/components/admin/AdminUsers";
import Restaurants from "../pages/home/components/restaurants/Restaurants";
import Menu from "../pages/home/components/menu/Menu";
import Menubow from "../pages/home/components/menubow/Menubow";
import Menuvitamin from "../pages/home/components/menuvitamin/Menuvitamin";
import Kyukyu from "../pages/home/components/kyukyu/Kyukyu";
import Sumac from "../pages/home/components/sumac/Sumac";
import Spa from "../pages/home/components/spa/Spa";
import RoomDetails from "../components/roomDetails/RoomDetails";
import Notfound from "../pages/home/components/notfound/Notfound";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/home" element={<Layout><Home /></Layout>} />
      <Route path="/dashboard" element={<Layout><UserDashboard /></Layout>} />
      <Route path="/hotels/:id" element={<Layout><HotelDetails /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/signup" element={<SignUp />} />
      <Route path="/availablerooms" element={<Layout><RoomsPage /></Layout>} />
      <Route path="/room/:id" element={<RoomDetails />} />
      <Route path="/rooms" element={<Layout><Accommodation /></Layout>} />
      <Route path="/standard-nomer-s-balkonom" element={<Layout><Firstroom /></Layout>} />
      <Route path="/standard-nomer-c-terrasoy" element={<Layout><SecondRoom/></Layout>} />
      <Route path="/superior-nomer-bez-balkona" element={<Layout><Thirdroom/></Layout>} />
      <Route path="/superior-nomer-s-balkonom" element={<Layout><Fourthroom/></Layout>} />
      <Route path="/family-nomer-s-balkonom" element={<Layout><Fifthroom/></Layout>} />
      <Route path="/family-nomer-s-terrasoy" element={<Layout><Sixth/></Layout>} />
      <Route path="/king-suite" element={<Layout><Sevenroom/></Layout>} />

      <Route path="/admin/dashboard" element={<AdminLayout><AdminPanel /></AdminLayout>} />
      <Route path="/admin/rooms" element={<AdminLayout><AdminRooms /></AdminLayout>} />
      <Route path="/admin/bookings" element={<AdminLayout><AdminBookings /></AdminLayout>} />
      <Route path="/admin/users" element={<AdminLayout><AdminUsers /></AdminLayout>} />
      <Route path="/restaurants" element={<Layout><Restaurants/></Layout>} />
      <Route path="/menu" element={<Layout><Menu/></Layout>} />
      <Route path="/menubow" element={<Layout><Menubow/></Layout>} />
      <Route path="/menuvitamin" element={<Layout><Menuvitamin/></Layout>} />
      <Route path="/kyukyu" element={<Layout><Kyukyu/></Layout>} />
      <Route path="/sumac" element={<Layout><Sumac/></Layout>} />
      <Route path="/spa" element={<Layout><Spa/></Layout>} />
      <Route path='/*' element={<Notfound/>}/>
    </Routes>
  );
};

export default AppRouter;
