import axios from 'axios'
// import { reject, resolve } from 'core-js/fn/promise'


export function request(config) {
    //创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    //发送真正的网络请求
    // instance(config).then(res => {
    //     // resolve(res)
    //     success(res)
    // }).catch(err => {
    //     // reject(err)
    //     failure(err)
    // })
    return instance(config)
}

function test(aa, bb) {
    aa('nihao')
    bb('hahahahah')
}

test(res => {
    //回调函数
    console.log(res)
}, req => {
    console.log(req)
})