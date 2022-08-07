import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
// import Typography from "@mui/material/Typography";

interface ToolTipProps extends TooltipProps {
  text?: string;
}

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#141922",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#141922",
    padding: "40px 32px",
    fontSize: 16,
  },
}));

const ToolTip = ({
  children,
  placement = "top",
  title = "Tooltip",
  className,
}: ToolTipProps) => {
  return (
    <BootstrapTooltip title={title} placement={placement} className={className}>
      <Button>{children}</Button>
    </BootstrapTooltip>
  );
};

export default ToolTip;
