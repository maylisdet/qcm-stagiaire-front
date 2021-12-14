/******** QUIZ MANAGEMENT*********/
export const toQuizEditPage = (history, quizId) => {
  const url = `/admin/quiz/${quizId}/edit`;
  history.push(url);
};

export const toQuizzesManagementPage = (history) => {
  const url = '/admin/quizzes/';
  history.push(url);
};

export const toCreateQuiz = (history) => {
  const url = '/admin/create-quiz';
  history.push(url);
};

/******** QUESTION MANAGEMENT*********/

export const toCreateQuestion = (history, quizId) => {
  const url = `/admin/quiz/${quizId}/create-question`;
  history.push(url);
};

export const toQuestionEdit = (history, quiz_id, question_id) => {
  const url = `/admin/quiz/${quiz_id}/question/${question_id}/edit`;
  history.push(url);
};

/******** ANSWER MANAGEMENT*********/

/******** USER MANAGEMENT*********/
export const toUserIdPage = (history, user_id) => {
  const url = `/admin/users/${user_id}`;
  history.push(url);
};

export const toUsersManagementPage = (history) => {
  const url = '/admin/users/';
  history.push(url);
};

export const toCreateUser = (history) => {
  const url = '/admin/create-user';
  history.push(url);
};

export const toTraineeProfil = (history, trainee_id) => {
  const url = `/admin/users/${trainee_id}`;
  history.push(url);
};
