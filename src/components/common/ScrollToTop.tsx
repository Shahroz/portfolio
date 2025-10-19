import React from 'react';
import Fab from "@material-ui/core/Fab";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1000,
  },
  icon: {
    color: 'white !important',
  },
}));

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const ScrollToTop: React.FC<Props> = ({ children, window }) => {
  const classes = useStyles();
  
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (event.target as HTMLDivElement).ownerDocument?.querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

const ScrollToTopButton: React.FC = () => {
  return (
    <ScrollToTop>
      <Fab color="primary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon color='inherit' htmlColor='white' />
      </Fab>
    </ScrollToTop>
  );
};

export default ScrollToTopButton;
