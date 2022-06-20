import React, { Component } from "react";
import TabelHeader from "./tabelHeader";
import TabelBody from "./tabelBody";

const Tabel = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table">
      <TabelHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TabelBody columns={columns} data={data} />
    </table>
  );
};

export default Tabel;
