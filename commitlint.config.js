module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type enforcement - more restrictive than default
    'type-enum': [
      2,
      'always',
      [
        'build', // Changes that affect the build system
        'ci', // Changes to CI configuration files and scripts
        'docs', // Documentation only changes
        'feat', // A new feature
        'fix', // A bug fix
        'perf', // A code change that improves performance
        'refactor', // A code change that neither fixes a bug nor adds a feature
        'style', // Changes that do not affect the meaning of the code
        'test', // Adding missing tests or correcting existing tests
        'revert', // Reverts a previous commit
        'chore', // Other changes that don't modify src or test files
        'security', // Security improvements
      ],
    ],

    // Subject line rules
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 100],
    'subject-min-length': [2, 'always', 3],

    // Type rules
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-max-length': [2, 'always', 10],

    // Scope rules
    'scope-case': [2, 'always', 'lower-case'],
    'scope-max-length': [2, 'always', 20],

    // Header rules
    'header-max-length': [2, 'always', 120],
    'header-min-length': [2, 'always', 10],

    // Body rules
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 100],

    // Footer rules
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 100],

    // Additional custom rules for security
    'signed-off-by': [2, 'always', 'Signed-off-by:'],
  },

  // Custom validators
  plugins: [
    {
      rules: {
        'no-secrets-in-message': (parsed: { raw: string }) => {
          const message = parsed.raw;
          const secretPatterns = [
            /[A-Za-z0-9+/]{40,}/, // Base64 encoded secrets
            /[0-9a-f]{32,}/, // Hexadecimal secrets
            /(password|secret|key|token)[\s=:]+[\w\-+/]{8,}/i,
            /-----BEGIN[\s\S]+?-----END/, // Private keys
          ];

          for (const pattern of secretPatterns) {
            if (pattern.test(message)) {
              return [false, 'Commit message appears to contain secrets'];
            }
          }
          return [true];
        },
      },
    },
  ],

  // Configure help URL
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
};
