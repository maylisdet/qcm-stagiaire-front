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

### 2.1 For admin

**[GET]** _/api/quizzes/_

#### Filter options 
```json
is_active
is_inactive
```

#### Request

```json
{}
```

#### Response

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

### 2.1 For trainee

**[GET]** _/api/trainee/{id}quizzes/_

Available quizzes for a given trainee

#### Request

```json
{}
```

#### Response

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

**[GET]** _/api/users

#### Filter options 
```json
is_not_admin
```

### Request

```json
{}
```

## Response

```json
[
  {
    "firstname": "May",
    "lastname": "de Talhou",
    "company": "UTC",
  },
  {
    "firstname": "pierre",
    "lastname": "dupont",
    "company": "UTC",
  },
]
```


**[GET]** _/api/users/{id}

#### Includes options 
```json
records
```

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

**[GET]** _/api/users/create

### Request

```json
{
  "firstname": "May",
  "lastname": "de Talhou",
  "email": "maylisdet",
  "phoneNumber": "08.....",
  "company": "UTC",
  "createdAt": "2021-06-12 00:00:00",
}
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
  }
]
```

## 4. Quiz Management

### Quiz detail

**[GET]** _/api/quizzes/{id}

##### Includes options 
```json
records
```

#### Request

```json
{}
```

#### Response

```json
[
  {
    "id": "4",
    "label": "Blablabla",
    "questions": [
      {
        "id": "4",
        "label": "Quel est le hook le plus utilisé",
        "show_number": "1",
      }
    ],
    "records": [
      {
        "id": "4",
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
        "id": "4",
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

### Quiz update

**[PUT]** _/api/quizzes/{id}

##### Includes options 
```json
records
```

#### Request

```json
[
  {
    "id": "4",
    "label": "Blablabla",
    "questions": [
      {
        "id": "4",
        "label": "Quel est le hook le plus utilisé",
        "show_number": "1",
      }
    ],
    "records": [
      {
        "id": "4",
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
        "id": "4",
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

### All themes

**[GET]** _/api/themes

#### Request

```json
{}
```

#### Response

```json
[
  {
    "id": "1",
    "label": "React",
  },
  {
    "id": "2",
    "label": "Ruby",
  },
  {
    "id": "3",
    "label": "POO",
  },
]
```

### Create theme

**[POST]** _/api/themes

#### Request

```json
{
  "label": "React",
}
```

#### Response
```json
  {
    "id": "4",
    "label": "React",
  }
```

### Delete theme

**[DELETE]** _/api/themes/:id

#### Request

```json
{}
```

#### Response

```json
{
  "code": "200"
}
```

## 5. Question Management

### Create question

**[POST]** _/api/questions

#### Request

```json
{
  "title": "Quel est le hook le plus utilisé",
  "is_active": true,
  "correct_answer": [
      {
        "id": "3",
        "label": "useEffect",
      }
    ],
    "possible_answers": [
      {
         "id": "8",
        "label": "UseEffect",
      },
      {
         "id": "4",
        "label": "UseState",
      },
      {
         "id": "5",
        "label": "UseCallback",
      }
    ],
}
```

#### Response
```json
{
  "code": "200"
}
```

### Update question

**[POST]** _/api/questions/:id

#### Request

```json
{
  "title": "Quel est le hook le plus utilisé",
  "is_active": true,
  "correct_answer": [
      {
        "id": "3",
        "label": "useEffect",
      }
    ],
    "possible_answers": [
      {
         "id": "8",
        "label": "UseEffect",
      },
      {
         "id": "4",
        "label": "UseState",
      },
      {
         "id": "5",
        "label": "UseCallback",
      }
    ],
}
```

#### Response
```json
{
  "code": "200"
}
```

### Question detail

**[GET]** _/api/question/:id

#### Request

```json
{}
```

#### Response

```json
[
  {
    "id": "1",
    "label": "Quel est le hook le plus utilisé",
    "is_active": true,
    "correct_answer": [
      {
        "id": "3",
        "label": "useEffect",
      }
    ],
    "possible_answers": [
      {
         "id": "8",
        "label": "UseEffect",
      },
      {
         "id": "4",
        "label": "UseState",
      },
      {
         "id": "5",
        "label": "UseCallback",
      }
    ],
  }
]
```

### Delete Question

**[DELETE]** _/api/question/:id

#### Resquest

```json
{}
```

#### Response

```json
{
  "code": "200"
}
```