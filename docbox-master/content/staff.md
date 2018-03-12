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
    "data": {
        "_id": "5a6237b0dd03dd0f14437d2c"
        "staffID": "000011"
        "username": "req.body.username"
        "password": "req.body.password"
        "email": "req.body.email"
        "name": "req.body.name"
        "photo": "req.body.photo"
        "rating": 0
        "__v": "0"
    }
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