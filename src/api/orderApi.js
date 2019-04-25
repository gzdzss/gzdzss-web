import request from '@/request'

export const list = () => {

    return request({
        url: "/api/order/api/order/list",
        method: 'get',
    });

}




export const orderTest = () => {
    return request({
        url: "/api/order/api/order/test",
        method: 'get',
    });
}


export const xxx = () => {
    return request({
        url: "/api/order/api/order/xxx",
        method: 'get',
    });
}