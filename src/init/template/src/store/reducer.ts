/*
 * @Date: 2021-12-16 10:54:04
 * @Description: 导出reducer 和 actions
 */

import { exampleActions, exampleReducer, exampleName } from './example'

export const reducer = {
  [exampleName]: exampleReducer,
}

export const actions = {
  exampleActions,
}
