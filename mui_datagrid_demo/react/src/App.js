import * as React from "react";

import "./App.css";
import DataTable from "./components/DataGrid";
import CustomizedTables from "./components/CustamizedTable";
import BasicTable from "./components/BasicTable";
import ExportSelectorGrid from "./components/ExportGridData";
import FullFeaturedDemo from "./components/GridControls";

function App() {
  return (
    <div className="App">
      {/* <BasicTable/>
    <DataTable/>
    <CustomizedTables/> */}
    {/* <ExportSelectorGrid/> */}
    <FullFeaturedDemo/>
    </div>
  );
}

export default App;
