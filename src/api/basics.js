import request from '@/router/axios';

// 获取模板配置
export const getConfig = (token) => {
  return request({
    url: 'api/blade-platform/platform/muban/selectByToken',
    method: 'post',
    params: {
      token
    }
  });
};

// 获取字典
export const getDicData = (code) => {
  return request({
    url: 'api/blade-system/dict/getByCode',
    method: 'get',
    params: {
      code
    }
  });
};

// 获取字段
export const getField = (url, deptId) => {
  return request({
    url: `/api${url}`,
    method: 'get',
    params: {
      deptId
    }
  });
};

// 获取列表
export const getList = (url, data) => {
  return request({
    url: `/api${url}`,
    method: 'post',
    data
  });
};

// export const getAnBiaoLogin = (data) => {
//   return request({
//     url: `/api/blade-platform/platform/personnel/insertAnBiaoLogin`,
//     method: 'post',
//     data
//   });
// };

// 获取列表
export const getDetail = (url, id, other = {}) => {
  return request({
    url: `/api${url}`,
    method: 'get',
    params: {
      id,
      ...other
    }
  });
};

export const insert = (url, data) => {
  return request({
    url: `/api${url}`,
    method: 'post',
    data
  });
};

export const update = (url, data) => {
  return request({
    url: `/api${url}`,
    method: 'post',
    data
  });
};

export const remove = (url, id) => {
  return request({
    url: `/api${url}`,
    method: 'post',
    params: {
      id
    }
  });
};

// 删除文件
export const removeFiles = (ids) =>
  request({
    url: '/api/blade-upload/upload/goDels',
    method: 'POST',
    params: {
      ids
    }
  });