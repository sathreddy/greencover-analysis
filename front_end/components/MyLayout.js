import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import StreetView from '@material-ui/icons/Streetview';
import MyLocation from '@material-ui/icons/MyLocation';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'; 
import green from '@material-ui/core/colors/green';
import TextField from '@material-ui/core/TextField';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import zIndex from '@material-ui/core/styles/zIndex';

const styles = theme => ({
  appBar: {
    position: 'relative',
    color: 'white',
    background: 'linear-gradient(45deg, #000428 30%, #000000 90%)',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 2,
    position: 'fixed',
    bottom: '0',
    width: '100%',
    zIndex: '-1'
  },
  button: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  search: {
    position: 'fixed',
    // display: 'inline-block',
    top: '4%',
    margin: '0 auto',
    left: '42%',
    color: 'black',
    padding: '10px 10px',
    borderRadius: '500px',
    backgroundColor: theme.palette.common.white,
    boxShadow: '0 3px 4px 0px rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12)',
    '&:hover': {
      boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2)',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 3,
    height: theme.spacing.unit * 4.5,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 3,
    width: 'auto',

  },
  centered: {
    width: '100%',
    textAlign: 'center',
  }
});


const fab_style = {
  background: 'linear-gradient(45deg, #000428 30%, #000000 90%)',
  color: 'white',
  paddingLeft: '15px',
  align: 'center',
  boxShadow: '0 3px 5px 2px rgba(0, 4, 40, .3)',
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Home(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <StreetView className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            vert
          </Typography>
        </Toolbar>
        <div className={classes.centered}>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="City / County / Zip Code"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </div>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom>
              Urban Green Space Analysis
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
            As urban cities like Atlanta become home to more and more people than ever before, there is an increasing strain on cities' green (or lung) spaces. We want to help preserve these spaces by educating populations with the help of data visualizations. 
            </Typography>
            <div className={classes.heroButtons}>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Button variant="fab" style={fab_style} color="secondary" aria-label="Edit" className={classes.button}>
            <MyLocation className={classes.icon}/>
          </Button>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Made with ❤️by @sathp, @Drel22, @ananmay3, and @AKumar-dev at HackGT 2018!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
