module.exports = {
    default: {
        tags: process.env.npm_config_TAGS || "",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/features/**.feature",
            "src/features/**/**.feature"
        ],
        publishQuiet: true,
        dryRun: false,
        require: [
            "src/steps/*.ts",
            "src/steps/**/*.ts",
            "src/hooks/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:reports/cucumber-report.html",
            "json:reports/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 1
    },
    rerun: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        publishQuiet: true,
        dryRun: false,
        require: [
            "src/steps/*.ts",
            "src/steps/**/*.ts",
            "src/hooks/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:reports/cucumber-report.html",
            "json:reports/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        parallel: 2
    }
}