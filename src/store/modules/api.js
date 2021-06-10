const baseUrl = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : process.env.VUE_APP_ENV_URL

const api = {
  state: {
    // 部署包上传
    deployUploadApi: baseUrl + '/system/deploy/upload',
    // SQL脚本上传
    databaseUploadApi: baseUrl + '/system/database/upload',
    // 实时控制台
    socketApi: baseUrl + '/websocket?token=kl',
    // 图片上传
    imagesUploadApi: baseUrl + '/system/pictures',
    // 修改头像
    updateAvatarApi: baseUrl + '/system/user/updateAvatar',
    // 上传文件到七牛云
    qiNiuUploadApi: baseUrl + '/system/qiNiuContent',

    uploadApi: baseUrl + '/system/upload',
    // Sql 监控
    sqlApi: baseUrl + '/druid',
    // swagger
    swaggerApi: baseUrl + '/doc.html',
    // 文件上传
    fileUploadApi: baseUrl + '/system/localStorage',
    // baseUrl，
    baseApi: baseUrl
  }
}

export default api
