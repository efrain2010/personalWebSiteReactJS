import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    minHeight: '22rem',
    position: 'relative',
  },
  author: {
    display: 'block',
    fontWeight: 'bold',
    padding: '20px 0',
  },
  avatar: {
    display: 'block',
    height: '4rem',
    width: '4rem',
    '& > img': {
      height: '100%',
      width: '100%',
    },
  },
  postDetail: {
    position: 'static',
    '& > div': {
      position: 'absolute',
      bottom: '1.5rem',
    },
    '& .chip': {
      borderRadius: 5,
      marginRight: '1rem',
      textTransform: 'capitalize',
    },
  },
  body: {
    whiteSpace: 'pre-line',
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
  },
  socials: {
    maxWidth: '15.25rem',
    margin: '5rem auto 0',
    padding: '2.5rem 0',
    textAlign: 'center',
    border: 'none',
    borderTop: '1px solid #4e4e4e',
  },
  footer: {
    '& > div': {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    '& figure': {
      margin: 0,
      maxWidth: 150,
    },
    '& .MuiChip-root': {
      textTransform: 'capitalize',
    },
  },
}));

export default useStyles;
