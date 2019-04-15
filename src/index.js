System.register(["fs", "fast-glob", "util", "path"], function (exports_1, context_1) {
    "use strict";
    var fs, fast_glob_1, util_1, path_1, writeFile;
    var __moduleName = context_1 && context_1.id;
    async function afterBuild({ out, reporter }) {
        await Promise.all((await fast_glob_1.default([`${path_1.join(out, 'dist-types')}/**/*.d.ts`])).map(async (file) => writeFile(path_1.join(file.replace(/.d.ts$/, '.js.flow')), compiler.compileDefinitionFile(file))));
        reporter.created(path_1.join(out, 'dist-types', 'index.js.flow'), 'types');
    }
    exports_1("afterBuild", afterBuild);
    return {
        setters: [
            function (fs_1) {
                fs = fs_1;
            },
            function (fast_glob_1_1) {
                fast_glob_1 = fast_glob_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (path_1_1) {
                path_1 = path_1_1;
            }
        ],
        execute: function () {
            writeFile = util_1.promisify(fs.writeFile);
        }
    };
});
