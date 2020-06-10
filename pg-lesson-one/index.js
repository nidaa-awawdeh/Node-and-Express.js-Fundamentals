const { Client } = require("pg"); // include the Client constructor from the pg module

// make a new instance of the Client constructor and specify which db to connect to using the connectionString key
const client = new Client({
    connectionString: "postgresql://localhost/pg-lesson-one"
});

// connect!
client.connect();

// let's make a function to get all the rows in our students table!
async function getStudents() {
    const results = await client.query("SELECT * FROM students");
    console.log(results.rows);
}

// let's get our students and then stop the node process
// when we start using express, process.exit will be a response from the server instead
getStudents().then(() => process.exit(0));