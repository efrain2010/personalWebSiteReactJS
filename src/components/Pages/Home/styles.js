import { makeStyles } from '@material-ui/core/styles';

import efraAdventurerImg from '../../../assets/images/efra-the-adventurer.jpg';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url(${efraAdventurerImg})`,
    backgroundPosition: 'center 60%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    '&::before': {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      content: '""',
      display: 'block',
      height: '100%',
      position: 'absolute',
      width: '100%',
    },
    '& > div': {
      paddingBottom: theme.spacing(20),
      paddingTop: theme.spacing(20),
      position: 'relative',
    },
    '& strong': {
      color: theme.palette.secondary.main
    }
  },
  aboutMe: {
    padding: theme.spacing(3)
  }
}));

export default useStyles;
