type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center my-4">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`mx-2 h-10 w-10 rounded-full transition-all duration-300 ${
            pageNumber === currentPage
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
