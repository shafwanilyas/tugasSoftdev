const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

const userRouter = require('./src/routes/users');
const softdevRouter = require('./src/routes/softdev');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/users', userRouter)
app.listen(process.env.PORT, () => {
    console.log(`server running on http://localhost:${process.env.PORT}`);
});

app.use('/users', userRouter);
app.use('/softdev', softdevRouter);

module.exports = app;
