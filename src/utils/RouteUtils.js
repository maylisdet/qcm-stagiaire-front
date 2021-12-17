/******** QUIZ MANAGEMENT*********/
export const toQuizEditPage = (history, quizzId) => {
  const url = `/admin/quiz/${quizzId}/edit`;
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

export const toCreateQuestion = (history, quizzId) => {
  const url = `/admin/quiz/${quizzId}/create-question`;
  history.push(url);
};

export const toQuestionEdit = (history, quizz_id, question_id) => {
  const url = `/admin/quiz/${quizz_id}/question/${question_id}/edit`;
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

export const toTraineeProfil = (history, traineeId) => {
  const url = `/admin/users/${traineeId}`;
  history.push(url);
};

/******** TRAINEE QUIZ *********/

export const toTraineeQuizzes = (history, traineeId) => {
  const url = `/trainee/${traineeId}/quizzes`;
  history.push(url);
};

export const toTraineeRecord = (history, traineeId, recordId) => {
  const url = `/trainee/${traineeId}/records/${recordId}/detailed`;
  history.push(url);
};

export const toTraineeRecords = (history, traineeId) => {
  const url = `trainee/${traineeId}/records`;
  history.push(url);
};

export const toLaunchQuiz = (history, traineeId, quizId) => {
  const url = `/trainee/${traineeId}/quizzes/${quizId}`;
  history.push(url);
};

export const toQuizFinished = (history, traineeId, recordId) => {
  window.location.href = `/trainee/${traineeId}/records/${recordId}`;
};
