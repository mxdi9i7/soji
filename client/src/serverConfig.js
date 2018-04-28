
process.env.NODE_ENV === "development" ?
module.exports = {
    apiUrl: 'http://localhost:3555/api/v1',
    employeeAvatarUrl: 'http://localhost:3555/uploads/employees/',
    clientAvatarUrl: 'http://localhost:3555/uploads/clients/',
    adminAvatarUrl: 'http://localhost:3555/uploads/admins/',
    fileUrl: 'http://localhost:3555/uploads/files/'
} :
module.exports = {
    apiUrl: 'http://api.mysoji.com/api/v1',
    employeeAvatarUrl: 'http://api.mysoji.com/uploads/employees/',
    clientAvatarUrl: 'http://api.mysoji.com/uploads/clients/',
    adminAvatarUrl: 'http://api.mysoji.com/uploads/admins/',
    fileUrl: 'http://api.mysoji.com/uploads/files/'
}