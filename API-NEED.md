# Introduction

This paper has been written in order to communicate to backend devs what is needed by frontend dev in terms of API routes and data associated.

# Demands

## 1. Login

**[GET]** _/api/auth/signin_

### Request

```json
{
  "email": "clement.botty@etu.utc.fr",
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
```
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

**[GET]** _/api/trainees/{id}/quizzes/_

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

**[GET]** _/api/users_

#### Filter options 
```
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


**[GET]** _/api/users/{id}_

#### Includes options 
```
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

**[POST]** _/api/users_

### Request

```json
{
  "firstname": "May",
  "lastname": "de Talhou",
  "email": "maylisdet",
  "phoneNumber": "08.....",
  "company": "UTC",
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

**[GET]** _/api/quizzes/{id}_

##### Includes options 
```json
records
ranks
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
        },
        "rank": {
          "id": "9",
          "nb_respondents": "10",
          "score_rank": "3/10",
          "best_score": "20",
          "duration_of_best_score": "12",
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
        },
        "rank": {
          "id": "9",
          "nb_respondents": "10",
          "score_rank": "3/10",
          "best_score": "30",
          "duration_of_best_score": "12",
        }
      },
    ]
  }
]
```

### Quiz update

**[PUT]** _/api/quizzes/{id}_

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

**[GET]** _/api/themes_

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

**[POST]** _/api/themes_

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

**[DELETE]** _/api/themes/{id}_

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

**[POST]** _/api/questions_

#### Request

```json
{
  "title": "Quel est le hook le plus utilisé",
  "is_active": true,
  "answers": [
    {
      "id": "8",
      "label": "useEffect",
      "is_correct": true
    },
    {
      "id": "4",
      "label": "useState",
      "is_correct": false
    },
    {
      "id": "5",
      "label": "useCallback",
      "is_correct": false
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

**[PUT]** _/api/questions/{id}_

#### Request

```json
{
  "title": "Quel est le hook le plus utilisé",
  "is_active": true,
  "answers": [
    {
      "id": "8",
      "label": "useEffect",
      "is_correct": true
    },
    {
      "id": "4",
      "label": "useState",
      "is_correct": false
    },
    {
      "id": "5",
      "label": "useCallback",
      "is_correct": false
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

**[GET]** _/api/question/{id}_

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

**[DELETE]** _/api/question/{id}_

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
