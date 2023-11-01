import { fileURLToPath } from "url";
import { dirname } from "path";
import fse from "fs-extra";
import path from "path";

const currentFileUrl = import.meta.url;
const currentDir = dirname(fileURLToPath(currentFileUrl));

fse.emptyDirSync(path.join(currentDir, "public", "tinymce"));
fse.copySync(
    path.join(currentDir, "node_modules", "tinymce"),
    path.join(currentDir, "public", "tinymce"),
    { overwrite: true }
);
