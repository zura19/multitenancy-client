import {
  Tooltip as TooltipSh,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface props {
  children: React.ReactNode;
  text: string;
}

export default function Tooltip({ children, text }: props) {
  return (
    <TooltipSh>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{text}</p>
      </TooltipContent>
    </TooltipSh>
  );
}
