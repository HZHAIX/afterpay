module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json"
    },
    "extends": [
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
        "plugin:prettier/recommended"
    ],
    "plugins": ["simple-import-sort", "import"],
    "overrides": [
        {
            "files": ["./src/**/*.{ts,tsx}"],
            "rules": {
                "simple-import-sort/sort": [
                    "error",
                    {
                        "groups": [
                            // Packages. `react` related packages come first.
                            ["^react", "^@?\\w"],
                            // Internal packages.
                            ["^(@src|@components|@reducers|@utils|@features|@types)(/.*|$)"],
                            // Other relative imports. Put same-folder imports and `.` last.
                            ["^\\.\\.(?!/?$)", "^\\.\\./?$","^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
                        ]
                    }
                ]
            }
        }
    ],
    "globals": {
        "__DEV__": true
    }
}
