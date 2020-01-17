import { all, takeEvery } from 'redux-saga/effects'
import { TEST } from '../constants'

export default function* rootSaga() {
    yield all([
        helloSaga()
    ])
}

function* helloSaga() {
    yield takeEvery(TEST, (action) => {
        console.log(action, "HELLO SAGAS")
      })
}