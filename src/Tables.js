import { Input, Table } from "antd";
import React, { useState } from "react";
import Dashboard from "./Dashboard";

function Tables() {
  var studentsData = [
    {
      firstName: "James",
      lastName: "bond",
      gender: "male",
      dob: "08-07-2000",
      marks: 94,
      country: "United States",
    },
    {
      firstName: "john",
      lastName: "bas",
      gender: "male",
      dob: "01-07-2000",
      marks: 75,
      country: "United States",
    },
    {
      firstName: "dany",
      lastName: "malp",
      gender: "female",
      dob: "05-11-1999",
      marks: 72,
      country: "Canada",
    },
    {
      firstName: "jhon",
      lastName: "doe",
      gender: "male",
      dob: "05-14-1999",
      marks: 62,
      country: "Uk",
    },
    {
      firstName: "alex",
      lastName: "mark",
      gender: "female",
      dob: "11-10-2000",
      marks: 62,
      country: "Usa",
    },
    {
      firstName: "Steve",
      lastName: "roggers",
      gender: "male",
      dob: "05-10-1999",
      marks: 88,
      country: "Usa",
    },

    {
      firstName: "Aron",
      lastName: "pitterson",
      gender: "male",
      dob: "05-10-2000",
      marks: 88,
      country: "Australia",
    },
  ];

  var studentsColumns = [
    {
      title: "FirstName",
      dataIndex: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      filters: [
        {
          text: "male",
          value: "male",
        },
        {
          text: "female",
          value: "female",
        },
      ],
      onFilter: (value, record) => record.gender === value,
    },
    {
      title: "Date Of Birth",
      dataIndex: "dob",
    },
    {
      title: "Marks",
      dataIndex: "marks",
      sorter: (a, b) => a.marks - b.marks,
    },
    {
      title: "Country",
      dataIndex: "country",
      sorter: (a, b) => a.country.localeCompare(b.country),

    },
  ];

  const [tableData, setTableData] = useState(studentsData);

  function searchTable(searchKey) {
    var tempData = studentsData;

    var filteredData = tempData.filter((data) =>
      JSON.stringify(data).toLowerCase().includes(searchKey.toLowerCase())
    );

    setTableData(filteredData);
    }
    
  return (
    <Dashboard>
      <div className="tables">
        <h3>Students Data</h3>
        <Input placeholder="search students" style={{ width: "40%" ,marginBottom:10}}   onKeyUp={(e) => {
          searchTable(e.target.value);
        }}/>
        <Table columns={studentsColumns}  dataSource={tableData} />
      </div>
    </Dashboard>
  );
}

export default Tables;
