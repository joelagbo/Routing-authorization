const http = require("http");

//a function that listens on the server port to obtain data sent as response to a request
http.get(
  {
    port: 3000,
    hostname: "localhost",
    path: "/users",
    headers: { authorization: "secretpassword" },
  },
  (res) => {
    console.log("connected");
    res.on("data", (chunk) => {
      console.log("chunk", "" + chunk);
    });
    res.on("end", () => {
      console.log("No more data");
    });
    res.on("close", () => {
      console.log("Closing connection");
    });
  }
);
