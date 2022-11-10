import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core/styles';
import Alert from './Components/Banner/Alert';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.App}>
        <Header />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/coins/:id' component={ CoinPage } />
        </Switch>
      </div>
      <Alert />    
    </>
  );
}

export default App;
