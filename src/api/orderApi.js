import request from '@/request'

export const list = () => {

    return request({
        url: "/api/order/api/order/list",
        method: 'get',
    });

}




export const test = () => {

    return request({
        url: "/api/order/api/order/test",
        method: 'get',
    });

}
