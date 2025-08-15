// export default {
//     preset: "ts-jest",
//     testEnvironment: "jsdom",
//     transform: {
//         "^.+\\.(ts|tsx)$": [
//             "ts-jest",
//             {
//                 tsconfig: "tsconfig.json",
//                 isolatedModules: true,
//             },
//         ],
//     },
//     moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
//     setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
// };

// export default {
//     preset: "ts-jest",
//     testEnvironment: "jsdom",
//     transform: {
//         "^.+\\.(ts|tsx)$": [
//             "ts-jest",
//             {
//                 tsconfig: "tsconfig.json",
//                 isolatedModules: true,
//                 useESM: true,
//             },
//         ],
//     },
//     extensionsToTreatAsEsm: [".ts", ".tsx"],
//     moduleNameMapper: {
//         "^solid-js$": "<rootDir>/node_modules/solid-js",
//         "^@/(.*)$": "<rootDir>/src/$1",
//     },
//     transformIgnorePatterns: ["node_modules/(?!(solid-js|solid-testing-library)/)"],
//     setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
// };

export default {
    preset: "solid-jest/preset/browser",
    setupFilesAfterEnv: ["<rootDir>/node_modules/@testing-library/jest-dom"],
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    transform: {
        "^.+\\.(t|j)sx?$": [
            "babel-jest",
            {
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: {
                                node: "current",
                            },
                        },
                    ],
                    "@babel/preset-typescript",
                    "babel-preset-solid",
                ],
            },
        ],
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "^solid-js$": "solid-js/dist/solid.cjs",
        "^solid-js/web$": "solid-js/web/dist/web.cjs",
    },
};
