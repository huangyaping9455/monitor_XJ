import {
  $axios,
  awaitWrap
}
from '../api';
import qs from 'qs';
export default {
  getTreeTable(params) {
    return $axios.get('/blade-doc/doc/biaozhunhuamuban/listTree', {
      params: params
    });
  },
  getTree(params) {
    return $axios.get('/blade-doc/doc/biaozhunhuamuban/tree', {
      params: params
    });
  },
  addSubtemplateDir(id, fileName) {
    return $axios.post('/blade-doc/doc/biaozhunhuamuban/addSubtemplateDir', {
      params: {
        id,
        fileName
      }
    });
  },
  rename(id, name) {
    return $axios.get('/blade-doc/doc/biaozhunhuamuban/reName', {
      params: {
        id,
        name
      }
    });
  },
  imgPreview(params) {
    params = qs.stringify(params)
    return $axios.post('/blade-doc/doc/biaozhunhuamuban/imgPreview',
      params
    );
  },
  remove(id) {
    return $axios.post('/blade-doc/doc/biaozhunhuamuban/delSubtemplate', {
      params: {
        id
      }
    });
  },
  download(id) {
    return $axios.get('/blade-doc/doc/biaozhunhuamuban/downloadSubtemplateFile', {
      params: {
        id,
      }
    });
  },
  modifyFileNumber(id, documentNumber) {
    return $axios.get('/blade-doc/doc/biaozhunhuamuban/updateDocumentNumber', {
      params: {
        id,
        documentNumber
      }
    });
  },
  moveFile(originId, targetId) {
    return $axios.get('/blade-doc/doc/biaozhunhuamuban/swapFileSort', {
      params: {
        originId,
        targetId
      }
    });
  },
  setFileNature(id, fileProperty) {
    return $axios.get('/blade-doc/doc/biaozhunhuamuban/updateFileProperty', {
      params: {
        id,
        fileProperty
      }
    });
  },
  setFilebelong(id, fileSuoshurenId) {
    return $axios.get('/blade-doc/doc/biaozhunhuamuban/updateFileSuoshuren', {
      params: {
        id,
        fileSuoshurenId
      }
    });
  },
  cancelSafetyBind(params) {
    return $axios.get('/blade-doc/doc/biaozhunhuamuban/cancelSafetyBind', {
      params
    });
  },
  setsafetyBind(params) {
    return $axios.get('/blade-doc/doc/biaozhunhuamuban/safetyBind', {
      params
    });
  },
  getUsersByDept(deptId) {
    return $axios.get('/blade-user/user/selectByDeptId', {
      params: {
        deptId
      }
    });
  },
  getDicData(code) {
    return $axios.get('/blade-system/dict/getByCode', {
      params: {
        code
      }
    });
  },
  awaitWrap
}