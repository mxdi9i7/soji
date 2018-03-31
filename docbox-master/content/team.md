### Team创建

Job添加

```endpoint
POST /api/v1/teams/create
```
Property | Description
---|---
`teamName` | (required) team 名
`managerID` | (required) team 负责人id
#### Example response
```json
{
    "success": true,
    "data": "Team created"

}

```

#### Status Code

```json

```

### Team查询

Team查询

```endpoint
POST /api/v1/teams/search
```
Property | Description
---|---
`teamID` | (required) 要查询的 team 的 id
#### Example response

```json
{
    "success": true,
    "data": [
        {
            "_id": "5ac010a2f518c039ac8b1eef",
            "teamID": "810370",
            "teamName": "team2",
            "managerID": "000017",
            "creationDate": "2018-03-31T22:50:10.708Z",
            "__v": 0
        }
    ]
}

```

#### Status Code

```json

```

### Team删除

Team删除

```endpoint
POST /api/v1/teams/delete
```
Property | Description
---|---
`teamID` | (required) 要删除的 team 的 id
#### Example response

```json
{
    "success": true,
    "data": "Team deleted"

}

```

#### Status Code

```json

```

### Team更新

Team更新

```endpoint
POST /api/v1/teams/update
```
Property | Description
---|---
`teamID` | (required) team ID
`teamName` | (required) team 名
`managerID` | (required) team 负责人id
#### Example response

```json
{
    "success": true,
    "data": "Team updated"

}
```

#### Status Code

```json

```

