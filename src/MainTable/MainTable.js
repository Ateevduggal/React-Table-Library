import React from "react";

const MainTable = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  prepareRow,
  page,
}) => {
  return (
    <>
      <form>
        <table
          {...getTableProps()}
          className="table table-striped table-hover text-center fs-5 table-bordered border-dark col-12"
        >
          <thead>
            {headerGroups.map((head) => {
              return (
                <>
                  <tr {...head.getHeaderGroupProps()}>
                    {head.headers.map((col) => {
                      return (
                        <>
                          <th
                            {...col.getHeaderProps(col.getSortByToggleProps())}
                            className="bg-secondary text-white fs-4"
                          >
                            {col.render("Header")}
                            <span>
                              {col.isSorted // true if the column is sorted at this monent
                                ? col.isSortedDesc // for deciding the direction of the sorting
                                  ? " 🔽" // descending
                                  : " 🔼" //ascending
                                : ""}
                            </span>
                          </th>
                        </>
                      );
                    })}
                  </tr>
                </>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <>
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </form>
    </>
  );
};

export default MainTable;
