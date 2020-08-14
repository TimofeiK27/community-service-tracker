import React from "react";
import { Link } from "react-router-dom";
import CSTable from "../Table/table";

export interface tableDataType {
  header: ["Name", "Description", "Hour", "Date"];
  data: {
    Name: string;
    Description: string;
    Hours: number;
    Date: string;
  }[];
}

const testData: tableDataType = {
  header: ["Name", "Description", "Hour", "Date"],
  data: [
    {
      Name: "Test Name",
      Description:
        "Test description is really long here and \n\nwill cause the componenet to overflow and create really bad stuff",
      Hours: 34,
      Date: "3/2/12334",
    },
    {
      Name: "Test Name",
      Description: "Test Description",
      Hours: 34,
      Date: "3/2/12334",
    },
    {
      Name: "Test Name",
      Description: "Test Description",
      Hours: 34,
      Date: "3/2/12334",
    },
    {
      Name: "Test Name",
      Description: "Test Description",
      Hours: 34,
      Date: "3/2/12334",
    },
  ],
};

const Body = () => {
  return (
    <div className={"flex-1"}>
      <div className={"flex justify-center"}>
        <img
          className={"py-0 lg:py-10 h-32 w-32 lg:h-64 lg:w-64"}
          src={require("../../Images/wolflogo.png")}
          alt={"wolfpack logo"}
        />
      </div>
      <div className={"flex flex-col justify-center"}>
        <h1
          className={
            "text-center text-white py-2 lg:py-3 text-4xl sm:text-4xl lg:text-5xl xl:text-6xl"
          }
        >
          EASTLAKE COMMUNITY SERVICE PORTAL
        </h1>
        <Link to="/login">
          <h2
            className={
              "text-center text-white py-2 lg:py-3 text-base sm:text-xl lg:text-2xl xl:text-3xl"
            }
          >
            Login to track service activities
          </h2>
        </Link>
        <Link to="/login">
          <h3
            className={
              "text-center font-light text-white py-2 lg:py-3 text-sm sm:text-base lg:text-lg xl:text-xl"
            }
          >
            An OTP login link will be sent to your email adress.
          </h3>
        </Link>
      </div>
      <CSTable data={testData} />
    </div>
  );
};

export default Body;
