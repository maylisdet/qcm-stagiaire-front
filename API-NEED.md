# Introduction

This paper has been written in order to communicate to backend devs what is needed by frontend dev in terms of API routes and data associated.

# Demands

## 1. Login

**[GET]** _/api/auth/signin_

### Request

```json
{
  "email": "jean.bonno@etu.utc.fr",
  "password": "helloworld"
}
```

### Response

```json
{
  "firstname": "Clément",
  "lastname": "BOTTY",
  "email": "clement.botty@etu.utc.fr",
  "roles": ["ADMIN"],
  "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjbGVtZW50LmJvdHR5QGV0dS51dGMuZnIiLCJpYXQiOjE2MzgxODEyODQsImV4cCI6MTYzODI2NzY4NH0.CoQguCtrPviMQx56W35h1afPJGDhn51Ib_mmudTEXxm6iVXveIYSP3_zmJ6FL0yFFC3syZDk-qyfGiI_yY2JNw",
  "tokenType": "Bearer"
}
```

## 2. Quizz

**[GET]** _/api/quizz/_

### Request

```json
{}
```

### Response

```json
[
  {
    "label": "ReactJS",
    "theme": {
      "label": "React"
    }
  },
  {
    "label": "LinearRegression",
    "theme": {
      "label": "DataSciences"
    }
  }
]
```

## 3. User Management

**[GET]** _/api/users/{id}


### Request

```json
{}
```

### Response

```json
[
  {
    "firstname": "May",
    "lastname": "de Talhou",
    "email": "maylisdet",
    "phoneNumber": "08.....",
    "company": "UTC",
    "createdAt": "2021-06-12 00:00:00",
    "isActive": true,
    "records": [
      {
        "duration": "tobeDefined",
        "score": 17,
        "quiz": {
          "label": "React",
          "theme": {
            "label": "ReactTheme"
          }
        }
      },
      {
        "duration": "tobeDefined",
        "score": 25,
        "quiz": {
          "label": "LinearRegression",
          "theme": {
            "label": "DataSciences"
          }
        }
      },
    ]
  }
]
```