import React, { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable
} from "material-react-table";

import { fetchALlUserProfiles} from '../../../services';






export default function SearchPage() {

    const [data, setData] = React.useState(0);
    React.useEffect(() => {
       
         const fetchData = async () => {
          try {
            const data = await fetchALlUserProfiles();
            setData(data);
            console.log(" from DB " + JSON.stringify(data));
          } catch (error) {
            // Handle error
          }
        }
    
        fetchData();
      }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "first_name", 
        header: "First Name",
        muiTableHeadCellProps: { sx: { color: "#1976d2" } }, 
         Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> 
      },
      {
        accessorKey: "last_name", 
        header: "LastName" ,
        muiTableHeadCellProps: { sx: { color: "#1976d2" } }, 
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> 
      },
      {
        accessorKey: "gender", 
        header: "Gender" ,
        muiTableHeadCellProps: { sx: { color: "#1976d2" } }, 
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> 
      },
      {
        accessorKey: "date_of_birth", 
        header: "Date Of Birth" ,
        muiTableHeadCellProps: { sx: { color: "#1976d2" } }, 
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> 
      },
      {
        accessorKey: "place_of_birth", 
        header: "Place of Birth" ,
        muiTableHeadCellProps: { sx: { color: "#1976d2" } }, 
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> 
      }
    ],
    []
  );

  const table = useMaterialReactTable({
    data,
    columns
  });

  return <MaterialReactTable table={table} />;
}
