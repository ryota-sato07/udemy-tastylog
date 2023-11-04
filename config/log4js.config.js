module.exports = {
  appenders: {
    ConseleLogAppender: {
      type: "console"
    }
  },
  categories: {
    "default": {
      appenders: ["ConseleLogAppender"],
      level: "All"
    }
  }
};