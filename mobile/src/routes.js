import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './Pages/Home';
import Login from './Pages/Login';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Home
    })
);

export default Routes;