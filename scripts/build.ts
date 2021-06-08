import yargs from "yargs";
const childProcess = require("child_process");
const path = require("path");
const { promisify } = require("util");

const exec = promisify(childProcess.exec);

async function run(params: any) {
  console.log(path.resolve("./src"));
  const babelConfigPath = path.resolve(__dirname, "../babel.config.json");
  const srcDir = path.resolve("./lib");
  const outDir = path.resolve("./dist");
  const extensions = [".js", ".ts", ".tsx"];

  const babelArgs = [
    "--config-file",
    babelConfigPath,
    "--extensions",
    `"${extensions.join(",")}"`,
    srcDir,
    "--out-dir",
    outDir,
  ];

  const babel = ["yarn babel", ...babelArgs].join(" ");

  const tscArgs = ["--emitDeclarationOnly"];
  const tsc = ["yarn tsc", ...tscArgs].join(" ");

  const babelResult = await exec(babel, {});

  if (babelResult.stderr) {
    throw new Error(`'${babel}' failed with \n${babelResult.stderr}`);
  }

  const tscResult = await exec(tsc, {});

  if (tscResult.stderr) {
    throw new Error(`'${babel}' failed with \n${tscResult.stderr}`);
  }
}

yargs
  .command({
    command: "$0",
    builder: (command) => {
      return command
        .option("largeFiles", {
          type: "boolean",
          default: false,
          describe:
            "Set to `true` if you know you are transpiling large files.",
        })
        .option("onlyESModules", {
          type: "boolean",
          default: false,
          describe: "Set to `true` if the package only ships with ES modules.",
        })
        .option("out-dir", { default: "./build", type: "string" })
        .option("verbose", { type: "boolean" });
    },
    handler: run,
  })
  .parse();

console.log("a");
