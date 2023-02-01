import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReduser } from './reducer';

const enhanser = devToolsEnhancer();

export const store = createStore(rootReduser, enhanser);
