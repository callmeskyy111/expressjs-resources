import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

//builtin middlewares
app.use(express.json());

// root-route
app.get("/", (_, res) => {
  res.send("Welcome to Express-Routing ☑️");
});

app.get("/about", (req, res) => {
  res.send("Hello from ABOUT page ✅");
});

app.post("/contact", (req, res) => {
  const { email } = req.body;
  res.send(`Hello from user: ${email} ✅`);
  console.log(req.body);
});

app.put("/contact/:email", (_, res) => {
  res.send("Your contact-info is updated");
});

app.delete("/delete-contact/:id", (_, res) => {
  res.send("Your contact-info is deleted ☑️");
});

// dynamic routes  - req.params.dynamic_property , (/bla/bla/:dynamic_property)
app.get("/users/:id", (req, res) => {
  res.send(`User ID: ${req.params.id} ✅`);
});

// Query strings for Search And Category based filter
//Ex- http://localhost:3001/search?title=post2&category=shirts
app.get("/search", (req, res) => {
  const {title,category} = req.query;
  console.log(req.query)
  res.send(`Query str: title is ${title} and category is ${category} ✅`);
});

// start the server
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT} ☑️`);
});
