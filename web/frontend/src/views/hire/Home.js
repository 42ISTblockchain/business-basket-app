import React from "react";
import DataTable from "react-data-table-component";
import {customStyles} from "../../configs/datatableStyle";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
  {
    name: "Number",
    selector: (row) => row.number,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    number: 123,
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
    number: 53543,
  },
  {
    id: 3,
    title: "Ghostbusters",
    year: "1984",
    number: 53543,
  },
];

export default function Home() {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      customStyles={customStyles}
    />
  );
}
