import {
  $axios,
  awaitWrap
} from '../api';
export default {
  getTree(params) {
    return $axios.get('/blade-doc/doc/SafetyProductionFile/tree', {
      params: params
    });
  },
  addSubtemplateDir(id, fileName) {
    return $axios.post('/blade-doc/doc/SafetyProductionFile/addDir', {
      params: {
        id: id,
        fileName: fileName
      }
    });
  },
  remove(id) {
    return $axios.post('/blade-doc/doc/SafetyProductionFile/del', {
      params: id
    });
  },
  uploadDocByImg(data) {
    return $axios.post('/blade-doc/doc/SafetyProductionFile/addImages', {
      data
    });
  },
  download(id) {
    return $axios.get('/blade-doc/doc/SafetyProductionFile/downloadFile', {
      params: id
    });
  },
  imgPreview(id) {
    return $axios.post('/blade-doc/doc/SafetyProductionFile/imgPreview', {
      id
    });
  },
  moveFile(originId, targetId) {
    return $axios.get('/blade-doc/doc/SafetyProductionFile/swapFileSort', {
      params: {
        originId,
        targetId
      }
    });
  },
  modifyFileNumber(id, documentNumber) {
    return $axios.get('/blade-doc/doc/SafetyProductionFile/updateDocumentNumber', {
      params: {
        id,
        documentNumber
      }
    });
  },
  directoryTree(deptId, parentId) {
    return $axios.get('/blade-doc/doc/SafetyProductionFile/boxTree', {
      params: {
        deptId,
        parentId
      }
    });
  },
  awaitWrap
};

// export const uploadDocByImg = (data) => {
//   return request({
//     url: '/api/blade-doc/doc/SafetyProductionFile/addImages',
//     method: 'POST',
//     headers: { 'Content-Type': 'multipart/form-data' },
//     data
//   });
// };