import path from "path";
import * as fse from "fs-extra";

const packagePath = path.resolve("./");
const buildPath = path.resolve(packagePath, "./dist");

async function run() {
  await Promise.all(
    ["./README.md", "../../LICENSE"].map((file) => includeFileInDist(file))
  );
  const packageData = await createPackageJson();
  await addLicense(packageData);
}

run();

async function includeFileInDist(file: string): Promise<void> {
  const sourcePath = path.resolve(packagePath, file);
  const targetPath = path.resolve(buildPath, path.basename(file));
  await fse.copy(sourcePath, targetPath);
  console.log(`Copied ${sourcePath} to ${targetPath}`);
}
async function createPackageJson(): Promise<any> {
  const packageData = await fse.readFile(
    path.resolve(packagePath, "./package.json"),
    "utf8"
  );
  const { scripts, devDependencies, ...packageDataOther } =
    JSON.parse(packageData);

  const newPackageData = {
    ...packageDataOther,
    private: false,
    main: packageDataOther.main && "./index.js",
    types: "./index.d.ts",
  };

  const targetPath = path.resolve(buildPath, "./package.json");

  await fse.writeFile(
    targetPath,
    JSON.stringify(newPackageData, null, 2),
    "utf8"
  );
  console.log(`Created package.json in ${targetPath}`);
  return newPackageData;
}
async function addLicense(packageData: any): Promise<void> {
  const license = `/** @license ${packageData.name} v${packageData.version}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
`;
  const file = path.resolve(buildPath, "./index.js");
  try {
    const data = await fse.readFile(file, "utf8");
    await fse.writeFile(file, license + data, "utf8");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(`Skipped license for ${file}`);
    } else {
      throw err;
    }
  }
}
