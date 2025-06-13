const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : "https://findyoursoulmatebackend.vercel.app";

export const endpoints = {
  register: `${API_URL}/signup`,
  login: `${API_URL}/login`,
  getUsers: `${API_URL}/users`,
  checkEmail: `${API_URL}/checkEmail`,
};

export const questionsPersonal = [
  {
    id: 0,
    question: "What are your goals for the next few years?",
    options: [
      "I'm focused on building my career",
      "I'm planning to settle down and get married",
      "I want to travel and explore new cultures",
      "I'm working on personal growth and self-improvement",
    ],
  },
  {
    id: 1,
    question: "What's your ideal way to spend a weekend?",
    options: [
      "Exploring new places and adventures",
      "Relaxing at home with movies or books",
      "Spending time with friends and family",
      "Working on personal projects or hobbies",
    ],
  },
  {
    id: 2,
    question: "What type of activities do you enjoy in your free time?",
    options: [
      "Outdoor activities (hiking, sports, nature)",
      "Creative pursuits (art, music, writing)",
      "Social gatherings (parties, dining out, group events)",
      "Quiet activities (reading, meditation, solo hobbies)",
    ],
  },
  {
    id: 3,
    question: "Which environment do you thrive in the most?",
    options: [
      "A structured and organized setting",
      "A flexible and spontaneous atmosphere",
      "A quiet and calm place",
      "A dynamic and fast-paced environment",
    ],
  },
  {
    id: 4,
    question: "What’s your way of dealing with stress?",
    options: [
      "I meditate or do mindfulness exercises",
      "I exercise or do physical activities",
      "I talk it out with close friends or family",
      "I prefer to be alone and reflect quietly",
    ],
  },
  {
    id: 5,
    question: "How do you usually make important decisions in life?",
    options: [
      "I rely on logic and careful analysis",
      "I follow my intuition and gut feeling",
      "I seek advice from people I trust",
      "I take time alone to reflect before deciding",
    ],
  },
  {
    id: 6,
    openEndedQuestion:
      "Describe what happiness means to you in your own words. (At least 20 words)",
  },
];

export const questionsRelationship = [
  {
    id: 0,
    question: "What are your expectations about spending time together?",
    options: [
      "Daily interaction and frequent dates",
      "Regular quality time with independence in between",
      "Balanced time together and apart",
      "More independent lifestyle with occasional togetherness",
    ],
  },
  {
    id: 1,
    question:
      "What's your love language (how you prefer to receive affection)?",
    options: [
      "Physical touch (hugs, holding hands, physical closeness)",
      "Words of affirmation (compliments, hearing 'I love you')",
      "Quality time (focused attention, shared activities)",
      "Receiving gifts (thoughtful presents, tokens of affection)",
    ],
  },
  {
    id: 2,
    question: "What are your views on trust and transparency in relationships?",
    options: [
      "Complete transparency in all aspects of life",
      "Open communication with some personal boundaries",
      "Trust with privacy in certain areas",
      "Independence with mutual respect and trust",
    ],
  },
  {
    id: 3,
    question: "How do you prefer to spend quality time with your partner?",
    options: [
      "Having deep conversations and sharing thoughts",
      "Doing fun activities or adventures together",
      "Enjoying quiet moments, like watching movies at home",
      "Socializing with friends and family as a couple",
    ],
  },
  {
    id: 4,
    question: "What role does humor play in your relationship?",
    options: [
      "It’s essential - I love making my partner laugh",
      "It’s important, but not the main thing",
      "I enjoy humor but also value serious moments",
      "I’m more serious and prefer meaningful conversations",
    ],
  },
  {
    id: 5,
    question:
      "How do you prefer to celebrate important dates like anniversaries?",
    options: [
      "A quiet, meaningful moment just between the two of us",
      "A big celebration with friends and family",
      "Doing something spontaneous and adventurous",
      "I’m not big on celebrations, just being together is enough",
    ],
  },
  {
    id: 6,
    openEndedQuestion:
      "Describe what qualities you value most in a partner and why those qualities are important to you. (At least 20 words)",
  },
];
