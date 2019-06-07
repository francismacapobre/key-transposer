import { createAppContainer } from 'react-navigation';
import appStackNavigator from './appStackNavigator';

const appContainer = createAppContainer(appStackNavigator);

export default appContainer;