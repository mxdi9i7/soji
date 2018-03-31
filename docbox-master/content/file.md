### File添加

File添加

```endpoint
POST /api/v1/files/create
```
Property | Description
---|---
`jobID` | (required) file 对应的 job 编号
`taskID` | (required) file 对应的 task 编号
`managerID` | (required) 上传该 file 的负责人 id
`fileName` | (required) file 名
#### Example response
```json
{
    "success": true,
    "data": "File uploaded"

}

```

#### Status Code

```json

```

### File根据fileName查询

File根据fileName查询

```endpoint
POST /api/v1/files/search/name
```
Property | Description
---|---
`fileName` | (required) file 名
#### Example response
```json
{
    "success": true,
    "data":[
        {
            "_id": "5a96fe865b6a162330eec9b3",
            "jobID": "2730251",
            "taskID": "0607434",
            "fileID": "3346222",
            "fileName": "random file",
            "createdAt": "2018-02-28T19:09:58.900Z",
            "__v": "0"
        },
    more json arrays..
    ]
}

```

#### Status Code

```json

```

### File根据fileName查询

File根据fileName查询

```endpoint
POST /api/v1/files/search/taskID
```
Property | Description
---|---
`taskID` | (required) file 对应的 task 编号
#### Example response
```json
{
    "success": true,
    "data":[
        {
            "_id": "5a96fe865b6a162330eec9b3",
            "jobID": "2730251",
            "taskID": "0607434",
            "fileID": "3346222",
            "fileName": "random file",
            "createdAt": "2018-02-28T19:09:58.900Z",
            "__v": "0"
        },
    more json arrays..
    ]
}

```

#### Status Code

```json

```

### File根据fileName查询

File根据fileName查询

```endpoint
POST /api/v1/files/search/jobID
```
Property | Description
---|---
`jobID` | (required) file 对应的 job 编号
#### Example response
```json
{
    "success": true,
    "data":[
        {
            "_id": "5a96fe865b6a162330eec9b3",
            "jobID": "2730251",
            "taskID": "0607434",
            "fileID": "3346222",
            "fileName": "random file",
            "createdAt": "2018-02-28T19:09:58.900Z",
            "__v": "0"
        },
    more json arrays..
    ]
}

```

#### Status Code

```json

```

### File删除

File删除

```endpoint
POST /api/v1/files/delete
```
Property | Description
---|---
`fileID` | (required) file 编号
#### Example response
```json
{
    "success": true,
    "data": "File deleted"
}

```

#### Status Code

```json

```