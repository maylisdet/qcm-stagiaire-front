export const getNextQuestion = (quiz, alreayAskedQuestions) => {
  let nextQuestion = quiz.questions.find(
    (question) =>
      question.position ===
      Math.min(
        ...quiz.questions
          .filter((question) => alreayAskedQuestions.indexOf(question.id) === -1)
          .map((question) => question.position),
      ),
  );

  console.log('Next questions : ', nextQuestion);

  if (nextQuestion !== undefined) {
    return nextQuestion;
  } else {
    return { id: 789, label: 'Plus de question ma gueule' };
  }
};
