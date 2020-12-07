module.exports = {
    // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
    // This option interrupts the configuration hierarchy at this file
    // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
    root: true,

    env: {
        browser: true,
        node: true,
        es6: true,
    },

    // https://eslint.vuejs.org/user-guide/#how-to-use-custom-parser
    // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
    // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
    parserOptions: {
        ecmaVersion: 2020, // allow the parsing of modern ecmascript
    },

    globals: {
        // ga: true, // Google Analytics
        process: true,
    },

    extends: [
        'plugin:vue/essential',             // Priority A: Essential (Error Prevention)
        'plugin:vue/strongly-recommended',  // Priority B: Strongly Recommended (Improving Readability)
        'plugin:vue/recommended',           // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
        '@vue/standard',
        '@vue/airbnb',

        // Import
        // https://github.com/benmosher/eslint-plugin-import
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',

        // TS
        '@vue/typescript/recommended',

        // Putout
        // https://github.com/coderaiser/putout
        // 'plugin:putout/recommended'
    ],
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    [
                        "@root",
                        "/Users/daniilchumachenko/WebServer/DEMOCRANCE/DMC_OPEN_SOURCE/formio.js/"
                    ],
                    [
                        "@",
                        "/Users/daniilchumachenko/WebServer/DEMOCRANCE/DMC_OPEN_SOURCE/formio.js/src"
                    ],
                    [
                        "~",
                        "/Users/daniilchumachenko/WebServer/DEMOCRANCE/DMC_OPEN_SOURCE/formio.js/public"
                    ]
                ],
                extensions: ['.vue', '.js', '.ts'],
            },
        },
    },
    plugins: [
        'import',
        // 'putout',
    ],

    rules: {
        // Only allow debugger in development
        'no-debugger': process.env.PRE_COMMIT ? 'error' : 'off',
        // Only allow `console.log` in development
        'no-console': process.env.PRE_COMMIT ? ['error', { allow: ['warn', 'error'] }] : 'off',

        // ===
        // Off rules
        // ===
        camelcase: 'off',
        'class-methods-use-this': 'off',    // ⚙️ detect methods that doesnt use this inside it
        'consistent-return': 'off', // ⚙️ require return statements to either always or never specify values
        'default-case': 'off',  // ⚙️ Enforce default clauses in switch statements to be last
        'eqeqeq': 'off',
        'func-names': 'off',    // ['error', 'as-needed'], // disallows anonymos functions ⚙️ might be fixed but do we need it?
        'global-require': 'off',    // ⚙️ Enforce require() on the top-level module scope
        'max-len': 'off',
        'operator-assignment': 'off',   // ⚙️ require or disallow assignment operator shorthand where possible
        'prefer-spread': 'off', // I like apply as well
        'prefer-rest-params': 'off',    // I like apply as well
        'standard/no-callback-literal': 'off',  // ⚙️ Ensures that we strictly follow the callback pattern with undefined, null or an error object in the first position of a callback
        // 'no-shadow': 'off',  // ⚙️ disallow variable declarations from shadowing variables declared in the outer scope
        // 'guard-for-in': 'off',

        'no-alert': 'off',  // ⚙️ fix & and change to error
        'no-await-in-loop': 'off',  // ⚙️ disallows the use of await within loop bodies use Promise.all() instead
        'no-continue': 'off',
        'no-nested-ternary': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',  // iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations
        'no-restricted-globals': 'off',
        'no-param-reassign': 'off', // ⚙️ prevent unintended behavior caused by modification or reassignment of function parameters
        'no-unused-vars': ['error', { args: 'none' }],    // ['error', {args: 'none'}]
        'no-useless-escape': 'off', // ⚙️ dnon-special characters in strings and regular expressions doesn't have any effects on results
        'no-underscore-dangle': 'off',  // ⚙️ disallows dangling underscores in identifiers.

        'import/extensions': 'off', // Ensure consistent use of file extension within the import path
        'import/no-extraneous-dependencies': 'off', // Forbid the import of external modules that are not declared in the package.json's dependencies
        'import/no-dynamic-require': 'off', // ⚙️ Forbid require() calls with expressions
        'import/prefer-default-export': 'off',  // When there is only a single export from a module, prefer using default export over named export

        // We might wonna fix nex 2 rules ⬇️
        'vue/require-prop-types': 'off',
        'vue/require-default-prop': 'off',
        'vue/no-v-html': 'off',

        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 'off',    // TODO
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-extra-semi': 'off',  // ⚙️
        '@typescript-eslint/explicit-module-boundary-types': 'off', // ⚙️
        '@typescript-eslint/interface-name-prefix': 'off',

        // ===
        // BUG FIXING (ESLint won't compile if that rule is on)
        // ===
        'template-curly-spacing': 'off',

        // ===
        // Import rules
        // ===
        'no-duplicate-imports': 'error',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'unknown',
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                },
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'after',
                    },
                ],
            },
        ],
        'import/namespace': [
            'error',
            {
                allowComputed: true,
            },
        ],

        // ===
        // JS
        // ===
        'no-const-assign': 'error',
        'no-undef': 'error',
        'no-useless-concat': 'error',

        'no-irregular-whitespace': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        // 'prefer-template': 'warn',   // FIX ⚙️
        'array-bracket-spacing': ['error', 'always', { objectsInArrays: false }],
        'arrow-parens': ['error', 'as-needed'],
        'brace-style': ['warn', 'stroustrup'],
        'comma-dangle': ['error', 'always-multiline'],
        'lines-between-class-members': ["error", "always", { exceptAfterSingleLine: true }],
        'no-bitwise': ['error', { allow: ['^', '>>>'] }],
        'eol-last': ['error', 'always'],
        'prefer-destructuring': ['warn', { object: true, array: false }], // ⚙️ fix & and change to error
        'quote-props': ['error', 'consistent-as-needed'],
        semi: ['error', 'always'],
        indent: [
            'warn',
            4,
            {
                CallExpression: {
                    arguments: 2,
                },
                FunctionDeclaration: {
                    body: 1,
                    parameters: 2,
                },
                FunctionExpression: {
                    body: 1,
                    parameters: 2,
                },
                SwitchCase: 1,
                MemberExpression: 1,
                ignoredNodes: ['ConditionalExpression'],
            },
        ],
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
        'newline-per-chained-call': [
            'error',
            {
                ignoreChainWithDepth: 3,
            },
        ],
        'object-curly-newline': [
            'error',
            {
                multiline: true,
                consistent: true,
            },
        ],
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],

        // ===
        // Vue
        // ===
        'vue/html-closing-bracket-spacing': 'error',
        'vue/no-template-shadow': 'error',
        'vue/this-in-template': ['error', 'never'],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                ignores: ['VElement[name=highlight-code].children'],
            },
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 2,
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],
        'vue/script-indent': [
            'warn',
            4,
            {
                baseIndent: 1,
                switchCase: 1,
            },
        ],
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    'UNIQUE',
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],
            },
        ],

        // ===
        // TS
        // ===
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
                typedefs: true,
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                'selector': 'interface',
                'format': ['PascalCase'],
                'custom': {
                    'regex': '^I[A-Z]',
                    'match': true
                }
            }
        ]
    },

    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
        {
            files: ['*.js', '*.ts'],
            rules: {
                'vue/script-indent': 'off',
            },
        },
        // {
        //     env: {
        //         jest: true,
        //     },
        //     globals: {
        //         mount: false,
        //         shallowMount: false,
        //         shallowMountView: false,
        //         createComponentMocks: false,
        //         createModuleStore: false,
        //     },
        //     files: [
        //         '**/*.spec.{j,t}s?(x)',
        //         '**/*.unit.{j,t}s?(x)',
        //         // '**/__tests__/*.{j,t}s?(x)',
        //         // '**/tests/unit/**/*.spec.{j,t}s?(x)',
        //         // '**/(*.)spec.{j,t}s?(x)',
        //     ],
        //     extends: [
        //         // Jest
        //         'plugin:jest/recommended',
        //     ],
        //     plugins: ['jest'],
        // },
    ],
};
