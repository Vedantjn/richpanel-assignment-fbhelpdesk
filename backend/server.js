const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models'); 
const authRoutes = require('./routes/auth');
const facebookRoutes = require('./routes/facebook');
const messengerRoutes = require('./routes/messenger');
const conversationRoutes = require('./routes/conversation');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes); // Registration and login routes
app.use('/api/facebook', facebookRoutes); // Page connection management routes
app.use('/api/messenger', messengerRoutes); // Message processing routes
app.use('/api/conversation', conversationRoutes); // Conversation management routes

// Sync Sequelize models with database
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Unable to sync database:', error);
});
