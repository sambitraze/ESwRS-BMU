import React from "react";
import Map from "react-map-gl";

// // components

// import CardLineChart from "../../components/Cards/CardLineChart.js";
// import CardBarChart from "../../components/Cards/CardBarChart.js";
// import CardPageVisits from "../../components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "../../layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
      {/* <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
      <Map
        initialViewState={{
          longitude: 77.1025,
          latitude: 28.7041,
          zoom: 3.5,
        }}
        style={{ width: "75vw", height: "90vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="pk.eyJ1IjoiYm5pbWlzaCIsImEiOiJjbDBra2d1bGgwMXVmM2NxbDhmZXdzZnFnIn0.2mAFTvsBGHc-j5SIeBGAeA"
      />
    </>
  );
}

Dashboard.layout = Admin;
