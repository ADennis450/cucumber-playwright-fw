module.exports = {
  default: {
      paths: [
          "./src/test/features/*.feature"
      ],
      require: [
          "./src/test/step-definitions/*.ts",
          "./src/hooks/hooks.ts"
      ],
      requireModule: [
        "ts-node/register"
    ]
  }
}