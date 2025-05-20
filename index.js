const { app, PORT } = require("./src/config/server");

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});