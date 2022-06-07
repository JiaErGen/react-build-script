/*
 * @Date: 2022-05-25 14:15:20
 * @Description: 页面入口
 */

import ReactDOM from 'react-dom/client'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { Provider, store } from '@/store'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import history from '@/utils/history'
import './index.less'

const Router = () => {
  return (
    <div>111</div>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <ConfigProvider locale={zhCN}>
          <Router />
        </ConfigProvider>
      </HistoryRouter>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
