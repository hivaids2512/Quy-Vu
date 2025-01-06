## Assumptions
- This design will not cover authentication and authorization part
- Since time is limited, then `linting`, `unit testing` and `pre-commit hooks` have not been setup
 
## Tech stack
- ExpressJS - Typescript
- Database: Mongodb, ORM: Mongoose

## Available Apis

### Listing users
```
GET /v1/users?page=1&perPage=10&search=name

Response status: 200 OK
Response body:
[
    {
        "id": "677ab906df372c9152daf523",
        "name": "test",
        "email": "quy@gmail.com",
    }
]
```

### Create User
```
POST /v1/users

Request payload:
{
    "name": "test",
    "email": "quy@gmail.com"
}

Response status: 200 OK
```

### Get user
```
GET /v1/users/{id}

Response status: 200 OK
Response body:
{
    "id": "677ab906df372c9152daf523",
    "name": "test",
    "email": "quy@gmail.com",
}
```

### Update user
```
PUT /v1/users/{id}

Request payload:
{
    "name": "test",
    "email": "quy@gmail.com"
}

Response status: 200 OK
```

### Delete User
```
DELETE /v1/users/{id}

Response status: 200 OK
```