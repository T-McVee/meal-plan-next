import React from "react";
import LinkNext from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IProps {
  href: string;
  className: string;
  children: React.ReactNode;
  tooltip?: string;
}

function Link(props: IProps) {
  const { href, className, children, tooltip } = props;
  return (
    <>
      {!!tooltip ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <LinkNext href={href} className={className}>
                {children}
              </LinkNext>
            </TooltipTrigger>
            <TooltipContent>{tooltip}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <LinkNext href={href} className={className}>
          {children}
        </LinkNext>
      )}
    </>
  );
}

export default Link;
