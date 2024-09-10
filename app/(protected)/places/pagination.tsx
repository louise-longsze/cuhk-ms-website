import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  page: number;
  onChangePage: (page: number) => void;
  disableNext?: boolean;
}

export const Pagination = ({ page, onChangePage, disableNext }: Props) => {
  return (
    <PaginationRoot>
      <PaginationContent>
        <PaginationItem className={page === 1 ? "invisible" : ""}>
          <PaginationPrevious
            className="cursor-pointer"
            aria-disabled={page === 1}
            onClick={() => page > 1 && onChangePage(page - 1)}
            label="上頁"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem className={disableNext ? "invisible" : ""}>
          <PaginationNext
            className="cursor-pointer"
            onClick={() => onChangePage(page + 1)}
            label="下頁"
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  );
};
