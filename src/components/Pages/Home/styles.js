import { makeStyles } from '@material-ui/core/styles';

import heroImage from '../../../assets/images/code-background.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .hero':{
      backgroundImage: `url(${heroImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: 250
    },
  },
}));

export default useStyles;
