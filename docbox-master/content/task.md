### Task添加

Task添加

```endpoint
POST /api/v1/tasks/create
```
Property | Description
---|---
`jobID` | (required) task 对应的 job 编号
`taskID` | (required) task 编号
`taskTitle` | (required) task 名
`taskDescription` | (required) task 说明
`file` | (required) task 视频说明
`video` | (required) task 视频说明
`duration` | (required) task 耗时
#### Example response

```json
{
    "success": true,
    "data": "Task created"

}

```

#### Status Code

```json

```

### Task删除

Task删除

```endpoint
POST /api/v1/tasks/delete
```
Property | Description
---|---
`taskID` | (required) task 编号
#### Example response

```json
{
    "success": true,
    "data": "Task delete"

}

```

#### Status Code

```json

```

### Task查询

Task查询

```endpoint
POST /api/v1/tasks/search
```
Property | Description
---|---
`jobID` | (required) task 对应的 job 编号
#### Example response

```json
{
    "success": true,
    "data":[
        {
            "_id": "5a620d400de4d93ec49036ab",
            "jobID": "9517685",
            "taskID": "6679588",
            "taskTitle": "req.body.taskTitle",
            "taskDescription": "description",
            "file": "sfdiofdsfodf1zgl",
            "video": "gbciosjcenwroohw1zgl",
            "minute": 5,
            "createdAt": "2018-01-15T15:00:37.736Z",
            "__v": "0"
        },
        more json arrays..
    ]
}

```

#### Status Code

```json

```

### Task删除

Task删除

```endpoint
POST /api/v1/tasks/delete
```
Property | Description
---|---
`taskID` | (required) 要修改的 task 的编号
#### Example response
```json
{
    "success": true,
    "data": "Task deleted"

}

```

#### Status Code

```json

```

### Task更新

Task更新

```endpoint
POST /api/v1/tasks/update
```
Property | Description
---|---
`taskID` | (required) 要修改的 task 的编号
`taskTitle` | (required) task 名
`taskDescription` | (required) task 说明
`file` | (required) task 视频说明
`video` | (required) task 视频说明
`duration` | (required) task 耗时
#### Example response
```json
{
    "success": true,
    "data": "Task updated"

}

```

#### Status Code

```json

```