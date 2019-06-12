import axios from '../axios'

/* 
 * 菜单管理模块
 */

// 查找导航菜单树
export const findNavTree = () => {
    return axios({
        url: '/menu/findNavTree',
        method: 'get',
     
    })
}