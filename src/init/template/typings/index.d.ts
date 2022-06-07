/*
 * @Date: 2021-12-31 16:03:32
 * @Description: ts 类型定义
 */

/// <reference types="react-build-script/typings" />

/** 运行环境，dev还是build */
declare const ENV_MODE: 'dev' | 'build'

interface Window {
  /** 接口请求地址 */
  baseUrl: string
}
