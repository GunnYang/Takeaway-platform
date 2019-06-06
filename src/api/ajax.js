/**
 * ajax请求函数模块
 * 返回值：promise对象
 *  */

import axios from 'axios'
export default function ajax(url='',data={},type='GET'){

    return new Promise(function(resolve,reject){
        // 执行异步ajax请求
        let promise

        if(type === 'GET'){
            // 拼接字符串
            let dataStr = ''    
            Object.keys(data).forEach(Key => {
                dataStr += Key + '=' + data[Key] + '&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            //发送get请求
            promise = axios.get(url)
        }else{
            // 发送post请求
            promise = axios.post(url,data)
        }

        // 返回数据
        promise.then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}