import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > section:not(.heroSection)': {
      paddingTop: theme.spacing(3),
    }
  },
  hero: {
    backgroundColor: '#303030',
    backgroundPosition: 'center 60%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    '& > div': {
      height: '100vh',
      position: 'relative',
    },
    '& strong': {
      color: theme.palette.secondary.main,
    },
  },
  letsTalkBtn: {
    animation: `$btnGlow 3000ms ${theme.transitions.easing.easeInOut}`,
    animationIterationCount: 'infinite',
    borderWidth: 2,
    padding: '15px 35px',
    overflow: 'hidden',
    '& .MuiButton-label': {
      position: 'relative',
      '&::before, &::after': {
        backgroundColor: theme.palette.secondary.main,
        bottom: 0,
        content: '""',
        height: 1,
        left: '-5%',
        position: 'absolute',
        transition: `all 150ms ${theme.transitions.easing.easeInOut}`,
        width: '110%',
      },
      '&::before': {
        left: '-200%',
      },
      '&::after': {
        left: '200%',
      },
    },
    '&:hover, &:focus': {
      borderWidth: 2,
      '& .MuiButton-label': {
        '&::before, &::after': {
          left: '-5%',
        },
      },
    },
  },
  aboutMe: {
    '& .photo': {
      borderRadius: '50%',
      height: 280,
      overflow: 'hidden',
      margin: '0 auto',
      position: 'relative',
      width: 280,
      '&::before': {
        border: '1px solid #FFFFFF',
        borderRadius: '50%',
        content: '""',
        height: '100%',
        display: 'block',
        left: 0,
        opacity: 1,
        position: 'absolute',
        transform: 'scale(0.95)',
        top: 0,
        transition: `all 300ms ${theme.transitions.easing.easeInOut}`,
        width: '100%',
      },
      '&::after': {
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: '50%',
        boxShadow: `0px 0px 12px 0px ${theme.palette.secondary.main}`,
        content: '""',
        height: '100%',
        left: 0,
        display: 'block',
        opacity: 0,
        position: 'absolute',
        top: 0,
        transform: 'scale(0.9)',
        transition: `all 300ms ${theme.transitions.easing.easeInOut}`,
        width: '100%',
      },
      '& .innerFrame': {
        borderRadius: '50%',
        height: '100%',
        transform: 'scale(0.85)',
        objectFit: 'cover',
        overflow: 'hidden',
        width: '100%',
        '&::after': {
          backgroundColor: `${theme.palette.secondary.main}`,
          bottom: 0,
          content: '""',
          display: 'block',
          height: '100%',
          left: 0,
          opacity: '0.5',
          position: 'absolute',
          transition: `all 150ms ${theme.transitions.easing.sharp}`,
          width: '100%',
        }
      },
      '& img': {
        borderRadius: '50%',
        height: '100%',
        transition: `all 150ms ${theme.transitions.easing.sharp}`,
        transform: 'scale(1)',
        width: '100%',
      },
      '&:hover': {
        '&::before': {
          opacity: 0,
          transform: 'scale(0.95)',
        },
        '&::after': {
          opacity: 1,
          transform: 'scale(0.96)',
        },
        '& .innerFrame::after': {
          opacity: '0',
        },
        '& img': {
          transform: 'scale(1.5)',
        }
      },
    },
    // Adjust styles for responsive
    [theme.breakpoints.up('sm')]: {
      '& .photo': {
        height: 280,
        width: 280,
      }
    },
    '& .skills': {
      '& svg': {
        display: 'inline-block',
        marginRight: 5,
        verticalAlign: 'middle',
      },
      '& p:hover svg': {
        color: theme.palette.secondary.main,
      },
    },
  },
  workSection: {
    '& .jobsHeader': {
      backgroundColor: '#303030',
      boxShadow: 'none',
    },
    '& .logoBtn:nth-child(1) img': {
      width: 30
    },
    '& .logoBtn:nth-child(2) img': {
      width: 90
    },
    '& .jobs-container': {
      paddingTop: 20,
      paddingBottom: 20,
      '& a': {
        color: theme.palette.secondary.main,
        transition: `all 300ms ${theme.transitions.easing.easeIn}`
      },
      '& .tasks svg': {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: 5,
        transition: `all 150ms ${theme.transitions.easing.easeIn}`
      },
      '& .tasks p:hover svg': {
        color: theme.palette.secondary.main,
        transform: 'scale(1.2)'
      }
    },
  },
  projects: {
    '& .containerCicle': {
      position: 'relative',
      zIndex: 1,
      '& .containerSquare': {
        '&::before': {
          content: '""',
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          zIndex: 2,
          transform: 'scale(1.3)',
          backgroundColor: 'rgb(48 48 48 / 0.6)',
          position: 'absolute',
          left: 0,
          top: 0,
        },
        '& img': {
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          position: 'relative',
          left: 0,
          top: 0,
          transform: 'scale(1.3)',
        },
        '& figcaption': {
          color: theme.palette.secondary.main,
          fontSize: '1.5rem',
          fontWeight: 100,
          textShadow: () => {
            const blurColor = '10px rgb(236 43 61 / 0.8)';
            return `2px 2px ${blurColor},
                  2px -2px ${blurColor},
                  -2px 2px ${blurColor},
                  -2px -2px ${blurColor}`;
          },
          animation: `$neonSign 1s ${theme.transitions.easing.easeInOut} infinite alternate`,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          margin: 'auto',
          top: 0,
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
        },
      },
    },
  },
  "@keyframes btnGlow": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0.4,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes neonSign": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0.85,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

export default useStyles;
