const app = require("../app");
const http = require("http");
const userWebViewRouter = require("../routes/user_view_routes");
const adminRouter = require("../routes/admin_routes");
const authRouter = require("../routes/auth_routes");
const port = 4000;

app.use("/users", userWebViewRouter);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);
app.get("/", (req, res) => {
  res.render(
    "index",
    {
      nav: [{ link: "/users", title: "Users" }],
      title: "Profiles Book"
    }
  );
});

const server = http.createServer(app);
server.listen(port);

server.on("listening", onListen)
server.on("error", onError);

function onError(error) {
  console.log(error.code);
}
function onListen() {
  console.log("server running");
  console.log(server.address());

}
module.exports = server;