import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Characters from './pages/characters';
import Voting from './pages/voting';
import SucessVoting from './pages/sucessVoting';
import Result from './pages/result';
import Draw from './pages/draw';


const MainNavigation = createStackNavigator({
    Main,
    Characters,
    Voting,
    SucessVoting,
    Result,
    Draw
});

const App = createAppContainer(MainNavigation);
export default App;