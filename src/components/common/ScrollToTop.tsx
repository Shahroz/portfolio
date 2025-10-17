import React from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ScrollTopProps } from '../../types';

const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}));

const ScrollToTop: React.FC<ScrollTopProps> = ({ children, window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation">
        <StyledFab
          size="small"
          aria-label="scroll back to top"
          color="primary"
        >
          {children}
        </StyledFab>
      </div>
    </Zoom>
  );
};

export default ScrollToTop;
