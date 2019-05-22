import express from 'express';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || '4000';
const db = '';

// Connect to MDB with Mongoose
mongoose.connect(
	db,
	{
		useCreateIndex: true,
		useNewUrlParser: true
	}
).then(
	() => console.log('mongodb connected')
).catch(
	err => console.log(err)
)

