# Introduction

This paper has been written in order to communicate to backend devs what is needed by frontend dev in terms of API routes and data associated.

# Demands

## 1. Quizz

**[GET]** _/api/quizz/_

### Request

```json
{}
```

### Response

```json
[
  { "quizzLabel": "ReactJS", "themeLabel": "React" },
  { "quizzLabel": "Hooks", "themeLabel": "React" },
  { "quizzLabel": "LinearRegression", "themeLabel": "DataSciences" }
]
```
