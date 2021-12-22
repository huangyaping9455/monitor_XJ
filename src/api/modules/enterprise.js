import {
  $axios,
  awaitWrap
} from '../api';
export default {
  getTree(params) {
    return $axios.get('/blade-doc/doc/qiyewenjian/tree', {
      params
    });
  },
  addSubtemplateDir(id, fileName) {
    return $axios.post('/blade-doc/doc/qiyewenjian/addDir', {
      params: {
        id,
        fileName
      }
    });
  },
  imgPreview(id) {
    return $axios.post('/blade-doc/doc/qiyewenjian/imgPreview', {
      params: {
        id,
      }
    });
  },
  remove(id) {
    return $axios.post('/blade-doc/doc/qiyewenjian/del', {
      params: {
        id
      }
    });
  },
  download(id) {
    return $axios.get('/blade-doc/doc/qiyewenjian/downloadFile', {
      params: {
        id,
      }
    });
  },
  modifyFileNumber(id, documentNumber) {
    return $axios.get('/blade-doc/doc/qiyewenjian/updateDocumentNumber', {
      params: {
        id,
        documentNumber
      }
    });
  },
  moveFile(originId, targetId) {
    return $axios.get('/blade-doc/doc/qiyewenjian/swapFileSort', {
      params: {
        originId,
        targetId
      }
    });
  },
  awaitWrap
}