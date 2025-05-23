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

app.put("/contact/:email", (req, res) => {
  res.send("Your contact-info is updated");
});

app.delete("/delete-contact/:id", (req, res) => {
  res.send("Your contact-info is deleted ☑️");
});

// start the server
app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT} ☑️`);
});
