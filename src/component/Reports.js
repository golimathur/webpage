import React from "react";
import { Bar } from "react-chartjs-2";
import Navigation from "../uicomponent/Navigation";
import Chat from "../uicomponent/Chat";
import Header from "../uicomponent/Header";
import Footer from "../uicomponent/Footer";
import Button from "../uicomponent/Button";
import Search from "../uicomponent/Search";
import "../App.css";
import DonutChart from "react-donut-chart";

const Reports = () => {
  return (
    <div>
      <Button />
      <div style={{float: 'right' , marginTop: 26}}>
      <Search />
      </div>
      <Header />
      <p className="rep">Reports</p>
      <Graph />

      <div style={{ marginTop: "-62px", marginLeft: 8 }}>
        <Navigation />
      </div>
      <div style = {{ marginLeft: 200,width: 400, marginTop: -700}}>
      <Donut />
      </div>
      <div style = {{marginTop: 118}}> 
      <Footer />
      </div>
      <Chat />
    </div>
  );
};

const Graph = () => {
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Data",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <div
      style={{
        display: "block",
        width: "700px",
        height: "500px",
        float: "right",
      }}
    >
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Data per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};



const Donut = () => {
  return (
    <DonutChart
      data={[
        {
          label: "Paypal",
          value: 25,
        },
        {
          label: "Paytm",
          value: 15,
        },

        {
          label: "PayZapp",
          value: 35,
        },

        {
          label: "Google Pay",
          value: 20,
        },

        {
          label: "PhonePay",
          value: 5,
        },
      ]}
    />
  );
};

export default Reports;
