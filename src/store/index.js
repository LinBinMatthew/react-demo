import { createStore, applyMiddleware } from 'redux';
import incrementReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import { watchIncrementAsync } from '../sagas/index';

const sagaMiddleware = createSagaMiddleware(); // 增加redux-saga中间件
const store = createStore(incrementReducer, applyMiddleware(sagaMiddleware));  // 创建store
sagaMiddleware.run(watchIncrementAsync); // 启动saga

export default store;

