const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/user.model'); // ✅ Correct naming
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(async () => {
        const hashedPassword = await bcrypt.hash('admin123', 10);

        const sampleUsers = [
            { name: 'Admin', email: 'admin@ssr.com', password: hashedPassword },
            { name: 'Sweta', email: 'sweta@ssr.com', password: hashedPassword }
        ];

        await User.insertMany(sampleUsers); // ✅ Fixed
        console.log('✅ Test users created');
        process.exit();
    })
    .catch(err => {
        console.error('❌ Error:', err.message);
        process.exit(1);
    });