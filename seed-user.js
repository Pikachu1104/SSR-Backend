const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/user.model');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(async () => {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const user = new User({ email: 'admin@example.com', password: hashedPassword });
        await user.save();
        console.log('✅ Test user created');
        process.exit();
    })
    .catch(err => {
        console.error('❌ Error:', err.message);
        process.exit();
    });
