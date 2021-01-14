import React from 'react';
import './App.css';
import {makeStyles} from '@material-ui/styles';
import {CompactPicker} from 'react-color';
import {useGlobal} from 'reactn';
import {Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  divRoot1: {
    background: theme.props.primaryColor,
    width: '100%',
    height: '40vh',
    position: 'relative',
  },
  divRoot2: {
    background: theme.props.secondaryColor,
    width: '100%',
    height: '40vh',
    position: 'relative',
  },
  Button: {
    width: 250,
    height: 50,
    background: theme.props.primaryColor,
    color: theme.props.secondaryColor,
    marginBottom: 20,
  },
}));

const colorsDefault = [
  '#4D4D4D',
  '#999999',
  '#FFFFFF',
  '#F44E3B',
  '#FE9200',
  '#FCDC00',
  '#DBDF00',
  '#A4DD00',
  '#68CCCA',
  '#73D8FF',
  '#AEA1FF',
  '#FDA1FF',
  '#333333',
  '#808080',
  '#cccccc',
  '#D33115',
  '#E27300',
  '#FCC400',
  '#B0BC00',
  '#68BC00',
  '#16A5A5',
  '#009CE0',
  '#7B64FF',
  '#FA28FF',
  '#000000',
  '#666666',
  '#B3B3B3',
  '#9F0500',
  '#C45100',
  '#FB9E00',
  '#808900',
  '#194D33',
  '#0C797D',
  '#0062B1',
  '#653294',
  '#AB149E'];

function App() {
  const classes = useStyles();
  const [colors, setColors] = useGlobal('colors');
  return (
      <div className="App">
        <Button className={classes.Button}>
          Component 1
        </Button>
        <div className={classes.divRoot1}>
          <CompactPicker
              colors={colorsDefault}
              onChange={(value) => {
                setColors({
                  ...colors,
                  primary: value.hex.toUpperCase(),
                });
              }}
          />
        </div>

        Component 2
        <div className={classes.divRoot2}>
          <CompactPicker
              colors={colorsDefault}
              onChange={(value) => {
                setColors({
                  ...colors,
                  secondary: value.hex.toUpperCase(),
                });
              }}
          />
        </div>
      </div>
  );
}

export default App;
