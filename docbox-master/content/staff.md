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


### Staff登录

Staff登录

```endpoint
POST /api/v1/users/auth/staffLogin
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

### Staff注册

Staff注册

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
    "data": "Staff created"
}

```

#### Status Code

```json

```
### Staff查询

Staff查询

```endpoint
POST /api/v1/users/search
```
Property | Description
---|---
`staffID` | (required) Staff的编号
#### Example response

```json
{
    "success": true,
    "data": [
        {
            "_id": "5aa843472a1657079015945d",
            "staffID": "000015",
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
            "name": ""
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

### Staff删除

Staff删除

```endpoint
POST /api/v1/users/delete
```
Property | Description
---|---
`staffID` | (required) Staff的编号
#### Example response

```json
{
    "success": true,
    "data": "Staff deleted"
}

```

#### Status Code

```json

```

### Staff更新

Staff更新

```endpoint
POST /api/v1/users/update
```
Property | Description
---|---
`staffID` | (required) 要更改的 staff 的 id
`teamID` | (required) 队伍ID
`password` | (required) 密码
`email` | (required) 邮箱
`name` | (required) 姓名
`photo` | (required) 照片
#### Example response

```json
{
    "success": true,
    "data": "Staff updated"
}

```

#### Status Code

```json

```