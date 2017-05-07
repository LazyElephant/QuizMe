module.exports =  {
    PORT: process.env.PORT || 3000,
    DB_URI: process.env.DB_URI || "mongodb://localhost:27017/quizme",
    SESSION_SECRET: process.env.SESSION_SECRET || "I can learn all the languages in the world",
}
