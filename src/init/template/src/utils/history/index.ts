/*
 * @Date: 2022-06-06 13:59:55
 * @Description: 路由 history
 */

// react-router-dom 内置了 history 不需要重新安装
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history'

/** 可以在任意地方直接使用跳转 */
const history = createBrowserHistory({ window })

export default history
