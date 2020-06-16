/*
*redux-saga的原理其实说起来也很简单，通过劫持异步action，
*在redux-saga中进行异步操作，异步结束后将结果传给另外的action
*
*/

import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

export function* incrementAsync() {
  yield delay(2000);  // 进行异步操作
  yield put({ type: 'INCREMENT' }) // 派发另外一个action从而更新store
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)  // 劫持异步action
}

/*
*将watchIncrementAsync理解为一个saga，在这个saga中监听了名为INCREMENT_ASYNC的action，
*当INCREMENT_ASYNC被dispatch时，会调用incrementAsync方法，在该方法中做了异步操作，
*然后将结果传给名为INCREMENT的action进而更新store
*/