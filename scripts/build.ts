import childProcess from "child_process";
import path from "path";
import { promisify } from "util";

const exec = promisify(childProcess.exec);

async function run() {
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

run();
