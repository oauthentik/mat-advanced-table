module.exports = {
  pkgRoot: "dist/mat-advanced-table",
  tarballDir: "dist/",
  branch: "master",
  verifyConditions: [
    "@semantic-release/npm",
    "@semantic-release/git",
    "@qiwi/semantic-release-gh-pages-plugin",
  ],
  publish: [
    "@semantic-release/npm",
    "@semantic-release/github",
    [
      "@qiwi/semantic-release-gh-pages-plugin",
      {
        msg: "deploy gh-pages",
        src: "dist/mat-advanced-table-examples",
      },
    ],
  ],
};
