import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type: "submit" | "button" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  spinnerClassName?: string;
  loadingText: string;
}

export default function FormButton({
  children,
  className,
  onClick,
  type = "button",
  disabled,
  isLoading,
  loadingText,
  variant = "default",
  size = "default",
  spinnerClassName,
}: Props) {
  return (
    <Button
      variant={variant}
      size={size}
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={` ${className}`}
    >
      {!isLoading && children}
      {isLoading && (
        <p className="flex items-center gap-1">
          <Spinner className={`size-4.5 ${spinnerClassName}`} />
          <span>{loadingText}</span>
        </p>
      )}
    </Button>
  );
}
