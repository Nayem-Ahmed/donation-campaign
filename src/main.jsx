import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Pages/ErrorPage.jsx';
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Statistics from './Components/Statistics.jsx';
import Donation from './Components/Donation.jsx';
import DonationViewDetails from './Components/DonationViewDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: ()=> fetch('/donations.json'),
        element:<Home></Home>,
      },
      {
        path: "/donation",
        element:<Donation></Donation>,
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>,
      },
      {
        path:"/donationDetails/:donationDetailsId",
        loader:()=>fetch('/donations.json'),
        element:<DonationViewDetails></DonationViewDetails>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
