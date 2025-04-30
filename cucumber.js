module.exports = {
  default: {
    require: ["step-definitions/**/*.ts"],
    requireModule: ["ts-node/register"],
    format: ["progress", "html:cucumber-report.html"],
    paths: ["features/**/*.feature"],
    timeout: 20000, // 20 segundos para todos los steps
  },
};
