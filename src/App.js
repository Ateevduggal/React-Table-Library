import React, { useMemo } from "react";
import { dummy } from "./Data";
import { tableColumn } from "./MainTable/Columns";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import MainTable from "./MainTable/MainTable";
import Pagination from "./Components/Pagination";
import Filtering from "./Components/Filtering";

const App = () => {
  const columns = useMemo(() => tableColumn, []);
  const data = useMemo(() => dummy, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    setGlobalFilter, // for global filter
    // Pagination
    page, //for pagination we have replaced rows with page and added gotoPage
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    state: { pageIndex, globalFilter }, //fpr Pagination and global filter
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination //should be at the very botom to avoid errors
  );

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12 text-center text-decoration-underline my-3">
            React Table
          </h1>
          <Filtering filter={globalFilter} setFilter={setGlobalFilter} />

          <MainTable
            getTableProps={getTableProps}
            getTableBodyProps={getTableBodyProps}
            headerGroups={headerGroups}
            prepareRow={prepareRow}
            page={page} //rows was replaced by page for pagination
          />
          <Pagination
            nextPage={nextPage}
            previousPage={previousPage}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageOptions={pageOptions}
            pageIndex={pageIndex}
            gotoPage={gotoPage}
          />
        </div>
      </div>
    </>
  );
};

export default App;
