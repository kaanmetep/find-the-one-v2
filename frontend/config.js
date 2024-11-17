const API_URL = "http://localhost:3000";

export const endpoints = {
  register: `${API_URL}/signup`,
  login: `${API_URL}/login`,
  getUsers: `${API_URL}/users`,
};

export const questionsPersonel = {
  question1:
    "What is your favorite way to spend your weekends, and why does it bring you joy?",
  question2:
    "If you could spend a day doing anything without limitations, what would it be and why?",
  question3:
    "What is something you're passionate about, and how does it influence your daily life?",
  question4:
    "If you could change one thing about the world, what would it be and why? How does this reflect who you are?",
};
export const questionsRelationship = {
  question1:
    "What does an ideal relationship look like to you, and how do you think it should make you feel?",
  question2:
    "Describe a moment or experience that would make you feel deeply connected to a partner. Why is this significant to you?",
  question3:
    "What do you think is the biggest challenge in maintaining a healthy relationship, and how would you overcome it?",
  question4:
    "How would you show appreciation or express love to a partner, and what do you hope they would do in return?",
};
