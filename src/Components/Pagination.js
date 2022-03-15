import React from "react";

const Pagination = ({
  nextPage,
  previousPage,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageIndex,
  gotoPage,
}) => {
  console.log(pageOptions);
  return (
    <>
      <div className="d-flex justify-content-between my-3">
        <button
          className="px-3 py-1 mx-3 text-center btn-secondary"
          onClick={previousPage}
          disabled={!canPreviousPage} //pages before 1 are disabled
        >
          Previous
        </button>
        <span className="fs-4 text-center">
          Page
          <strong className="mx-3">
            {pageIndex + 1} of {pageOptions.length}
          </strong>
          &nbsp; | &nbsp; Go To Page &nbsp;&nbsp;
          <input
            type="number"
            className="col-1 text-center"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
        </span>
        <button
          className="px-3 py-1 mx-3 text-center btn-secondary"
          onClick={nextPage}
          disabled={!canNextPage} //pages after 50 are disabled
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
