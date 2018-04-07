### 普通用户登录

普通用户登录

```endpoint
POST /api/v1/users/auth/login
```
Property | Description
---|---
`username` | (required) 账号
`password` | (required) 密码
#### Example response

```json
{
    "success": true,
    "token": "{JWT TOKEN}"

}

```

#### Status Code

```json

```


### Employee登录

Employee登录

```endpoint
POST /api/v1/users/auth/employeeLogin
```
Property | Description
---|---
`username` | (required) 账号
`password` | (required) 密码
#### Example response

```json
{
    "success": true,
    "token": "{JWT TOKEN}"

}

```

#### Status Code

```json

```

### Admin登录

Admin登录

```endpoint
POST /api/v1/users/auth/adminLogin
```
Property | Description
---|---
`username` | (required) 账号
`password` | (required) 密码
#### Example response

```json
{
    "success": true,
    "token": "{JWT TOKEN}"

}

```

#### Status Code

```json

```

### 普通用户注册

普通用户注册

```endpoint
POST /api/v1/users/auth/register
```
Property | Description
---|---
`username` | (required) 账号
`password` | (required) 密码
`email` | (required) 邮箱
`name` | (required) 姓名
`photo` | (required) 照片
#### Example response

```json
{
    "success": true,
    "data": "User created"
}

```

#### Status Code

```json

```

### Employee注册

Employee注册

```endpoint
POST /api/v1/users/create
```
Property | Description
---|---
`username` | (required) 账号
`password` | (required) 密码
`email` | (required) 邮箱
`name` | (required) 姓名
`photo` | (required) 照片
#### Example response

```json
{
    "success": true,
    "data": "Employee created"
}

```

#### Status Code

```json

```
### Employee查询

Employee查询

```endpoint
POST /api/v1/users/search
```
Property | Description
---|---
`employeeID` | (required) Employee的编号
#### Example response

```json
{
    "success": true,
    "data": [
        {
            "_id": "5aa843472a1657079015945d",
            "employeeID": "000015",
            "teamID": "650177",
            "username": "peter zheng",
            "password": "",
            "email": "",
            "photo": "",
            "key": "123456",
            "active": true,
            "totalRating": 0,
            "ratingCount": 0,
            "__v": 0,
            "name": "",
            "role":"employee"
        },
        {
            "managerID": "000016"
        }
    ]
}

```

#### Status Code

```json

```

### Employee删除

Employee删除

```endpoint
POST /api/v1/users/delete
```
Property | Description
---|---
`employeeID` | (required) Employee的编号
#### Example response

```json
{
    "success": true,
    "data": "Employee deleted"
}

```

#### Status Code

```json

```

### Employee更新

Employee更新

```endpoint
POST /api/v1/users/update
```
Property | Description
---|---
`employeeID` | (required) 要更改的 Employee 的 id
`teamID` | (required) 队伍ID
`password` | (required) 密码
`email` | (required) 邮箱
`name` | (required) 姓名
`photo` | (required) 照片
#### Example response

```json
{
    "success": true,
    "data": "Employee updated"
}

```

#### Status Code

```json

```