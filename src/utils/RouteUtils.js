export const toQuestionEdit = (history, quizz_id, question_id) => {
  const url = `/admin/quizz/${quizz_id}/question/${question_id}/edit`;
  history.push(url);
};
