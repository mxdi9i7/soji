### Job添加

Job添加

```endpoint
POST /api/v1/jobs/create
```
Property | Description
---|---
`jobTitle` | (required) job 名
`jobDescription` | (required) job 说明
`jobTitle` | (required) job 名
`repeatEvery` | (required) 重复间隔
`numberOfRepeat` | (required) 重复次数
`neverExpire` | (required) 是否永久
#### Example response
```json
{
    "success": true,
    "data": "Job created"

}

```

#### Status Code

```json

```

### Job查询

Job查询

```endpoint
POST /api/v1/jobs/search
```
Property | Description
---|---
`jobTitle` | (required) job 名
#### Example response

```json
{
    "success": true,
    "data":[
        {
            "_id": "5a620d400de4d93ec49036ab",
            "jobID": "9517685",
            "teamID": "11111",
            "jobTitle": "req.body.jobTitle",
            "jobDescription": "description",
            "quote": 233,
            "approved": true,
            "approvedBy": "020202",
            "createdAt": "2018-01-19T15:22:40.163Z",
            "updatedAt": "2018-01-19T15:57:29.869Z",
            "repeatEvery": "7",
            "numberOfRepeat": "5",
            "neverExpire": true,
            "__v": "0"
        },
      more json arrays..
]

```

#### Status Code

```json

```

### Job删除

Job删除

```endpoint
POST /api/v1/jobs/delete
```
Property | Description
---|---
`jobID` | (required) jobID
#### Example response

```json
{
    "success": true,
    "data": "Job deleted"

}

```

#### Status Code

```json

```

### Job更新

Job更新

```endpoint
POST /api/v1/jobs/update
```
Property | Description
---|---
`jobID` | (required) 要更改的 job 的 id
`teamID` | (required) 负责该job的队伍编号
`jobTitle` | (required) job 名 
`jobDescription` | (required) job 说明
`quote` | (required) job 报价
`approved` | (required) 审核是否通过
`approvedBy` | (required) 通过审核的员工
`assignedTo` | (required) 负责该job的员工
`repeatEvery` | (required) 重复间隔
`numberOfRepeat` | (required) 重复次数
`neverExpire` | (required) 是否永久
#### Example response

```json
{
    "success": true,
    "data": "Job updated"

}

```

#### Status Code

```json

```

