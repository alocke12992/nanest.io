const fs = require("fs");
const path = require("path");

let name = process.argv[2];
if (name) {
  name = name.toLowerCase();
} else {
  console.log("No name provided.");
  console.log("Example: npm run controller <name>");
  console.log(
    "This will create a controller in the server/controllers folder and add GET/PUT/DELETE/POST routes to server/routes.js"
  );
  process.exit();
}

const addLines = data => {
  data = data.split("\n");
  data.splice(0, 0, "\n\n");
  let final = data.join("\n");
  return final;
};

let endpoints = fs.readFileSync(
  path.resolve(__dirname, "./templates/routes.js"),
  "utf8"
);
endpoints = endpoints.replace(/Name/g, `${name}`);

let controller = fs.readFileSync(
  path.resolve(__dirname, "./templates/controller.js"),
  "utf8"
);
controller = controller.replace(/Name/g, `${name}`);

// controller files exists (probably for a page)
if (fs.existsSync(`./server/controllers/${name}.ts`)) {
  console.error('CONTROLLER ALREADY EXISTS')
  return
} else {
  // create controller
  fs.writeFile(`./server/controllers/${name}.ts`, controller, err => {
    if (err) throw err;
    console.log(`${name} controller created`);
  });
}

fs.appendFile("./server/routes.ts", endpoints, err => {
  if (err) throw err;
  console.log("Created Routes:");
  console.log("");
  console.log(`GET:    api/v1/${name}`);
  console.log(`PUT:    api/v1/${name}/:id`);
  console.log(`DELETE: api/v1/${name}/:id `);
  console.log(`POST:   api/v1/${name} `);
});
