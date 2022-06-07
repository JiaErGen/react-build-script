/*
 * @Date: 2021-12-15 14:41:28
 * @Description: store action reducer 配置
 * https://redux-toolkit.js.org/usage/usage-guide 使用文档
 */

import { configureStore } from '@reduxjs/toolkit'
import { connect as oldConnect, useDispatch, Provider, useSelector as oldUseSelector } from 'react-redux'
import { reducer } from './reducer'

export { actions } from './reducer'

export { Provider }

export const store = configureStore({ devTools: false, reducer })

export const { dispatch, getState } = store

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

/** 定义泛型默认为 RootState，并且只接收一个参数 */
export const connect = (mapStateToProps: (state: RootState) => Record<string, any>) => {
  return oldConnect(mapStateToProps)
}

export const useSelector = (getState: (state: RootState) => any, equalityFn?: (a: RootState, b: RootState) => boolean) => {
  return oldUseSelector(getState, equalityFn)
}
