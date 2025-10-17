import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

interface props {
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  children: React.ReactNode;
  buttonSize?: "default" | "sm" | "lg" | "icon";
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  buttonClassName?: string;
  spinnerClassName?: string;
}

export default function LoadMore({
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  children,
  spinnerClassName,
  buttonClassName,
  buttonSize = "default",
  buttonVariant = "default",
}: props) {
  return (
    <>
      {isFetchingNextPage && (
        <Spinner
          className={`size-7 flex  items-center justify-center w-full ${spinnerClassName}`}
        />
      )}
      {hasNextPage && !isFetchingNextPage && (
        <Button
          size={buttonSize}
          variant={buttonVariant}
          className={`w-full ${buttonClassName}`}
          onClick={() => fetchNextPage()}
        >
          {children}
        </Button>
      )}
    </>
  );
}
