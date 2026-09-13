import { error as logError, log } from 'node:console';
import { existsSync, lstatSync, readFileSync, realpathSync, statSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, readdir, rm, symlink, writeFile } from 'node:fs/promises';
import { dirname, extname, isAbsolute, join, posix, relative, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

/** @typedef {import('node:fs').Dirent} Dirent */
/** @typedef {import('typescript').ArrayLiteralExpression} ArrayLiteralExpression */
/** @typedef {import('typescript').CompilerOptions} CompilerOptions */
/** @typedef {import('typescript').Expression} Expression */
/** @typedef {import('typescript').FunctionLikeDeclaration} FunctionLikeDeclaration */
/** @typedef {import('typescript').Identifier} Identifier */
/** @typedef {import('typescript').JsxAttributes} JsxAttributes */
/** @typedef {import('typescript').MethodDeclaration} MethodDeclaration */
/** @typedef {import('typescript').Node} Node */
/** @typedef {import('typescript').ObjectLiteralElementLike} ObjectLiteralElementLike */
/** @typedef {import('typescript').ObjectLiteralExpression} ObjectLiteralExpression */
/** @typedef {import('typescript').SourceFile} SourceFile */
/** @typedef {import('typescript').Statement} Statement */
/** @typedef {import('typescript').Symbol} TypeScriptSymbol */
/** @typedef {import('typescript').TypeChecker} TypeChecker */
/** @typedef {import('typescript').VariableDeclaration} VariableDeclaration */
/**
 * @typedef {Record<string, unknown> & {
 *   adapter?: unknown,
 *   alias?: unknown,
 *   ambientDeclarations?: unknown,
 *   apiToMainExceptions?: unknown,
 *   className?: unknown,
 *   compatibility?: unknown,
 *   contentSecurityPolicy?: unknown,
 *   cssVariable?: unknown,
 *   designTokenEntries?: unknown,
 *   externalHomepage?: unknown,
 *   facades?: unknown,
 *   forbiddenFiles?: unknown,
 *   forbiddenRoots?: unknown,
 *   forbiddenSymbols?: unknown,
 *   generated?: unknown,
 *   group?: unknown,
 *   headersFile?: unknown,
 *   hex?: unknown,
 *   iframeAllow?: unknown,
 *   iframeReferrerPolicy?: unknown,
 *   iframeSandbox?: unknown,
 *   kind?: unknown,
 *   module?: unknown,
 *   name?: unknown,
 *   owner?: unknown,
 *   package?: unknown,
 *   packageManifest?: unknown,
 *   publicPath?: unknown,
 *   references?: unknown,
 *   route?: unknown,
 *   schemaVersion?: unknown,
 *   source?: unknown,
 *   specifier?: unknown,
 *   tailwindMappings?: unknown,
 *   target?: unknown,
 *   targetOwner?: unknown,
 *   textClass?: unknown,
 *   tokenAliases?: unknown,
 *   tokenDefinitions?: unknown,
 *   usage?: unknown,
 *   value?: unknown,
 * }} UnknownRecord
 */
/** @typedef {TypeScriptSymbol | string} BindingKey */
/** @typedef {'module' | 'cwd' | 'literal'} StaticPathAnchor */
/** @typedef {'import' | 're-export' | 'import-equals' | 'import-type' | 'dynamic-import' | 'require' | 'require-resolve'} ImportEdgeKind */
/** @typedef {'iframe-src' | 'redirect-location'} HomepageReferenceKind */
/** @typedef {'client-redirect' | 'module-reexport' | 'rewrite' | 'redirect'} FacadeKind */
/** @typedef {'shared' | 'feature-ui' | 'composition' | 'content' | 'service' | 'app' | 'other'} ContextLayer */

/**
 * @typedef Location
 * @property {number} line
 * @property {number} column
 */

/**
 * @typedef HomepageReference
 * @property {string} source
 * @property {HomepageReferenceKind} kind
 */

/**
 * @typedef ExternalHomepageBoundary
 * @property {string} package
 * @property {string} packageManifest
 * @property {string} source
 * @property {string} adapter
 * @property {string} generated
 * @property {string} publicPath
 * @property {string} headersFile
 * @property {string} contentSecurityPolicy
 * @property {string} iframeSandbox
 * @property {string} iframeAllow
 * @property {string} iframeReferrerPolicy
 * @property {HomepageReference[]} references
 */

/**
 * @typedef ClientRedirectFacade
 * @property {string} route
 * @property {string} owner
 * @property {'client-redirect'} kind
 * @property {string} target
 * @property {string} targetOwner
 */

/**
 * @typedef ModuleReexportFacade
 * @property {string} route
 * @property {string} owner
 * @property {'module-reexport'} kind
 * @property {string} specifier
 * @property {string} targetOwner
 */

/**
 * @typedef RewriteFacade
 * @property {string} route
 * @property {string} owner
 * @property {'rewrite'} kind
 * @property {string} target
 * @property {string} targetOwner
 */

/**
 * @typedef RedirectFacade
 * @property {string} route
 * @property {string} owner
 * @property {'redirect'} kind
 * @property {string} target
 * @property {string} targetOwner
 */

/** @typedef {ClientRedirectFacade | ModuleReexportFacade | RewriteFacade | RedirectFacade} CompatibilityFacade */

/**
 * @typedef AmbientDeclaration
 * @property {string} module
 * @property {string} owner
 */

/**
 * @typedef TokenDefinition
 * @property {string} owner
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef TokenAlias
 * @property {string} owner
 * @property {string} alias
 * @property {string} target
 */

/**
 * @typedef TailwindMapping
 * @property {string} owner
 * @property {string} name
 * @property {string} cssVariable
 */

/**
 * @typedef DesignTokenEntry
 * @property {string} owner
 * @property {string} group
 * @property {string} name
 * @property {string} className
 * @property {string} hex
 * @property {string} cssVariable
 * @property {string} textClass
 * @property {string} usage
 */

/**
 * @typedef CompatibilityBudget
 * @property {CompatibilityFacade[]} facades
 * @property {AmbientDeclaration[]} ambientDeclarations
 * @property {TokenDefinition[]} tokenDefinitions
 * @property {TokenAlias[]} tokenAliases
 * @property {TailwindMapping[]} tailwindMappings
 * @property {DesignTokenEntry[]} designTokenEntries
 */

/**
 * @typedef ApiToMainException
 * @property {string} source
 * @property {string} specifier
 * @property {string} target
 */

/**
 * @typedef ArchitectureManifest
 * @property {1} schemaVersion
 * @property {ExternalHomepageBoundary} externalHomepage
 * @property {CompatibilityBudget} compatibility
 * @property {string[]} forbiddenRoots
 * @property {string[]} forbiddenFiles
 * @property {string[]} forbiddenSymbols
 * @property {ApiToMainException[]} apiToMainExceptions
 */

/**
 * @typedef NamedImportBinding
 * @property {string} imported
 * @property {string} local
 * @property {boolean} typeOnly
 */

/**
 * @typedef ImportDeclarationFact
 * @property {string} module
 * @property {string | undefined} [defaultBinding]
 * @property {string | undefined} [namespaceBinding]
 * @property {NamedImportBinding[]} namedBindings
 * @property {boolean} typeOnly
 */

/**
 * @typedef ImportResolution
 * @property {string | undefined} logicalTarget
 * @property {string | undefined} resolvedTarget
 * @property {string | undefined} resolvedAbsolute
 * @property {string | undefined} realResolvedAbsolute
 */

/**
 * @typedef {ImportResolution & Location & {
 *   source: string,
 *   kind: ImportEdgeKind,
 *   specifier: string,
 * }} ImportEdge
 */

/**
 * @typedef LiteralFact
 * @property {string} source
 * @property {string} value
 * @property {number} line
 * @property {number} column
 * @property {Node} node
 * @property {SourceFile} sourceFile
 */

/** @typedef {Location & { source: string, value: string }} StaticStringReference */
/** @typedef {Location & { source: string, name: string }} IdentifierFact */
/** @typedef {Location & { source: string, name: string, kind: string }} StaticNameFact */
/** @typedef {Location & { source: string, kind: string, values: Array<string | undefined> }} DynamicCodeExecution */
/** @typedef {Location & { source: string, value: string, kind: string }} NetworkReference */
/** @typedef {Location & { source: string, value: string }} IgnorePattern */
/** @typedef {Location & { source: string, kind: 'root-call' | 'frame-return' | 'parent-call', valid: boolean }} HomepageCompositionReference */
/** @typedef {Location & { source: string, module: string }} AmbientModuleFact */

/**
 * @typedef StaticPathInfo
 * @property {string} absolutePath
 * @property {StaticPathAnchor} anchor
 */

/**
 * @typedef RepositoryPathInfo
 * @property {string} absolutePath
 * @property {StaticPathAnchor} anchor
 * @property {string | undefined} canonicalAbsolutePath
 * @property {string | undefined} repositoryPath
 * @property {string | undefined} canonicalRepositoryPath
 */

/**
 * @typedef StaticPathReference
 * @property {string} path
 * @property {string} absolutePath
 * @property {string | undefined} canonicalPath
 * @property {string | undefined} canonicalAbsolutePath
 * @property {StaticPathAnchor} anchor
 * @property {number} line
 * @property {number} column
 */

/** @typedef {Location & { sourceFile: string, source: string, destination: string | undefined }} RoutePair */
/** @typedef {Location & { source: string, node: MethodDeclaration }} RewriteMethodFact */
/** @typedef {Location & { target: string }} MutationFact */

/**
 * @typedef IframeReference
 * @property {string} source
 * @property {'iframe-src'} kind
 * @property {string | undefined} value
 * @property {string | undefined} sandbox
 * @property {string | undefined} allow
 * @property {string | undefined} referrerPolicy
 * @property {string | undefined} renderedBy
 * @property {boolean} directlyReturned
 * @property {number} line
 * @property {number} column
 */

/** @typedef {Location & { source: string, kind: 'redirect-location', value: string | undefined }} LocationHeaderReference */
/** @typedef {Location & { source: string, status: number | undefined, location: string | undefined }} ResponseRedirect */
/** @typedef {Location & { receiver: string, name: string, ownerFunction: string | undefined, awaited: boolean, insideFinally: boolean, position: number }} PropertyCall */
/** @typedef {Location & { name: string, ownerFunction: string | undefined, targetPosition: number | undefined, staticArguments: Array<string | undefined>, staticBooleanArguments: Array<boolean | undefined>, argumentTexts: string[], awaited: boolean, insideFinally: boolean, position: number }} DirectCall */
/** @typedef {Location & TailwindMapping} TailwindMappingFact */
/** @typedef {Location & DesignTokenEntry} DesignTokenEntryFact */

/**
 * @typedef FileOperation
 * @property {string} kind
 * @property {number} argumentIndex
 * @property {string | undefined} path
 * @property {string | undefined} absolutePath
 * @property {string | undefined} canonicalPath
 * @property {string | undefined} canonicalAbsolutePath
 * @property {StaticPathAnchor | undefined} anchor
 * @property {string | undefined} ownerFunction
 * @property {Array<string | undefined>} staticArguments
 * @property {string[]} argumentTexts
 * @property {boolean} awaited
 * @property {boolean} insideFinally
 * @property {number} position
 * @property {number} line
 * @property {number} column
 */

/** @typedef {Location & { message: string }} ParseDiagnostic */

/**
 * @typedef SourceFacts
 * @property {string} absolutePath
 * @property {ParseDiagnostic[]} parseDiagnostics
 * @property {string} relativePath
 * @property {SourceFile} sourceFile
 * @property {string} tokenSignature
 * @property {ImportEdge[]} edges
 * @property {ImportDeclarationFact[]} importDeclarations
 * @property {LiteralFact[]} literals
 * @property {StaticStringReference[]} staticStringReferences
 * @property {IdentifierFact[]} identifiers
 * @property {StaticNameFact[]} staticNames
 * @property {DynamicCodeExecution[]} dynamicCodeExecutions
 * @property {NetworkReference[]} networkReferences
 * @property {IgnorePattern[]} ignorePatterns
 * @property {HomepageCompositionReference[]} homepageCompositionReferences
 * @property {Set<number>} compatibilityLiteralPositions
 * @property {AmbientModuleFact[]} ambientModules
 * @property {StaticPathReference[]} staticPathReferences
 * @property {RoutePair[]} rewritePairs
 * @property {RewriteMethodFact[]} rewriteMethods
 * @property {RoutePair[]} redirectPairs
 * @property {string[]} nextPageExtensions
 * @property {boolean} nextPageExtensionsValid
 * @property {boolean} nextRouteMethodsValid
 * @property {boolean} hasReachableDefaultConfig
 * @property {MutationFact[]} defaultExportMutations
 * @property {string[]} locationReplaceTargets
 * @property {IframeReference[]} iframeReferences
 * @property {LocationHeaderReference[]} locationHeaderReferences
 * @property {ResponseRedirect[]} responseRedirects
 * @property {PropertyCall[]} propertyCalls
 * @property {DirectCall[]} directCalls
 * @property {TailwindMappingFact[]} tailwindMappings
 * @property {DesignTokenEntryFact[]} designTokenEntries
 * @property {MutationFact[]} designTokenMutations
 * @property {FileOperation[]} fileOperations
 */

/**
 * @typedef CompatibilityOwners
 * @property {Set<string>} tailwind
 * @property {Set<string>} designTokens
 */

/** @typedef {{ code: string, message: string }} Finding */

/**
 * @typedef FindingCollector
 * @property {(code: string, message: string) => void} add
 * @property {() => Finding[]} list
 */

/** @typedef {{ layer: ContextLayer, context: string | undefined }} ContextOwner */
/** @typedef {{ route: string, kind: string }} RouteIdentity */
/** @typedef {{ owner: string, route: string, kind: string, line?: number, column?: number }} RouteProducer */
/** @typedef {{ token: string, owner: string, line: number }} CssTokenUsage */
/** @typedef {{ name: string, value: string, start: number, end: number, line: number, liveRoot: boolean }} CssDeclaration */

/**
 * @typedef ExactComparableEntry
 * @property {string | undefined} [alias]
 * @property {string | undefined} [className]
 * @property {number | undefined} [column]
 * @property {string | undefined} [cssVariable]
 * @property {string | undefined} [defaultBinding]
 * @property {string | undefined} [group]
 * @property {string | undefined} [hex]
 * @property {string | undefined} [kind]
 * @property {number | undefined} [line]
 * @property {string | undefined} [module]
 * @property {string | undefined} [name]
 * @property {NamedImportBinding[] | undefined} [namedBindings]
 * @property {string | undefined} [namespaceBinding]
 * @property {string | undefined} [owner]
 * @property {string | undefined} [source]
 * @property {string | undefined} [target]
 * @property {string | undefined} [textClass]
 * @property {boolean | undefined} [typeOnly]
 * @property {string | undefined} [usage]
 * @property {boolean | undefined} [valid]
 * @property {string | undefined} [value]
 */
/** @typedef {{ source: string, declarations: CssDeclaration[] }} CssFacts */
/** @typedef {Map<string, string>} FixtureFiles */

/**
 * @typedef RepositorySelfTestCase
 * @property {string} name
 * @property {string[]} expectedCodes
 * @property {string[]} [expectedMessages]
 * @property {number} [expectedFindingCount]
 * @property {(files: FixtureFiles) => void} [mutate]
 * @property {(candidate: ArchitectureManifest) => void} [mutateManifest]
 * @property {(caseRoot: string, files: FixtureFiles) => Promise<void>} [afterWrite]
 */

/**
 * @typedef MutableManifestCandidate
 * @property {number} schemaVersion
 * @property {Omit<ExternalHomepageBoundary, 'references'> & { references: Array<HomepageReference | null>, unexpected?: unknown }} externalHomepage
 * @property {{
 *   facades: Array<CompatibilityFacade | null>,
 *   ambientDeclarations: Array<AmbientDeclaration | null>,
 *   tokenDefinitions: Array<TokenDefinition | null>,
 *   tokenAliases: Array<TokenAlias | null>,
 *   tailwindMappings: Array<TailwindMapping | null>,
 *   designTokenEntries: Array<DesignTokenEntry | null>,
 * }} compatibility
 * @property {Array<string | null>} forbiddenRoots
 * @property {Array<string | null>} forbiddenFiles
 * @property {Array<string | null>} forbiddenSymbols
 * @property {Array<ApiToMainException | null>} apiToMainExceptions
 */

/**
 * @typedef ManifestSelfTestCase
 * @property {string} name
 * @property {string[]} expectedErrors
 * @property {(candidate: MutableManifestCandidate) => void} mutate
 */

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const manifestPath = join(repositoryRoot, 'architecture', 'compatibility-manifest.json');
const validatorSourcePath = 'scripts/validate-architecture.mjs';
/** @type {Set<string>} */
const sourceExtensions = new Set(['.ts', '.tsx', '.mts', '.cts', '.js', '.jsx', '.mjs', '.cjs']);
/** @type {string[]} */
const resolutionExtensions = ['.ts', '.tsx', '.mts', '.cts', '.d.ts', '.js', '.jsx', '.mjs', '.cjs', '.json', '.css'];
/** @type {Set<string>} */
const fileSystemModuleNames = new Set(['fs', 'fs/promises', 'node:fs', 'node:fs/promises']);
/** @type {Set<string>} */
const pathModuleNames = new Set(['node:path', 'path']);
/** @type {Set<string>} */
const urlModuleNames = new Set(['node:url', 'url']);
/** @type {Set<string>} */
const processModuleNames = new Set(['node:process', 'process']);
/** @type {Set<string>} */
const moduleModuleNames = new Set(['node:module', 'module']);
/** @type {string[]} */
const defaultNextPageExtensions = ['js', 'jsx', 'ts', 'tsx'];
/** @type {Set<import('typescript').SyntaxKind>} */
const assignmentOperatorKinds = new Set([
  ts.SyntaxKind.EqualsToken,
  ts.SyntaxKind.PlusEqualsToken,
  ts.SyntaxKind.MinusEqualsToken,
  ts.SyntaxKind.AsteriskEqualsToken,
  ts.SyntaxKind.AsteriskAsteriskEqualsToken,
  ts.SyntaxKind.SlashEqualsToken,
  ts.SyntaxKind.PercentEqualsToken,
  ts.SyntaxKind.LessThanLessThanEqualsToken,
  ts.SyntaxKind.GreaterThanGreaterThanEqualsToken,
  ts.SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken,
  ts.SyntaxKind.AmpersandEqualsToken,
  ts.SyntaxKind.BarEqualsToken,
  ts.SyntaxKind.CaretEqualsToken,
  ts.SyntaxKind.AmpersandAmpersandEqualsToken,
  ts.SyntaxKind.BarBarEqualsToken,
  ts.SyntaxKind.QuestionQuestionEqualsToken,
]);
/** @type {Map<string, readonly number[]>} */
const fileSystemOperationArgumentIndexes = new Map([
  ...[
    'access',
    'accessSync',
    'appendFile',
    'appendFileSync',
    'chmod',
    'chmodSync',
    'chown',
    'chownSync',
    'createReadStream',
    'createWriteStream',
    'lstat',
    'lstatSync',
    'mkdir',
    'mkdirSync',
    'open',
    'openSync',
    'readFile',
    'readFileSync',
    'readlink',
    'readlinkSync',
    'realpath',
    'realpathSync',
    'rm',
    'rmSync',
    'rmdir',
    'rmdirSync',
    'stat',
    'statSync',
    'truncate',
    'truncateSync',
    'unlink',
    'unlinkSync',
    'utimes',
    'utimesSync',
    'watch',
    'writeFile',
    'writeFileSync',
  ].map(name => /** @type {[string, readonly number[]]} */ ([name, [0]])),
  ...[
    'copyFile',
    'copyFileSync',
    'cp',
    'cpSync',
    'link',
    'linkSync',
    'rename',
    'renameSync',
    'symlink',
    'symlinkSync',
  ].map(name => /** @type {[string, readonly number[]]} */ ([name, [0, 1]])),
]);
/** @type {Set<string>} */
const nonJavaScriptExecutableExtensions = new Set([
  '.bash',
  '.ex',
  '.exs',
  '.fish',
  '.go',
  '.htm',
  '.html',
  '.hs',
  '.java',
  '.kt',
  '.kts',
  '.lua',
  '.php',
  '.ps1',
  '.py',
  '.rb',
  '.rs',
  '.sh',
  '.swift',
  '.zsh',
]);
const frozenHomepageHeadersSource = [
  '/static/cc4pm-homepage.html',
  '  Content-Security-Policy: sandbox allow-scripts allow-popups',
  '  Referrer-Policy: no-referrer',
  '  X-Content-Type-Options: nosniff',
  '',
].join('\n');
/** @type {Set<string>} */
const homepageArtifactVerificationWorkflows = new Set([
  '.github/workflows/deploy.yml',
  '.github/workflows/pr-check.yml',
]);
/** @type {{ rootOwner: string, rootComponent: string, owner: string, parentComponent: string, frameComponent: string, activeSection: string }} */
const frozenHomepageComposition = {
  rootOwner: 'src/app/(site)/page.tsx',
  rootComponent: 'RootPage',
  owner: 'src/components/HomePageWithNav.tsx',
  parentComponent: 'HomePageWithNav',
  frameComponent: 'Cc4pmHomepageFrame',
  activeSection: 'home',
};
/** @type {Set<string>} */
const ignoredRootDirectories = new Set([
  '.cache',
  '.claude',
  '.git',
  '.next',
  '.open-next',
  '.wrangler',
  'build',
  'coverage',
  'dist',
  'node_modules',
]);
/** @type {Map<string, string[]>} */
const javascriptExtensionSubstitutions = new Map([
  ['.js', ['.ts', '.tsx', '.d.ts', '.js']],
  ['.jsx', ['.tsx', '.ts', '.jsx']],
  ['.mjs', ['.mts', '.mjs']],
  ['.cjs', ['.cts', '.cjs']],
]);
/** @type {string[]} */
const requiredForbiddenRoots = [
  'shared/scripts/generated',
  'src/client',
  'src/components-next',
  'src/legacy',
  'src/scripts/generated',
];
/** @type {string[]} */
const requiredForbiddenFiles = [
  'scripts/build-client-safe.cjs',
  'scripts/build-client-safe.js',
  'scripts/build-client.cjs',
  'scripts/build-client.js',
  'scripts/migrate-to-legacy.sh',
];
/** @type {string[]} */
const requiredForbiddenSymbols = ['LegacyPageWrapper'];
/** @type {ExternalHomepageBoundary} */
const frozenHomepageBoundary = {
  package: '@cc4pm/homepage',
  packageManifest: 'package.json',
  source: 'node_modules/@cc4pm/homepage/index.html',
  adapter: 'scripts/prepare-cc4pm-homepage.mjs',
  generated: 'public/static/cc4pm-homepage.html',
  publicPath: '/static/cc4pm-homepage.html',
  headersFile: 'public/_headers',
  contentSecurityPolicy: 'sandbox allow-scripts allow-popups',
  iframeSandbox: 'allow-popups allow-scripts',
  iframeAllow: 'clipboard-write',
  iframeReferrerPolicy: 'no-referrer',
  references: [
    { source: 'src/components/HomePageWithNav.tsx', kind: 'iframe-src' },
    { source: 'src/app/api/static/homepage/route.ts', kind: 'redirect-location' },
  ],
};
/** @type {ImportDeclarationFact[]} */
const frozenHomepageAdapterImports = [
  {
    module: 'node:console',
    namedBindings: [{ imported: 'log', local: 'log', typeOnly: false }],
    typeOnly: false,
  },
  {
    module: 'node:crypto',
    namedBindings: [{ imported: 'randomUUID', local: 'randomUUID', typeOnly: false }],
    typeOnly: false,
  },
  {
    module: 'node:fs/promises',
    namedBindings: [
      { imported: 'lstat', local: 'lstat', typeOnly: false },
      { imported: 'mkdir', local: 'mkdir', typeOnly: false },
      { imported: 'open', local: 'open', typeOnly: false },
      { imported: 'readFile', local: 'readFile', typeOnly: false },
      { imported: 'rename', local: 'rename', typeOnly: false },
      { imported: 'rm', local: 'rm', typeOnly: false },
    ],
    typeOnly: false,
  },
  {
    module: 'node:path',
    namedBindings: [
      { imported: 'basename', local: 'basename', typeOnly: false },
      { imported: 'dirname', local: 'dirname', typeOnly: false },
      { imported: 'join', local: 'join', typeOnly: false },
      { imported: 'resolve', local: 'resolve', typeOnly: false },
    ],
    typeOnly: false,
  },
  { module: 'node:process', defaultBinding: 'process', namedBindings: [], typeOnly: false },
  {
    module: 'node:url',
    namedBindings: [{ imported: 'fileURLToPath', local: 'fileURLToPath', typeOnly: false }],
    typeOnly: false,
  },
];
/** @type {CompatibilityBudget} */
const maximumCompatibilityBudget = {
  facades: [
    {
      route: '/home',
      owner: 'src/app/(legacy)/home/page.tsx',
      kind: 'client-redirect',
      target: '/',
      targetOwner: 'src/app/(site)/page.tsx',
    },
    {
      route: '/v1/messages',
      owner: 'src/app/v1/messages/route.ts',
      kind: 'module-reexport',
      specifier: '@/app/api/v1/messages/route',
      targetOwner: 'src/app/api/v1/messages/route.ts',
    },
    {
      route: '/img-proxy',
      owner: 'next.config.mjs',
      kind: 'rewrite',
      target: '/api/img-proxy',
      targetOwner: 'src/app/api/img-proxy/route.ts',
    },
    {
      route: '/api/static/homepage',
      owner: 'src/app/api/static/homepage/route.ts',
      kind: 'redirect',
      target: '/static/cc4pm-homepage.html',
      targetOwner: 'public/static/cc4pm-homepage.html',
    },
  ],
  ambientDeclarations: [{ module: '@cc4pm/homepage', owner: 'types/cc4pm-homepage.d.ts' }],
  tokenDefinitions: [
    {
      owner: 'src/app/globals.css',
      name: '--color-practices-page-bg',
      value: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    },
    { owner: 'src/app/globals.css', name: '--color-practices-text-primary', value: '#0f172a' },
    { owner: 'src/app/globals.css', name: '--color-practices-text-secondary', value: '#475569' },
    { owner: 'src/app/globals.css', name: '--color-practices-bg-primary', value: '#ffffff' },
    { owner: 'src/app/globals.css', name: '--color-practices-bg-secondary', value: '#f8fafc' },
    { owner: 'src/app/globals.css', name: '--color-practices-bg-hover', value: '#f1f5f9' },
    { owner: 'src/app/globals.css', name: '--color-practices-border-color', value: '#e2e8f0' },
    { owner: 'src/app/globals.css', name: '--color-practices-border-hover', value: '#cbd5e1' },
    { owner: 'src/app/globals.css', name: '--color-practices-accent', value: '#06b6d4' },
    { owner: 'src/app/globals.css', name: '--color-practices-primary', value: '#e57a5a' },
    { owner: 'src/app/globals.css', name: '--color-practices-secondary', value: '#f08b6d' },
  ],
  tokenAliases: [
    {
      owner: 'src/app/globals.css',
      alias: '--bp-bg-primary',
      target: '--color-practices-bg-primary',
    },
    {
      owner: 'src/app/globals.css',
      alias: '--bp-bg-secondary',
      target: '--color-practices-bg-secondary',
    },
    {
      owner: 'src/app/globals.css',
      alias: '--bp-text-primary',
      target: '--color-practices-text-primary',
    },
    {
      owner: 'src/app/globals.css',
      alias: '--bp-text-secondary',
      target: '--color-practices-text-secondary',
    },
    {
      owner: 'src/app/globals.css',
      alias: '--bp-border-color',
      target: '--color-practices-border-color',
    },
    {
      owner: 'src/app/globals.css',
      alias: '--bp-border-hover',
      target: '--color-practices-border-hover',
    },
    { owner: 'src/app/globals.css', alias: '--bp-accent', target: '--color-practices-accent' },
    { owner: 'src/app/globals.css', alias: '--bp-primary', target: '--color-practices-primary' },
    { owner: 'src/app/globals.css', alias: '--bp-primary-dark', target: '--color-primary-dark' },
    { owner: 'src/app/globals.css', alias: '--bp-secondary', target: '--color-practices-secondary' },
  ],
  tailwindMappings: [
    { owner: 'tailwind.config.ts', name: 'practices-accent', cssVariable: '--color-practices-accent' },
    { owner: 'tailwind.config.ts', name: 'practices-primary', cssVariable: '--color-practices-primary' },
    { owner: 'tailwind.config.ts', name: 'practices-secondary', cssVariable: '--color-practices-secondary' },
  ],
  designTokenEntries: [
    {
      owner: 'src/styles/designTokens.ts',
      group: 'practices',
      name: '页面辅助青',
      className: 'bg-practices-accent',
      hex: '#06b6d4',
      cssVariable: '--color-practices-accent',
      textClass: 'text-accent-foreground',
      usage: '旧页面兼容用辅助色',
    },
    {
      owner: 'src/styles/designTokens.ts',
      group: 'practices',
      name: '页面暖主色',
      className: 'bg-practices-primary',
      hex: '#e57a5a',
      cssVariable: '--color-practices-primary',
      textClass: 'text-primary-foreground',
      usage: '旧页面兼容用主色',
    },
    {
      owner: 'src/styles/designTokens.ts',
      group: 'practices',
      name: '页面暖浅色',
      className: 'bg-practices-secondary',
      hex: '#f08b6d',
      cssVariable: '--color-practices-secondary',
      textClass: 'text-primary-light-foreground',
      usage: '旧页面兼容用浅色',
    },
  ],
};
/** @type {ApiToMainException[]} */
const maximumApiToMainExceptions = [
  {
    source: 'src/app/api/playground/route.ts',
    specifier: '@/app/(tools)/playground/_lib/playgroundRequest',
    target: 'src/app/(tools)/playground/_lib/playgroundRequest.ts',
  },
];
/** @type {Map<string, string>} */
const exactFacadeSourceContracts = new Map([
  [
    'src/app/(legacy)/home/page.tsx',
    [
      "import { LegacyHomeHashBridge } from '@/components/home';",
      '',
      'export default function LegacyHomePage() {',
      '  return <LegacyHomeHashBridge redirectHome />;',
      '}',
      '',
    ].join('\n'),
  ],
  [
    'src/app/v1/messages/route.ts',
    ["export { POST } from '@/app/api/v1/messages/route';", '', "export const runtime = 'nodejs';", ''].join('\n'),
  ],
  [
    'src/app/api/static/homepage/route.ts',
    [
      "export const dynamic = 'force-static';",
      '',
      'export function GET() {',
      '  return new Response(null, {',
      '    status: 307,',
      '    headers: {',
      "      Location: '/static/cc4pm-homepage.html',",
      '    },',
      '  });',
      '}',
      '',
    ].join('\n'),
  ],
]);

/** @param {string} left @param {string} right @returns {number} */
function compareText(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

/** @param {string} value @returns {boolean} */
function isNetworkUrl(value) {
  const normalized = value.toLowerCase();
  return normalized.startsWith('http://') || normalized.startsWith('https://') || value.startsWith('//');
}

/** @param {string} path @returns {boolean} */
function isEslintConfigPath(path) {
  const fileName = path.slice(path.lastIndexOf('/') + 1);
  return (
    fileName === 'eslint.config.js' ||
    fileName === 'eslint.config.cjs' ||
    fileName === 'eslint.config.mjs' ||
    fileName === 'eslint.config.ts' ||
    fileName === 'eslint.config.cts' ||
    fileName === 'eslint.config.mts'
  );
}

/** @param {string} root @param {string} absolutePath @returns {string} */
function toRepositoryPath(root, absolutePath) {
  return relative(root, absolutePath).replaceAll('\\', '/');
}

/** @param {string} candidate @param {string} parent @returns {boolean} */
function isWithinPath(candidate, parent) {
  return candidate === parent || candidate.startsWith(`${parent}/`);
}

/** @param {string} target @returns {boolean} */
function isApiToRouteBoundaryTarget(target) {
  return /^src\/app\/\((?:site|tools|immersive|legacy)\)(?:\/|$)/.test(target);
}

/** @param {string} specifier @returns {boolean} */
function isApiToRouteBoundarySpecifier(specifier) {
  return /^@\/app\/\((?:site|tools|immersive|legacy)\)\//.test(specifier);
}

/** @param {string} path @returns {boolean} */
function isFile(path) {
  try {
    return statSync(path).isFile();
  } catch {
    return false;
  }
}

/** @param {string} path @returns {boolean} */
function isSymbolicLink(path) {
  try {
    return lstatSync(path).isSymbolicLink();
  } catch {
    return false;
  }
}

/** @param {Node | undefined} node @returns {string | undefined} */
function literalText(node) {
  if (node && (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node))) {
    return node.text;
  }

  return undefined;
}

/** @param {SourceFile} sourceFile @param {Node} node @returns {Location} */
function nodeLocation(sourceFile, node) {
  const location = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
  return { line: location.line + 1, column: location.character + 1 };
}

/** @param {string} filePath @returns {import('typescript').ScriptKind} */
function scriptKind(filePath) {
  switch (extname(filePath)) {
    case '.ts':
    case '.mts':
    case '.cts':
      return ts.ScriptKind.TS;
    case '.tsx':
      return ts.ScriptKind.TSX;
    case '.jsx':
      return ts.ScriptKind.JSX;
    case '.json':
      return ts.ScriptKind.JSON;
    default:
      return ts.ScriptKind.JS;
  }
}

/**
 * @param {string} root
 * @param {(absolutePath: string) => boolean} predicate
 * @returns {Promise<string[]>}
 */
async function listFiles(root, predicate) {
  /** @type {string[]} */
  const results = [];

  /** @param {string} directory @returns {Promise<void>} */
  async function visit(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    entries.sort((left, right) => compareText(left.name, right.name));

    for (const entry of entries) {
      const absolutePath = join(directory, entry.name);
      if (entry.isDirectory()) {
        const repositoryPath = toRepositoryPath(root, absolutePath);
        if (!ignoredRootDirectories.has(repositoryPath)) {
          await visit(absolutePath);
        }
        continue;
      }

      if (entry.isFile() && predicate(absolutePath)) {
        results.push(absolutePath);
      }
    }
  }

  await visit(root);
  return results;
}

/** @param {string} root @returns {Promise<string[]>} */
async function listRepositorySymlinks(root) {
  /** @type {string[]} */
  const results = [];

  /** @param {string} directory @returns {Promise<void>} */
  async function visit(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    entries.sort((left, right) => compareText(left.name, right.name));

    for (const entry of entries) {
      const absolutePath = join(directory, entry.name);
      const repositoryPath = toRepositoryPath(root, absolutePath);

      if (entry.isSymbolicLink()) {
        results.push(repositoryPath);
        continue;
      }

      if (entry.isDirectory() && !ignoredRootDirectories.has(repositoryPath)) {
        await visit(absolutePath);
      }
    }
  }

  await visit(root);
  return results;
}

/** @param {string} root @param {string} sourcePath @param {string} specifier @returns {string | undefined} */
function localImportBase(root, sourcePath, specifier) {
  if (specifier.startsWith('@/')) {
    return resolve(root, 'src', specifier.slice(2));
  }

  if (specifier === 'src' || specifier.startsWith('src/')) {
    return resolve(root, specifier);
  }

  if (specifier === '.' || specifier === '..' || specifier.startsWith('./') || specifier.startsWith('../')) {
    return resolve(dirname(sourcePath), specifier);
  }

  return undefined;
}

/** @param {string} basePath @returns {string[]} */
function resolutionCandidates(basePath) {
  const extension = extname(basePath);
  const substitutions = javascriptExtensionSubstitutions.get(extension);

  if (substitutions) {
    const withoutExtension = basePath.slice(0, -extension.length);
    return [
      ...substitutions.map(candidateExtension => `${withoutExtension}${candidateExtension}`),
      ...substitutions.map(candidateExtension => join(basePath, `index${candidateExtension}`)),
    ];
  }

  if (extension) {
    return [basePath];
  }

  return [
    basePath,
    ...resolutionExtensions.map(candidateExtension => `${basePath}${candidateExtension}`),
    ...resolutionExtensions.map(candidateExtension => join(basePath, `index${candidateExtension}`)),
  ];
}

/** @param {string} root @param {string} absolutePath @returns {string | undefined} */
function repositoryPathForAbsolute(root, absolutePath) {
  const repositoryPath = relative(root, absolutePath);
  if (
    repositoryPath === '' ||
    repositoryPath === '..' ||
    repositoryPath.startsWith(`..${process.platform === 'win32' ? '\\' : '/'}`)
  ) {
    return undefined;
  }
  return repositoryPath.replaceAll('\\', '/');
}

/** @param {string} candidate @param {string} parent @returns {boolean} */
function isWithinAbsolutePath(candidate, parent) {
  const relativePath = relative(parent, candidate);
  return (
    relativePath === '' ||
    (relativePath !== '..' &&
      !relativePath.startsWith(`..${process.platform === 'win32' ? '\\' : '/'}`) &&
      !isAbsolute(relativePath))
  );
}

/** @param {string} absolutePath @returns {string | undefined} */
function canonicalizePath(absolutePath) {
  let existingPath = absolutePath;
  /** @type {string[]} */
  const suffix = [];

  while (!existsSync(existingPath)) {
    const parent = dirname(existingPath);
    if (parent === existingPath) {
      return undefined;
    }
    suffix.unshift(absolutePath.slice(parent.length + 1, existingPath.length));
    existingPath = parent;
  }

  try {
    return resolve(realpathSync(existingPath), ...suffix);
  } catch {
    return undefined;
  }
}

/** @param {string} root @returns {CompilerOptions} */
function defaultCompilerOptions(root) {
  return {
    allowJs: true,
    baseUrl: root,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    paths: { '@/*': ['src/*'] },
  };
}

/** @param {string} root @returns {CompilerOptions} */
function loadCompilerOptions(root) {
  const configPath = join(root, 'tsconfig.json');
  if (!isFile(configPath)) {
    return defaultCompilerOptions(root);
  }

  const config = ts.readConfigFile(configPath, ts.sys.readFile);
  if (config.error) {
    throw new Error(ts.flattenDiagnosticMessageText(config.error.messageText, '\n'));
  }
  const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root, undefined, configPath);
  if (parsed.errors.length > 0) {
    throw new Error(parsed.errors.map(error => ts.flattenDiagnosticMessageText(error.messageText, '\n')).join('\n'));
  }
  return parsed.options;
}

/**
 * @param {string} root
 * @param {string} sourcePath
 * @param {string} specifier
 * @param {CompilerOptions} compilerOptions
 * @returns {ImportResolution}
 */
function resolveLocalImport(root, sourcePath, specifier, compilerOptions) {
  const basePath = localImportBase(root, sourcePath, specifier);
  const fallbackPath = basePath ? resolutionCandidates(basePath).find(isFile) : undefined;
  const typescriptResolution = ts.resolveModuleName(specifier, sourcePath, compilerOptions, ts.sys).resolvedModule;
  const resolvedAbsolute = typescriptResolution?.resolvedFileName ?? fallbackPath;
  let realResolvedAbsolute;
  if (resolvedAbsolute) {
    try {
      realResolvedAbsolute = realpathSync(resolvedAbsolute);
    } catch {
      realResolvedAbsolute = undefined;
    }
  }

  return {
    logicalTarget: basePath ? toRepositoryPath(root, basePath) : undefined,
    resolvedTarget: resolvedAbsolute ? repositoryPathForAbsolute(root, resolvedAbsolute) : undefined,
    resolvedAbsolute,
    realResolvedAbsolute,
  };
}

/**
 * @param {string} root
 * @param {string} absolutePath
 * @param {string} text
 * @param {CompilerOptions} compilerOptions
 * @param {CompatibilityOwners} compatibilityOwners
 * @param {SourceFile | undefined} programSourceFile
 * @param {TypeChecker | undefined} checker
 * @returns {SourceFacts}
 */
function collectSourceFacts(
  root,
  absolutePath,
  text,
  compilerOptions,
  compatibilityOwners,
  programSourceFile,
  checker,
) {
  const relativePath = toRepositoryPath(root, absolutePath);
  const sourceFile =
    programSourceFile ??
    ts.createSourceFile(relativePath, text, ts.ScriptTarget.Latest, true, scriptKind(absolutePath));
  /** @type {ImportEdge[]} */
  const edges = [];
  /** @type {ImportDeclarationFact[]} */
  const importDeclarations = [];
  /** @type {LiteralFact[]} */
  const literals = [];
  /** @type {AmbientModuleFact[]} */
  const ambientModules = [];
  /** @type {RoutePair[]} */
  const rewritePairs = [];
  /** @type {RewriteMethodFact[]} */
  const rewriteMethods = [];
  /** @type {RoutePair[]} */
  const redirectPairs = [];
  /** @type {string[]} */
  const nextPageExtensions = [];
  let nextPageExtensionsValid = true;
  let nextRouteMethodsValid = true;
  /** @type {MutationFact[]} */
  const defaultExportMutations = [];
  /** @type {string[]} */
  const locationReplaceTargets = [];
  /** @type {IframeReference[]} */
  const iframeReferences = [];
  /** @type {LocationHeaderReference[]} */
  const locationHeaderReferences = [];
  /** @type {ResponseRedirect[]} */
  const responseRedirects = [];
  /** @type {PropertyCall[]} */
  const propertyCalls = [];
  /** @type {DirectCall[]} */
  const directCalls = [];
  /** @type {TailwindMappingFact[]} */
  const tailwindMappings = [];
  /** @type {DesignTokenEntryFact[]} */
  const designTokenEntries = [];
  /** @type {MutationFact[]} */
  const designTokenMutations = [];
  /** @type {VariableDeclaration | undefined} */
  let designTokenDeclaration;
  /** @type {FileOperation[]} */
  const fileOperations = [];
  /** @type {StaticPathReference[]} */
  const staticPathReferences = [];
  /** @type {StaticStringReference[]} */
  const staticStringReferences = [];
  /** @type {IdentifierFact[]} */
  const identifiers = [];
  /** @type {StaticNameFact[]} */
  const staticNames = [];
  /** @type {DynamicCodeExecution[]} */
  const dynamicCodeExecutions = [];
  /** @type {NetworkReference[]} */
  const networkReferences = [];
  /** @type {IgnorePattern[]} */
  const ignorePatterns = [];
  /** @type {HomepageCompositionReference[]} */
  const homepageCompositionReferences = [];
  /** @type {Set<number>} */
  const compatibilityLiteralPositions = new Set();
  /** @type {Map<BindingKey, StaticPathInfo | undefined>} */
  const staticPathCache = new Map();
  /** @type {Map<BindingKey, string | undefined>} */
  const staticStringCache = new Map();
  /** @type {Set<BindingKey>} */
  const pathJoinBindings = new Set();
  /** @type {Set<BindingKey>} */
  const pathResolveBindings = new Set();
  /** @type {Set<BindingKey>} */
  const pathDirnameBindings = new Set();
  /** @type {Set<BindingKey>} */
  const pathNamespaceBindings = new Set();
  /** @type {Set<BindingKey>} */
  const urlNamespaceBindings = new Set();
  /** @type {Set<BindingKey>} */
  const fileUrlToPathBindings = new Set();
  /** @type {Set<BindingKey>} */
  const urlConstructorBindings = new Set();
  /** @type {Set<BindingKey>} */
  const processNamespaceBindings = new Set();
  /** @type {Set<BindingKey>} */
  const processCwdBindings = new Set();
  /** @type {Map<string, Set<BindingKey>>} */
  const fileSystemOperationBindings = new Map(
    [...fileSystemOperationArgumentIndexes.keys()].map(name => [name, new Set()]),
  );
  /** @type {Set<BindingKey>} */
  const fileSystemNamespaceBindings = new Set();
  /** @type {Set<BindingKey>} */
  const moduleNamespaceBindings = new Set();
  /** @type {Set<BindingKey>} */
  const createRequireBindings = new Set();
  /** @type {Set<BindingKey>} */
  const requireBindings = new Set(['global:require']);
  /** @type {Set<BindingKey>} */
  const definePropertyBindings = new Set();
  /** @type {Set<BindingKey>} */
  const fetchBindings = new Set();

  /** @param {Node} node @returns {TypeScriptSymbol | undefined} */
  function valueBindingSymbol(node) {
    if (!checker || !ts.isIdentifier(node)) {
      return undefined;
    }
    if (ts.isShorthandPropertyAssignment(node.parent) && node.parent.name === node) {
      return checker.getShorthandAssignmentValueSymbol(node.parent) ?? checker.getSymbolAtLocation(node);
    }
    return checker.getSymbolAtLocation(node);
  }

  /** @param {Node} node @returns {BindingKey | undefined} */
  function bindingKey(node) {
    if (!ts.isIdentifier(node)) {
      return undefined;
    }
    const symbol = valueBindingSymbol(node);
    return symbol ?? (node.text === 'require' ? 'global:require' : `unbound:${node.text}`);
  }

  /** @param {Set<BindingKey>} bindings @param {Node} node @returns {boolean} */
  function bindingSetHas(bindings, node) {
    const key = bindingKey(node);
    return key !== undefined && bindings.has(key);
  }

  /** @param {Set<BindingKey>} bindings @param {Node} node @returns {boolean} */
  function addBinding(bindings, node) {
    const key = bindingKey(node);
    if (key === undefined) {
      return false;
    }
    const previousSize = bindings.size;
    bindings.add(key);
    return bindings.size !== previousSize;
  }

  /** @overload @param {Node} node @returns {Node} */
  /** @overload @param {undefined} node @returns {undefined} */
  /** @overload @param {Node | undefined} node @returns {Node | undefined} */
  /** @param {Node | undefined} node @returns {Node | undefined} */
  function unwrapExpression(node) {
    if (!node) {
      return undefined;
    }
    let current = node;
    while (
      ts.isParenthesizedExpression(current) ||
      ts.isAsExpression(current) ||
      ts.isTypeAssertionExpression(current) ||
      ts.isSatisfiesExpression(current) ||
      ts.isNonNullExpression(current)
    ) {
      current = current.expression;
    }
    return current;
  }

  /** @param {Node} node @returns {Expression | undefined} */
  function constantInitializer(node) {
    if (!ts.isIdentifier(node)) {
      return undefined;
    }
    const symbol = valueBindingSymbol(node);
    const declaration = symbol?.declarations?.find(candidate => ts.isVariableDeclaration(candidate));
    if (!declaration || !ts.isVariableDeclaration(declaration) || !declaration.initializer) {
      return undefined;
    }
    const declarationList = declaration.parent;
    if (!ts.isVariableDeclarationList(declarationList) || !(declarationList.flags & ts.NodeFlags.Const)) {
      return undefined;
    }
    return declaration.initializer;
  }

  /** @param {Node | undefined} node @param {Set<BindingKey>} [seen] @returns {Node | undefined} */
  function resolvedExpression(node, seen = new Set()) {
    const unwrapped = unwrapExpression(node);
    if (!unwrapped || !ts.isIdentifier(unwrapped)) {
      return unwrapped;
    }
    const key = bindingKey(unwrapped);
    if (key === undefined || seen.has(key)) {
      return unwrapped;
    }
    const initializer = constantInitializer(unwrapped);
    if (!initializer) {
      return unwrapped;
    }
    const nextSeen = new Set(seen);
    nextSeen.add(key);
    return resolvedExpression(initializer, nextSeen);
  }

  /** @param {Node | undefined} node @returns {ObjectLiteralExpression | undefined} */
  function objectLiteralValue(node) {
    const resolved = resolvedExpression(node);
    return resolved && ts.isObjectLiteralExpression(resolved) ? resolved : undefined;
  }

  /** @param {Node | undefined} node @returns {ArrayLiteralExpression | undefined} */
  function arrayLiteralValue(node) {
    const resolved = resolvedExpression(node);
    return resolved && ts.isArrayLiteralExpression(resolved) ? resolved : undefined;
  }

  for (const statement of sourceFile.statements) {
    if (!ts.isImportDeclaration(statement)) {
      continue;
    }
    const moduleName = literalText(statement.moduleSpecifier);
    if (moduleName === undefined) {
      continue;
    }
    const importClause = statement.importClause;
    const bindings = importClause?.namedBindings;
    const namedBindings =
      bindings && ts.isNamedImports(bindings)
        ? bindings.elements
            .map(element => ({
              imported: element.propertyName?.text ?? element.name.text,
              local: element.name.text,
              typeOnly: element.isTypeOnly,
            }))
            .sort((left, right) => compareText(`${left.imported}:${left.local}`, `${right.imported}:${right.local}`))
        : [];
    importDeclarations.push({
      module: moduleName,
      defaultBinding: importClause?.name?.text,
      namespaceBinding: bindings && ts.isNamespaceImport(bindings) ? bindings.name.text : undefined,
      namedBindings,
      typeOnly: importClause?.isTypeOnly ?? false,
    });
    if (pathModuleNames.has(moduleName)) {
      if (importClause?.name) {
        addBinding(pathNamespaceBindings, importClause.name);
      }
      if (bindings && ts.isNamespaceImport(bindings)) {
        addBinding(pathNamespaceBindings, bindings.name);
      } else if (bindings && ts.isNamedImports(bindings)) {
        for (const element of bindings.elements) {
          const importedName = element.propertyName?.text ?? element.name.text;
          if (importedName === 'join') {
            addBinding(pathJoinBindings, element.name);
          } else if (importedName === 'resolve') {
            addBinding(pathResolveBindings, element.name);
          } else if (importedName === 'dirname') {
            addBinding(pathDirnameBindings, element.name);
          }
        }
      }
    }
    if (urlModuleNames.has(moduleName)) {
      if (importClause?.name) {
        addBinding(urlNamespaceBindings, importClause.name);
      }
      if (bindings && ts.isNamespaceImport(bindings)) {
        addBinding(urlNamespaceBindings, bindings.name);
      } else if (bindings && ts.isNamedImports(bindings)) {
        for (const element of bindings.elements) {
          const importedName = element.propertyName?.text ?? element.name.text;
          if (importedName === 'fileURLToPath') {
            addBinding(fileUrlToPathBindings, element.name);
          } else if (importedName === 'URL') {
            addBinding(urlConstructorBindings, element.name);
          }
        }
      }
    }
    if (processModuleNames.has(moduleName)) {
      if (importClause?.name) {
        addBinding(processNamespaceBindings, importClause.name);
      }
      if (bindings && ts.isNamespaceImport(bindings)) {
        addBinding(processNamespaceBindings, bindings.name);
      } else if (bindings && ts.isNamedImports(bindings)) {
        for (const element of bindings.elements) {
          const importedName = element.propertyName?.text ?? element.name.text;
          if (importedName === 'cwd') {
            addBinding(processCwdBindings, element.name);
          }
        }
      }
    }
    if (fileSystemModuleNames.has(moduleName)) {
      if (importClause?.name) {
        addBinding(fileSystemNamespaceBindings, importClause.name);
      }
      if (bindings && ts.isNamespaceImport(bindings)) {
        addBinding(fileSystemNamespaceBindings, bindings.name);
      } else if (bindings && ts.isNamedImports(bindings)) {
        for (const element of bindings.elements) {
          const importedName = element.propertyName?.text ?? element.name.text;
          const operationBindings = fileSystemOperationBindings.get(importedName);
          if (operationBindings) {
            addBinding(operationBindings, element.name);
          } else if (importedName === 'promises') {
            addBinding(fileSystemNamespaceBindings, element.name);
          }
        }
      }
    }
    if (moduleModuleNames.has(moduleName)) {
      if (importClause?.name) {
        addBinding(moduleNamespaceBindings, importClause.name);
      }
      if (bindings && ts.isNamespaceImport(bindings)) {
        addBinding(moduleNamespaceBindings, bindings.name);
      } else if (bindings && ts.isNamedImports(bindings)) {
        for (const element of bindings.elements) {
          const importedName = element.propertyName?.text ?? element.name.text;
          if (importedName === 'createRequire') {
            addBinding(createRequireBindings, element.name);
          }
        }
      }
    }
  }

  /** @param {Node} node @param {ImportEdgeKind} kind @param {string} specifier @returns {void} */
  function addEdge(node, kind, specifier) {
    const { line, column } = nodeLocation(sourceFile, node);
    const resolution = resolveLocalImport(root, absolutePath, specifier, compilerOptions);
    edges.push({ source: relativePath, kind, specifier, line, column, ...resolution });
  }

  /** @param {Node | undefined} node @returns {string | undefined} */
  function propertyName(node) {
    if (!node) {
      return undefined;
    }
    if (ts.isIdentifier(node) || ts.isStringLiteral(node) || ts.isNumericLiteral(node)) {
      return node.text;
    }
    if (ts.isComputedPropertyName(node)) {
      return staticStringValue(node.expression);
    }
    return undefined;
  }

  /** @param {ObjectLiteralExpression} objectLiteral @param {string} name @returns {string | undefined} */
  function objectStringProperty(objectLiteral, name) {
    const property = objectProperty(objectLiteral, name);
    return property && ts.isPropertyAssignment(property) ? literalText(property.initializer) : undefined;
  }

  /** @param {Node} node @returns {boolean} */
  function isProcessCwdCall(node) {
    if (!ts.isCallExpression(node) || node.arguments.length !== 0) {
      return false;
    }
    const expression = unwrapExpression(node.expression);
    if (expression && ts.isIdentifier(expression)) {
      return bindingSetHas(processCwdBindings, expression);
    }
    const receiver = memberExpressionReceiver(expression);
    if (memberExpressionName(expression) !== 'cwd' || !receiver) {
      return false;
    }
    return (
      namespaceReceiverMatches(receiver, processNamespaceBindings) ||
      (ts.isIdentifier(receiver) && isUnshadowedGlobalIdentifier(receiver, 'process'))
    );
  }

  /** @param {Node | undefined} expression @returns {string | undefined} */
  function memberExpressionName(expression) {
    if (!expression) {
      return undefined;
    }
    if (ts.isPropertyAccessExpression(expression)) {
      return expression.name.text;
    }
    if (ts.isElementAccessExpression(expression) && expression.argumentExpression) {
      return staticStringValue(expression.argumentExpression);
    }
    return undefined;
  }

  /** @param {Node | undefined} expression @returns {Node | undefined} */
  function memberExpressionReceiver(expression) {
    if (!expression) {
      return undefined;
    }
    if (ts.isPropertyAccessExpression(expression) || ts.isElementAccessExpression(expression)) {
      return unwrapExpression(expression.expression);
    }
    return undefined;
  }

  /** @param {Node | undefined} expression @returns {boolean} */
  function isDefinePropertyMember(expression) {
    const receiver = memberExpressionReceiver(expression);
    return (
      memberExpressionName(expression) === 'defineProperty' &&
      receiver !== undefined &&
      ts.isIdentifier(receiver) &&
      (receiver.text === 'Object' || receiver.text === 'Reflect')
    );
  }

  /** @param {Node | undefined} node @param {string} expectedName @returns {boolean} */
  function isUnshadowedGlobalIdentifier(node, expectedName) {
    if (!node || !ts.isIdentifier(node) || node.text !== expectedName) {
      return false;
    }
    const symbol = checker?.getSymbolAtLocation(node);
    return !symbol?.declarations?.some(declaration => declaration.getSourceFile() === sourceFile);
  }

  /** @param {Node | undefined} node @returns {boolean} */
  function isGlobalRequireIdentifier(node) {
    return isUnshadowedGlobalIdentifier(node, 'require');
  }

  /** @param {Node | undefined} expression @returns {boolean} */
  function isRequireFunctionExpression(expression) {
    const unwrapped = unwrapExpression(expression);
    if (!unwrapped) {
      return false;
    }
    if (
      ts.isIdentifier(unwrapped) &&
      (bindingSetHas(requireBindings, unwrapped) || isGlobalRequireIdentifier(unwrapped))
    ) {
      return true;
    }
    if (isCreateRequireCall(unwrapped)) {
      return true;
    }
    const receiver = memberExpressionReceiver(unwrapped);
    return (
      memberExpressionName(unwrapped) === 'require' &&
      receiver !== undefined &&
      ts.isIdentifier(receiver) &&
      receiver.text === 'module' &&
      !checker
        ?.getSymbolAtLocation(receiver)
        ?.declarations?.some(declaration => declaration.getSourceFile() === sourceFile)
    );
  }

  /** @param {Node | undefined} expression @returns {string | undefined} */
  function requiredModuleName(expression) {
    const unwrapped = unwrapExpression(expression);
    if (!unwrapped || !ts.isCallExpression(unwrapped) || !isRequireFunctionExpression(unwrapped.expression)) {
      return undefined;
    }
    return unwrapped.arguments[0] ? staticStringValue(unwrapped.arguments[0]) : undefined;
  }

  /** @param {Node} receiver @param {Set<BindingKey>} namespaceBindings @returns {boolean} */
  function namespaceReceiverMatches(receiver, namespaceBindings) {
    if (ts.isIdentifier(receiver) && bindingSetHas(namespaceBindings, receiver)) {
      return true;
    }
    const requiredModule = requiredModuleName(receiver) ?? '';
    if (namespaceBindings === fileSystemNamespaceBindings) {
      if (fileSystemModuleNames.has(requiredModule)) {
        return true;
      }
      const nestedReceiver = memberExpressionReceiver(receiver);
      if (memberExpressionName(receiver) === 'promises' && nestedReceiver) {
        return namespaceReceiverMatches(nestedReceiver, namespaceBindings);
      }
    }
    if (namespaceBindings === pathNamespaceBindings && pathModuleNames.has(requiredModule)) {
      return true;
    }
    if (namespaceBindings === urlNamespaceBindings && urlModuleNames.has(requiredModule)) {
      return true;
    }
    if (namespaceBindings === processNamespaceBindings && processModuleNames.has(requiredModule)) {
      return true;
    }
    if (namespaceBindings === moduleNamespaceBindings && moduleModuleNames.has(requiredModule)) {
      return true;
    }
    return false;
  }

  /**
   * @param {Node | undefined} expression
   * @param {Set<BindingKey>} namedBindings
   * @param {Set<BindingKey>} namespaceBindings
   * @param {string} property
   * @returns {boolean}
   */
  function isImportedCall(expression, namedBindings, namespaceBindings, property) {
    const unwrapped = unwrapExpression(expression);
    if (unwrapped && ts.isIdentifier(unwrapped)) {
      return bindingSetHas(namedBindings, unwrapped);
    }
    const receiver = memberExpressionReceiver(unwrapped);
    if (memberExpressionName(unwrapped) !== property || !receiver) {
      return false;
    }
    return namespaceReceiverMatches(receiver, namespaceBindings);
  }

  /** @param {Node | undefined} expression @returns {boolean} */
  function isUrlConstructor(expression) {
    const unwrapped = unwrapExpression(expression);
    if (!unwrapped) {
      return false;
    }
    if (ts.isIdentifier(unwrapped)) {
      return bindingSetHas(urlConstructorBindings, unwrapped) || isUnshadowedGlobalIdentifier(unwrapped, 'URL');
    }
    const receiver = memberExpressionReceiver(unwrapped);
    return Boolean(
      memberExpressionName(unwrapped) === 'URL' && receiver && namespaceReceiverMatches(receiver, urlNamespaceBindings),
    );
  }

  /** @param {Node | undefined} node @param {Set<BindingKey>} [seen] @returns {string | undefined} */
  function staticStringValue(node, seen = new Set()) {
    const unwrapped = unwrapExpression(node);
    if (!unwrapped) {
      return undefined;
    }
    const directLiteral = literalText(unwrapped);
    if (directLiteral !== undefined) {
      return directLiteral;
    }
    if (ts.isIdentifier(unwrapped)) {
      const key = bindingKey(unwrapped);
      if (key === undefined || seen.has(key)) {
        return undefined;
      }
      if (staticStringCache.has(key)) {
        return staticStringCache.get(key);
      }
      const initializer = constantInitializer(unwrapped);
      if (!initializer) {
        return undefined;
      }
      const nextSeen = new Set(seen);
      nextSeen.add(key);
      const value = staticStringValue(initializer, nextSeen);
      staticStringCache.set(key, value);
      return value;
    }
    if (ts.isPropertyAccessExpression(unwrapped) || ts.isElementAccessExpression(unwrapped)) {
      const objectLiteral = objectLiteralValue(unwrapped.expression);
      const name = ts.isPropertyAccessExpression(unwrapped)
        ? unwrapped.name.text
        : unwrapped.argumentExpression
          ? staticStringValue(unwrapped.argumentExpression, seen)
          : undefined;
      const initializer = objectLiteral && name ? objectPropertyInitializer(objectLiteral, name) : undefined;
      return initializer ? staticStringValue(initializer, seen) : undefined;
    }
    if (ts.isBinaryExpression(unwrapped) && unwrapped.operatorToken.kind === ts.SyntaxKind.PlusToken) {
      const left = staticStringValue(unwrapped.left, seen);
      const right = staticStringValue(unwrapped.right, seen);
      return left !== undefined && right !== undefined ? `${left}${right}` : undefined;
    }
    if (ts.isTemplateExpression(unwrapped)) {
      let value = unwrapped.head.text;
      for (const span of unwrapped.templateSpans) {
        const expressionValue = staticStringValue(span.expression, seen);
        if (expressionValue === undefined) {
          return undefined;
        }
        value += `${expressionValue}${span.literal.text}`;
      }
      return value;
    }
    if (ts.isCallExpression(unwrapped) && memberExpressionName(unwrapped.expression) === 'join') {
      const receiver = memberExpressionReceiver(unwrapped.expression);
      const values = receiver ? arrayLiteralValue(receiver) : undefined;
      const separator = unwrapped.arguments[0] ? staticStringValue(unwrapped.arguments[0], seen) : ',';
      if (!values || separator === undefined) {
        return undefined;
      }
      const parts = values.elements.map(element => staticStringValue(element, seen));
      return parts.some(part => part === undefined) ? undefined : parts.join(separator);
    }
    if (ts.isNewExpression(unwrapped) && isUrlConstructor(unwrapped.expression) && unwrapped.arguments?.[0]) {
      const value = staticStringValue(unwrapped.arguments[0], seen);
      const base = unwrapped.arguments[1] ? staticStringValue(unwrapped.arguments[1], seen) : undefined;
      if (value !== undefined && (base !== undefined || isNetworkUrl(value))) {
        try {
          return new URL(value, base).href;
        } catch {
          return undefined;
        }
      }
    }
    return undefined;
  }

  /** @param {Node | undefined} node @returns {boolean} */
  function isImportMetaUrl(node) {
    return Boolean(node && ts.isPropertyAccessExpression(node) && node.getText(sourceFile) === 'import.meta.url');
  }

  /** @param {Node | undefined} node @param {Set<BindingKey>} [seen] @returns {StaticPathInfo | undefined} */
  function staticPathInfo(node, seen = new Set()) {
    const unwrapped = unwrapExpression(node);
    if (!unwrapped) {
      return undefined;
    }
    if (ts.isIdentifier(unwrapped)) {
      const key = bindingKey(unwrapped);
      if (key === undefined || seen.has(key)) {
        return undefined;
      }
      if (staticPathCache.has(key)) {
        return staticPathCache.get(key);
      }
      const initializer = constantInitializer(unwrapped);
      if (!initializer) {
        return undefined;
      }
      const nextSeen = new Set(seen);
      nextSeen.add(key);
      const value = staticPathInfo(initializer, nextSeen);
      staticPathCache.set(key, value);
      return value;
    }
    if (isImportMetaUrl(unwrapped)) {
      return { absolutePath, anchor: 'module' };
    }
    if (isProcessCwdCall(unwrapped)) {
      return { absolutePath: root, anchor: 'cwd' };
    }
    if (ts.isPropertyAccessExpression(unwrapped) && unwrapped.name.text === 'pathname') {
      return staticPathInfo(unwrapped.expression, seen);
    }
    if (ts.isNewExpression(unwrapped) && isUrlConstructor(unwrapped.expression) && unwrapped.arguments) {
      if (unwrapped.arguments.length === 1 && isImportMetaUrl(unwrapped.arguments[0])) {
        return { absolutePath, anchor: 'module' };
      }
      if (unwrapped.arguments.length === 2) {
        const relativeUrl = staticStringValue(unwrapped.arguments[0]);
        /** @type {StaticPathInfo | undefined} */
        const base = isImportMetaUrl(unwrapped.arguments[1])
          ? { absolutePath, anchor: 'module' }
          : staticPathInfo(unwrapped.arguments[1], seen);
        if (relativeUrl === undefined || !base) {
          return undefined;
        }
        try {
          return {
            absolutePath: fileURLToPath(new URL(relativeUrl, pathToFileURL(base.absolutePath))),
            anchor: base.anchor,
          };
        } catch {
          return undefined;
        }
      }
    }
    if (!ts.isCallExpression(unwrapped)) {
      const value = staticStringValue(unwrapped);
      if (value === undefined) {
        return undefined;
      }
      return {
        absolutePath: isAbsolute(value) ? value : resolve(root, value),
        anchor: 'literal',
      };
    }

    const firstArgument = unwrapped.arguments[0];
    if (
      firstArgument &&
      isImportedCall(unwrapped.expression, fileUrlToPathBindings, urlNamespaceBindings, 'fileURLToPath')
    ) {
      if (isImportMetaUrl(firstArgument)) {
        return { absolutePath, anchor: 'module' };
      }
      return staticPathInfo(firstArgument, seen);
    }

    if (firstArgument && isImportedCall(unwrapped.expression, pathDirnameBindings, pathNamespaceBindings, 'dirname')) {
      const base = staticPathInfo(firstArgument, seen);
      return base ? { absolutePath: dirname(base.absolutePath), anchor: base.anchor } : undefined;
    }

    const isJoin = isImportedCall(unwrapped.expression, pathJoinBindings, pathNamespaceBindings, 'join');
    const isResolve = isImportedCall(unwrapped.expression, pathResolveBindings, pathNamespaceBindings, 'resolve');
    if ((!isJoin && !isResolve) || !firstArgument) {
      return undefined;
    }

    const base = staticPathInfo(firstArgument, seen);
    if (!base) {
      return undefined;
    }
    /** @type {string[]} */
    const parts = [];
    for (const argument of unwrapped.arguments.slice(1)) {
      const part = staticStringValue(argument, seen);
      if (part === undefined) {
        return undefined;
      }
      parts.push(part);
    }

    return {
      absolutePath: isResolve ? resolve(base.absolutePath, ...parts) : join(base.absolutePath, ...parts),
      anchor: base.anchor,
    };
  }

  /** @param {Node | undefined} node @returns {RepositoryPathInfo | undefined} */
  function repositoryPathInfo(node) {
    const pathInfo = staticPathInfo(node);
    if (!pathInfo) {
      return undefined;
    }
    const canonicalAbsolutePath = canonicalizePath(pathInfo.absolutePath);
    return {
      ...pathInfo,
      canonicalAbsolutePath,
      repositoryPath: repositoryPathForAbsolute(root, pathInfo.absolutePath),
      canonicalRepositoryPath: canonicalAbsolutePath
        ? repositoryPathForAbsolute(root, canonicalAbsolutePath)
        : undefined,
    };
  }

  /** @param {Node} node @returns {boolean} */
  function isWindowLocationReplace(node) {
    if (!ts.isPropertyAccessExpression(node)) {
      return false;
    }

    const locationAccess = node.expression;
    return (
      node.name.text === 'replace' &&
      ts.isPropertyAccessExpression(locationAccess) &&
      locationAccess.name.text === 'location' &&
      ts.isIdentifier(locationAccess.expression) &&
      locationAccess.expression.text === 'window'
    );
  }

  /** @param {Node} node @param {string[]} values @returns {void} */
  function collectLiteralValues(node, values) {
    const value = literalText(node);
    if (value !== undefined) {
      values.push(value);
    }
    ts.forEachChild(node, child => collectLiteralValues(child, values));
  }

  /**
   * @param {ObjectLiteralExpression | undefined} objectLiteral
   * @param {string} name
   * @returns {ObjectLiteralElementLike | undefined}
   */
  function objectProperty(objectLiteral, name) {
    if (!objectLiteral || objectLiteral.properties.some(property => ts.isSpreadAssignment(property))) {
      return undefined;
    }
    const matches = objectLiteral.properties.filter(property => propertyName(Reflect.get(property, 'name')) === name);
    return matches.length === 1 ? matches[0] : undefined;
  }

  /** @param {ObjectLiteralExpression | undefined} objectLiteral @param {string} name @returns {Expression | undefined} */
  function objectPropertyInitializer(objectLiteral, name) {
    const property = objectProperty(objectLiteral, name);
    return property && ts.isPropertyAssignment(property) ? property.initializer : undefined;
  }

  /** @param {JsxAttributes} attributes @param {string} name @returns {string | undefined} */
  function jsxAttributeValue(attributes, name) {
    const attribute = attributes.properties.find(
      property => ts.isJsxAttribute(property) && property.name.getText(sourceFile) === name,
    );
    if (!attribute || !ts.isJsxAttribute(attribute) || !attribute.initializer) {
      return undefined;
    }
    if (ts.isStringLiteral(attribute.initializer)) {
      return attribute.initializer.text;
    }
    if (ts.isJsxExpression(attribute.initializer) && attribute.initializer.expression) {
      return staticStringValue(attribute.initializer.expression);
    }
    return undefined;
  }

  /** @param {Node | undefined} node @returns {boolean} */
  function isCreateRequireCall(node) {
    if (!node || !ts.isCallExpression(node)) {
      return false;
    }
    const expression = unwrapExpression(node.expression);
    if (ts.isIdentifier(expression)) {
      return bindingSetHas(createRequireBindings, expression);
    }
    const receiver = memberExpressionReceiver(expression);
    return (
      memberExpressionName(expression) === 'createRequire' &&
      receiver !== undefined &&
      ts.isIdentifier(receiver) &&
      bindingSetHas(moduleNamespaceBindings, receiver)
    );
  }

  /** @param {Node | undefined} node @returns {node is import('typescript').CallExpression} */
  function isRequireCall(node) {
    return Boolean(node && ts.isCallExpression(node) && isRequireFunctionExpression(node.expression));
  }

  /** @returns {void} */
  function discoverBindings() {
    let changed = true;
    while (changed) {
      changed = false;
      /** @param {Node} node @returns {void} */
      function discover(node) {
        if (ts.isImportEqualsDeclaration(node) && ts.isExternalModuleReference(node.moduleReference)) {
          const moduleName = node.moduleReference.expression
            ? staticStringValue(node.moduleReference.expression)
            : undefined;
          const namespaceBindings =
            moduleName && fileSystemModuleNames.has(moduleName)
              ? fileSystemNamespaceBindings
              : moduleName && pathModuleNames.has(moduleName)
                ? pathNamespaceBindings
                : moduleName && urlModuleNames.has(moduleName)
                  ? urlNamespaceBindings
                  : moduleName && processModuleNames.has(moduleName)
                    ? processNamespaceBindings
                    : moduleName && moduleModuleNames.has(moduleName)
                      ? moduleNamespaceBindings
                      : undefined;
          if (namespaceBindings) {
            changed = addBinding(namespaceBindings, node.name) || changed;
          }
        }

        if (ts.isVariableDeclaration(node) && node.initializer) {
          const initializer = unwrapExpression(node.initializer);
          if (ts.isIdentifier(node.name) && ts.isIdentifier(initializer)) {
            for (const bindings of fileSystemOperationBindings.values()) {
              if (bindingSetHas(bindings, initializer)) {
                changed = addBinding(bindings, node.name) || changed;
              }
            }
            for (const [sourceBindings, targetBindings] of /** @type {Array<[Set<BindingKey>, Set<BindingKey>]>} */ ([
              [fileSystemNamespaceBindings, fileSystemNamespaceBindings],
              [pathNamespaceBindings, pathNamespaceBindings],
              [urlNamespaceBindings, urlNamespaceBindings],
              [urlConstructorBindings, urlConstructorBindings],
              [processNamespaceBindings, processNamespaceBindings],
              [processCwdBindings, processCwdBindings],
              [moduleNamespaceBindings, moduleNamespaceBindings],
              [createRequireBindings, createRequireBindings],
              [requireBindings, requireBindings],
              [definePropertyBindings, definePropertyBindings],
              [fetchBindings, fetchBindings],
            ])) {
              if (bindingSetHas(sourceBindings, initializer)) {
                changed = addBinding(targetBindings, node.name) || changed;
              }
            }
          }

          if (ts.isIdentifier(node.name)) {
            if (ts.isIdentifier(initializer) && isUnshadowedGlobalIdentifier(initializer, 'fetch')) {
              changed = addBinding(fetchBindings, node.name) || changed;
            }
            for (const [operationName, bindings] of fileSystemOperationBindings) {
              if (isImportedCall(initializer, bindings, fileSystemNamespaceBindings, operationName)) {
                changed = addBinding(bindings, node.name) || changed;
              }
            }
            for (const [operationName, bindings] of /** @type {Array<[string, Set<BindingKey>]>} */ ([
              ['join', pathJoinBindings],
              ['resolve', pathResolveBindings],
              ['dirname', pathDirnameBindings],
            ])) {
              if (isImportedCall(initializer, bindings, pathNamespaceBindings, operationName)) {
                changed = addBinding(bindings, node.name) || changed;
              }
            }
            if (isImportedCall(initializer, fileUrlToPathBindings, urlNamespaceBindings, 'fileURLToPath')) {
              changed = addBinding(fileUrlToPathBindings, node.name) || changed;
            }
            if (
              (ts.isIdentifier(initializer) && isUnshadowedGlobalIdentifier(initializer, 'URL')) ||
              isImportedCall(initializer, urlConstructorBindings, urlNamespaceBindings, 'URL')
            ) {
              changed = addBinding(urlConstructorBindings, node.name) || changed;
            }
            if (isImportedCall(initializer, processCwdBindings, processNamespaceBindings, 'cwd')) {
              changed = addBinding(processCwdBindings, node.name) || changed;
            }
            if (isImportedCall(initializer, createRequireBindings, moduleNamespaceBindings, 'createRequire')) {
              changed = addBinding(createRequireBindings, node.name) || changed;
            }
            if (isCreateRequireCall(initializer)) {
              changed = addBinding(requireBindings, node.name) || changed;
            }
            if (isDefinePropertyMember(initializer)) {
              changed = addBinding(definePropertyBindings, node.name) || changed;
            }
            const namespaceReceiver = memberExpressionReceiver(initializer);
            if (
              memberExpressionName(initializer) === 'promises' &&
              namespaceReceiver &&
              namespaceReceiverMatches(namespaceReceiver, fileSystemNamespaceBindings)
            ) {
              changed = addBinding(fileSystemNamespaceBindings, node.name) || changed;
            }
          }

          if (ts.isObjectBindingPattern(node.name)) {
            const moduleName = requiredModuleName(initializer);
            const fileSystemNamespace =
              namespaceReceiverMatches(initializer, fileSystemNamespaceBindings) ||
              (moduleName !== undefined && fileSystemModuleNames.has(moduleName));
            const pathNamespace = namespaceReceiverMatches(initializer, pathNamespaceBindings);
            const urlNamespace = namespaceReceiverMatches(initializer, urlNamespaceBindings);
            const processNamespace = namespaceReceiverMatches(initializer, processNamespaceBindings);
            const moduleNamespace = namespaceReceiverMatches(initializer, moduleNamespaceBindings);
            const runtimeObjectNamespace =
              ts.isIdentifier(initializer) && (initializer.text === 'Object' || initializer.text === 'Reflect');
            for (const element of node.name.elements) {
              if (!ts.isIdentifier(element.name)) {
                continue;
              }
              const importedName = element.propertyName ? propertyName(element.propertyName) : element.name.text;
              if (!importedName) {
                continue;
              }
              if (fileSystemNamespace) {
                const operationBindings = fileSystemOperationBindings.get(importedName);
                if (operationBindings) {
                  changed = addBinding(operationBindings, element.name) || changed;
                } else if (importedName === 'promises') {
                  changed = addBinding(fileSystemNamespaceBindings, element.name) || changed;
                }
              }
              if (pathNamespace) {
                const pathBindings =
                  importedName === 'join'
                    ? pathJoinBindings
                    : importedName === 'resolve'
                      ? pathResolveBindings
                      : importedName === 'dirname'
                        ? pathDirnameBindings
                        : undefined;
                if (pathBindings) {
                  changed = addBinding(pathBindings, element.name) || changed;
                }
              }
              if (urlNamespace && importedName === 'fileURLToPath') {
                changed = addBinding(fileUrlToPathBindings, element.name) || changed;
              } else if (urlNamespace && importedName === 'URL') {
                changed = addBinding(urlConstructorBindings, element.name) || changed;
              }
              if (processNamespace && importedName === 'cwd') {
                changed = addBinding(processCwdBindings, element.name) || changed;
              }
              if (moduleNamespace && importedName === 'createRequire') {
                changed = addBinding(createRequireBindings, element.name) || changed;
              }
              if (runtimeObjectNamespace && importedName === 'defineProperty') {
                changed = addBinding(definePropertyBindings, element.name) || changed;
              }
            }
          }

          if (isRequireCall(initializer)) {
            const moduleName = initializer.arguments[0] ? staticStringValue(initializer.arguments[0]) : undefined;
            const namespaceBindings =
              moduleName && fileSystemModuleNames.has(moduleName)
                ? fileSystemNamespaceBindings
                : moduleName && pathModuleNames.has(moduleName)
                  ? pathNamespaceBindings
                  : moduleName && urlModuleNames.has(moduleName)
                    ? urlNamespaceBindings
                    : moduleName && moduleModuleNames.has(moduleName)
                      ? moduleNamespaceBindings
                      : undefined;
            if (namespaceBindings && ts.isIdentifier(node.name)) {
              changed = addBinding(namespaceBindings, node.name) || changed;
            }
            if (moduleName && ts.isObjectBindingPattern(node.name)) {
              for (const element of node.name.elements) {
                if (!ts.isIdentifier(element.name)) {
                  continue;
                }
                const importedName = element.propertyName ? propertyName(element.propertyName) : element.name.text;
                if (!importedName) {
                  continue;
                }
                if (fileSystemModuleNames.has(moduleName)) {
                  const operationBindings = fileSystemOperationBindings.get(importedName);
                  if (operationBindings) {
                    changed = addBinding(operationBindings, element.name) || changed;
                  } else if (importedName === 'promises') {
                    changed = addBinding(fileSystemNamespaceBindings, element.name) || changed;
                  }
                }
                const pathBindings =
                  pathModuleNames.has(moduleName) && importedName === 'join'
                    ? pathJoinBindings
                    : pathModuleNames.has(moduleName) && importedName === 'resolve'
                      ? pathResolveBindings
                      : pathModuleNames.has(moduleName) && importedName === 'dirname'
                        ? pathDirnameBindings
                        : undefined;
                if (pathBindings) {
                  changed = addBinding(pathBindings, element.name) || changed;
                }
                if (urlModuleNames.has(moduleName) && importedName === 'fileURLToPath') {
                  changed = addBinding(fileUrlToPathBindings, element.name) || changed;
                } else if (urlModuleNames.has(moduleName) && importedName === 'URL') {
                  changed = addBinding(urlConstructorBindings, element.name) || changed;
                }
                if (processModuleNames.has(moduleName) && importedName === 'cwd') {
                  changed = addBinding(processCwdBindings, element.name) || changed;
                }
                if (moduleModuleNames.has(moduleName) && importedName === 'createRequire') {
                  changed = addBinding(createRequireBindings, element.name) || changed;
                }
              }
            }
          }
        }
        ts.forEachChild(node, discover);
      }
      discover(sourceFile);
    }
  }

  /** @param {Node | undefined} node @returns {boolean | undefined} */
  function staticallyBooleanValue(node) {
    const expression = unwrapExpression(node);
    if (!expression) {
      return undefined;
    }
    if (expression.kind === ts.SyntaxKind.TrueKeyword) {
      return true;
    }
    if (expression.kind === ts.SyntaxKind.FalseKeyword || expression.kind === ts.SyntaxKind.NullKeyword) {
      return false;
    }
    if (ts.isPrefixUnaryExpression(expression) && expression.operator === ts.SyntaxKind.ExclamationToken) {
      const operand = staticallyBooleanValue(expression.operand);
      return operand === undefined ? undefined : !operand;
    }
    return undefined;
  }

  /** @param {Statement} statement @returns {boolean} */
  function statementAlwaysTerminates(statement) {
    if (ts.isReturnStatement(statement) || ts.isThrowStatement(statement)) {
      return true;
    }
    if (ts.isBlock(statement)) {
      return statement.statements.some(candidate => statementAlwaysTerminates(candidate));
    }
    if (ts.isIfStatement(statement)) {
      const condition = staticallyBooleanValue(statement.expression);
      if (condition === true) {
        return statementAlwaysTerminates(statement.thenStatement);
      }
      if (condition === false) {
        return Boolean(statement.elseStatement && statementAlwaysTerminates(statement.elseStatement));
      }
      return Boolean(
        statement.elseStatement &&
        statementAlwaysTerminates(statement.thenStatement) &&
        statementAlwaysTerminates(statement.elseStatement),
      );
    }
    return false;
  }

  /** @param {Node} node @returns {boolean} */
  function isStaticallyDead(node) {
    let child = node;
    for (let parent = node.parent; parent; child = parent, parent = parent.parent) {
      if (ts.isIfStatement(parent)) {
        const condition = staticallyBooleanValue(parent.expression);
        if (
          (parent.thenStatement === child && condition === false) ||
          (parent.elseStatement === child && condition === true)
        ) {
          return true;
        }
      }
      if (ts.isConditionalExpression(parent)) {
        const condition = staticallyBooleanValue(parent.condition);
        if ((parent.whenTrue === child && condition === false) || (parent.whenFalse === child && condition === true)) {
          return true;
        }
      }
      if (ts.isBinaryExpression(parent)) {
        const left = staticallyBooleanValue(parent.left);
        if (
          (parent.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken &&
            parent.right === child &&
            left === false) ||
          (parent.operatorToken.kind === ts.SyntaxKind.BarBarToken && parent.right === child && left === true)
        ) {
          return true;
        }
      }
      if (
        ts.isWhileStatement(parent) &&
        parent.statement === child &&
        staticallyBooleanValue(parent.expression) === false
      ) {
        return true;
      }
      if (
        ts.isForStatement(parent) &&
        parent.statement === child &&
        parent.condition &&
        staticallyBooleanValue(parent.condition) === false
      ) {
        return true;
      }
      if (ts.isBlock(parent)) {
        const statementIndex = parent.statements.findIndex(statement => statement === child);
        if (
          statementIndex > 0 &&
          parent.statements.slice(0, statementIndex).some(statement => statementAlwaysTerminates(statement))
        ) {
          return true;
        }
      }
    }
    return false;
  }

  /** @param {Node | undefined} node @returns {string | undefined} */
  function functionName(node) {
    if (!node) {
      return undefined;
    }
    if ((ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node)) && node.name) {
      return node.name.text;
    }
    if (ts.isArrowFunction(node) || ts.isFunctionExpression(node)) {
      const declaration = node.parent;
      if (ts.isVariableDeclaration(declaration) && ts.isIdentifier(declaration.name)) {
        return declaration.name.text;
      }
    }
    return undefined;
  }

  /** @param {Node} node @returns {FunctionLikeDeclaration | undefined} */
  function containingFunction(node) {
    for (let current = node.parent; current; current = current.parent) {
      if (
        ts.isFunctionDeclaration(current) ||
        ts.isMethodDeclaration(current) ||
        ts.isGetAccessorDeclaration(current) ||
        ts.isSetAccessorDeclaration(current) ||
        ts.isConstructorDeclaration(current) ||
        ts.isFunctionExpression(current) ||
        ts.isArrowFunction(current)
      ) {
        return current;
      }
    }
    return undefined;
  }

  /** @param {Node} node @returns {Node | undefined} */
  function resolvedValueDeclaration(node) {
    if (!checker) {
      return undefined;
    }
    let symbol = checker.getSymbolAtLocation(node);
    if (symbol && symbol.flags & ts.SymbolFlags.Alias) {
      symbol = checker.getAliasedSymbol(symbol);
    }
    return symbol?.valueDeclaration ?? symbol?.declarations?.[0];
  }

  /** @param {Node | undefined} declaration @returns {string | undefined} */
  function declarationRepositoryPath(declaration) {
    if (!declaration) {
      return undefined;
    }
    const fileName = declaration.getSourceFile().fileName;
    return isAbsolute(fileName) ? toRepositoryPath(root, fileName) : fileName.replaceAll('\\', '/');
  }

  /** @param {Node | undefined} node @param {string} expectedName @returns {boolean} */
  function isDefaultExportedFunction(node, expectedName) {
    if (!node || !ts.isFunctionLike(node) || node.parent !== sourceFile || functionName(node) !== expectedName) {
      return false;
    }
    if (
      ts.isFunctionDeclaration(node) &&
      node.modifiers?.some(modifier => modifier.kind === ts.SyntaxKind.DefaultKeyword)
    ) {
      return true;
    }
    const exportNode = defaultExportExpression();
    return Boolean(exportNode && resolvedValueDeclaration(exportNode) === node);
  }

  /** @param {Node | undefined} node @param {string} expectedName @param {boolean} [requireExport] @returns {boolean} */
  function isTopLevelFunctionDeclaration(node, expectedName, requireExport = false) {
    return Boolean(
      node &&
      ts.isFunctionDeclaration(node) &&
      node.parent === sourceFile &&
      node.name?.text === expectedName &&
      (!requireExport || node.modifiers?.some(modifier => modifier.kind === ts.SyntaxKind.ExportKeyword)),
    );
  }

  /** @param {Node | undefined} node @param {string} expectedOwner @param {string} expectedName @returns {boolean} */
  function isExportedFunctionDeclaration(node, expectedOwner, expectedName) {
    return Boolean(
      node &&
      ts.isFunctionDeclaration(node) &&
      node.parent === node.getSourceFile() &&
      declarationRepositoryPath(node) === expectedOwner &&
      node.name?.text === expectedName &&
      node.modifiers?.some(modifier => modifier.kind === ts.SyntaxKind.ExportKeyword),
    );
  }

  /** @param {Node} node @returns {boolean} */
  function isDirectlyAwaited(node) {
    let current = node;
    while (
      current.parent &&
      (ts.isParenthesizedExpression(current.parent) ||
        ts.isAsExpression(current.parent) ||
        ts.isTypeAssertionExpression(current.parent) ||
        ts.isSatisfiesExpression(current.parent) ||
        ts.isNonNullExpression(current.parent))
    ) {
      current = current.parent;
    }
    return Boolean(current.parent && ts.isAwaitExpression(current.parent));
  }

  /** @param {Node} node @returns {boolean} */
  function isInsideFinallyBlock(node) {
    for (let current = node.parent; current; current = current.parent) {
      if (ts.isFunctionLike(current)) {
        return false;
      }
      if (ts.isBlock(current) && ts.isTryStatement(current.parent) && current.parent.finallyBlock === current) {
        return true;
      }
    }
    return false;
  }

  /** @param {Node} node @param {string} expectedFunctionName @returns {boolean} */
  function isDirectlyReturnedFromFunction(node, expectedFunctionName) {
    const owner = containingFunction(node);
    if (!owner || functionName(owner) !== expectedFunctionName) {
      return false;
    }
    for (let current = node; current && current !== owner; current = current.parent) {
      if (ts.isReturnStatement(current)) {
        return containingFunction(current) === owner;
      }
    }
    return false;
  }

  /** @param {Node} node @returns {boolean} */
  function isExpectedHomepageBranch(node) {
    for (let current = node; current; current = current.parent) {
      if (!ts.isConditionalExpression(current)) {
        continue;
      }
      const condition = unwrapExpression(current.condition);
      if (
        current.whenTrue.getStart(sourceFile) <= node.getStart(sourceFile) &&
        current.whenTrue.getEnd() >= node.getEnd() &&
        ts.isBinaryExpression(condition) &&
        condition.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken &&
        ts.isIdentifier(condition.left) &&
        condition.left.text === 'activeSection' &&
        staticStringValue(condition.right) === frozenHomepageComposition.activeSection
      ) {
        return true;
      }
    }
    return false;
  }

  /** @param {Node} node @param {string} value @param {string} kind @returns {void} */
  function recordNetworkReference(node, value, kind) {
    const { line, column } = nodeLocation(sourceFile, node);
    networkReferences.push({ source: relativePath, value, kind, line, column });
  }

  /** @param {Node} expression @returns {string | undefined} */
  function networkCallKind(expression) {
    const unwrapped = unwrapExpression(expression);
    if (!unwrapped) {
      return undefined;
    }
    if (
      ts.isIdentifier(unwrapped) &&
      (bindingSetHas(fetchBindings, unwrapped) || isUnshadowedGlobalIdentifier(unwrapped, 'fetch'))
    ) {
      return 'fetch';
    }
    const receiver = memberExpressionReceiver(unwrapped);
    const memberName = memberExpressionName(unwrapped);
    if (!receiver || !memberName) {
      return undefined;
    }
    const receiverText = receiver.getText(sourceFile);
    if (memberName === 'fetch' && (receiverText === 'window' || receiverText === 'globalThis')) {
      return 'fetch';
    }
    if (memberName === 'open' && receiverText === 'window') {
      return 'window-open';
    }
    if (memberName === 'sendBeacon' && receiverText === 'navigator') {
      return 'send-beacon';
    }
    if ((memberName === 'assign' || memberName === 'replace') && /^(?:window\.)?location$/.test(receiverText)) {
      return `location-${memberName}`;
    }
    if ((memberName === 'push' || memberName === 'replace') && receiverText === 'router') {
      return `router-${memberName}`;
    }
    return undefined;
  }

  discoverBindings();

  /** @param {Node} node @returns {void} */
  function visit(node) {
    const value = literalText(node);
    if (value !== undefined) {
      const { line, column } = nodeLocation(sourceFile, node);
      literals.push({ source: relativePath, value, line, column, node, sourceFile });
    }
    if (ts.isIdentifier(node)) {
      identifiers.push({ source: relativePath, name: node.text, ...nodeLocation(sourceFile, node) });
    }

    if (ts.isImportDeclaration(node)) {
      const specifier = literalText(node.moduleSpecifier);
      if (specifier !== undefined) {
        addEdge(node.moduleSpecifier, 'import', specifier);
      }
    } else if (ts.isExportDeclaration(node) && node.moduleSpecifier) {
      const specifier = literalText(node.moduleSpecifier);
      if (specifier !== undefined) {
        addEdge(node.moduleSpecifier, 're-export', specifier);
      }
    } else if (
      ts.isImportEqualsDeclaration(node) &&
      ts.isExternalModuleReference(node.moduleReference) &&
      node.moduleReference.expression
    ) {
      const specifier = literalText(node.moduleReference.expression);
      if (specifier !== undefined) {
        addEdge(node.moduleReference.expression, 'import-equals', specifier);
      }
    } else if (ts.isImportTypeNode(node) && ts.isLiteralTypeNode(node.argument)) {
      const specifier = literalText(node.argument.literal);
      if (specifier !== undefined) {
        addEdge(node.argument.literal, 'import-type', specifier);
      }
    } else if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
      const staticString = staticStringValue(node.initializer);
      if (staticString !== undefined && literalText(unwrapExpression(node.initializer)) === undefined) {
        const { line, column } = nodeLocation(sourceFile, node.initializer);
        staticStringReferences.push({ source: relativePath, value: staticString, line, column });
      }
    } else if (ts.isCallExpression(node)) {
      const firstArgument = node.arguments[0];
      const specifier = firstArgument ? staticStringValue(firstArgument) : undefined;
      const dead = isStaticallyDead(node);
      const position = node.getStart(sourceFile);
      if (ts.isIdentifier(node.expression) && !dead) {
        const callSymbol = checker?.getSymbolAtLocation(node.expression);
        const callDeclaration = callSymbol?.valueDeclaration ?? callSymbol?.declarations?.[0];
        directCalls.push({
          name: node.expression.text,
          ownerFunction: functionName(containingFunction(node)),
          targetPosition:
            callDeclaration?.getSourceFile() === sourceFile ? callDeclaration.getStart(sourceFile) : undefined,
          staticArguments: node.arguments.map(argument => staticStringValue(argument)),
          staticBooleanArguments: node.arguments.map(argument => staticallyBooleanValue(argument)),
          argumentTexts: node.arguments.map(argument => argument.getText(sourceFile)),
          awaited: isDirectlyAwaited(node),
          insideFinally: isInsideFinallyBlock(node),
          position,
          ...nodeLocation(sourceFile, node),
        });
      }
      const callReceiver = memberExpressionReceiver(node.expression);
      const callMemberName = memberExpressionName(node.expression);
      if (callReceiver && callMemberName && !dead) {
        propertyCalls.push({
          receiver: callReceiver.getText(sourceFile),
          name: callMemberName,
          ownerFunction: functionName(containingFunction(node)),
          awaited: isDirectlyAwaited(node),
          insideFinally: isInsideFinallyBlock(node),
          position,
          ...nodeLocation(sourceFile, node),
        });
      }

      if (firstArgument && specifier !== undefined && node.expression.kind === ts.SyntaxKind.ImportKeyword) {
        addEdge(firstArgument, 'dynamic-import', specifier);
      } else if (firstArgument && specifier !== undefined && isRequireCall(node)) {
        addEdge(firstArgument, 'require', specifier);
      } else {
        const requireResolveReceiver = memberExpressionReceiver(node.expression);
        if (
          firstArgument &&
          specifier !== undefined &&
          memberExpressionName(node.expression) === 'resolve' &&
          requireResolveReceiver &&
          isRequireFunctionExpression(requireResolveReceiver)
        ) {
          addEdge(firstArgument, 'require-resolve', specifier);
        }
      }

      if (
        ts.isIdentifier(node.expression) &&
        (node.expression.text === 'eval' || node.expression.text === 'Function')
      ) {
        dynamicCodeExecutions.push({
          source: relativePath,
          kind: node.expression.text,
          values: node.arguments.map(argument => staticStringValue(argument)),
          line: nodeLocation(sourceFile, node).line,
          column: nodeLocation(sourceFile, node).column,
        });
      }

      const networkKind = networkCallKind(node.expression);
      if (firstArgument && specifier !== undefined && networkKind) {
        recordNetworkReference(firstArgument, specifier, networkKind);
      }

      const isRuntimeDefineProperty =
        isDefinePropertyMember(node.expression) ||
        (ts.isIdentifier(node.expression) && bindingSetHas(definePropertyBindings, node.expression));
      if (isRuntimeDefineProperty && node.arguments[1]) {
        const name = staticStringValue(node.arguments[1]);
        if (name !== undefined) {
          staticNames.push({
            source: relativePath,
            name,
            kind: 'defined runtime property name',
            ...nodeLocation(sourceFile, node.arguments[1]),
          });
        }
      }

      const pathInfo = repositoryPathInfo(node);
      if (pathInfo?.repositoryPath) {
        staticPathReferences.push({
          path: pathInfo.repositoryPath,
          absolutePath: pathInfo.absolutePath,
          canonicalPath: pathInfo.canonicalRepositoryPath,
          canonicalAbsolutePath: pathInfo.canonicalAbsolutePath,
          anchor: pathInfo.anchor,
          ...nodeLocation(sourceFile, node),
        });
      }

      if (firstArgument) {
        const { line, column } = nodeLocation(sourceFile, node);
        if (!dead) {
          for (const [operationName, bindings] of fileSystemOperationBindings) {
            if (!isImportedCall(node.expression, bindings, fileSystemNamespaceBindings, operationName)) {
              continue;
            }
            const argumentIndexes = fileSystemOperationArgumentIndexes.get(operationName) ?? [];
            for (const argumentIndex of argumentIndexes) {
              const argument = node.arguments[argumentIndex];
              if (!argument) {
                continue;
              }
              const operationPath = repositoryPathInfo(argument);
              fileOperations.push({
                kind: operationName,
                argumentIndex,
                path: operationPath?.repositoryPath,
                absolutePath: operationPath?.absolutePath,
                canonicalPath: operationPath?.canonicalRepositoryPath,
                canonicalAbsolutePath: operationPath?.canonicalAbsolutePath,
                anchor: operationPath?.anchor,
                ownerFunction: functionName(containingFunction(node)),
                staticArguments: node.arguments.map(argumentNode => staticStringValue(argumentNode)),
                argumentTexts: node.arguments.map(argumentNode => argumentNode.getText(sourceFile)),
                awaited: isDirectlyAwaited(node),
                insideFinally: isInsideFinallyBlock(node),
                position,
                line,
                column,
              });
            }
            break;
          }
        }

        const staticArgument = staticStringValue(firstArgument);
        if (staticArgument !== undefined && literalText(unwrapExpression(firstArgument)) === undefined) {
          staticStringReferences.push({ source: relativePath, value: staticArgument, line, column });
        }
      }

      if (isWindowLocationReplace(node.expression) && firstArgument) {
        /** @type {string[]} */
        const targets = [];
        collectLiteralValues(firstArgument, targets);
        locationReplaceTargets.push(...targets);
      }
    } else if (
      (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) &&
      node.tagName.getText(sourceFile).toLowerCase() === 'iframe'
    ) {
      const { line, column } = nodeLocation(sourceFile, node);
      const sourceValue = jsxAttributeValue(node.attributes, 'src');
      const frameOwner = containingFunction(node);
      const validFrameOwner = isTopLevelFunctionDeclaration(frameOwner, frozenHomepageComposition.frameComponent);
      iframeReferences.push({
        source: relativePath,
        kind: 'iframe-src',
        value: sourceValue,
        sandbox: jsxAttributeValue(node.attributes, 'sandbox'),
        allow: jsxAttributeValue(node.attributes, 'allow'),
        referrerPolicy: jsxAttributeValue(node.attributes, 'referrerPolicy'),
        renderedBy: functionName(containingFunction(node)),
        directlyReturned:
          validFrameOwner &&
          isDirectlyReturnedFromFunction(node, frozenHomepageComposition.frameComponent) &&
          !isStaticallyDead(node),
        line,
        column,
      });
      if (
        functionName(frameOwner) === frozenHomepageComposition.frameComponent ||
        sourceValue === frozenHomepageBoundary.publicPath
      ) {
        homepageCompositionReferences.push({
          source: relativePath,
          kind: 'frame-return',
          valid:
            validFrameOwner &&
            isDirectlyReturnedFromFunction(node, frozenHomepageComposition.frameComponent) &&
            !isStaticallyDead(node),
          line,
          column,
        });
      }
    } else if (ts.isNewExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 'Request') {
      const requestTarget = node.arguments?.[0] ? staticStringValue(node.arguments[0]) : undefined;
      if (requestTarget !== undefined && node.arguments?.[0]) {
        recordNetworkReference(node.arguments[0], requestTarget, 'request');
      }
    } else if (ts.isNewExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 'Response') {
      const init = node.arguments?.[1];
      if (init && ts.isObjectLiteralExpression(init)) {
        const statusNode = objectPropertyInitializer(init, 'status');
        const headersNode = objectPropertyInitializer(init, 'headers');
        const status = statusNode && ts.isNumericLiteral(statusNode) ? Number(statusNode.text) : undefined;
        if (headersNode && ts.isObjectLiteralExpression(headersNode)) {
          const locationNode = objectPropertyInitializer(headersNode, 'Location');
          const location = locationNode ? staticStringValue(locationNode) : undefined;
          if (locationNode) {
            const { line, column } = nodeLocation(sourceFile, locationNode);
            responseRedirects.push({ source: relativePath, status, location, line, column });
          }
        }
      }
    } else if (ts.isModuleDeclaration(node) && ts.isStringLiteral(node.name)) {
      const { line, column } = nodeLocation(sourceFile, node.name);
      ambientModules.push({ source: relativePath, module: node.name.text, line, column });
    }

    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const tagName = node.tagName.getText(sourceFile);
      for (const attributeName of ['href', 'src', 'action']) {
        const attributeValue = jsxAttributeValue(node.attributes, attributeName);
        if (attributeValue !== undefined) {
          recordNetworkReference(node, attributeValue, `jsx-${attributeName}`);
        }
      }
      const componentDeclaration = resolvedValueDeclaration(node.tagName);
      const frameIdentity =
        isTopLevelFunctionDeclaration(componentDeclaration, frozenHomepageComposition.frameComponent) &&
        declarationRepositoryPath(componentDeclaration) === frozenHomepageComposition.owner;
      if (tagName === frozenHomepageComposition.frameComponent || frameIdentity) {
        const { line, column } = nodeLocation(sourceFile, node);
        const parentOwner = containingFunction(node);
        homepageCompositionReferences.push({
          source: relativePath,
          kind: 'parent-call',
          valid:
            relativePath === frozenHomepageComposition.owner &&
            isTopLevelFunctionDeclaration(parentOwner, frozenHomepageComposition.parentComponent, true) &&
            frameIdentity &&
            isDirectlyReturnedFromFunction(node, frozenHomepageComposition.parentComponent) &&
            isExpectedHomepageBranch(node) &&
            !isStaticallyDead(node),
          line,
          column,
        });
      }

      const parentIdentity = isExportedFunctionDeclaration(
        componentDeclaration,
        frozenHomepageComposition.owner,
        frozenHomepageComposition.parentComponent,
      );
      if (
        relativePath === frozenHomepageComposition.rootOwner &&
        (tagName === frozenHomepageComposition.parentComponent || parentIdentity)
      ) {
        const { line, column } = nodeLocation(sourceFile, node);
        const rootOwner = containingFunction(node);
        homepageCompositionReferences.push({
          source: relativePath,
          kind: 'root-call',
          valid:
            isDefaultExportedFunction(rootOwner, frozenHomepageComposition.rootComponent) &&
            parentIdentity &&
            isDirectlyReturnedFromFunction(node, frozenHomepageComposition.rootComponent) &&
            !isStaticallyDead(node),
          line,
          column,
        });
      }
    }

    if (ts.isNewExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 'Function') {
      const { line, column } = nodeLocation(sourceFile, node);
      dynamicCodeExecutions.push({
        source: relativePath,
        kind: 'Function',
        values: node.arguments?.map(argument => staticStringValue(argument)) ?? [],
        line,
        column,
      });
    }

    if (ts.isExportSpecifier(node)) {
      const exportedName = ts.isIdentifier(node.name) || ts.isStringLiteral(node.name) ? node.name.text : undefined;
      if (exportedName !== undefined && !ts.isIdentifier(node.name)) {
        staticNames.push({
          source: relativePath,
          name: exportedName,
          kind: 'string-named export',
          ...nodeLocation(sourceFile, node.name),
        });
      }
    }

    if (
      (ts.isPropertyAssignment(node) ||
        ts.isMethodDeclaration(node) ||
        ts.isPropertyDeclaration(node) ||
        ts.isGetAccessorDeclaration(node) ||
        ts.isSetAccessorDeclaration(node)) &&
      !ts.isIdentifier(node.name)
    ) {
      const name = propertyName(node.name);
      if (name !== undefined) {
        staticNames.push({
          source: relativePath,
          name,
          kind: 'static property name',
          ...nodeLocation(sourceFile, node.name),
        });
      }
    }

    if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.EqualsToken) {
      const assignmentTarget = node.left.getText(sourceFile);
      const assignmentValue = staticStringValue(node.right);
      if (assignmentValue !== undefined && /^(?:(?:window|document)\.)?location(?:\.href)?$/.test(assignmentTarget)) {
        recordNetworkReference(node.right, assignmentValue, 'location-assignment');
      }
    }

    if (
      ts.isBinaryExpression(node) &&
      assignmentOperatorKinds.has(node.operatorToken.kind) &&
      ts.isElementAccessExpression(node.left) &&
      node.left.argumentExpression
    ) {
      const name = staticStringValue(node.left.argumentExpression);
      if (name !== undefined) {
        staticNames.push({
          source: relativePath,
          name,
          kind: 'computed assignment name',
          ...nodeLocation(sourceFile, node.left.argumentExpression),
        });
      }
    }

    if (ts.isPropertyAssignment(node)) {
      const name = propertyName(node.name);
      const staticInitializer = staticStringValue(node.initializer);
      if (staticInitializer !== undefined && literalText(node.initializer) === undefined) {
        staticStringReferences.push({
          source: relativePath,
          value: staticInitializer,
          ...nodeLocation(sourceFile, node.initializer),
        });
      }
      if (name === 'Location') {
        const { line, column } = nodeLocation(sourceFile, node);
        locationHeaderReferences.push({
          source: relativePath,
          kind: 'redirect-location',
          value: staticStringValue(node.initializer),
          line,
          column,
        });
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  /** @returns {Expression | undefined} */
  function defaultExportExpression() {
    const assignment = sourceFile.statements.find(
      statement => ts.isExportAssignment(statement) && !statement.isExportEquals,
    );
    if (assignment && ts.isExportAssignment(assignment)) {
      return assignment.expression;
    }
    for (const statement of sourceFile.statements) {
      if (!ts.isExportDeclaration(statement) || statement.moduleSpecifier || !statement.exportClause) {
        continue;
      }
      if (!ts.isNamedExports(statement.exportClause)) {
        continue;
      }
      const defaultSpecifier = statement.exportClause.elements.find(element => element.name.text === 'default');
      if (defaultSpecifier) {
        return defaultSpecifier.propertyName ?? defaultSpecifier.name;
      }
    }
    return undefined;
  }

  /** @param {Node | undefined} node @returns {Identifier | undefined} */
  function rootIdentifier(node) {
    let current = unwrapExpression(node);
    while (current && (ts.isPropertyAccessExpression(current) || ts.isElementAccessExpression(current))) {
      current = unwrapExpression(current.expression);
    }
    return current && ts.isIdentifier(current) ? current : undefined;
  }

  const defaultExportNode = defaultExportExpression();
  const defaultExportValue = defaultExportNode ? resolvedExpression(defaultExportNode) : undefined;
  const defaultConfig = defaultExportValue ? objectLiteralValue(defaultExportValue) : undefined;

  if (defaultConfig) {
    const defaultConfigNode = defaultConfig;
    /** @type {Set<BindingKey>} */
    const configBindingKeys = new Set();
    /** @param {Node} node @param {Set<BindingKey>} [seen] @returns {void} */
    function collectConfigBindingKeys(node, seen = new Set()) {
      const unwrapped = unwrapExpression(node);
      if (!unwrapped || !ts.isIdentifier(unwrapped)) {
        return;
      }
      const key = bindingKey(unwrapped);
      if (key === undefined || seen.has(key)) {
        return;
      }
      configBindingKeys.add(key);
      const initializer = constantInitializer(unwrapped);
      if (!initializer) {
        return;
      }
      const nextSeen = new Set(seen);
      nextSeen.add(key);
      collectConfigBindingKeys(initializer, nextSeen);
    }
    if (defaultExportNode) {
      collectConfigBindingKeys(defaultExportNode);
    }
    let aliasesChanged = true;
    while (aliasesChanged) {
      aliasesChanged = false;
      /** @param {Node} node @returns {void} */
      function collectAliases(node) {
        if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
          const initializerRoot = rootIdentifier(node.initializer);
          if (initializerRoot && bindingSetHas(configBindingKeys, initializerRoot)) {
            aliasesChanged = addBinding(configBindingKeys, node.name) || aliasesChanged;
          }
        }
        ts.forEachChild(node, collectAliases);
      }
      collectAliases(sourceFile);
    }

    const mutationMethods = new Set([
      'copyWithin',
      'fill',
      'pop',
      'push',
      'reverse',
      'shift',
      'sort',
      'splice',
      'unshift',
    ]);
    /** @param {Node} node @param {string} target @returns {void} */
    function recordDefaultExportMutation(node, target) {
      if (node.getStart(sourceFile) <= defaultConfigNode.getEnd() || isStaticallyDead(node)) {
        return;
      }
      defaultExportMutations.push({ target, ...nodeLocation(sourceFile, node) });
    }
    /** @param {Node} node @returns {void} */
    function collectDefaultExportMutations(node) {
      if (ts.isBinaryExpression(node) && assignmentOperatorKinds.has(node.operatorToken.kind)) {
        const rootIdentifierNode = rootIdentifier(node.left);
        if (rootIdentifierNode && bindingSetHas(configBindingKeys, rootIdentifierNode)) {
          recordDefaultExportMutation(node, node.left.getText(sourceFile));
        }
      } else if (
        (ts.isPrefixUnaryExpression(node) || ts.isPostfixUnaryExpression(node)) &&
        (node.operator === ts.SyntaxKind.PlusPlusToken || node.operator === ts.SyntaxKind.MinusMinusToken)
      ) {
        const rootIdentifierNode = rootIdentifier(node.operand);
        if (rootIdentifierNode && bindingSetHas(configBindingKeys, rootIdentifierNode)) {
          recordDefaultExportMutation(node, node.operand.getText(sourceFile));
        }
      } else if (ts.isDeleteExpression(node)) {
        const rootIdentifierNode = rootIdentifier(node.expression);
        if (rootIdentifierNode && bindingSetHas(configBindingKeys, rootIdentifierNode)) {
          recordDefaultExportMutation(node, node.expression.getText(sourceFile));
        }
      } else if (ts.isCallExpression(node)) {
        const receiver = memberExpressionReceiver(node.expression);
        const methodName = memberExpressionName(node.expression);
        const receiverRoot = receiver ? rootIdentifier(receiver) : undefined;
        if (
          receiver &&
          receiverRoot &&
          bindingSetHas(configBindingKeys, receiverRoot) &&
          methodName &&
          mutationMethods.has(methodName)
        ) {
          recordDefaultExportMutation(node, receiver.getText(sourceFile));
        }
        if (
          receiver &&
          ts.isIdentifier(receiver) &&
          isUnshadowedGlobalIdentifier(receiver, 'Object') &&
          (methodName === 'assign' || methodName === 'defineProperty')
        ) {
          const targetArgument = node.arguments[0];
          const target = targetArgument ? rootIdentifier(targetArgument) : undefined;
          if (targetArgument && target && bindingSetHas(configBindingKeys, target)) {
            recordDefaultExportMutation(node, targetArgument.getText(sourceFile));
          }
        }
        if (
          receiver &&
          ts.isIdentifier(receiver) &&
          isUnshadowedGlobalIdentifier(receiver, 'Reflect') &&
          (methodName === 'defineProperty' || methodName === 'deleteProperty' || methodName === 'set')
        ) {
          const targetArgument = node.arguments[0];
          const target = targetArgument ? rootIdentifier(targetArgument) : undefined;
          if (targetArgument && target && bindingSetHas(configBindingKeys, target)) {
            recordDefaultExportMutation(node, targetArgument.getText(sourceFile));
          }
        }
      }
      ts.forEachChild(node, collectDefaultExportMutations);
    }
    collectDefaultExportMutations(sourceFile);

    /** @param {MethodDeclaration} property @param {RoutePair[]} pairs @returns {void} */
    function collectRoutePairs(property, pairs) {
      if (!property.body || property.parameters.length !== 0 || property.body.statements.length !== 1) {
        nextRouteMethodsValid = false;
        return;
      }
      const statement = property.body.statements[0];
      const returned =
        statement && ts.isReturnStatement(statement) ? unwrapExpression(statement.expression) : undefined;
      if (!returned || !ts.isArrayLiteralExpression(returned)) {
        nextRouteMethodsValid = false;
        return;
      }
      for (const element of returned.elements) {
        const route = unwrapExpression(element);
        if (
          !route ||
          !ts.isObjectLiteralExpression(route) ||
          route.properties.some(item => ts.isSpreadAssignment(item))
        ) {
          nextRouteMethodsValid = false;
          continue;
        }
        const source = objectStringProperty(route, 'source');
        const destinationProperty = objectPropertyInitializer(route, 'destination');
        const destination = destinationProperty ? staticStringValue(destinationProperty) : undefined;
        if (source === undefined || (destinationProperty && destination === undefined)) {
          nextRouteMethodsValid = false;
          continue;
        }
        const location = nodeLocation(sourceFile, route);
        pairs.push({ sourceFile: relativePath, source, destination, ...location });
      }
    }

    const rewritesProperty = objectProperty(defaultConfig, 'rewrites');
    if (rewritesProperty && ts.isMethodDeclaration(rewritesProperty)) {
      const { line, column } = nodeLocation(sourceFile, rewritesProperty);
      rewriteMethods.push({ source: relativePath, node: rewritesProperty, line, column });
      collectRoutePairs(rewritesProperty, rewritePairs);
    } else if (rewritesProperty) {
      nextRouteMethodsValid = false;
    }
    const redirectsProperty = objectProperty(defaultConfig, 'redirects');
    if (redirectsProperty && ts.isMethodDeclaration(redirectsProperty)) {
      collectRoutePairs(redirectsProperty, redirectPairs);
    } else if (redirectsProperty) {
      nextRouteMethodsValid = false;
    }

    const pageExtensionsProperty = objectProperty(defaultConfig, 'pageExtensions');
    if (pageExtensionsProperty && ts.isPropertyAssignment(pageExtensionsProperty)) {
      const extensions = arrayLiteralValue(pageExtensionsProperty.initializer);
      if (!extensions || extensions.elements.some(element => ts.isSpreadElement(element))) {
        nextPageExtensionsValid = false;
      } else {
        for (const element of extensions.elements) {
          const extension = staticStringValue(element);
          if (extension === undefined) {
            nextPageExtensionsValid = false;
          } else {
            nextPageExtensions.push(extension.replace(/^\./, ''));
          }
        }
      }
    } else if (pageExtensionsProperty) {
      nextPageExtensionsValid = false;
    } else {
      nextPageExtensions.push(...defaultNextPageExtensions);
    }

    if (compatibilityOwners.tailwind.has(relativePath)) {
      const theme = objectLiteralValue(objectPropertyInitializer(defaultConfig, 'theme'));
      const extend = theme ? objectLiteralValue(objectPropertyInitializer(theme, 'extend')) : undefined;
      const colors = extend ? objectLiteralValue(objectPropertyInitializer(extend, 'colors')) : undefined;
      if (colors) {
        for (const property of colors.properties) {
          if (!ts.isPropertyAssignment(property)) {
            continue;
          }
          const name = propertyName(property.name);
          if (!name?.startsWith('practices-')) {
            continue;
          }
          const rawValue = literalText(unwrapExpression(property.initializer));
          const variableMatch = rawValue?.match(/^var\(\s*(--color-practices-[A-Za-z0-9-]+)\s*\)$/);
          const { line, column } = nodeLocation(sourceFile, property);
          tailwindMappings.push({
            owner: relativePath,
            name,
            cssVariable: variableMatch?.[1] ?? `<invalid:${rawValue ?? 'non-literal'}>`,
            line,
            column,
          });
          compatibilityLiteralPositions.add(property.initializer.getStart(sourceFile));
        }
      }
    }
  }

  if (compatibilityOwners.designTokens.has(relativePath)) {
    for (const statement of sourceFile.statements) {
      if (
        !ts.isVariableStatement(statement) ||
        !statement.modifiers?.some(modifier => modifier.kind === ts.SyntaxKind.ExportKeyword)
      ) {
        continue;
      }
      for (const declaration of statement.declarationList.declarations) {
        if (
          !ts.isIdentifier(declaration.name) ||
          declaration.name.text !== 'colorTokenGroups' ||
          !declaration.initializer
        ) {
          continue;
        }
        designTokenDeclaration = declaration;
        const catalog = objectLiteralValue(declaration.initializer);
        const practices = catalog ? arrayLiteralValue(objectPropertyInitializer(catalog, 'practices')) : undefined;
        if (!practices) {
          continue;
        }
        for (const element of practices.elements) {
          const { line, column } = nodeLocation(sourceFile, element);
          if (!ts.isObjectLiteralExpression(element)) {
            designTokenEntries.push({
              owner: relativePath,
              group: 'practices',
              name: '<non-object>',
              className: '<non-object>',
              hex: '<non-object>',
              cssVariable: '<non-object>',
              textClass: '<non-object>',
              usage: '<non-object>',
              line,
              column,
            });
            continue;
          }
          const classProperty = objectPropertyInitializer(element, 'cls');
          const cssVariableProperty = objectPropertyInitializer(element, 'cssVar');
          if (classProperty) {
            compatibilityLiteralPositions.add(classProperty.getStart(sourceFile));
          }
          if (cssVariableProperty) {
            compatibilityLiteralPositions.add(cssVariableProperty.getStart(sourceFile));
          }
          designTokenEntries.push({
            owner: relativePath,
            group: 'practices',
            name: objectStringProperty(element, 'name') ?? '<non-literal>',
            className: objectStringProperty(element, 'cls') ?? '<non-literal>',
            hex: objectStringProperty(element, 'hex') ?? '<non-literal>',
            cssVariable: objectStringProperty(element, 'cssVar') ?? '<non-literal>',
            textClass: objectStringProperty(element, 'text') ?? '<non-literal>',
            usage: objectStringProperty(element, 'usage') ?? '<non-literal>',
            line,
            column,
          });
        }
      }
    }
  }

  if (designTokenDeclaration && ts.isIdentifier(designTokenDeclaration.name)) {
    const designTokenDeclarationNode = designTokenDeclaration;
    /** @type {Set<BindingKey>} */
    const catalogBindings = new Set();
    addBinding(catalogBindings, designTokenDeclarationNode.name);
    let aliasesChanged = true;
    while (aliasesChanged) {
      aliasesChanged = false;
      /** @param {Node} node @returns {void} */
      function collectCatalogAliases(node) {
        if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
          const initializerRoot = rootIdentifier(node.initializer);
          if (initializerRoot && bindingSetHas(catalogBindings, initializerRoot)) {
            aliasesChanged = addBinding(catalogBindings, node.name) || aliasesChanged;
          }
        }
        ts.forEachChild(node, collectCatalogAliases);
      }
      collectCatalogAliases(sourceFile);
    }
    const mutationMethods = new Set([
      'copyWithin',
      'fill',
      'pop',
      'push',
      'reverse',
      'shift',
      'sort',
      'splice',
      'unshift',
    ]);
    /** @param {Node} node @param {string} target @returns {void} */
    function recordDesignTokenMutation(node, target) {
      if (node.getStart(sourceFile) <= designTokenDeclarationNode.getEnd() || isStaticallyDead(node)) {
        return;
      }
      designTokenMutations.push({ target, ...nodeLocation(sourceFile, node) });
    }
    /** @param {Node} node @returns {void} */
    function collectDesignTokenMutations(node) {
      if (ts.isBinaryExpression(node) && assignmentOperatorKinds.has(node.operatorToken.kind)) {
        const targetRoot = rootIdentifier(node.left);
        if (targetRoot && bindingSetHas(catalogBindings, targetRoot)) {
          recordDesignTokenMutation(node, node.left.getText(sourceFile));
        }
      } else if (
        (ts.isPrefixUnaryExpression(node) || ts.isPostfixUnaryExpression(node)) &&
        (node.operator === ts.SyntaxKind.PlusPlusToken || node.operator === ts.SyntaxKind.MinusMinusToken)
      ) {
        const targetRoot = rootIdentifier(node.operand);
        if (targetRoot && bindingSetHas(catalogBindings, targetRoot)) {
          recordDesignTokenMutation(node, node.operand.getText(sourceFile));
        }
      } else if (ts.isDeleteExpression(node)) {
        const targetRoot = rootIdentifier(node.expression);
        if (targetRoot && bindingSetHas(catalogBindings, targetRoot)) {
          recordDesignTokenMutation(node, node.expression.getText(sourceFile));
        }
      } else if (ts.isCallExpression(node)) {
        const receiver = memberExpressionReceiver(node.expression);
        const methodName = memberExpressionName(node.expression);
        const receiverRoot = receiver ? rootIdentifier(receiver) : undefined;
        if (
          receiver &&
          receiverRoot &&
          bindingSetHas(catalogBindings, receiverRoot) &&
          methodName &&
          mutationMethods.has(methodName)
        ) {
          recordDesignTokenMutation(node, receiver.getText(sourceFile));
        }
        if (
          receiver &&
          ts.isIdentifier(receiver) &&
          ((isUnshadowedGlobalIdentifier(receiver, 'Object') &&
            (methodName === 'assign' || methodName === 'defineProperty')) ||
            (isUnshadowedGlobalIdentifier(receiver, 'Reflect') &&
              (methodName === 'defineProperty' || methodName === 'deleteProperty' || methodName === 'set')))
        ) {
          const targetArgument = node.arguments[0];
          const target = targetArgument ? rootIdentifier(targetArgument) : undefined;
          if (targetArgument && target && bindingSetHas(catalogBindings, target)) {
            recordDesignTokenMutation(node, targetArgument.getText(sourceFile));
          }
        }
      }
      ts.forEachChild(node, collectDesignTokenMutations);
    }
    collectDesignTokenMutations(sourceFile);
  }

  if (isEslintConfigPath(relativePath)) {
    /** @param {Node} node @returns {void} */
    function appendIgnoreArray(node) {
      const patterns = arrayLiteralValue(node);
      if (!patterns) {
        return;
      }
      for (const element of patterns.elements) {
        if (ts.isSpreadElement(element)) {
          appendIgnoreArray(element.expression);
          continue;
        }
        const value = staticStringValue(element);
        if (value !== undefined) {
          ignorePatterns.push({ source: relativePath, value, ...nodeLocation(sourceFile, element) });
        }
      }
    }

    /** @param {Node} node @returns {void} */
    function collectIgnorePatterns(node) {
      if (ts.isPropertyAssignment(node) && propertyName(node.name) === 'ignores') {
        appendIgnoreArray(node.initializer);
      } else if (ts.isShorthandPropertyAssignment(node) && node.name.text === 'ignores') {
        appendIgnoreArray(node.name);
      } else if (
        ts.isCallExpression(node) &&
        (ts.isIdentifier(node.expression) || ts.isPropertyAccessExpression(node.expression)) &&
        memberExpressionName(node.expression) === 'globalIgnores' &&
        node.arguments[0]
      ) {
        appendIgnoreArray(node.arguments[0]);
      } else if (
        ts.isCallExpression(node) &&
        ts.isIdentifier(node.expression) &&
        node.expression.text === 'globalIgnores' &&
        node.arguments[0]
      ) {
        appendIgnoreArray(node.arguments[0]);
      }
      ts.forEachChild(node, collectIgnorePatterns);
    }
    collectIgnorePatterns(sourceFile);
  }

  const rawParseDiagnostics = Reflect.get(sourceFile, 'parseDiagnostics');
  const parseDiagnostics = Array.isArray(rawParseDiagnostics)
    ? rawParseDiagnostics.map(diagnostic => {
        const start = Reflect.get(diagnostic, 'start');
        const messageText = Reflect.get(diagnostic, 'messageText');
        const location =
          typeof start === 'number' ? sourceFile.getLineAndCharacterOfPosition(start) : { line: 0, character: 0 };
        return {
          message: ts.flattenDiagnosticMessageText(messageText, '\n'),
          line: location.line + 1,
          column: location.character + 1,
        };
      })
    : [];

  return {
    absolutePath,
    parseDiagnostics,
    relativePath,
    sourceFile,
    tokenSignature: sourceTokenSignature(relativePath, text),
    edges,
    importDeclarations,
    literals,
    staticStringReferences,
    identifiers,
    staticNames,
    dynamicCodeExecutions,
    networkReferences,
    ignorePatterns,
    homepageCompositionReferences,
    compatibilityLiteralPositions,
    ambientModules,
    staticPathReferences,
    rewritePairs,
    rewriteMethods,
    redirectPairs,
    nextPageExtensions,
    nextPageExtensionsValid,
    nextRouteMethodsValid,
    hasReachableDefaultConfig: Boolean(defaultConfig),
    defaultExportMutations,
    locationReplaceTargets,
    iframeReferences,
    locationHeaderReferences,
    responseRedirects,
    propertyCalls,
    directCalls,
    tailwindMappings,
    designTokenEntries,
    designTokenMutations,
    fileOperations,
  };
}

/** @param {string} value @returns {string[]} */
function compatibilityTokensInValue(value) {
  const matches = new Set();
  for (const match of value.matchAll(/--(?:color-practices|bp)-[A-Za-z0-9-]+/g)) {
    matches.add(match[0]);
  }
  for (const match of value.matchAll(/(?<![-A-Za-z0-9])[A-Za-z0-9-]+-practices-[A-Za-z0-9-]+/g)) {
    matches.add(match[0]);
  }
  return [...matches].sort(compareText);
}

/** @param {string} value @param {boolean} allowAbsolute @returns {string | undefined} */
function routePathFromReference(value, allowAbsolute) {
  try {
    if (value.startsWith('/') && !value.startsWith('//')) {
      return new URL(value, 'https://architecture.invalid').pathname;
    }
    if (allowAbsolute && isNetworkUrl(value)) {
      return new URL(value, 'https://architecture.invalid').pathname;
    }
  } catch {
    return undefined;
  }
  return undefined;
}

/** @param {string} pattern @returns {string[]} */
function expandBracePattern(pattern) {
  const opening = pattern.indexOf('{');
  const closing = opening === -1 ? -1 : pattern.indexOf('}', opening + 1);
  if (opening === -1 || closing === -1) {
    return [pattern];
  }
  const alternatives = pattern.slice(opening + 1, closing).split(',');
  if (alternatives.length < 2) {
    return [pattern];
  }
  return alternatives.flatMap(alternative =>
    expandBracePattern(`${pattern.slice(0, opening)}${alternative}${pattern.slice(closing + 1)}`),
  );
}

/** @param {string} pattern @param {string} value @returns {boolean} */
function matchGlobSegment(pattern, value) {
  /** @type {Map<string, boolean>} */
  const memo = new Map();
  /** @param {number} patternIndex @param {number} valueIndex @returns {boolean} */
  function match(patternIndex, valueIndex) {
    const key = `${patternIndex}:${valueIndex}`;
    const cached = memo.get(key);
    if (cached !== undefined) {
      return cached;
    }
    let result;
    if (patternIndex === pattern.length) {
      result = valueIndex === value.length;
    } else if (pattern.charAt(patternIndex) === '*') {
      result =
        match(patternIndex + 1, valueIndex) || (valueIndex < value.length && match(patternIndex, valueIndex + 1));
    } else if (pattern.charAt(patternIndex) === '?') {
      result = valueIndex < value.length && match(patternIndex + 1, valueIndex + 1);
    } else if (pattern.charAt(patternIndex) === '[') {
      const closing = pattern.indexOf(']', patternIndex + 1);
      if (closing === -1 || valueIndex >= value.length) {
        result = pattern.charAt(patternIndex) === value.charAt(valueIndex) && match(patternIndex + 1, valueIndex + 1);
      } else {
        let characterClass = pattern.slice(patternIndex + 1, closing);
        const negated = characterClass.startsWith('!') || characterClass.startsWith('^');
        if (negated) {
          characterClass = characterClass.slice(1);
        }
        let included = false;
        for (let index = 0; index < characterClass.length; index += 1) {
          const start = characterClass.charAt(index);
          const end =
            characterClass.charAt(index + 1) === '-' && index + 2 < characterClass.length
              ? characterClass.charAt(index + 2)
              : undefined;
          if (end !== undefined) {
            const candidate = value.charAt(valueIndex);
            included = candidate >= start && candidate <= end;
            index += 2;
          } else if (value.charAt(valueIndex) === start) {
            included = true;
          }
          if (included) {
            break;
          }
        }
        result = (negated ? !included : included) && match(closing + 1, valueIndex + 1);
      }
    } else {
      result = pattern.charAt(patternIndex) === value.charAt(valueIndex) && match(patternIndex + 1, valueIndex + 1);
    }
    memo.set(key, result);
    return result;
  }
  return match(0, 0);
}

/** @param {string} pattern @param {string} candidate @returns {boolean} */
function matchGlobPath(pattern, candidate) {
  const patternSegments = pattern.split('/').filter(Boolean);
  const candidateSegments = candidate.split('/').filter(Boolean);
  /** @type {Map<string, boolean>} */
  const memo = new Map();
  /** @param {number} patternIndex @param {number} candidateIndex @returns {boolean} */
  function match(patternIndex, candidateIndex) {
    const key = `${patternIndex}:${candidateIndex}`;
    const cached = memo.get(key);
    if (cached !== undefined) {
      return cached;
    }
    let result;
    if (patternIndex === patternSegments.length) {
      result = candidateIndex === candidateSegments.length;
    } else {
      const patternSegment = patternSegments[patternIndex];
      const candidateSegment = candidateSegments[candidateIndex];
      if (patternSegment === '**') {
        result =
          match(patternIndex + 1, candidateIndex) ||
          (candidateIndex < candidateSegments.length && match(patternIndex, candidateIndex + 1));
      } else {
        result =
          patternSegment !== undefined &&
          candidateSegment !== undefined &&
          matchGlobSegment(patternSegment, candidateSegment) &&
          match(patternIndex + 1, candidateIndex + 1);
      }
    }
    memo.set(key, result);
    return result;
  }
  return match(0, 0);
}

/** @param {string} rawPattern @param {string} retiredRoot @returns {boolean} */
function ignorePatternCoversRoot(rawPattern, retiredRoot) {
  const pattern = rawPattern.trim();
  if (!pattern || pattern.startsWith('#') || pattern.startsWith('!')) {
    return false;
  }
  const normalized = pattern.replace(/^\.\//, '').replace(/^\//, '').replace(/\/$/, '');
  const candidates = [retiredRoot, `${retiredRoot}/architecture-guard.ts`];
  return expandBracePattern(normalized).some(expanded => {
    if (!expanded.includes('/')) {
      return retiredRoot.split('/').some(segment => matchGlobSegment(expanded, segment));
    }
    return candidates.some(candidate => matchGlobPath(expanded, candidate));
  });
}

/** @returns {FindingCollector} */
function findingCollector() {
  const findings = new Map();

  return {
    add(code, message) {
      findings.set(`${code}\0${message}`, { code, message });
    },
    list() {
      return [...findings.values()].sort((left, right) =>
        left.code === right.code ? compareText(left.message, right.message) : compareText(left.code, right.code),
      );
    },
  };
}

/** @param {ExactComparableEntry} entry @returns {string} */
function importDeclarationKey(entry) {
  return [
    entry.module ?? '',
    entry.defaultBinding ?? '',
    entry.namespaceBinding ?? '',
    entry.typeOnly ? 'type' : 'value',
    ...(entry.namedBindings ?? []).map(
      binding => `${binding.imported}:${binding.local}:${binding.typeOnly ? 'type' : 'value'}`,
    ),
  ].join('\0');
}

/** @param {string} target @param {ContextLayer} layer @param {string | undefined} context @returns {boolean} */
function isPublicContextEntry(target, layer, context) {
  if (!context) {
    return false;
  }
  const prefix =
    layer === 'feature-ui'
      ? `src/components/features/${context}`
      : layer === 'content'
        ? `src/content/${context}`
        : layer === 'service'
          ? `src/services/${context}`
          : undefined;
  const targetWithoutExtension = target.replace(/\.(?:[cm]?ts|tsx|[cm]?js|jsx)$/, '');
  return Boolean(prefix && targetWithoutExtension === `${prefix}/index`);
}

/** @param {string} sourcePath @returns {string | undefined} */
function appContext(sourcePath) {
  const segments = sourcePath.slice('src/app/'.length).split('/');
  const routeSegments = segments.filter(segment => !/^\(.+\)$/.test(segment));
  const first = routeSegments[0];
  if (!first || routeSegments.length === 1 || /^(?:layout|page|robots|sitemap|globals)(?:\.|$)/.test(first)) {
    return undefined;
  }
  if (first === 'api') {
    const apiContext = routeSegments[1];
    if (apiContext === 'v1' && routeSegments[2] === 'messages') {
      return 'llm-provider';
    }
    if (apiContext === 'static' && routeSegments[2] === 'homepage') {
      return 'homepage';
    }
    return apiContext;
  }
  if (first === 'v1' && routeSegments[1] === 'messages') {
    return 'llm-provider';
  }
  return first;
}

/** @param {string} fileName @param {string[]} pageExtensions @returns {string | undefined} */
function configuredExtension(fileName, pageExtensions) {
  return pageExtensions.find(extension => fileName.endsWith(`.${extension}`));
}

/** @param {string} sourcePath @param {string[]} pageExtensions @returns {RouteIdentity | undefined} */
function appRouteIdentity(sourcePath, pageExtensions) {
  const root = sourcePath.startsWith('src/app/') ? 'src/app/' : sourcePath.startsWith('app/') ? 'app/' : undefined;
  if (!root) {
    return undefined;
  }
  const relativePath = sourcePath.slice(root.length);
  const fileName = posix.basename(relativePath);
  const extension = configuredExtension(fileName, pageExtensions);
  if (!extension) {
    return undefined;
  }
  const entryName = fileName.slice(0, -(extension.length + 1));
  if (entryName !== 'page' && entryName !== 'route') {
    return undefined;
  }
  const directory = posix.dirname(relativePath);
  const segments = directory === '.' ? [] : directory.split('/');
  const routeSegments = segments.filter(segment => !/^\(.+\)$/.test(segment) && !segment.startsWith('@'));
  return { route: routeSegments.length === 0 ? '/' : `/${routeSegments.join('/')}`, kind: `app-${entryName}` };
}

/** @param {string} sourcePath @param {string[]} pageExtensions @returns {RouteIdentity | undefined} */
function pagesRouteIdentity(sourcePath, pageExtensions) {
  const root = sourcePath.startsWith('src/pages/')
    ? 'src/pages/'
    : sourcePath.startsWith('pages/')
      ? 'pages/'
      : undefined;
  if (!root) {
    return undefined;
  }
  const relativePath = sourcePath.slice(root.length);
  const fileName = posix.basename(relativePath);
  const extension = configuredExtension(fileName, pageExtensions);
  if (!extension) {
    return undefined;
  }
  let routePath = relativePath.slice(0, -(extension.length + 1));
  if (['_app', '_document', '_error'].includes(routePath)) {
    return undefined;
  }
  if (routePath === 'index') {
    routePath = '';
  } else if (routePath.endsWith('/index')) {
    routePath = routePath.slice(0, -'/index'.length);
  }
  return { route: routePath ? `/${routePath}` : '/', kind: 'pages-route' };
}

/** @param {string} pattern @param {string} exactRoute @returns {boolean} */
function routePatternMatchesExact(pattern, exactRoute) {
  const patternSegments = pattern === '/' ? [] : pattern.replace(/^\//, '').split('/');
  const exactSegments = exactRoute === '/' ? [] : exactRoute.replace(/^\//, '').split('/');
  /** @type {Map<string, boolean>} */
  const memo = new Map();

  /** @param {number} patternIndex @param {number} exactIndex @returns {boolean} */
  function matches(patternIndex, exactIndex) {
    const key = `${patternIndex}:${exactIndex}`;
    const cached = memo.get(key);
    if (cached !== undefined) {
      return cached;
    }
    let result;
    if (patternIndex === patternSegments.length) {
      result = exactIndex === exactSegments.length;
    } else {
      const segment = patternSegments[patternIndex];
      if (segment === undefined) {
        result = false;
      } else {
        const optionalCatchAll = /^\[\[\.\.\.[A-Za-z0-9_-]+\]\]$/.test(segment) || /^:[A-Za-z0-9_-]+\*$/.test(segment);
        const catchAll = /^\[\.\.\.[A-Za-z0-9_-]+\]$/.test(segment) || /^:[A-Za-z0-9_-]+\+$/.test(segment);
        const dynamic = /^\[[A-Za-z0-9_-]+\]$/.test(segment) || /^:[A-Za-z0-9_-]+$/.test(segment);
        if (optionalCatchAll) {
          result =
            matches(patternIndex + 1, exactIndex) ||
            (exactIndex < exactSegments.length && matches(patternIndex, exactIndex + 1));
        } else if (catchAll) {
          result = exactIndex < exactSegments.length && matches(patternIndex + 1, exactSegments.length);
        } else if (dynamic) {
          result = exactIndex < exactSegments.length && matches(patternIndex + 1, exactIndex + 1);
        } else {
          result =
            exactIndex < exactSegments.length &&
            segment === exactSegments[exactIndex] &&
            matches(patternIndex + 1, exactIndex + 1);
        }
      }
    }
    memo.set(key, result);
    return result;
  }

  return matches(0, 0);
}

/** @param {string} sourcePath @returns {ContextOwner} */
function classifyContextOwner(sourcePath) {
  for (const prefix of ['src/components/brand', 'src/config', 'src/lib', 'src/styles', 'src/types']) {
    if (isWithinPath(sourcePath, prefix)) {
      return { layer: 'shared', context: undefined };
    }
  }
  const featureMatch = sourcePath.match(/^src\/components\/features\/([^/]+)(?:\/|$)/);
  if (featureMatch) {
    return { layer: 'feature-ui', context: featureMatch[1] };
  }
  if (isWithinPath(sourcePath, 'src/components')) {
    return {
      layer: 'composition',
      context: sourcePath === frozenHomepageComposition.owner ? 'homepage' : undefined,
    };
  }
  const contentMatch = sourcePath.match(/^src\/content\/([^/]+)(?:\/|$)/);
  if (contentMatch) {
    return { layer: 'content', context: contentMatch[1] };
  }
  const serviceMatch = sourcePath.match(/^src\/services\/([^/]+)(?:\/|$)/);
  if (serviceMatch) {
    return { layer: 'service', context: serviceMatch[1] };
  }
  if (isWithinPath(sourcePath, 'src/app')) {
    return { layer: 'app', context: appContext(sourcePath) };
  }
  return { layer: 'other', context: undefined };
}

/** @param {string} text @returns {string} */
function stripCssComments(text) {
  const characters = text.split('');
  let quote;
  for (let index = 0; index < characters.length; index += 1) {
    const character = characters[index];
    const next = characters[index + 1];
    if (quote) {
      if (character === '\\') {
        index += 1;
      } else if (character === quote) {
        quote = undefined;
      }
      continue;
    }
    if (character === '"' || character === "'") {
      quote = character;
      continue;
    }
    if (character !== '/' || next !== '*') {
      continue;
    }
    characters[index] = ' ';
    characters[index + 1] = ' ';
    index += 2;
    while (index < characters.length) {
      if (characters[index] === '*' && characters[index + 1] === '/') {
        characters[index] = ' ';
        characters[index + 1] = ' ';
        index += 1;
        break;
      }
      if (characters[index] !== '\n' && characters[index] !== '\r') {
        characters[index] = ' ';
      }
      index += 1;
    }
  }
  return characters.join('');
}

/** @param {string} text @param {number} openingIndex @param {number} end @returns {number} */
function findCssBlockEnd(text, openingIndex, end) {
  let depth = 1;
  let quote;
  for (let index = openingIndex + 1; index < end; index += 1) {
    const character = text[index];
    if (quote) {
      if (character === '\\') {
        index += 1;
      } else if (character === quote) {
        quote = undefined;
      }
      continue;
    }
    if (character === '"' || character === "'") {
      quote = character;
    } else if (character === '{') {
      depth += 1;
    } else if (character === '}') {
      depth -= 1;
      if (depth === 0) {
        return index;
      }
    }
  }
  return end;
}

/** @param {string} text @returns {CssFacts} */
function collectCssDeclarations(text) {
  const source = stripCssComments(text);
  /** @type {CssDeclaration[]} */
  const declarations = [];

  /** @param {number} start @param {number} end @param {boolean} topLevel @param {boolean} liveRoot @returns {void} */
  function visitScope(start, end, topLevel, liveRoot) {
    let statementStart = start;
    let parenthesisDepth = 0;
    let quote;
    for (let index = start; index < end; index += 1) {
      const character = source[index];
      if (quote) {
        if (character === '\\') {
          index += 1;
        } else if (character === quote) {
          quote = undefined;
        }
        continue;
      }
      if (character === '"' || character === "'") {
        quote = character;
        continue;
      }
      if (character === '(') {
        parenthesisDepth += 1;
        continue;
      }
      if (character === ')') {
        parenthesisDepth = Math.max(0, parenthesisDepth - 1);
        continue;
      }
      if (parenthesisDepth > 0) {
        continue;
      }
      if (character === '{') {
        const prelude = source.slice(statementStart, index).trim();
        const closingIndex = findCssBlockEnd(source, index, end);
        visitScope(index + 1, closingIndex, false, topLevel && prelude === ':root');
        index = closingIndex;
        statementStart = index + 1;
        continue;
      }
      if (character !== ';') {
        continue;
      }
      const declarationText = source.slice(statementStart, index + 1);
      const colonIndex = declarationText.indexOf(':');
      if (colonIndex !== -1) {
        const name = declarationText.slice(0, colonIndex).trim();
        if (name.startsWith('--')) {
          const rawValue = declarationText
            .slice(colonIndex + 1, -1)
            .trim()
            .replace(/\s+/g, ' ');
          const nameOffset = declarationText.indexOf(name);
          const declarationStart = statementStart + Math.max(0, nameOffset);
          declarations.push({
            name,
            value: rawValue,
            start: declarationStart,
            end: index + 1,
            line: source.slice(0, declarationStart).split('\n').length,
            liveRoot,
          });
        }
      }
      statementStart = index + 1;
    }
  }

  visitScope(0, source.length, true, false);
  return { source, declarations };
}

/** @param {string} filePath @param {string} text @returns {string} */
function sourceTokenSignature(filePath, text) {
  const languageVariant = /\.(?:jsx|tsx)$/.test(filePath) ? ts.LanguageVariant.JSX : ts.LanguageVariant.Standard;
  const scanner = ts.createScanner(ts.ScriptTarget.Latest, true, languageVariant, text);
  /** @type {string[]} */
  const tokens = [];

  for (let token = scanner.scan(); token !== ts.SyntaxKind.EndOfFileToken; token = scanner.scan()) {
    const value =
      token === ts.SyntaxKind.Identifier ||
      token === ts.SyntaxKind.PrivateIdentifier ||
      token === ts.SyntaxKind.StringLiteral ||
      token === ts.SyntaxKind.NumericLiteral ||
      token === ts.SyntaxKind.NoSubstitutionTemplateLiteral ||
      token === ts.SyntaxKind.TemplateHead ||
      token === ts.SyntaxKind.TemplateMiddle ||
      token === ts.SyntaxKind.TemplateTail
        ? scanner.getTokenValue()
        : '';
    tokens.push(`${token}:${value}`);
  }

  return tokens.join('\0');
}

/** @param {RewriteMethodFact} method @param {string} source @param {string} destination @returns {boolean} */
function exactRewriteMethod(method, source, destination) {
  const node = method.node;
  if (!node.body || node.parameters.length !== 0 || node.body.statements.length !== 1) {
    return false;
  }
  if (!node.modifiers?.some(modifier => modifier.kind === ts.SyntaxKind.AsyncKeyword)) {
    return false;
  }

  const statement = node.body.statements[0];
  if (!statement || !ts.isReturnStatement(statement) || !statement.expression) {
    return false;
  }
  const array = statement.expression;
  if (!ts.isArrayLiteralExpression(array) || array.elements.length !== 1) {
    return false;
  }
  const element = array.elements[0];
  if (!element || !ts.isObjectLiteralExpression(element) || element.properties.length !== 2) {
    return false;
  }

  const values = new Map();
  for (const property of element.properties) {
    if (!ts.isPropertyAssignment(property)) {
      return false;
    }
    const name =
      ts.isIdentifier(property.name) || ts.isStringLiteral(property.name) || ts.isNumericLiteral(property.name)
        ? property.name.text
        : undefined;
    const value = literalText(property.initializer);
    if (!name || value === undefined || values.has(name)) {
      return false;
    }
    values.set(name, value);
  }

  return values.size === 2 && values.get('source') === source && values.get('destination') === destination;
}

/**
 * @param {{
 *   expected: ExactComparableEntry[],
 *   actual: ExactComparableEntry[],
 *   key: (entry: ExactComparableEntry) => string,
 *   describeExpected: (entry: ExactComparableEntry) => string,
 *   describeActual: (entry: ExactComparableEntry) => string,
 *   code: string,
 *   findings: FindingCollector,
 * }} options
 * @returns {void}
 */
function compareExactEntries({ expected, actual, key, describeExpected, describeActual, code, findings }) {
  const expectedCounts = new Map();
  const actualCounts = new Map();

  for (const entry of expected) {
    const entryKey = key(entry);
    expectedCounts.set(entryKey, (expectedCounts.get(entryKey) ?? 0) + 1);
  }
  for (const entry of actual) {
    const entryKey = key(entry);
    const entries = actualCounts.get(entryKey) ?? [];
    entries.push(entry);
    actualCounts.set(entryKey, entries);
  }

  for (const entry of expected) {
    const entryKey = key(entry);
    const expectedCount = expectedCounts.get(entryKey) ?? 0;
    const actualCount = actualCounts.get(entryKey)?.length ?? 0;
    if (actualCount < expectedCount) {
      findings.add(code, describeExpected(entry));
      expectedCounts.set(entryKey, actualCount);
    }
  }

  for (const [entryKey, entries] of actualCounts) {
    const expectedCount = expected.filter(entry => key(entry) === entryKey).length;
    for (const entry of entries.slice(expectedCount)) {
      findings.add(code, describeActual(entry));
    }
  }
}

/** @param {unknown} value @returns {value is UnknownRecord} */
function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/** @param {unknown} value @param {string} path @param {readonly string[]} expectedKeys @param {string[]} errors @returns {UnknownRecord | undefined} */
function validateRecord(value, path, expectedKeys, errors) {
  if (!isRecord(value)) {
    errors.push(`${path} must be an object`);
    return undefined;
  }

  const actualKeys = Object.keys(value).sort(compareText);
  const expected = [...expectedKeys].sort(compareText);
  for (const key of expected) {
    if (!Object.hasOwn(value, key)) {
      errors.push(`${path}.${key} is required`);
    }
  }
  for (const key of actualKeys) {
    if (!expected.includes(key)) {
      errors.push(`${path}.${key} is not allowed`);
    }
  }
  return value;
}

/** @param {unknown} value @param {string} path @param {string[]} errors @returns {unknown[]} */
function validateArray(value, path, errors) {
  if (!Array.isArray(value)) {
    errors.push(`${path} must be an array`);
    return [];
  }
  return value;
}

/** @param {UnknownRecord | undefined} record @param {string} field @param {string} path @param {string[]} errors @returns {string | undefined} */
function validateString(record, field, path, errors) {
  const value = record ? Reflect.get(record, field) : undefined;
  if (typeof value !== 'string' || value.length === 0) {
    errors.push(`${path}.${field} must be a non-empty string`);
    return undefined;
  }
  if (value.trim() !== value || /[\0\r\n]/.test(value)) {
    errors.push(`${path}.${field} must be a trimmed single-line string`);
    return undefined;
  }
  return value;
}

/** @param {string} value @param {boolean} [allowNextRouteSegments] @returns {boolean} */
function hasWildcard(value, allowNextRouteSegments = false) {
  if (/[*?{}]/.test(value)) {
    return true;
  }
  if (!value.includes('[') && !value.includes(']')) {
    return false;
  }
  if (!allowNextRouteSegments) {
    return true;
  }
  const nextRouteSegmentPattern = /^(?:\[[A-Za-z0-9_-]+\]|\[\.\.\.[A-Za-z0-9_-]+\]|\[\[\.\.\.[A-Za-z0-9_-]+\]\])$/;
  return value
    .split('/')
    .some(segment => (segment.includes('[') || segment.includes(']')) && !nextRouteSegmentPattern.test(segment));
}

/** @param {string | undefined} value @param {string} path @param {string[]} errors @param {boolean} [allowNextRouteSegments] @returns {void} */
function validateExactText(value, path, errors, allowNextRouteSegments = false) {
  if (value && hasWildcard(value, allowNextRouteSegments)) {
    errors.push(`${path} must not contain glob or wildcard syntax`);
  }
}

/** @param {string | undefined} value @param {string} path @param {string[]} errors @returns {void} */
function validateModuleSpecifier(value, path, errors) {
  if (!value) {
    return;
  }
  validateExactText(value, path, errors, true);
  const segments = value.split('/');
  if (
    isAbsolute(value) ||
    value.startsWith('/') ||
    value.startsWith('~') ||
    /^[A-Za-z][A-Za-z0-9+.-]*:/.test(value) ||
    value.includes('\\') ||
    value.includes('\0') ||
    segments.some(segment => segment === '' || segment === '.' || segment === '..') ||
    posix.normalize(value) !== value
  ) {
    errors.push(`${path} must be an exact normalized module specifier`);
  }
}

/** @param {string | undefined} value @param {string} path @param {string[]} errors @returns {void} */
function validateRepositoryPath(value, path, errors) {
  if (!value) {
    return;
  }
  validateExactText(value, path, errors, true);
  const segments = value.split('/');
  if (
    isAbsolute(value) ||
    value.startsWith('/') ||
    value.startsWith('~') ||
    /^[A-Za-z][A-Za-z0-9+.-]*:/.test(value) ||
    value.includes('\\') ||
    value.includes('\0') ||
    segments.some(segment => segment === '' || segment === '.' || segment === '..') ||
    posix.normalize(value) !== value
  ) {
    errors.push(`${path} must be a normalized repository-relative path`);
  }
}

/** @param {string | undefined} value @param {string} path @param {string[]} errors @returns {void} */
function validateRoute(value, path, errors) {
  if (!value) {
    return;
  }
  validateExactText(value, path, errors);
  const segments = value === '/' ? [] : value.slice(1).split('/');
  if (
    !value.startsWith('/') ||
    value.includes('\\') ||
    value.includes('\0') ||
    value.includes('?') ||
    value.includes('#') ||
    segments.some(segment => segment === '' || segment === '.' || segment === '..') ||
    posix.normalize(value) !== value
  ) {
    errors.push(`${path} must be an exact absolute route`);
  }
}

/** @param {string | undefined} value @param {RegExp} pattern @param {string} path @param {string} description @param {string[]} errors @returns {void} */
function validatePattern(value, pattern, path, description, errors) {
  if (value && !pattern.test(value)) {
    errors.push(`${path} must be ${description}`);
  }
}

/** @param {unknown[]} entries @param {(entry: unknown) => string | undefined} key @param {string} path @param {string[]} errors @returns {void} */
function validateDuplicates(entries, key, path, errors) {
  /** @type {Set<string>} */
  const seen = new Set();
  for (const [index, entry] of entries.entries()) {
    const entryKey = key(entry);
    if (entryKey === undefined) {
      continue;
    }
    if (seen.has(entryKey)) {
      errors.push(`${path}[${index}] duplicates ${entryKey.replaceAll('\0', ' / ')}`);
    } else {
      seen.add(entryKey);
    }
  }
}

/** @param {unknown} entry @param {readonly string[]} fields @returns {string | undefined} */
function objectFieldsKey(entry, fields) {
  if (!isRecord(entry)) {
    return undefined;
  }
  return fields.map(field => String(Reflect.get(entry, field) ?? '')).join('\0');
}

/** @param {unknown[]} entries @param {unknown[]} maximumEntries @param {(entry: unknown) => string | undefined} key @param {string} path @param {string[]} errors @returns {void} */
function validateClosedBudget(entries, maximumEntries, key, path, errors) {
  /** @type {Set<string | undefined>} */
  const maximumKeys = new Set(maximumEntries.map(entry => key(entry)));
  for (const [index, entry] of entries.entries()) {
    const entryKey = key(entry);
    if (entryKey !== undefined && !maximumKeys.has(entryKey)) {
      errors.push(`${path}[${index}] is outside the closed compatibility budget`);
    }
  }
}

/** @param {UnknownRecord} homepage @param {keyof ExternalHomepageBoundary} field @param {string[]} errors @returns {void} */
function validateFrozenHomepageField(homepage, field, errors) {
  const actual = Reflect.get(homepage, field);
  const expected = Reflect.get(frozenHomepageBoundary, field);
  if (actual !== expected) {
    errors.push(`manifest.externalHomepage.${field} must remain ${JSON.stringify(expected)}`);
  }
}

/** @param {unknown} manifest @returns {string[]} */
function validateManifest(manifest) {
  /** @type {string[]} */
  const errors = [];
  const root = validateRecord(
    manifest,
    'manifest',
    [
      'schemaVersion',
      'externalHomepage',
      'compatibility',
      'forbiddenRoots',
      'forbiddenFiles',
      'forbiddenSymbols',
      'apiToMainExceptions',
    ],
    errors,
  );
  if (!root) {
    return errors;
  }

  if (root.schemaVersion !== 1) {
    errors.push('manifest.schemaVersion must be 1');
  }

  const homepage = validateRecord(
    root.externalHomepage,
    'manifest.externalHomepage',
    [
      'package',
      'packageManifest',
      'source',
      'adapter',
      'generated',
      'publicPath',
      'headersFile',
      'contentSecurityPolicy',
      'iframeSandbox',
      'iframeAllow',
      'iframeReferrerPolicy',
      'references',
    ],
    errors,
  );
  if (homepage) {
    const packageName = validateString(homepage, 'package', 'manifest.externalHomepage', errors);
    const packageManifest = validateString(homepage, 'packageManifest', 'manifest.externalHomepage', errors);
    const source = validateString(homepage, 'source', 'manifest.externalHomepage', errors);
    const adapter = validateString(homepage, 'adapter', 'manifest.externalHomepage', errors);
    const generated = validateString(homepage, 'generated', 'manifest.externalHomepage', errors);
    const publicPath = validateString(homepage, 'publicPath', 'manifest.externalHomepage', errors);
    const headersFile = validateString(homepage, 'headersFile', 'manifest.externalHomepage', errors);
    validateString(homepage, 'contentSecurityPolicy', 'manifest.externalHomepage', errors);
    validateString(homepage, 'iframeSandbox', 'manifest.externalHomepage', errors);
    validateString(homepage, 'iframeAllow', 'manifest.externalHomepage', errors);
    validateString(homepage, 'iframeReferrerPolicy', 'manifest.externalHomepage', errors);
    validateModuleSpecifier(packageName, 'manifest.externalHomepage.package', errors);
    validateRepositoryPath(packageManifest, 'manifest.externalHomepage.packageManifest', errors);
    validateRepositoryPath(source, 'manifest.externalHomepage.source', errors);
    validateRepositoryPath(adapter, 'manifest.externalHomepage.adapter', errors);
    validateRepositoryPath(generated, 'manifest.externalHomepage.generated', errors);
    validateRoute(publicPath, 'manifest.externalHomepage.publicPath', errors);
    validateRepositoryPath(headersFile, 'manifest.externalHomepage.headersFile', errors);
    for (const field of /** @type {(keyof ExternalHomepageBoundary)[]} */ ([
      'package',
      'packageManifest',
      'source',
      'adapter',
      'generated',
      'publicPath',
      'headersFile',
      'contentSecurityPolicy',
      'iframeSandbox',
      'iframeAllow',
      'iframeReferrerPolicy',
    ])) {
      validateFrozenHomepageField(homepage, field, errors);
    }

    const references = validateArray(homepage.references, 'manifest.externalHomepage.references', errors);
    for (const [index, value] of references.entries()) {
      const path = `manifest.externalHomepage.references[${index}]`;
      const reference = validateRecord(value, path, ['source', 'kind'], errors);
      if (!reference) {
        continue;
      }
      const referenceSource = validateString(reference, 'source', path, errors);
      const kind = validateString(reference, 'kind', path, errors);
      validateRepositoryPath(referenceSource, `${path}.source`, errors);
      if (kind && kind !== 'iframe-src' && kind !== 'redirect-location') {
        errors.push(`${path}.kind must be iframe-src or redirect-location`);
      }
    }
    validateDuplicates(
      references,
      entry => objectFieldsKey(entry, ['source', 'kind']),
      'manifest.externalHomepage.references',
      errors,
    );
    validateClosedBudget(
      references,
      frozenHomepageBoundary.references,
      entry => objectFieldsKey(entry, ['source', 'kind']),
      'manifest.externalHomepage.references',
      errors,
    );
  }

  const compatibility = validateRecord(
    root.compatibility,
    'manifest.compatibility',
    ['facades', 'ambientDeclarations', 'tokenDefinitions', 'tokenAliases', 'tailwindMappings', 'designTokenEntries'],
    errors,
  );
  if (compatibility) {
    const facades = validateArray(compatibility.facades, 'manifest.compatibility.facades', errors);
    const facadeKinds = new Set(['client-redirect', 'module-reexport', 'rewrite', 'redirect']);
    for (const [index, value] of facades.entries()) {
      const path = `manifest.compatibility.facades[${index}]`;
      if (!isRecord(value)) {
        errors.push(`${path} must be an object`);
        continue;
      }
      const rawKind = typeof value.kind === 'string' ? value.kind : undefined;
      const fields =
        rawKind === 'module-reexport'
          ? ['route', 'owner', 'kind', 'specifier', 'targetOwner']
          : ['route', 'owner', 'kind', 'target', 'targetOwner'];
      const facade = validateRecord(value, path, fields, errors);
      if (!facade) {
        continue;
      }
      const route = validateString(facade, 'route', path, errors);
      const owner = validateString(facade, 'owner', path, errors);
      const kind = validateString(facade, 'kind', path, errors);
      const targetOwner = validateString(facade, 'targetOwner', path, errors);
      validateRoute(route, `${path}.route`, errors);
      validateRepositoryPath(owner, `${path}.owner`, errors);
      validateRepositoryPath(targetOwner, `${path}.targetOwner`, errors);
      if (kind && !facadeKinds.has(kind)) {
        errors.push(`${path}.kind is unsupported`);
      }
      if (kind === 'module-reexport') {
        const specifier = validateString(facade, 'specifier', path, errors);
        validateModuleSpecifier(specifier, `${path}.specifier`, errors);
      } else {
        const target = validateString(facade, 'target', path, errors);
        validateRoute(target, `${path}.target`, errors);
      }
    }
    validateDuplicates(
      facades,
      entry => (isRecord(entry) && typeof entry.route === 'string' ? entry.route : undefined),
      'manifest.compatibility.facades routes',
      errors,
    );
    validateDuplicates(
      facades,
      entry => (isRecord(entry) && typeof entry.owner === 'string' ? entry.owner : undefined),
      'manifest.compatibility.facades owners',
      errors,
    );
    validateClosedBudget(
      facades,
      maximumCompatibilityBudget.facades,
      entry => objectFieldsKey(entry, ['route', 'owner', 'kind', 'target', 'specifier', 'targetOwner']),
      'manifest.compatibility.facades',
      errors,
    );

    const ambientDeclarations = validateArray(
      compatibility.ambientDeclarations,
      'manifest.compatibility.ambientDeclarations',
      errors,
    );
    for (const [index, value] of ambientDeclarations.entries()) {
      const path = `manifest.compatibility.ambientDeclarations[${index}]`;
      const declaration = validateRecord(value, path, ['module', 'owner'], errors);
      if (!declaration) {
        continue;
      }
      const moduleName = validateString(declaration, 'module', path, errors);
      const owner = validateString(declaration, 'owner', path, errors);
      validateModuleSpecifier(moduleName, `${path}.module`, errors);
      validateRepositoryPath(owner, `${path}.owner`, errors);
    }
    validateDuplicates(
      ambientDeclarations,
      entry => objectFieldsKey(entry, ['owner', 'module']),
      'manifest.compatibility.ambientDeclarations',
      errors,
    );
    validateClosedBudget(
      ambientDeclarations,
      maximumCompatibilityBudget.ambientDeclarations,
      entry => objectFieldsKey(entry, ['owner', 'module']),
      'manifest.compatibility.ambientDeclarations',
      errors,
    );

    const tokenDefinitions = validateArray(
      compatibility.tokenDefinitions,
      'manifest.compatibility.tokenDefinitions',
      errors,
    );
    for (const [index, value] of tokenDefinitions.entries()) {
      const path = `manifest.compatibility.tokenDefinitions[${index}]`;
      const definition = validateRecord(value, path, ['owner', 'name', 'value'], errors);
      if (!definition) {
        continue;
      }
      const owner = validateString(definition, 'owner', path, errors);
      const name = validateString(definition, 'name', path, errors);
      const definitionValue = validateString(definition, 'value', path, errors);
      validateRepositoryPath(owner, `${path}.owner`, errors);
      validateExactText(definitionValue, `${path}.value`, errors);
      validatePattern(
        name,
        /^--color-practices-[a-z0-9-]+$/,
        `${path}.name`,
        'a --color-practices-* custom property',
        errors,
      );
    }
    validateDuplicates(
      tokenDefinitions,
      entry => objectFieldsKey(entry, ['owner', 'name']),
      'manifest.compatibility.tokenDefinitions',
      errors,
    );
    validateClosedBudget(
      tokenDefinitions,
      maximumCompatibilityBudget.tokenDefinitions,
      entry => objectFieldsKey(entry, ['owner', 'name', 'value']),
      'manifest.compatibility.tokenDefinitions',
      errors,
    );

    const tokenAliases = validateArray(compatibility.tokenAliases, 'manifest.compatibility.tokenAliases', errors);
    for (const [index, value] of tokenAliases.entries()) {
      const path = `manifest.compatibility.tokenAliases[${index}]`;
      const alias = validateRecord(value, path, ['owner', 'alias', 'target'], errors);
      if (!alias) {
        continue;
      }
      const owner = validateString(alias, 'owner', path, errors);
      const name = validateString(alias, 'alias', path, errors);
      const target = validateString(alias, 'target', path, errors);
      validateRepositoryPath(owner, `${path}.owner`, errors);
      validatePattern(name, /^--bp-[a-z0-9-]+$/, `${path}.alias`, 'a --bp-* custom property', errors);
      validatePattern(target, /^--[a-z0-9-]+$/, `${path}.target`, 'a CSS custom property', errors);
    }
    validateDuplicates(
      tokenAliases,
      entry => objectFieldsKey(entry, ['owner', 'alias']),
      'manifest.compatibility.tokenAliases',
      errors,
    );
    validateClosedBudget(
      tokenAliases,
      maximumCompatibilityBudget.tokenAliases,
      entry => objectFieldsKey(entry, ['owner', 'alias', 'target']),
      'manifest.compatibility.tokenAliases',
      errors,
    );

    const tailwindMappings = validateArray(
      compatibility.tailwindMappings,
      'manifest.compatibility.tailwindMappings',
      errors,
    );
    for (const [index, value] of tailwindMappings.entries()) {
      const path = `manifest.compatibility.tailwindMappings[${index}]`;
      const mapping = validateRecord(value, path, ['owner', 'name', 'cssVariable'], errors);
      if (!mapping) {
        continue;
      }
      const owner = validateString(mapping, 'owner', path, errors);
      const name = validateString(mapping, 'name', path, errors);
      const cssVariable = validateString(mapping, 'cssVariable', path, errors);
      validateRepositoryPath(owner, `${path}.owner`, errors);
      validatePattern(name, /^practices-[a-z0-9-]+$/, `${path}.name`, 'a practices-* mapping', errors);
      validatePattern(
        cssVariable,
        /^--color-practices-[a-z0-9-]+$/,
        `${path}.cssVariable`,
        'a --color-practices-* custom property',
        errors,
      );
    }
    validateDuplicates(
      tailwindMappings,
      entry => objectFieldsKey(entry, ['owner', 'name']),
      'manifest.compatibility.tailwindMappings',
      errors,
    );
    validateClosedBudget(
      tailwindMappings,
      maximumCompatibilityBudget.tailwindMappings,
      entry => objectFieldsKey(entry, ['owner', 'name', 'cssVariable']),
      'manifest.compatibility.tailwindMappings',
      errors,
    );

    const designTokenEntries = validateArray(
      compatibility.designTokenEntries,
      'manifest.compatibility.designTokenEntries',
      errors,
    );
    for (const [index, value] of designTokenEntries.entries()) {
      const path = `manifest.compatibility.designTokenEntries[${index}]`;
      const entry = validateRecord(
        value,
        path,
        ['owner', 'group', 'name', 'className', 'hex', 'cssVariable', 'textClass', 'usage'],
        errors,
      );
      if (!entry) {
        continue;
      }
      const owner = validateString(entry, 'owner', path, errors);
      const group = validateString(entry, 'group', path, errors);
      const displayName = validateString(entry, 'name', path, errors);
      const className = validateString(entry, 'className', path, errors);
      const hex = validateString(entry, 'hex', path, errors);
      const cssVariable = validateString(entry, 'cssVariable', path, errors);
      const textClass = validateString(entry, 'textClass', path, errors);
      const usage = validateString(entry, 'usage', path, errors);
      validateRepositoryPath(owner, `${path}.owner`, errors);
      validateExactText(displayName, `${path}.name`, errors);
      validateExactText(usage, `${path}.usage`, errors);
      if (group && group !== 'practices') {
        errors.push(`${path}.group must be practices`);
      }
      validatePattern(hex, /^#[0-9a-f]{6}$/, `${path}.hex`, 'a lowercase six-digit hex color', errors);
      validatePattern(textClass, /^text-[a-z0-9-]+$/, `${path}.textClass`, 'a text-* utility class', errors);
      validatePattern(
        className,
        /^(?:bg|text|border|from|via|to|ring|outline|fill|stroke)-practices-[a-z0-9-]+$/,
        `${path}.className`,
        'a practices compatibility utility class',
        errors,
      );
      validatePattern(
        cssVariable,
        /^--color-practices-[a-z0-9-]+$/,
        `${path}.cssVariable`,
        'a --color-practices-* custom property',
        errors,
      );
    }
    validateDuplicates(
      designTokenEntries,
      entry => objectFieldsKey(entry, ['owner', 'group', 'className']),
      'manifest.compatibility.designTokenEntries',
      errors,
    );
    validateClosedBudget(
      designTokenEntries,
      maximumCompatibilityBudget.designTokenEntries,
      entry =>
        objectFieldsKey(entry, ['owner', 'group', 'name', 'className', 'hex', 'cssVariable', 'textClass', 'usage']),
      'manifest.compatibility.designTokenEntries',
      errors,
    );

    const definitionNames = new Set(
      tokenDefinitions.filter(isRecord).map(entry => `${entry.owner ?? ''}\0${entry.name ?? ''}`),
    );
    const mappingNames = new Set(
      tailwindMappings.filter(isRecord).map(entry => `${entry.owner ?? ''}\0${entry.name ?? ''}`),
    );
    for (const [index, value] of tokenAliases.entries()) {
      if (!isRecord(value) || typeof value.target !== 'string' || !value.target.startsWith('--color-practices-')) {
        continue;
      }
      const definitionKey = `${value.owner ?? ''}\0${value.target}`;
      if (!definitionNames.has(definitionKey)) {
        errors.push(
          `manifest.compatibility.tokenAliases[${index}].target must reference an inventoried token definition`,
        );
      }
    }
    for (const [index, value] of tailwindMappings.entries()) {
      if (!isRecord(value)) {
        continue;
      }
      const definitionKey = `src/app/globals.css\0${value.cssVariable ?? ''}`;
      if (!definitionNames.has(definitionKey)) {
        errors.push(
          `manifest.compatibility.tailwindMappings[${index}].cssVariable must reference an inventoried token definition`,
        );
      }
    }
    for (const [index, value] of designTokenEntries.entries()) {
      if (!isRecord(value)) {
        continue;
      }
      const definitionKey = `src/app/globals.css\0${value.cssVariable ?? ''}`;
      const mappingKey = `tailwind.config.ts\0${String(value.className ?? '').replace(/^bg-/, '')}`;
      if (!definitionNames.has(definitionKey)) {
        errors.push(
          `manifest.compatibility.designTokenEntries[${index}].cssVariable must reference an inventoried token definition`,
        );
      }
      if (!mappingNames.has(mappingKey)) {
        errors.push(
          `manifest.compatibility.designTokenEntries[${index}].className must reference an inventoried mapping`,
        );
      }
    }
  }

  const forbiddenRoots = validateArray(root.forbiddenRoots, 'manifest.forbiddenRoots', errors);
  for (const [index, value] of forbiddenRoots.entries()) {
    const path = `manifest.forbiddenRoots[${index}]`;
    if (typeof value !== 'string' || value.length === 0) {
      errors.push(`${path} must be a non-empty string`);
      continue;
    }
    validateRepositoryPath(value, path, errors);
  }
  validateDuplicates(
    forbiddenRoots,
    entry => (typeof entry === 'string' ? entry : undefined),
    'manifest.forbiddenRoots',
    errors,
  );
  for (const requiredRoot of requiredForbiddenRoots) {
    if (!forbiddenRoots.includes(requiredRoot)) {
      errors.push(`manifest.forbiddenRoots must include required retired root ${requiredRoot}`);
    }
  }

  const forbiddenFiles = validateArray(root.forbiddenFiles, 'manifest.forbiddenFiles', errors);
  for (const [index, value] of forbiddenFiles.entries()) {
    const path = `manifest.forbiddenFiles[${index}]`;
    if (typeof value !== 'string' || value.length === 0) {
      errors.push(`${path} must be a non-empty string`);
      continue;
    }
    validateRepositoryPath(value, path, errors);
  }
  validateDuplicates(
    forbiddenFiles,
    entry => (typeof entry === 'string' ? entry : undefined),
    'manifest.forbiddenFiles',
    errors,
  );
  for (const requiredFile of requiredForbiddenFiles) {
    if (!forbiddenFiles.includes(requiredFile)) {
      errors.push(`manifest.forbiddenFiles must include required retired file ${requiredFile}`);
    }
  }

  const forbiddenSymbols = validateArray(root.forbiddenSymbols, 'manifest.forbiddenSymbols', errors);
  for (const [index, value] of forbiddenSymbols.entries()) {
    const path = `manifest.forbiddenSymbols[${index}]`;
    if (typeof value !== 'string' || value.length === 0) {
      errors.push(`${path} must be a non-empty string`);
      continue;
    }
    validateExactText(value, path, errors);
    validatePattern(value, /^[$A-Z_a-z][$\w]*$/, path, 'an exact JavaScript identifier', errors);
  }
  validateDuplicates(
    forbiddenSymbols,
    entry => (typeof entry === 'string' ? entry : undefined),
    'manifest.forbiddenSymbols',
    errors,
  );
  for (const requiredSymbol of requiredForbiddenSymbols) {
    if (!forbiddenSymbols.includes(requiredSymbol)) {
      errors.push(`manifest.forbiddenSymbols must include required retired symbol ${requiredSymbol}`);
    }
  }

  const apiExceptions = validateArray(root.apiToMainExceptions, 'manifest.apiToMainExceptions', errors);
  for (const [index, value] of apiExceptions.entries()) {
    const path = `manifest.apiToMainExceptions[${index}]`;
    const exception = validateRecord(value, path, ['source', 'specifier', 'target'], errors);
    if (!exception) {
      continue;
    }
    const source = validateString(exception, 'source', path, errors);
    const specifier = validateString(exception, 'specifier', path, errors);
    const target = validateString(exception, 'target', path, errors);
    validateRepositoryPath(source, `${path}.source`, errors);
    validateModuleSpecifier(specifier, `${path}.specifier`, errors);
    validateRepositoryPath(target, `${path}.target`, errors);
    if (source && !isWithinPath(source, 'src/app/api')) {
      errors.push(`${path}.source must be within src/app/api`);
    }
    if (specifier && !isApiToRouteBoundarySpecifier(specifier)) {
      errors.push(`${path}.specifier must target a route group under @/app/*`);
    }
    if (target && !isApiToRouteBoundaryTarget(target)) {
      errors.push(`${path}.target must be within a route group under src/app`);
    }
  }
  validateDuplicates(
    apiExceptions,
    entry => objectFieldsKey(entry, ['source', 'specifier', 'target']),
    'manifest.apiToMainExceptions',
    errors,
  );
  validateClosedBudget(
    apiExceptions,
    maximumApiToMainExceptions,
    entry => objectFieldsKey(entry, ['source', 'specifier', 'target']),
    'manifest.apiToMainExceptions',
    errors,
  );

  return errors.sort(compareText);
}

/** @param {string} root @param {ArchitectureManifest} manifest @returns {Promise<Finding[]>} */
async function validateRepository(root, manifest) {
  const findings = findingCollector();
  for (const symlinkPath of await listRepositorySymlinks(root)) {
    findings.add('ARCH001', `${symlinkPath}: repository symlinks are forbidden in validated paths`);
  }

  /** @type {CompilerOptions} */
  let compilerOptions;
  try {
    compilerOptions = loadCompilerOptions(root);
  } catch (error) {
    findings.add('ARCH004', `tsconfig.json: cannot load TypeScript module resolution: ${String(error)}`);
    compilerOptions = defaultCompilerOptions(root);
  }
  /** @type {CompatibilityOwners} */
  const compatibilityOwners = {
    tailwind: new Set(manifest.compatibility.tailwindMappings.map(entry => entry.owner)),
    designTokens: new Set(manifest.compatibility.designTokenEntries.map(entry => entry.owner)),
  };
  const sourcePaths = await listFiles(root, filePath => sourceExtensions.has(extname(filePath)));
  const program = ts.createProgram({
    rootNames: sourcePaths,
    options: { ...compilerOptions, allowJs: true, checkJs: false, noEmit: true },
  });
  const checker = program.getTypeChecker();
  /** @type {SourceFacts[]} */
  const sourceFacts = [];

  for (const sourcePath of sourcePaths) {
    const text = await readFile(sourcePath, 'utf8');
    sourceFacts.push(
      collectSourceFacts(
        root,
        sourcePath,
        text,
        compilerOptions,
        compatibilityOwners,
        program.getSourceFile(sourcePath),
        checker,
      ),
    );
  }

  for (const facts of sourceFacts) {
    for (const diagnostic of facts.parseDiagnostics) {
      findings.add(
        'ARCH004',
        `${facts.relativePath}:${diagnostic.line}:${diagnostic.column}: cannot parse source: ${diagnostic.message}`,
      );
    }
  }

  /** @type {Map<string, SourceFacts>} */
  const factsByPath = new Map(sourceFacts.map(facts => [facts.relativePath, facts]));
  const edges = sourceFacts.flatMap(facts => facts.edges);
  const homepage = manifest.externalHomepage;

  for (const requiredPath of [
    homepage.packageManifest,
    homepage.source,
    homepage.adapter,
    homepage.generated,
    homepage.headersFile,
  ]) {
    const absoluteRequiredPath = resolve(root, requiredPath);
    if (!isFile(absoluteRequiredPath) || isSymbolicLink(absoluteRequiredPath)) {
      findings.add(
        'ARCH002',
        `${requiredPath}: required external homepage boundary file is missing, symbolic, or not a regular file`,
      );
    }
  }

  const homepageHeadersPath = resolve(root, homepage.headersFile);
  if (isFile(homepageHeadersPath) && !isSymbolicLink(homepageHeadersPath)) {
    const headersSource = (await readFile(homepageHeadersPath, 'utf8')).replaceAll('\r\n', '\n');
    if (headersSource !== frozenHomepageHeadersSource) {
      findings.add(
        'ARCH002',
        `${homepage.headersFile}: ${homepage.publicPath} must retain the exact frozen response sandbox policy`,
      );
    }
  }

  if (existsSync(resolve(root, homepage.packageManifest))) {
    try {
      const packageManifest = JSON.parse(await readFile(resolve(root, homepage.packageManifest), 'utf8'));
      const declaredVersion =
        packageManifest.dependencies?.[homepage.package] ?? packageManifest.devDependencies?.[homepage.package];
      if (typeof declaredVersion !== 'string') {
        findings.add('ARCH002', `${homepage.packageManifest}: missing dependency ${homepage.package}`);
      }
    } catch {
      findings.add('ARCH002', `${homepage.packageManifest}: cannot read the external homepage dependency`);
    }
  }

  const executableConfigurationPaths = await listFiles(root, filePath => {
    const repositoryPath = toRepositoryPath(root, filePath);
    const fileName = posix.basename(repositoryPath);
    let executableWithoutExtension = false;
    if (!extname(fileName)) {
      try {
        executableWithoutExtension = Boolean(statSync(filePath).mode & 0o111);
      } catch {
        executableWithoutExtension = false;
      }
    }
    return (
      nonJavaScriptExecutableExtensions.has(extname(repositoryPath)) ||
      executableWithoutExtension ||
      fileName === 'Makefile' ||
      fileName.startsWith('Dockerfile') ||
      (isWithinPath(repositoryPath, '.github/workflows') &&
        (repositoryPath.endsWith('.yml') || repositoryPath.endsWith('.yaml')))
    );
  });
  for (const executablePath of executableConfigurationPaths) {
    const repositoryPath = toRepositoryPath(root, executablePath);
    if (repositoryPath === homepage.source || repositoryPath === homepage.generated) {
      continue;
    }
    const text = await readFile(executablePath, 'utf8');
    const lines = text.split(/\r?\n/);
    const allowedArtifactVerificationLines = new Set([
      `git ls-files --error-unmatch -- ${homepage.generated} ${homepage.headersFile} >/dev/null`,
      `artifact_status=$(git status --porcelain --untracked-files=all -- ${homepage.generated} ${homepage.headersFile})`,
    ]);
    for (const protectedValue of [homepage.package, homepage.source, homepage.generated, homepage.publicPath]) {
      const unauthorizedLineIndex = lines.findIndex(
        line =>
          line.includes(protectedValue) &&
          !(
            homepageArtifactVerificationWorkflows.has(repositoryPath) &&
            allowedArtifactVerificationLines.has(line.trim())
          ),
      );
      if (unauthorizedLineIndex === -1) {
        continue;
      }
      findings.add(
        'ARCH002',
        `${repositoryPath}:${unauthorizedLineIndex + 1}: non-JavaScript executable source references protected homepage value ${protectedValue}`,
      );
    }
    for (const forbiddenRoot of manifest.forbiddenRoots) {
      if (text.includes(forbiddenRoot)) {
        const line = text.slice(0, text.indexOf(forbiddenRoot)).split('\n').length;
        findings.add(
          'ARCH001',
          `${repositoryPath}:${line}: non-JavaScript executable source references retired root ${forbiddenRoot}`,
        );
      }
    }
  }
  try {
    const packageManifest = JSON.parse(await readFile(resolve(root, homepage.packageManifest), 'utf8'));
    for (const [scriptName, command] of Object.entries(packageManifest.scripts ?? {})) {
      if (typeof command === 'string' && command.includes(homepage.package)) {
        findings.add(
          'ARCH002',
          `${homepage.packageManifest}: package script ${scriptName} must not invoke or load ${homepage.package}`,
        );
      }
      if (typeof command === 'string') {
        for (const forbiddenRoot of manifest.forbiddenRoots) {
          if (command.includes(forbiddenRoot)) {
            findings.add(
              'ARCH001',
              `${homepage.packageManifest}: package script ${scriptName} references retired root ${forbiddenRoot}`,
            );
          }
        }
      }
    }
  } catch {
    // The dependency check above already reports unreadable package metadata.
  }

  const homepagePackageRoot = posix.dirname(homepage.source);
  const homepagePackageAbsolute = resolve(root, homepagePackageRoot);
  /** @type {string | undefined} */
  let homepagePackageRealPath;
  try {
    homepagePackageRealPath = realpathSync(homepagePackageAbsolute);
  } catch {
    homepagePackageRealPath = undefined;
  }
  const generatedAbsolutePath = resolve(root, homepage.generated);
  const generatedCanonicalPath = canonicalizePath(generatedAbsolutePath);
  const adapterFacts = factsByPath.get(homepage.adapter);
  if (!adapterFacts) {
    findings.add('ARCH002', `${homepage.adapter}: homepage adapter is not parseable source`);
  } else {
    compareExactEntries({
      expected: frozenHomepageAdapterImports,
      actual: adapterFacts.importDeclarations,
      key: importDeclarationKey,
      describeExpected: entry => `${homepage.adapter}: missing frozen adapter import from ${entry.module}`,
      describeActual: entry => `${homepage.adapter}: unauthorized frozen adapter import from ${entry.module}`,
      code: 'ARCH002',
      findings,
    });

    const adapterStaticPaths = adapterFacts.staticPathReferences.flatMap(reference =>
      reference.path ? [reference] : [],
    );
    for (const expectedPath of [homepage.source, homepage.generated]) {
      const references = adapterStaticPaths.filter(reference => reference.path === expectedPath);
      if (references.length !== 1 || references[0]?.anchor !== 'module') {
        findings.add(
          'ARCH002',
          `${homepage.adapter}: expected exactly one module-relative static path ${expectedPath}`,
        );
      }
    }
    for (const reference of adapterStaticPaths) {
      if (reference.anchor === 'cwd') {
        findings.add(
          'ARCH002',
          `${homepage.adapter}:${reference.line}:${reference.column}: process.cwd() must not anchor homepage paths`,
        );
      }
      const reachesHomepagePackage =
        (reference.path && isWithinPath(reference.path, homepagePackageRoot)) ||
        Boolean(
          reference.canonicalAbsolutePath &&
          homepagePackageRealPath &&
          isWithinAbsolutePath(reference.canonicalAbsolutePath, homepagePackageRealPath),
        );
      if (reachesHomepagePackage && reference.path !== homepage.source) {
        findings.add(
          'ARCH002',
          `${homepage.adapter}:${reference.line}:${reference.column}: unauthorized external homepage package path ${reference.path ?? reference.canonicalPath ?? '<outside-repository>'}; only ${homepage.source} is allowed`,
        );
      }
    }
    for (const reference of adapterFacts.staticStringReferences) {
      if (isWithinPath(reference.value, homepagePackageRoot) && reference.value !== homepage.source) {
        findings.add(
          'ARCH002',
          `${homepage.adapter}:${reference.line}:${reference.column}: unauthorized external homepage package path ${reference.value}; only ${homepage.source} is allowed`,
        );
      }
    }

    const operations = adapterFacts.fileOperations;
    /** @type {(kind: string, argumentIndex?: number) => FileOperation[]} */
    const operationsFor = (kind, argumentIndex = 0) =>
      operations.filter(operation => operation.kind === kind && operation.argumentIndex === argumentIndex);
    const readOperations = operationsFor('readFile');
    if (
      readOperations.length !== 1 ||
      readOperations[0]?.path !== homepage.source ||
      readOperations[0]?.anchor !== 'module'
    ) {
      findings.add(
        'ARCH002',
        `${homepage.adapter}: expected exactly one module-relative readFile operation from ${homepage.source}`,
      );
    }
    for (const operation of readOperations) {
      if (operation.path !== homepage.source) {
        findings.add(
          'ARCH002',
          `${homepage.adapter}:${operation.line}:${operation.column}: unauthorized readFile path ${operation.path ?? '<unknown>'}`,
        );
      }
    }
    if (operationsFor('writeFile').length !== 0) {
      findings.add('ARCH002', `${homepage.adapter}: direct writeFile calls are forbidden; use atomic replacement`);
    }

    const lstatOperations = operationsFor('lstat');
    const mkdirOperations = operationsFor('mkdir');
    const openOperations = operationsFor('open');
    const renameSources = operationsFor('rename', 0);
    const renameTargets = operationsFor('rename', 1);
    const removeOperations = operationsFor('rm');
    if (lstatOperations.length !== 1 || mkdirOperations.length !== 1) {
      findings.add('ARCH002', `${homepage.adapter}: symlink-safe output checks require one lstat and one mkdir call`);
    }
    if (openOperations.length !== 1 || openOperations[0]?.staticArguments[1] !== 'wx') {
      findings.add('ARCH002', `${homepage.adapter}: atomic output requires one exclusive open(..., 'wx', ...) call`);
    }
    if (
      renameSources.length !== 1 ||
      renameTargets.length !== 1 ||
      renameTargets[0]?.path !== homepage.generated ||
      renameTargets[0]?.anchor !== 'module'
    ) {
      findings.add('ARCH002', `${homepage.adapter}: atomic output requires one rename to ${homepage.generated}`);
    }
    if (removeOperations.length !== 1) {
      findings.add('ARCH002', `${homepage.adapter}: atomic output cleanup requires one rm call`);
    }

    const temporaryPathExpression = openOperations[0]?.argumentTexts[0];
    if (
      !temporaryPathExpression ||
      renameSources[0]?.argumentTexts[0] !== temporaryPathExpression ||
      removeOperations[0]?.argumentTexts[0] !== temporaryPathExpression
    ) {
      findings.add(
        'ARCH002',
        `${homepage.adapter}: open, rename, and cleanup must use the same adjacent temporary path`,
      );
    }

    /** @type {Map<string, number>} */
    const topLevelFunctionPositions = new Map();
    for (const statement of adapterFacts.sourceFile.statements) {
      if (ts.isFunctionDeclaration(statement) && statement.name) {
        topLevelFunctionPositions.set(statement.name.text, statement.getStart(adapterFacts.sourceFile));
      }
    }
    const lstatIfExistsCalls = adapterFacts.directCalls.filter(
      call => call.name === 'lstatIfExists' && call.targetPosition === topLevelFunctionPositions.get('lstatIfExists'),
    );
    const validDirectoryLstatCall = lstatIfExistsCalls.some(
      call =>
        call.ownerFunction === 'verifyOutputDirectoryPath' &&
        call.argumentTexts.length === 1 &&
        (call.argumentTexts[0] === 'component.path' || call.argumentTexts[0] === 'dirname(outputPath)') &&
        call.awaited === true,
    );
    const validOutputLstatCall = lstatIfExistsCalls.some(
      call =>
        call.ownerFunction === 'verifyOutputFile' &&
        call.argumentTexts.length === 1 &&
        call.argumentTexts[0] === 'outputPath' &&
        call.awaited === true,
    );
    const invalidLstatIfExistsCall = lstatIfExistsCalls.some(
      call =>
        call.awaited !== true ||
        call.argumentTexts.length !== 1 ||
        !(
          (call.ownerFunction === 'verifyOutputDirectoryPath' &&
            (call.argumentTexts[0] === 'component.path' || call.argumentTexts[0] === 'dirname(outputPath)')) ||
          (call.ownerFunction === 'verifyOutputFile' && call.argumentTexts[0] === 'outputPath')
        ),
    );
    if (!validDirectoryLstatCall || !validOutputLstatCall || invalidLstatIfExistsCall) {
      findings.add(
        'ARCH002',
        `${homepage.adapter}: lstatIfExists must be awaited only for the verified output directory and output file`,
      );
    }

    const outputDirectoryVerificationCalls = adapterFacts.directCalls.filter(
      call =>
        call.name === 'verifyOutputDirectoryPath' &&
        call.ownerFunction === 'replaceOutputAtomically' &&
        call.targetPosition === topLevelFunctionPositions.get('verifyOutputDirectoryPath'),
    );
    const outputFileVerificationCalls = adapterFacts.directCalls.filter(
      call =>
        call.name === 'verifyOutputFile' &&
        call.ownerFunction === 'replaceOutputAtomically' &&
        call.targetPosition === topLevelFunctionPositions.get('verifyOutputFile'),
    );
    if (
      outputDirectoryVerificationCalls.length !== 1 ||
      outputDirectoryVerificationCalls[0]?.argumentTexts.length !== 1 ||
      outputDirectoryVerificationCalls[0]?.staticBooleanArguments[0] !== false ||
      outputDirectoryVerificationCalls[0]?.awaited !== true
    ) {
      findings.add(
        'ARCH002',
        `${homepage.adapter}: replaceOutputAtomically must actively call verifyOutputDirectoryPath(false) exactly once`,
      );
    }
    if (
      outputFileVerificationCalls.length !== 1 ||
      outputFileVerificationCalls[0]?.argumentTexts.length !== 0 ||
      outputFileVerificationCalls[0]?.awaited !== true
    ) {
      findings.add(
        'ARCH002',
        `${homepage.adapter}: replaceOutputAtomically must actively call verifyOutputFile() exactly once`,
      );
    }

    /** @type {Map<string, PropertyCall[]>} */
    const temporaryFileCalls = new Map(
      ['writeFile', 'sync', 'close'].map(methodName => [
        methodName,
        adapterFacts.propertyCalls.filter(
          call =>
            call.receiver === 'temporaryFile' &&
            call.name === methodName &&
            call.ownerFunction === 'replaceOutputAtomically',
        ),
      ]),
    );
    for (const methodName of ['writeFile', 'sync', 'close']) {
      const uses = temporaryFileCalls.get(methodName)?.length ?? 0;
      if (uses !== 1) {
        findings.add(
          'ARCH002',
          `${homepage.adapter}: active replaceOutputAtomically temporaryFile.${methodName}() must appear exactly once`,
        );
      }
    }
    /** @type {Array<number | undefined>} */
    const atomicPositions = [
      openOperations[0]?.position,
      temporaryFileCalls.get('writeFile')?.[0]?.position,
      temporaryFileCalls.get('sync')?.[0]?.position,
      temporaryFileCalls.get('close')?.[0]?.position,
      outputDirectoryVerificationCalls[0]?.position,
      outputFileVerificationCalls[0]?.position,
      renameSources[0]?.position,
      removeOperations[0]?.position,
    ];
    const atomicPositionsOrdered = atomicPositions.every((position, index, positions) => {
      if (position === undefined) {
        return false;
      }
      const previousPosition = positions[index - 1];
      return index === 0 || (previousPosition !== undefined && position > previousPosition);
    });
    if (
      !atomicPositionsOrdered ||
      openOperations[0]?.ownerFunction !== 'replaceOutputAtomically' ||
      renameSources[0]?.ownerFunction !== 'replaceOutputAtomically' ||
      removeOperations[0]?.ownerFunction !== 'replaceOutputAtomically' ||
      openOperations[0]?.awaited !== true ||
      renameSources[0]?.awaited !== true ||
      removeOperations[0]?.awaited !== true ||
      removeOperations[0]?.insideFinally !== true ||
      temporaryFileCalls.get('writeFile')?.[0]?.awaited !== true ||
      temporaryFileCalls.get('sync')?.[0]?.awaited !== true ||
      temporaryFileCalls.get('close')?.[0]?.awaited !== true ||
      temporaryFileCalls.get('close')?.[0]?.insideFinally !== true
    ) {
      findings.add(
        'ARCH002',
        `${homepage.adapter}: atomic output operations must remain active and ordered open -> writeFile -> sync -> close -> path verification -> rename -> cleanup`,
      );
    }

    /** @param {FileOperation} operation @returns {boolean} */
    function matchesAdapterOperationContract(operation) {
      const argumentText = operation.argumentTexts[operation.argumentIndex];
      if (operation.kind === 'lstat') {
        return operation.argumentIndex === 0 && operation.ownerFunction === 'lstatIfExists' && argumentText === 'path';
      }
      if (operation.kind === 'mkdir') {
        return (
          operation.argumentIndex === 0 &&
          operation.ownerFunction === 'verifyOutputDirectoryPath' &&
          (argumentText === 'component.path' || argumentText === 'dirname(outputPath)')
        );
      }
      if (operation.kind === 'open') {
        return (
          operation.argumentIndex === 0 &&
          operation.ownerFunction === 'replaceOutputAtomically' &&
          argumentText === 'temporaryOutputPath'
        );
      }
      if (operation.kind === 'rename') {
        return (
          operation.ownerFunction === 'replaceOutputAtomically' &&
          ((operation.argumentIndex === 0 && argumentText === 'temporaryOutputPath') ||
            (operation.argumentIndex === 1 &&
              argumentText === 'outputPath' &&
              operation.path === homepage.generated &&
              operation.anchor === 'module'))
        );
      }
      if (operation.kind === 'rm') {
        return (
          operation.argumentIndex === 0 &&
          operation.ownerFunction === 'replaceOutputAtomically' &&
          argumentText === 'temporaryOutputPath'
        );
      }
      return false;
    }

    for (const operation of operations) {
      if (operation.kind === 'readFile' || operation.kind === 'writeFile') {
        continue;
      }
      if (!matchesAdapterOperationContract(operation)) {
        findings.add(
          'ARCH002',
          `${homepage.adapter}:${operation.line}:${operation.column}: unauthorized ${operation.kind} filesystem operation outside the frozen adapter contract`,
        );
      }
    }

    for (const [methodName, expectedUses] of [
      ['isSymbolicLink', 2],
      ['isDirectory', 1],
      ['isFile', 1],
    ]) {
      const uses = adapterFacts.propertyCalls.filter(call => call.name === methodName).length;
      if (uses !== expectedUses) {
        findings.add(
          'ARCH002',
          `${homepage.adapter}: output type guard ${methodName}() must appear exactly ${expectedUses} time(s)`,
        );
      }
    }
  }

  /** @param {string} candidate @param {string | undefined} [absoluteCandidate] @returns {boolean} */
  function isProtectedHomepageFilesystemPath(candidate, absoluteCandidate) {
    return (
      candidate === homepage.generated ||
      isWithinPath(candidate, homepagePackageRoot) ||
      Boolean(
        absoluteCandidate &&
        ((homepagePackageRealPath && isWithinAbsolutePath(absoluteCandidate, homepagePackageRealPath)) ||
          (generatedCanonicalPath && absoluteCandidate === generatedCanonicalPath)),
      )
    );
  }

  for (const facts of sourceFacts) {
    if (facts.relativePath === homepage.adapter || facts.relativePath === validatorSourcePath) {
      continue;
    }

    for (const reference of facts.staticPathReferences) {
      if (
        (reference.path || reference.canonicalAbsolutePath) &&
        isProtectedHomepageFilesystemPath(reference.path ?? '<outside-repository>', reference.canonicalAbsolutePath)
      ) {
        findings.add(
          'ARCH002',
          `${facts.relativePath}:${reference.line}:${reference.column}: static path ${reference.path ?? reference.canonicalPath ?? '<outside-repository>'} bypasses ${homepage.adapter}`,
        );
      }
    }
    for (const operation of facts.fileOperations) {
      if (
        (operation.path || operation.canonicalAbsolutePath) &&
        isProtectedHomepageFilesystemPath(operation.path ?? '<outside-repository>', operation.canonicalAbsolutePath)
      ) {
        findings.add(
          'ARCH002',
          `${facts.relativePath}:${operation.line}:${operation.column}: ${operation.kind} targets protected homepage path ${operation.path ?? operation.canonicalPath ?? '<outside-repository>'}`,
        );
      }
    }
    for (const reference of [...facts.literals, ...facts.staticStringReferences]) {
      if (isProtectedHomepageFilesystemPath(reference.value)) {
        findings.add(
          'ARCH002',
          `${reference.source}:${reference.line}:${reference.column}: path ${reference.value} bypasses ${homepage.adapter}`,
        );
      }
    }
  }

  for (const edge of edges) {
    const resolvesIntoHomepagePackage =
      (edge.realResolvedAbsolute &&
        homepagePackageRealPath &&
        isWithinAbsolutePath(edge.realResolvedAbsolute, homepagePackageRealPath)) ||
      (edge.resolvedTarget && isWithinPath(edge.resolvedTarget, homepagePackageRoot)) ||
      (edge.logicalTarget && isWithinPath(edge.logicalTarget, homepagePackageRoot));
    if (
      edge.specifier === homepage.package ||
      edge.specifier.startsWith(`${homepage.package}/`) ||
      resolvesIntoHomepagePackage
    ) {
      findings.add(
        'ARCH002',
        `${edge.source}:${edge.line}:${edge.column}: executable ${edge.kind} of ${edge.specifier} is forbidden; ${homepage.adapter} must read ${homepage.source} as a file`,
      );
    }
  }

  const homepageProtectedValues = [homepage.package, homepage.source, homepage.generated, homepage.publicPath];
  for (const facts of sourceFacts) {
    if (facts.relativePath === validatorSourcePath) {
      continue;
    }
    for (const execution of facts.dynamicCodeExecutions) {
      const sourceText = execution.values.filter(value => typeof value === 'string').join('\n');
      const homepageValue = homepageProtectedValues.find(value => sourceText.includes(value));
      if (homepageValue) {
        findings.add(
          'ARCH002',
          `${execution.source}:${execution.line}:${execution.column}: ${execution.kind} dynamically executes protected homepage value ${homepageValue}`,
        );
      }
      const retiredRoot = manifest.forbiddenRoots.find(value => sourceText.includes(value));
      const retiredSymbol = manifest.forbiddenSymbols.find(value => sourceText.includes(value));
      if (retiredRoot || retiredSymbol) {
        findings.add(
          'ARCH001',
          `${execution.source}:${execution.line}:${execution.column}: ${execution.kind} dynamically executes retired surface ${retiredRoot ?? retiredSymbol}`,
        );
      }
    }
  }

  /** @type {Map<string, string[]>} */
  const inspectedJsonPaths = new Map();
  /** @param {string} target @returns {string[]} */
  function importedJsonStrings(target) {
    const cached = inspectedJsonPaths.get(target);
    if (cached !== undefined) {
      return cached;
    }
    /** @type {string[]} */
    const strings = [];
    try {
      const parsed = JSON.parse(readFileSync(resolve(root, target), 'utf8'));
      /** @param {unknown} value @returns {void} */
      function collect(value) {
        if (typeof value === 'string') {
          strings.push(value);
        } else if (Array.isArray(value)) {
          value.forEach(collect);
        } else if (isRecord(value)) {
          for (const [key, nestedValue] of Object.entries(value)) {
            strings.push(key);
            collect(nestedValue);
          }
        }
      }
      collect(parsed);
    } catch {
      // Parse failures are reported by normal source/config validation where applicable.
    }
    inspectedJsonPaths.set(target, strings);
    return strings;
  }

  for (const edge of edges) {
    if (!edge.resolvedTarget?.endsWith('.json') || edge.source === validatorSourcePath) {
      continue;
    }
    const strings = importedJsonStrings(edge.resolvedTarget);
    const homepageValue = homepageProtectedValues.find(value => strings.some(entry => entry.includes(value)));
    if (homepageValue) {
      findings.add(
        'ARCH002',
        `${edge.source}:${edge.line}:${edge.column}: imported JSON ${edge.resolvedTarget} launders protected homepage value ${homepageValue}`,
      );
    }
    const retiredValue = [...manifest.forbiddenRoots, ...manifest.forbiddenSymbols].find(value =>
      strings.some(entry => entry.includes(value)),
    );
    if (retiredValue) {
      findings.add(
        'ARCH001',
        `${edge.source}:${edge.line}:${edge.column}: imported JSON ${edge.resolvedTarget} launders retired surface ${retiredValue}`,
      );
    }
  }

  const allHomepageStringReferences = sourceFacts
    .filter(facts => facts.relativePath !== validatorSourcePath)
    .flatMap(facts => [...facts.literals, ...facts.staticStringReferences]);
  for (const reference of allHomepageStringReferences) {
    if (isNetworkUrl(reference.value) && routePathFromReference(reference.value, true) === homepage.publicPath) {
      findings.add(
        'ARCH002',
        `${reference.source}:${reference.line}:${reference.column}: unauthorized network reference to homepage artifact ${reference.value}`,
      );
    }
  }

  const homepagePathReferences = allHomepageStringReferences.filter(
    reference =>
      reference.value === homepage.publicPath ||
      reference.value?.startsWith(`${homepage.publicPath}?`) ||
      reference.value?.startsWith(`${homepage.publicPath}#`),
  );
  compareExactEntries({
    expected: homepage.references.map(reference => ({ source: reference.source, value: homepage.publicPath })),
    actual: homepagePathReferences,
    key: entry => `${entry.source}\0${entry.value}`,
    describeExpected: entry => `${entry.source}: missing homepage artifact path reference to ${entry.value}`,
    describeActual: entry =>
      `${entry.source}:${entry.line}:${entry.column}: unauthorized homepage artifact path reference to ${entry.value}`,
    code: 'ARCH002',
    findings,
  });

  const homepageReferences = sourceFacts
    .filter(facts => facts.relativePath !== validatorSourcePath)
    .flatMap(facts => [...facts.iframeReferences, ...facts.locationHeaderReferences])
    .filter(
      reference =>
        reference.value === homepage.publicPath ||
        reference.value?.startsWith(`${homepage.publicPath}?`) ||
        reference.value?.startsWith(`${homepage.publicPath}#`),
    );
  const expectedHomepageReferences = homepage.references.map(reference => ({
    ...reference,
    value: homepage.publicPath,
  }));

  compareExactEntries({
    expected: expectedHomepageReferences,
    actual: homepageReferences,
    key: entry => `${entry.source}\0${entry.kind}\0${entry.value}`,
    describeExpected: entry => `${entry.source}: missing ${entry.kind} reference to ${entry.value}`,
    describeActual: entry =>
      `${entry.source}:${entry.line}:${entry.column}: unauthorized ${entry.kind} reference to ${entry.value}`,
    code: 'ARCH002',
    findings,
  });

  const compositionReferences = sourceFacts.flatMap(facts => facts.homepageCompositionReferences);
  compareExactEntries({
    expected: [
      { source: frozenHomepageComposition.rootOwner, kind: 'root-call', valid: true },
      { source: frozenHomepageComposition.owner, kind: 'frame-return', valid: true },
      { source: frozenHomepageComposition.owner, kind: 'parent-call', valid: true },
    ],
    actual: compositionReferences,
    key: entry => `${entry.source}\0${entry.kind}\0${entry.valid ? 'valid' : 'invalid'}`,
    describeExpected: entry => `${entry.source}: missing rendered homepage composition contract ${entry.kind}`,
    describeActual: entry =>
      `${entry.source}:${entry.line}:${entry.column}: unauthorized or dead homepage composition reference ${entry.kind}`,
    code: 'ARCH002',
    findings,
  });

  const networkReferences = sourceFacts
    .filter(facts => facts.relativePath !== validatorSourcePath)
    .flatMap(facts => facts.networkReferences);
  for (const reference of networkReferences) {
    const homepageRoute = routePathFromReference(reference.value, true);
    if (
      homepageRoute === homepage.publicPath &&
      !(
        reference.source === frozenHomepageComposition.owner &&
        reference.kind === 'jsx-src' &&
        reference.value === homepage.publicPath
      )
    ) {
      findings.add(
        'ARCH002',
        `${reference.source}:${reference.line}:${reference.column}: unauthorized network reference to homepage artifact ${reference.value}`,
      );
    }
  }

  for (const iframe of homepageReferences.filter(reference => reference.kind === 'iframe-src')) {
    if (
      iframe.sandbox !== homepage.iframeSandbox ||
      iframe.allow !== homepage.iframeAllow ||
      iframe.referrerPolicy !== homepage.iframeReferrerPolicy ||
      iframe.sandbox.split(/\s+/).includes('allow-same-origin')
    ) {
      findings.add(
        'ARCH002',
        `${iframe.source}:${iframe.line}:${iframe.column}: homepage iframe must use the frozen sandbox, allow, and referrerPolicy`,
      );
    }
  }

  for (const redirect of sourceFacts.flatMap(facts => facts.responseRedirects)) {
    if (
      redirect.location === homepage.publicPath &&
      (!redirect.status || redirect.status < 300 || redirect.status >= 400)
    ) {
      findings.add(
        'ARCH002',
        `${redirect.source}:${redirect.line}:${redirect.column}: homepage redirect must use a 3xx status`,
      );
    }
  }

  for (const forbiddenRoot of manifest.forbiddenRoots) {
    const normalizedRoot = forbiddenRoot.replace(/\/$/, '');
    if (existsSync(resolve(root, normalizedRoot))) {
      findings.add('ARCH001', `${normalizedRoot}: retired root must not exist`);
    }

    for (const edge of edges) {
      const target = edge.resolvedTarget ?? edge.logicalTarget;
      if (target && isWithinPath(target, normalizedRoot)) {
        findings.add(
          'ARCH001',
          `${edge.source}:${edge.line}:${edge.column}: ${edge.kind} reaches retired root ${normalizedRoot} via ${edge.specifier}`,
        );
      }
    }
    for (const facts of sourceFacts) {
      for (const operation of facts.fileOperations) {
        if (operation.path && isWithinPath(operation.path, normalizedRoot)) {
          findings.add(
            'ARCH001',
            `${facts.relativePath}:${operation.line}:${operation.column}: ${operation.kind} targets retired root ${normalizedRoot}`,
          );
        }
      }
    }
  }

  const ignorePatterns = sourceFacts.flatMap(facts => facts.ignorePatterns);
  const gitignorePath = resolve(root, '.gitignore');
  if (isFile(gitignorePath) && !isSymbolicLink(gitignorePath)) {
    const lines = (await readFile(gitignorePath, 'utf8')).split(/\r?\n/);
    for (const [index, value] of lines.entries()) {
      ignorePatterns.push({ source: '.gitignore', value, line: index + 1, column: 1 });
    }
  }
  for (const ignorePattern of ignorePatterns) {
    for (const forbiddenRoot of manifest.forbiddenRoots) {
      if (ignorePatternCoversRoot(ignorePattern.value, forbiddenRoot)) {
        findings.add(
          'ARCH001',
          `${ignorePattern.source}:${ignorePattern.line}:${ignorePattern.column}: ignore pattern ${JSON.stringify(ignorePattern.value)} hides retired root ${forbiddenRoot}`,
        );
      }
    }
  }

  for (const forbiddenFile of manifest.forbiddenFiles) {
    if (existsSync(resolve(root, forbiddenFile)) || isSymbolicLink(resolve(root, forbiddenFile))) {
      findings.add('ARCH001', `${forbiddenFile}: retired file must not exist`);
    }
  }
  const forbiddenSymbolSet = new Set(manifest.forbiddenSymbols);
  for (const facts of sourceFacts) {
    if (facts.relativePath === validatorSourcePath) {
      continue;
    }
    for (const identifier of facts.identifiers) {
      if (forbiddenSymbolSet.has(identifier.name)) {
        findings.add(
          'ARCH001',
          `${identifier.source}:${identifier.line}:${identifier.column}: retired symbol ${identifier.name} must not return`,
        );
      }
    }
    for (const staticName of facts.staticNames) {
      if (forbiddenSymbolSet.has(staticName.name)) {
        findings.add(
          'ARCH001',
          `${staticName.source}:${staticName.line}:${staticName.column}: retired runtime name ${staticName.name} must not return (${staticName.kind})`,
        );
      }
    }
  }

  const compatibility = manifest.compatibility;

  /** @param {CompatibilityFacade} facade @returns {number} */
  function exactFacadeMatchCount(facade) {
    const ownerFacts = factsByPath.get(facade.owner);
    if (facade.kind === 'client-redirect') {
      const exactSourceContract = exactFacadeSourceContracts.get(facade.owner);
      if (exactSourceContract && ownerFacts?.tokenSignature === sourceTokenSignature(facade.owner, exactSourceContract)) {
        return 1;
      }
      return ownerFacts?.locationReplaceTargets.filter(target => target === facade.target).length ?? 0;
    }
    if (facade.kind === 'module-reexport') {
      return (
        ownerFacts?.edges.filter(
          edge =>
            edge.kind === 're-export' &&
            edge.specifier === facade.specifier &&
            edge.resolvedTarget === facade.targetOwner,
        ).length ?? 0
      );
    }
    if (facade.kind === 'rewrite') {
      return (
        ownerFacts?.rewriteMethods.filter(method => exactRewriteMethod(method, facade.route, facade.target)).length ?? 0
      );
    }
    if (facade.kind === 'redirect') {
      return (
        ownerFacts?.responseRedirects.filter(redirect => redirect.location === facade.target && redirect.status === 307)
          .length ?? 0
      );
    }
    return 0;
  }

  for (const facade of compatibility.facades) {
    if (!isFile(resolve(root, facade.owner))) {
      findings.add('ARCH003', `${facade.owner}: missing owner for compatibility route ${facade.route}`);
      continue;
    }
    if (!isFile(resolve(root, facade.targetOwner))) {
      findings.add('ARCH003', `${facade.targetOwner}: missing target for compatibility route ${facade.route}`);
    }

    const exactSourceContract = exactFacadeSourceContracts.get(facade.owner);
    const ownerFacts = factsByPath.get(facade.owner);
    if (exactSourceContract && ownerFacts?.tokenSignature !== sourceTokenSignature(facade.owner, exactSourceContract)) {
      findings.add(
        'ARCH003',
        `${facade.owner}: compatibility façade ${facade.route} must remain the exact thin source contract`,
      );
    }

    const matches = exactFacadeMatchCount(facade);
    if (facade.kind === 'client-redirect') {
      if (matches !== 1) {
        findings.add(
          'ARCH003',
          `${facade.owner}: expected one client redirect from ${facade.route} to ${facade.target}`,
        );
      }
    } else if (facade.kind === 'module-reexport') {
      if (matches !== 1) {
        findings.add(
          'ARCH003',
          `${facade.owner}: expected one re-export from ${facade.route} to ${facade.specifier} (${facade.targetOwner})`,
        );
      }
    } else if (facade.kind === 'rewrite') {
      if (matches !== 1 || (factsByPath.get(facade.owner)?.rewriteMethods.length ?? 0) !== 1) {
        findings.add(
          'ARCH003',
          `${facade.owner}: expected one exact rewrite method from ${facade.route} to ${facade.target}`,
        );
      }
    } else if (facade.kind === 'redirect') {
      if (matches !== 1) {
        findings.add('ARCH003', `${facade.owner}: expected one redirect from ${facade.route} to ${facade.target}`);
      }
    } else {
      const owner = Reflect.get(facade, 'owner');
      const kind = Reflect.get(facade, 'kind');
      findings.add('ARCH003', `${String(owner)}: unsupported compatibility façade kind ${String(kind)}`);
    }
  }

  const facadeFields = ['route', 'owner', 'kind', 'target', 'specifier', 'targetOwner'];
  const inventoriedFacadeKeys = new Set(compatibility.facades.map(facade => objectFieldsKey(facade, facadeFields)));
  const nextConfigOwner = maximumCompatibilityBudget.facades.find(facade => facade.kind === 'rewrite')?.owner;
  const nextConfigFacts = nextConfigOwner ? factsByPath.get(nextConfigOwner) : undefined;
  let pageExtensions = [...defaultNextPageExtensions];
  if (nextConfigOwner && isFile(resolve(root, nextConfigOwner))) {
    if (!nextConfigFacts) {
      findings.add(
        'ARCH003',
        `${nextConfigOwner}: Next configuration must have one statically reachable default object export`,
      );
    } else {
      if (!nextConfigFacts.hasReachableDefaultConfig) {
        findings.add(
          'ARCH003',
          `${nextConfigOwner}: Next configuration must have one statically reachable default object export`,
        );
      } else if (
        !nextConfigFacts.nextPageExtensionsValid ||
        nextConfigFacts.nextPageExtensions.length === 0 ||
        nextConfigFacts.nextPageExtensions.some(extension => !/^[A-Za-z0-9]+$/.test(extension)) ||
        new Set(nextConfigFacts.nextPageExtensions).size !== nextConfigFacts.nextPageExtensions.length
      ) {
        findings.add(
          'ARCH003',
          `${nextConfigOwner}: pageExtensions must be a unique static list of normalized extensions`,
        );
      } else {
        pageExtensions = [...nextConfigFacts.nextPageExtensions];
      }
      if (!nextConfigFacts.nextRouteMethodsValid) {
        findings.add(
          'ARCH003',
          `${nextConfigOwner}: rewrites and redirects must be zero-argument methods returning one static inline array`,
        );
      }
      for (const mutation of nextConfigFacts.defaultExportMutations) {
        findings.add(
          'ARCH003',
          `${nextConfigOwner}:${mutation.line}:${mutation.column}: reachable Next configuration must not be mutated after initialization (${mutation.target})`,
        );
      }
    }
  }

  /** @type {RouteProducer[]} */
  const routeProducers = [];
  const routeFiles = await listFiles(root, filePath => {
    const repositoryPath = toRepositoryPath(root, filePath);
    return Boolean(
      appRouteIdentity(repositoryPath, pageExtensions) || pagesRouteIdentity(repositoryPath, pageExtensions),
    );
  });
  for (const routeFile of routeFiles) {
    const owner = toRepositoryPath(root, routeFile);
    const identity = appRouteIdentity(owner, pageExtensions) ?? pagesRouteIdentity(owner, pageExtensions);
    if (identity) {
      routeProducers.push({ owner, route: identity.route, kind: identity.kind });
    }
  }
  if (nextConfigFacts) {
    for (const pair of nextConfigFacts.rewritePairs) {
      routeProducers.push({
        owner: nextConfigFacts.relativePath,
        route: pair.source,
        kind: 'next-rewrite',
        line: pair.line,
        column: pair.column,
      });
    }
    for (const pair of nextConfigFacts.redirectPairs) {
      routeProducers.push({
        owner: nextConfigFacts.relativePath,
        route: pair.source,
        kind: 'next-redirect',
        line: pair.line,
        column: pair.column,
      });
    }
  }

  /** @param {CompatibilityFacade} facade @returns {string} */
  function expectedProducerKind(facade) {
    if (facade.kind === 'rewrite') {
      return 'next-rewrite';
    }
    if (facade.kind === 'client-redirect') {
      return 'app-page';
    }
    return 'app-route';
  }

  for (const facade of maximumCompatibilityBudget.facades) {
    const facadeIsInventoried = inventoriedFacadeKeys.has(objectFieldsKey(facade, facadeFields));
    for (const producer of routeProducers) {
      if (!routePatternMatchesExact(producer.route, facade.route)) {
        continue;
      }
      if (
        facadeIsInventoried &&
        producer.owner === facade.owner &&
        producer.kind === expectedProducerKind(facade) &&
        producer.route === facade.route
      ) {
        continue;
      }
      const location = producer.line ? `${producer.owner}:${producer.line}:${producer.column}` : producer.owner;
      if (!facadeIsInventoried && producer.owner === facade.owner && producer.route === facade.route) {
        findings.add('ARCH003', `${location}: compatibility façade ${facade.route} exists outside the manifest`);
      } else if (producer.kind.startsWith('app-')) {
        findings.add(
          'ARCH003',
          `${location}: App Router owner recreates compatibility route ${facade.route} outside its exact manifest entry`,
        );
      } else {
        findings.add(
          'ARCH003',
          `${location}: ${producer.kind} public route ${producer.route} overlaps compatibility route ${facade.route} outside its exact manifest entry`,
        );
      }
    }
  }

  const protectedFacadeOwners = new Map(
    maximumCompatibilityBudget.facades
      .filter(facade => facade.owner.startsWith('src/app/'))
      .map(facade => [facade.owner, facade.route]),
  );
  for (const edge of edges) {
    const route = edge.resolvedTarget ? protectedFacadeOwners.get(edge.resolvedTarget) : undefined;
    if (route) {
      findings.add(
        'ARCH004',
        `${edge.source}:${edge.line}:${edge.column}: ${edge.kind} targets compatibility owner ${edge.resolvedTarget} (${route})`,
      );
    }
  }

  for (const reference of networkReferences) {
    const route = routePathFromReference(reference.value, true);
    const facade = route ? maximumCompatibilityBudget.facades.find(entry => entry.route === route) : undefined;
    if (facade && reference.source !== facade.owner) {
      findings.add(
        'ARCH003',
        `${reference.source}:${reference.line}:${reference.column}: network reference uses compatibility route ${route}; use its canonical target`,
      );
    }
  }

  const ambientModuleNames = new Set(compatibility.ambientDeclarations.map(entry => entry.module));
  const ambientDeclarations = sourceFacts
    .flatMap(facts => facts.ambientModules)
    .filter(
      entry =>
        ambientModuleNames.has(entry.module) ||
        entry.module === homepage.package ||
        entry.module.startsWith(`${homepage.package}/`),
    );
  compareExactEntries({
    expected: compatibility.ambientDeclarations,
    actual: ambientDeclarations,
    key: entry => `${entry.owner ?? entry.source}\0${entry.module}`,
    describeExpected: entry => `${entry.owner}: missing ambient declaration for ${entry.module}`,
    describeActual: entry =>
      `${entry.source}:${entry.line}:${entry.column}: unauthorized ambient declaration for ${entry.module}`,
    code: 'ARCH003',
    findings,
  });

  const cssPaths = await listFiles(root, filePath => extname(filePath) === '.css');
  /** @type {Array<TokenDefinition & { line: number }>} */
  const actualDefinitions = [];
  /** @type {Array<TokenAlias & { line: number }>} */
  const actualAliases = [];
  /** @type {Set<string>} */
  const liveCssCustomProperties = new Set();
  /** @type {CssTokenUsage[]} */
  const cssTokenUsages = [];
  /** @type {Array<CssDeclaration & { owner: string }>} */
  const invalidCompatibilityDeclarations = [];
  const inventoriedCssDefinitions = new Set(
    compatibility.tokenDefinitions.map(entry => `${entry.owner}\0${entry.name}\0${entry.value}`),
  );
  const inventoriedCssAliases = new Set(
    compatibility.tokenAliases.map(entry => `${entry.owner}\0${entry.alias}\0${entry.target}`),
  );
  const compatibilityTokenPattern =
    /--(?:color-practices|bp)-[A-Za-z0-9-]+|(?<![-A-Za-z0-9])[A-Za-z0-9-]+-practices-[A-Za-z0-9-]+/g;
  for (const cssPath of cssPaths) {
    const owner = toRepositoryPath(root, cssPath);
    const text = await readFile(cssPath, 'utf8');
    const cssFacts = collectCssDeclarations(text);
    /** @type {Array<[number, number]>} */
    const declarationRanges = cssFacts.declarations.map(declaration => [declaration.start, declaration.end]);
    for (const declaration of cssFacts.declarations) {
      if (declaration.liveRoot) {
        liveCssCustomProperties.add(`${owner}\0${declaration.name}`);
      }
      const aliasTarget = declaration.value.match(/^var\(\s*(--[A-Za-z0-9-]+)\s*\)$/)?.[1];
      const inventoriedDeclaration =
        inventoriedCssDefinitions.has(`${owner}\0${declaration.name}\0${declaration.value}`) ||
        (aliasTarget !== undefined && inventoriedCssAliases.has(`${owner}\0${declaration.name}\0${aliasTarget}`));
      if (!inventoriedDeclaration) {
        for (const token of compatibilityTokensInValue(declaration.value)) {
          cssTokenUsages.push({ owner, token, line: declaration.line });
        }
      }
      if (!declaration.name.startsWith('--color-practices-') && !declaration.name.startsWith('--bp-')) {
        continue;
      }
      if (!declaration.liveRoot) {
        invalidCompatibilityDeclarations.push({ owner, ...declaration });
        continue;
      }
      if (declaration.name.startsWith('--color-practices-')) {
        actualDefinitions.push({ owner, name: declaration.name, value: declaration.value, line: declaration.line });
      } else {
        actualAliases.push({
          owner,
          alias: declaration.name,
          target: aliasTarget ?? `<invalid:${declaration.value}>`,
          line: declaration.line,
        });
      }
    }

    for (const match of cssFacts.source.matchAll(compatibilityTokenPattern)) {
      const index = match.index ?? 0;
      if (declarationRanges.some(([start, end]) => index >= start && index < end)) {
        continue;
      }
      cssTokenUsages.push({
        owner,
        token: match[0],
        line: cssFacts.source.slice(0, index).split('\n').length,
      });
    }
  }
  compareExactEntries({
    expected: compatibility.tokenDefinitions,
    actual: actualDefinitions,
    key: entry => `${entry.owner}\0${entry.name}\0${entry.value}`,
    describeExpected: entry => `${entry.owner}: missing compatibility token definition ${entry.name}: ${entry.value}`,
    describeActual: entry =>
      `${entry.owner}:${entry.line}: unauthorized compatibility token definition ${entry.name}: ${entry.value}`,
    code: 'ARCH003',
    findings,
  });
  compareExactEntries({
    expected: compatibility.tokenAliases,
    actual: actualAliases,
    key: entry => `${entry.owner}\0${entry.alias}\0${entry.target}`,
    describeExpected: entry => `${entry.owner}: missing compatibility token alias ${entry.alias} -> ${entry.target}`,
    describeActual: entry =>
      `${entry.owner}:${entry.line}: unauthorized compatibility token alias ${entry.alias} -> ${entry.target}`,
    code: 'ARCH003',
    findings,
  });
  for (const declaration of invalidCompatibilityDeclarations) {
    findings.add(
      'ARCH003',
      `${declaration.owner}:${declaration.line}: compatibility declaration ${declaration.name} must remain in a top-level :root block`,
    );
  }
  for (const alias of compatibility.tokenAliases) {
    if (!liveCssCustomProperties.has(`${alias.owner}\0${alias.target}`)) {
      findings.add(
        'ARCH003',
        `${alias.owner}: compatibility token alias ${alias.alias} targets missing live custom property ${alias.target}`,
      );
    }
  }

  for (const facts of sourceFacts) {
    if (compatibilityOwners.tailwind.has(facts.relativePath)) {
      for (const mutation of facts.defaultExportMutations) {
        findings.add(
          'ARCH003',
          `${facts.relativePath}:${mutation.line}:${mutation.column}: Tailwind compatibility mappings must not be mutated after initialization`,
        );
      }
    }
    if (compatibilityOwners.designTokens.has(facts.relativePath)) {
      for (const mutation of facts.designTokenMutations) {
        findings.add(
          'ARCH003',
          `${facts.relativePath}:${mutation.line}:${mutation.column}: practices design-token entries must not be mutated after initialization`,
        );
      }
    }
  }

  const actualTailwindMappings = sourceFacts.flatMap(facts => facts.tailwindMappings);
  compareExactEntries({
    expected: compatibility.tailwindMappings,
    actual: actualTailwindMappings,
    key: entry => `${entry.owner}\0${entry.name}\0${entry.cssVariable}`,
    describeExpected: entry =>
      `${entry.owner}: missing Tailwind compatibility mapping ${entry.name} -> ${entry.cssVariable}`,
    describeActual: entry =>
      `${entry.owner}:${entry.line}:${entry.column}: unauthorized Tailwind compatibility mapping ${entry.name} -> ${entry.cssVariable}`,
    code: 'ARCH003',
    findings,
  });

  const actualDesignTokenEntries = sourceFacts.flatMap(facts => facts.designTokenEntries);
  compareExactEntries({
    expected: compatibility.designTokenEntries,
    actual: actualDesignTokenEntries,
    key: entry =>
      [
        entry.owner,
        entry.group,
        entry.name,
        entry.className,
        entry.hex,
        entry.cssVariable,
        entry.textClass,
        entry.usage,
      ].join('\0'),
    describeExpected: entry => `${entry.owner}: missing ${entry.group} design-token entry ${entry.className}`,
    describeActual: entry =>
      `${entry.owner}:${entry.line}:${entry.column}: unauthorized ${entry.group} design-token entry ${entry.className}`,
    code: 'ARCH003',
    findings,
  });

  for (const usage of cssTokenUsages) {
    findings.add('ARCH003', `${usage.owner}:${usage.line}: unauthorized compatibility token usage ${usage.token}`);
  }
  for (const facts of sourceFacts) {
    if (facts.relativePath === validatorSourcePath) {
      continue;
    }
    for (const literal of facts.literals) {
      if (facts.compatibilityLiteralPositions.has(literal.node.getStart(facts.sourceFile))) {
        continue;
      }
      for (const token of compatibilityTokensInValue(literal.value)) {
        findings.add(
          'ARCH003',
          `${literal.source}:${literal.line}:${literal.column}: unauthorized compatibility token usage ${token}`,
        );
      }
    }
    for (const reference of facts.staticStringReferences) {
      for (const token of compatibilityTokensInValue(reference.value)) {
        findings.add(
          'ARCH003',
          `${reference.source}:${reference.line}:${reference.column}: unauthorized computed compatibility token usage ${token}`,
        );
      }
    }
  }

  /** @type {Map<string, number>} */
  const usedExceptions = new Map();
  /** @type {(exception: ApiToMainException) => string} */
  const exceptionKey = exception => `${exception.source}\0${exception.specifier}\0${exception.target}`;
  const exceptionsByKey = new Map(manifest.apiToMainExceptions.map(exception => [exceptionKey(exception), exception]));

  for (const edge of edges) {
    if (!isWithinPath(edge.source, 'src/app/api')) {
      continue;
    }

    const target = edge.resolvedTarget ?? edge.logicalTarget;
    if (!target || !isApiToRouteBoundaryTarget(target)) {
      continue;
    }

    const key = exceptionKey({ source: edge.source, specifier: edge.specifier, target: edge.resolvedTarget ?? '' });
    if (exceptionsByKey.has(key)) {
      usedExceptions.set(key, (usedExceptions.get(key) ?? 0) + 1);
      continue;
    }

    findings.add(
      'ARCH005',
      `${edge.source}:${edge.line}:${edge.column}: ${edge.kind} crosses API-to-route boundary via ${edge.specifier} -> ${target}`,
    );
  }

  for (const exception of manifest.apiToMainExceptions) {
    const key = exceptionKey(exception);
    const uses = usedExceptions.get(key) ?? 0;
    if (uses === 0) {
      findings.add(
        'ARCH005',
        `${exception.source}: stale API-to-route exception ${exception.specifier} -> ${exception.target}`,
      );
    } else if (uses > 1) {
      findings.add(
        'ARCH005',
        `${exception.source}: API-to-route exception is used ${uses} times for ${exception.specifier} -> ${exception.target}`,
      );
    }
  }

  const facadeOwnerSet = new Set(compatibility.facades.map(facade => facade.owner));
  /** @type {Set<ContextLayer>} */
  const contextLayers = new Set(['app', 'composition', 'feature-ui', 'content', 'service']);
  for (const edge of edges) {
    const target = edge.resolvedTarget ?? edge.logicalTarget;
    if (
      !target ||
      facadeOwnerSet.has(edge.source) ||
      (edge.resolvedTarget !== undefined && isWithinPath(edge.resolvedTarget, 'node_modules')) ||
      manifest.forbiddenRoots.some(forbiddenRoot => isWithinPath(target, forbiddenRoot))
    ) {
      continue;
    }

    const exactException = exceptionKey({
      source: edge.source,
      specifier: edge.specifier,
      target: edge.resolvedTarget ?? '',
    });
    if (exceptionsByKey.has(exactException)) {
      continue;
    }

    const sourceOwner = classifyContextOwner(edge.source);
    const targetOwner = classifyContextOwner(target);
    const location = `${edge.source}:${edge.line}:${edge.column}`;
    const crossing = `${edge.kind} ${edge.specifier} -> ${target}`;
    const sourceIsShares = sourceOwner.context === 'shares' && contextLayers.has(sourceOwner.layer);
    const targetIsShares = targetOwner.context === 'shares' && contextLayers.has(targetOwner.layer);

    if (sourceOwner.layer === 'other' && contextLayers.has(targetOwner.layer)) {
      findings.add(
        'ARCH004',
        `${location}: [CTX-001] unclassified source cannot bridge into ${targetOwner.layer} code; rejected ${crossing}`,
      );
      continue;
    }
    if (
      targetOwner.layer === 'other' &&
      sourceExtensions.has(extname(target)) &&
      (contextLayers.has(sourceOwner.layer) || sourceOwner.layer === 'shared')
    ) {
      findings.add(
        'ARCH004',
        `${location}: [CTX-001] dependencies must not launder context access through unclassified source; rejected ${crossing}`,
      );
      continue;
    }

    if (
      sourceIsShares &&
      (target === homepage.adapter ||
        target === homepage.generated ||
        (targetOwner.layer === 'app' && targetOwner.context !== 'shares') ||
        (contextLayers.has(targetOwner.layer) && targetOwner.layer !== 'shared' && targetOwner.context !== 'shares'))
    ) {
      findings.add('ARCH004', `${location}: [SHR-001] Shares must remain self-contained; rejected ${crossing}`);
      continue;
    }
    if (
      targetIsShares &&
      sourceOwner.context !== 'shares' &&
      (targetOwner.layer === 'app' || !isPublicContextEntry(target, targetOwner.layer, targetOwner.context))
    ) {
      findings.add(
        'ARCH004',
        `${location}: [SHR-001] other contexts may use only a public Shares entry point; rejected ${crossing}`,
      );
      continue;
    }

    if (sourceOwner.layer === 'shared' && contextLayers.has(targetOwner.layer)) {
      findings.add(
        'ARCH004',
        `${location}: [CTX-001] shared foundations must not depend on ${targetOwner.layer} code; rejected ${crossing}`,
      );
      continue;
    }

    if (sourceOwner.layer === 'content' || sourceOwner.layer === 'service') {
      if (['app', 'composition', 'feature-ui'].includes(targetOwner.layer)) {
        findings.add(
          'ARCH004',
          `${location}: [CTX-001] ${sourceOwner.layer} code must not depend on React UI or routes; rejected ${crossing}`,
        );
        continue;
      }
      if (
        (targetOwner.layer === 'content' || targetOwner.layer === 'service') &&
        sourceOwner.context !== targetOwner.context
      ) {
        findings.add(
          'ARCH004',
          `${location}: [CTX-001] domain/service contexts must not reach across private contexts; rejected ${crossing}`,
        );
        continue;
      }
    }

    if (sourceOwner.layer === 'composition' && targetOwner.layer === 'app') {
      findings.add(
        'ARCH004',
        `${location}: [CTX-001] composition owners must not depend on App Router entry points; rejected ${crossing}`,
      );
      continue;
    }

    if (sourceOwner.layer === 'feature-ui') {
      if (targetOwner.layer === 'app' || targetOwner.layer === 'composition') {
        findings.add(
          'ARCH004',
          `${location}: [CTX-001] feature UI must not depend on route or composition owners; rejected ${crossing}`,
        );
        continue;
      }
      if (
        ['feature-ui', 'content', 'service'].includes(targetOwner.layer) &&
        sourceOwner.context !== targetOwner.context &&
        !isPublicContextEntry(target, targetOwner.layer, targetOwner.context)
      ) {
        findings.add(
          'ARCH004',
          `${location}: [CTX-001] features must not reach into another context's private files; rejected ${crossing}`,
        );
        continue;
      }
      if (
        sourceOwner.context === 'shares' &&
        ['content', 'service'].includes(targetOwner.layer) &&
        !isPublicContextEntry(target, targetOwner.layer, targetOwner.context)
      ) {
        findings.add(
          'ARCH004',
          `${location}: [SHR-001] Shares UI must use the public Shares domain API; rejected ${crossing}`,
        );
        continue;
      }
    }

    if (sourceOwner.layer === 'app') {
      if (
        targetOwner.layer === 'app' &&
        sourceOwner.context !== undefined &&
        targetOwner.context !== undefined &&
        sourceOwner.context !== targetOwner.context
      ) {
        findings.add(
          'ARCH004',
          `${location}: [CTX-001] route contexts must not import another route context; rejected ${crossing}`,
        );
        continue;
      }
      if (
        ['feature-ui', 'content', 'service'].includes(targetOwner.layer) &&
        sourceOwner.context !== undefined &&
        sourceOwner.context !== targetOwner.context &&
        !isPublicContextEntry(target, targetOwner.layer, targetOwner.context)
      ) {
        findings.add(
          'ARCH004',
          `${location}: [CTX-001] routes must use another context's public entry point; rejected ${crossing}`,
        );
        continue;
      }
      if (
        sourceOwner.context === undefined &&
        ['feature-ui', 'content', 'service'].includes(targetOwner.layer) &&
        !isPublicContextEntry(target, targetOwner.layer, targetOwner.context)
      ) {
        findings.add(
          'ARCH004',
          `${location}: [CTX-001] global routes must use public context entry points; rejected ${crossing}`,
        );
      }
    }
  }

  return findings.list();
}

/** @param {FixtureFiles} files @param {string} filePath @param {string} content @returns {void} */
function appendFixture(files, filePath, content) {
  const existing = files.get(filePath);
  files.set(filePath, existing ? `${existing.trimEnd()}\n${content}` : content);
}

/** @param {ArchitectureManifest} manifest @returns {FixtureFiles} */
function baseFixtureFiles(manifest) {
  /** @type {FixtureFiles} */
  const files = new Map();
  const homepage = manifest.externalHomepage;
  const sourceParts = homepage.source.split('/');
  const generatedParts = homepage.generated.split('/');

  files.set(
    homepage.packageManifest,
    `${JSON.stringify({ dependencies: { [homepage.package]: '1.0.0' } }, null, 2)}\n`,
  );
  files.set(
    homepage.adapter,
    [
      "import { log } from 'node:console';",
      "import { randomUUID } from 'node:crypto';",
      "import { lstat, mkdir, open, readFile, rename, rm } from 'node:fs/promises';",
      "import { basename, dirname, join, resolve } from 'node:path';",
      "import process from 'node:process';",
      "import { fileURLToPath } from 'node:url';",
      '',
      "const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');",
      `const sourcePath = join(repositoryRoot, ${sourceParts.map(part => JSON.stringify(part)).join(', ')});`,
      `const outputPath = join(repositoryRoot, ${generatedParts.map(part => JSON.stringify(part)).join(', ')});`,
      'const temporaryOutputPath = join(',
      '  dirname(outputPath),',
      '  `.${basename(outputPath)}.${process.pid}.${randomUUID()}.tmp`,',
      ');',
      '',
      'async function lstatIfExists(path) {',
      '  return lstat(path);',
      '}',
      '',
      'async function verifyOutputDirectoryPath(createMissing) {',
      '  const directoryStats = await lstatIfExists(dirname(outputPath));',
      '  if (createMissing) await mkdir(dirname(outputPath));',
      '  if (directoryStats.isSymbolicLink()) throw new Error();',
      '  if (!directoryStats.isDirectory()) throw new Error();',
      '}',
      '',
      'async function verifyOutputFile() {',
      '  const outputStats = await lstatIfExists(outputPath);',
      '  if (outputStats.isSymbolicLink()) throw new Error();',
      '  if (!outputStats.isFile()) throw new Error();',
      '}',
      '',
      'async function replaceOutputAtomically(html) {',
      "  const temporaryFile = await open(temporaryOutputPath, 'wx', 0o666);",
      '  try {',
      '    try {',
      "      await temporaryFile.writeFile(html, 'utf8');",
      '      await temporaryFile.sync();',
      '    } finally {',
      '      await temporaryFile.close();',
      '    }',
      '    await verifyOutputDirectoryPath(false);',
      '    await verifyOutputFile();',
      '    await rename(temporaryOutputPath, outputPath);',
      '  } finally {',
      '    await rm(temporaryOutputPath, { force: true });',
      '  }',
      '}',
      '',
      "const html = await readFile(sourcePath, 'utf8');",
      'await replaceOutputAtomically(html);',
      'log(outputPath);',
      '',
    ].join('\n'),
  );
  files.set(homepage.source, '<!doctype html>\n');
  files.set(homepage.generated, '<!doctype html>\n');
  files.set(homepage.headersFile, frozenHomepageHeadersSource);
  files.set('architecture/compatibility-manifest.json', `${JSON.stringify(manifest, null, 2)}\n`);

  for (const facade of manifest.compatibility.facades) {
    const exactSourceContract = exactFacadeSourceContracts.get(facade.owner);
    if (exactSourceContract) {
      files.set(facade.owner, exactSourceContract);
    } else if (facade.kind === 'rewrite') {
      files.set(
        facade.owner,
        `export default { async rewrites() { return [{ source: ${JSON.stringify(facade.route)}, destination: ${JSON.stringify(facade.target)} }]; } };\n`,
      );
    }

    if (!files.has(facade.targetOwner)) {
      files.set(facade.targetOwner, 'export {};\n');
    }
  }

  for (const reference of homepage.references) {
    if (reference.kind === 'iframe-src') {
      appendFixture(
        files,
        reference.source,
        [
          'export function HomePageWithNav() {',
          `  const activeSection = ${JSON.stringify(frozenHomepageComposition.activeSection)};`,
          `  return activeSection === ${JSON.stringify(frozenHomepageComposition.activeSection)} ? <${frozenHomepageComposition.frameComponent} /> : null;`,
          '}',
          '',
          `function ${frozenHomepageComposition.frameComponent}() {`,
          `  return <iframe src=${JSON.stringify(homepage.publicPath)} sandbox=${JSON.stringify(homepage.iframeSandbox)} allow=${JSON.stringify(homepage.iframeAllow)} referrerPolicy=${JSON.stringify(homepage.iframeReferrerPolicy)} />;`,
          '}',
          '',
        ].join('\n'),
      );
    } else if (reference.kind === 'redirect-location' && !files.get(reference.source)?.includes(homepage.publicPath)) {
      appendFixture(
        files,
        reference.source,
        `export const homepageRedirect = { Location: ${JSON.stringify(homepage.publicPath)} };\n`,
      );
    }
  }

  files.set(
    frozenHomepageComposition.rootOwner,
    [
      `import { ${frozenHomepageComposition.parentComponent} } from '@/components/HomePageWithNav';`,
      '',
      `export default function ${frozenHomepageComposition.rootComponent}() {`,
      `  return <${frozenHomepageComposition.parentComponent} />;`,
      '}',
      '',
    ].join('\n'),
  );

  for (const declaration of manifest.compatibility.ambientDeclarations) {
    appendFixture(files, declaration.owner, `declare module ${JSON.stringify(declaration.module)} {}\n`);
  }

  /** @type {Map<string, TokenDefinition[]>} */
  const definitionsByOwner = new Map();
  for (const definition of manifest.compatibility.tokenDefinitions) {
    const definitions = definitionsByOwner.get(definition.owner) ?? [];
    definitions.push(definition);
    definitionsByOwner.set(definition.owner, definitions);
  }
  for (const [owner, definitions] of definitionsByOwner) {
    const declarations = definitions.map(definition => `  ${definition.name}: ${definition.value};`).join('\n');
    appendFixture(files, owner, `:root {\n${declarations}\n}\n`);
  }

  /** @type {Map<string, TokenAlias[]>} */
  const aliasesByOwner = new Map();
  for (const alias of manifest.compatibility.tokenAliases) {
    const aliases = aliasesByOwner.get(alias.owner) ?? [];
    aliases.push(alias);
    aliasesByOwner.set(alias.owner, aliases);
  }
  for (const [owner, aliases] of aliasesByOwner) {
    const declarations = aliases.map(alias => `  ${alias.alias}: var(${alias.target});`).join('\n');
    appendFixture(files, owner, `:root {\n${declarations}\n}\n`);
    const definitionTargets = new Set((definitionsByOwner.get(owner) ?? []).map(definition => definition.name));
    const baseTargets = [
      ...new Set(aliases.map(alias => alias.target).filter(target => !definitionTargets.has(target))),
    ];
    if (baseTargets.length > 0) {
      appendFixture(files, owner, `:root {\n${baseTargets.map(target => `  ${target}: #000000;`).join('\n')}\n}\n`);
    }
  }

  /** @type {Map<string, TailwindMapping[]>} */
  const mappingsByOwner = new Map();
  for (const mapping of manifest.compatibility.tailwindMappings) {
    const mappings = mappingsByOwner.get(mapping.owner) ?? [];
    mappings.push(mapping);
    mappingsByOwner.set(mapping.owner, mappings);
  }
  for (const [owner, mappings] of mappingsByOwner) {
    const properties = mappings
      .map(mapping => `  ${JSON.stringify(mapping.name)}: ${JSON.stringify(`var(${mapping.cssVariable})`)},`)
      .join('\n');
    appendFixture(
      files,
      owner,
      `const config = {\n  theme: {\n    extend: {\n      colors: {\n${properties}\n      },\n    },\n  },\n};\n\nexport default config;\n`,
    );
  }

  /** @type {Map<string, DesignTokenEntry[]>} */
  const designEntriesByOwner = new Map();
  for (const entry of manifest.compatibility.designTokenEntries) {
    const entries = designEntriesByOwner.get(entry.owner) ?? [];
    entries.push(entry);
    designEntriesByOwner.set(entry.owner, entries);
  }
  for (const [owner, entries] of designEntriesByOwner) {
    const objects = entries
      .map(
        entry =>
          `    { name: ${JSON.stringify(entry.name)}, cls: ${JSON.stringify(entry.className)}, hex: ${JSON.stringify(entry.hex)}, cssVar: ${JSON.stringify(entry.cssVariable)}, text: ${JSON.stringify(entry.textClass)}, usage: ${JSON.stringify(entry.usage)} },`,
      )
      .join('\n');
    appendFixture(files, owner, `export const colorTokenGroups = {\n  practices: [\n${objects}\n  ],\n};\n`);
  }

  for (const exception of manifest.apiToMainExceptions) {
    appendFixture(files, exception.source, `import ${JSON.stringify(exception.specifier)};\n`);
    if (!files.has(exception.target)) {
      files.set(exception.target, 'export {};\n');
    }
  }

  return files;
}

/** @param {string} root @param {FixtureFiles} files @returns {Promise<void>} */
async function writeFixture(root, files) {
  for (const [filePath, content] of [...files].sort(([left], [right]) => compareText(left, right))) {
    const absolutePath = resolve(root, filePath);
    await mkdir(dirname(absolutePath), { recursive: true });
    await writeFile(absolutePath, content, 'utf8');
  }
}

/** @param {Finding[]} findings @param {string[]} expectedCodes @returns {boolean} */
function sameCodes(findings, expectedCodes) {
  const actual = [...new Set(findings.map(finding => finding.code))].sort();
  const expected = [...expectedCodes].sort();
  return actual.length === expected.length && actual.join('\0') === expected.join('\0');
}

/**
 * @template T
 * @param {T | null | undefined} value
 * @param {string} label
 * @returns {T}
 */
function requiredFixtureValue(value, label) {
  if (value === undefined || value === null) {
    throw new Error(`self-test fixture is missing ${label}`);
  }
  return value;
}

/** @returns {Promise<number>} */
async function runSelfTest() {
  /** @type {ArchitectureManifest} */
  const manifest = JSON.parse(
    JSON.stringify({
      schemaVersion: 1,
      externalHomepage: frozenHomepageBoundary,
      compatibility: maximumCompatibilityBudget,
      forbiddenRoots: requiredForbiddenRoots,
      forbiddenFiles: requiredForbiddenFiles,
      forbiddenSymbols: requiredForbiddenSymbols,
      apiToMainExceptions: maximumApiToMainExceptions,
    }),
  );
  const temporaryBase = process.env['CLAUDE_JOB_DIR'] ? join(process.env['CLAUDE_JOB_DIR'], 'tmp') : tmpdir();
  await mkdir(temporaryBase, { recursive: true });
  const suiteRoot = await mkdtemp(join(temporaryBase, 'architecture-self-test-'));
  const importForbiddenRoot = 'src/legacy';
  const homepagePackageRoot = posix.dirname(manifest.externalHomepage.source);
  const selfTestDefinitionName = ['--color', 'practices-self-test'].join('-');
  const selfTestClassName = ['divide', 'practices', 'primary'].join('-');

  /** @type {RepositorySelfTestCase[]} */
  const cases = [
    {
      name: 'exact Playground exception is allowed',
      expectedCodes: [],
    },
    {
      name: 'new compatibility token definition is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: [`unauthorized compatibility token definition ${selfTestDefinitionName}`],
      mutate(files) {
        const owner = requiredFixtureValue(
          manifest.compatibility.tokenDefinitions[0],
          'first compatibility token definition',
        ).owner;
        appendFixture(files, owner, `:root { ${selfTestDefinitionName}: #000000; }\n`);
      },
    },
    {
      name: 'new compatibility token usage is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: [`unauthorized compatibility token usage ${selfTestClassName}`],
      mutate(files) {
        files.set('src/app/token-consumer.ts', `export const className = ${JSON.stringify(selfTestClassName)};\n`);
      },
    },
    {
      name: 'missing compatibility token definition is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: ['missing compatibility token definition'],
      mutate(files) {
        const definition = requiredFixtureValue(
          manifest.compatibility.tokenDefinitions[0],
          'first compatibility token definition',
        );
        const content = files.get(definition.owner) ?? '';
        files.set(definition.owner, content.replace(`  ${definition.name}: ${definition.value};\n`, ''));
      },
    },
    {
      name: 'missing compatibility token alias is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: ['missing compatibility token alias'],
      mutate(files) {
        const alias = requiredFixtureValue(manifest.compatibility.tokenAliases[0], 'first compatibility token alias');
        const content = files.get(alias.owner) ?? '';
        files.set(alias.owner, content.replace(`  ${alias.alias}: var(${alias.target});\n`, ''));
      },
    },
    {
      name: 'missing Tailwind compatibility mapping is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: ['missing Tailwind compatibility mapping'],
      mutate(files) {
        const mapping = requiredFixtureValue(
          manifest.compatibility.tailwindMappings[0],
          'first Tailwind compatibility mapping',
        );
        const content = files.get(mapping.owner) ?? '';
        const declaration = `  ${JSON.stringify(mapping.name)}: ${JSON.stringify(`var(${mapping.cssVariable})`)},\n`;
        files.set(mapping.owner, content.replace(declaration, ''));
      },
    },
    {
      name: 'missing design-token compatibility entry is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: ['missing practices design-token entry'],
      mutate(files) {
        const entry = requiredFixtureValue(
          manifest.compatibility.designTokenEntries[0],
          'first design-token compatibility entry',
        );
        const content = files.get(entry.owner) ?? '';
        const declaration = `    { name: ${JSON.stringify(entry.name)}, cls: ${JSON.stringify(entry.className)}, hex: ${JSON.stringify(entry.hex)}, cssVar: ${JSON.stringify(entry.cssVariable)}, text: ${JSON.stringify(entry.textClass)}, usage: ${JSON.stringify(entry.usage)} },\n`;
        files.set(entry.owner, content.replace(declaration, ''));
      },
    },
    ...requiredForbiddenRoots.map(forbiddenRoot => ({
      name: `retired root ${forbiddenRoot} is rejected`,
      expectedCodes: ['ARCH001'],
      /** @param {FixtureFiles} files */
      mutate(files) {
        files.set(`${forbiddenRoot}/self-test.ts`, 'export {};\n');
      },
    })),
    ...requiredForbiddenFiles.map(forbiddenFile => ({
      name: `retired file ${forbiddenFile} is rejected`,
      expectedCodes: ['ARCH001'],
      expectedMessages: [`${forbiddenFile}: retired file must not exist`],
      /** @param {FixtureFiles} files */
      mutate(files) {
        files.set(forbiddenFile, 'export {};\n');
      },
    })),
    {
      name: 'retired symbol is rejected',
      expectedCodes: ['ARCH001'],
      expectedMessages: ['retired symbol LegacyPageWrapper must not return'],
      mutate(files) {
        files.set('src/components/retired-symbol.tsx', 'export function LegacyPageWrapper() { return null; }\n');
      },
    },
    {
      name: 'nested source docs directory is still scanned',
      expectedCodes: ['ARCH001'],
      expectedMessages: ['src/app/docs/retired-symbol.ts'],
      mutate(files) {
        files.set('src/app/docs/retired-symbol.ts', 'export const LegacyPageWrapper = true;\n');
      },
    },
    {
      name: 'static filesystem write to retired root is rejected',
      expectedCodes: ['ARCH001'],
      expectedMessages: ['mkdir targets retired root src/legacy'],
      mutate(files) {
        files.set(
          'scripts/recreate-retired-root.mjs',
          [
            "import { mkdir } from 'node:fs/promises';",
            "import { dirname, join } from 'node:path';",
            "import { fileURLToPath } from 'node:url';",
            "const root = join(dirname(fileURLToPath(import.meta.url)), '..');",
            "const output = join(root, 'src', 'legacy');",
            'await mkdir(output);',
            '',
          ].join('\n'),
        );
      },
    },
    {
      name: 'package script retired-root recreation is rejected',
      expectedCodes: ['ARCH001'],
      expectedMessages: ['package script recreate-legacy references retired root src/legacy'],
      mutate(files) {
        const packageManifest = JSON.parse(files.get('package.json') ?? '{}');
        packageManifest.scripts = { 'recreate-legacy': 'mkdir -p src/legacy' };
        files.set('package.json', `${JSON.stringify(packageManifest, null, 2)}\n`);
      },
    },
    {
      name: 'repository source symlink is rejected',
      expectedCodes: ['ARCH001'],
      expectedMessages: ['repository symlinks are forbidden'],
      mutate(files) {
        files.set('src/symlink-target.ts', 'export {};\n');
      },
      async afterWrite(caseRoot) {
        await symlink('symlink-target.ts', join(caseRoot, 'src', 'symlink.ts'));
      },
    },
    {
      name: 'homepage source symlink is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ['required external homepage boundary file is missing, symbolic, or not a regular file'],
      async afterWrite(caseRoot) {
        const sourcePath = resolve(caseRoot, manifest.externalHomepage.source);
        const alternatePath = resolve(dirname(sourcePath), 'source-copy.html');
        await rm(sourcePath);
        await writeFile(alternatePath, '<!doctype html>\n', 'utf8');
        await symlink('source-copy.html', sourcePath);
      },
    },
    ...[
      {
        name: 'static import',
        statement: `import ${JSON.stringify(`@/${importForbiddenRoot.slice(4)}/static`)};`,
      },
      {
        name: 're-export',
        statement: `export * from ${JSON.stringify('../legacy/reexport')};`,
      },
      {
        name: 'dynamic import',
        statement: `void import(${JSON.stringify(`@/${importForbiddenRoot.slice(4)}/dynamic`)});`,
      },
      {
        name: 'literal require',
        statement: `require(${JSON.stringify('../legacy/required')});`,
      },
      {
        name: 'import-equals',
        statement: `import legacy = require(${JSON.stringify(`@/${importForbiddenRoot.slice(4)}/equals`)});`,
      },
    ].map(importCase => ({
      name: `forbidden legacy ${importCase.name} is rejected`,
      expectedCodes: ['ARCH001'],
      expectedFindingCount: 1,
      /** @param {FixtureFiles} files */
      mutate(files) {
        files.set('src/app/legacy-consumer.ts', `${importCase.statement}\n`);
      },
    })),
    {
      name: 'homepage package import from adapter is rejected',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 2,
      expectedMessages: [
        'unauthorized frozen adapter import from @cc4pm/homepage',
        'executable import of @cc4pm/homepage is forbidden',
      ],
      mutate(files) {
        appendFixture(
          files,
          manifest.externalHomepage.adapter,
          `import ${JSON.stringify(manifest.externalHomepage.package)};\n`,
        );
      },
    },
    {
      name: 'homepage package subpath require is rejected',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 1,
      expectedMessages: ['executable require of @cc4pm/homepage/runtime is forbidden'],
      mutate(files) {
        files.set(
          'src/app/homepage-package-consumer.ts',
          `require(${JSON.stringify(`${manifest.externalHomepage.package}/runtime`)});\n`,
        );
      },
    },
    {
      name: 'computed homepage package dynamic import is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ['executable dynamic-import of @cc4pm/homepage is forbidden'],
      mutate(files) {
        files.set(
          'src/app/computed-homepage-package.ts',
          "const scope = '@cc4pm/';\nconst packageName = `${scope}homepage`;\nvoid import(packageName);\n",
        );
      },
    },
    {
      name: 'relative import into homepage package is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ['executable import of ../../node_modules/@cc4pm/homepage/index.html is forbidden'],
      mutate(files) {
        files.set('src/app/relative-homepage-package.ts', "import '../../node_modules/@cc4pm/homepage/index.html';\n");
      },
    },
    {
      name: 'computed homepage filesystem path is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: [`path ${manifest.externalHomepage.source} bypasses ${manifest.externalHomepage.adapter}`],
      mutate(files) {
        files.set(
          'src/app/computed-homepage-path.ts',
          "const scope = 'node_modules/@cc4pm';\nexport const homepagePath = `${scope}/homepage/index.html`;\n",
        );
      },
    },
    {
      name: 'package script homepage execution is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ['package script forbidden-homepage must not invoke or load @cc4pm/homepage'],
      mutate(files) {
        const packageManifest = JSON.parse(files.get('package.json') ?? '{}');
        packageManifest.scripts = { 'forbidden-homepage': 'node node_modules/@cc4pm/homepage/index.html' };
        files.set('package.json', `${JSON.stringify(packageManifest, null, 2)}\n`);
      },
    },
    {
      name: 'exact CI homepage artifact verification is allowed',
      expectedCodes: [],
      mutate(files) {
        const verification = [
          'steps:',
          '  - run: |',
          `      git ls-files --error-unmatch -- ${manifest.externalHomepage.generated} ${manifest.externalHomepage.headersFile} >/dev/null`,
          `      artifact_status=$(git status --porcelain --untracked-files=all -- ${manifest.externalHomepage.generated} ${manifest.externalHomepage.headersFile})`,
          '',
        ].join('\n');
        files.set('.github/workflows/deploy.yml', verification);
        files.set('.github/workflows/pr-check.yml', verification);
      },
    },
    {
      name: 'unauthorized CI homepage artifact consumer is rejected',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 2,
      expectedMessages: [
        `non-JavaScript executable source references protected homepage value ${manifest.externalHomepage.generated}`,
        `non-JavaScript executable source references protected homepage value ${manifest.externalHomepage.publicPath}`,
      ],
      mutate(files) {
        files.set(
          '.github/workflows/deploy.yml',
          `steps:\n  - run: cp ${manifest.externalHomepage.generated} /tmp/homepage.html\n`,
        );
      },
    },
    {
      name: 'workflow homepage execution is rejected',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 2,
      expectedMessages: [
        'non-JavaScript executable source references protected homepage value @cc4pm/homepage',
        'non-JavaScript executable source references protected homepage value node_modules/@cc4pm/homepage/index.html',
      ],
      mutate(files) {
        files.set('.github/workflows/forbidden.yml', 'steps:\n  - run: node node_modules/@cc4pm/homepage/index.html\n');
      },
    },
    {
      name: 'alternate homepage package file read is rejected',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 3,
      expectedMessages: [
        'expected exactly one module-relative readFile operation',
        'unauthorized readFile path',
        'unauthorized external homepage package path',
      ],
      mutate(files) {
        const alternateParts = [...homepagePackageRoot.split('/'), 'runtime.js'];
        appendFixture(
          files,
          manifest.externalHomepage.adapter,
          [
            `const alternatePath = join(repositoryRoot, ${alternateParts.map(part => JSON.stringify(part)).join(', ')});`,
            `await readFile(alternatePath, ${JSON.stringify('utf8')});`,
            '',
          ].join('\n'),
        );
      },
    },
    {
      name: 'dead homepage source path is rejected',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 1,
      expectedMessages: ['expected exactly one module-relative readFile operation'],
      mutate(files) {
        const adapter = manifest.externalHomepage.adapter;
        const content = files.get(adapter) ?? '';
        files.set(adapter, content.replace("const html = await readFile(sourcePath, 'utf8');", "const html = '';"));
      },
    },
    {
      name: 'homepage source must be a regular file',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 1,
      expectedMessages: ['missing, symbolic, or not a regular file'],
      mutate(files) {
        files.delete(manifest.externalHomepage.source);
        files.set(`${manifest.externalHomepage.source}/nested.txt`, 'not the homepage file\n');
      },
    },
    {
      name: 'unauthorized homepage reference is rejected',
      expectedCodes: ['ARCH002'],
      mutate(files) {
        files.set(
          'src/app/homepage-consumer.ts',
          `export const homepagePath = ${JSON.stringify(manifest.externalHomepage.publicPath)};\n`,
        );
      },
    },
    {
      name: 'homepage adapter cwd anchor is rejected',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 3,
      expectedMessages: [
        'expected exactly one module-relative static path',
        'process.cwd() must not anchor homepage paths',
        'expected exactly one module-relative readFile operation',
      ],
      mutate(files) {
        const adapter = manifest.externalHomepage.adapter;
        const content = files.get(adapter) ?? '';
        files.set(
          adapter,
          content.replace('const sourcePath = join(repositoryRoot,', 'const sourcePath = join(process.cwd(),'),
        );
      },
    },
    {
      name: 'homepage adapter nonexclusive temporary file is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ["atomic output requires one exclusive open(..., 'wx', ...) call"],
      mutate(files) {
        const adapter = manifest.externalHomepage.adapter;
        files.set(
          adapter,
          (files.get(adapter) ?? '').replace("open(temporaryOutputPath, 'wx'", "open(temporaryOutputPath, 'w'"),
        );
      },
    },
    {
      name: 'homepage adapter missing symlink guard is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ['output type guard isSymbolicLink()'],
      mutate(files) {
        const adapter = manifest.externalHomepage.adapter;
        files.set(adapter, (files.get(adapter) ?? '').replace('outputStats.isSymbolicLink()', 'outputStats.isFIFO()'));
      },
    },
    {
      name: 'homepage response sandbox removal is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ['must retain the exact frozen response sandbox policy'],
      mutate(files) {
        files.set(manifest.externalHomepage.headersFile, `${manifest.externalHomepage.publicPath}\n`);
      },
    },
    {
      name: 'homepage response sandbox widening is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ['must retain the exact frozen response sandbox policy'],
      mutate(files) {
        const headersFile = manifest.externalHomepage.headersFile;
        files.set(
          headersFile,
          (files.get(headersFile) ?? '').replace(
            manifest.externalHomepage.contentSecurityPolicy,
            `${manifest.externalHomepage.contentSecurityPolicy} allow-same-origin`,
          ),
        );
      },
    },
    {
      name: 'homepage iframe policy drift is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ['homepage iframe must use the frozen sandbox'],
      mutate(files) {
        const owner = requiredFixtureValue(
          manifest.externalHomepage.references.find(reference => reference.kind === 'iframe-src'),
          'iframe homepage reference',
        ).source;
        files.set(
          owner,
          (files.get(owner) ?? '').replace(
            `sandbox=${JSON.stringify(manifest.externalHomepage.iframeSandbox)}`,
            "sandbox='allow-scripts allow-same-origin'",
          ),
        );
      },
    },
    {
      name: 'compatibility owner import is rejected',
      expectedCodes: ['ARCH004'],
      expectedMessages: ['import targets compatibility owner'],
      mutate(files) {
        const facade = requiredFixtureValue(
          manifest.compatibility.facades.find(entry => entry.owner.startsWith('src/app/')),
          'app compatibility façade',
        );
        const specifier = `@/${facade.owner.slice(4).replace(/\.(?:tsx?|jsx?|mjs|cjs)$/, '')}`;
        files.set('src/app/canonical-consumer.ts', `import ${JSON.stringify(specifier)};\n`);
      },
    },
    {
      name: 'unmanifested compatibility façade is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: ['compatibility façade /home exists outside the manifest'],
      mutateManifest(candidate) {
        candidate.compatibility.facades = candidate.compatibility.facades.filter(facade => facade.route !== '/home');
      },
    },
    {
      name: 'compatibility façade domain logic is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: ['must remain the exact thin source contract'],
      mutate(files) {
        const facade = requiredFixtureValue(
          manifest.compatibility.facades.find(entry => entry.route === '/home'),
          '/home compatibility façade',
        );
        appendFixture(files, facade.owner, 'export const compatibilityState = new Map();\n');
      },
    },
    {
      name: 'rewrite façade extra behavior is rejected',
      expectedCodes: ['ARCH003'],
      expectedFindingCount: 2,
      expectedMessages: [
        'expected one exact rewrite method',
        'rewrites and redirects must be zero-argument methods returning one static inline array',
      ],
      mutate(files) {
        const owner = 'next.config.mjs';
        files.set(
          owner,
          (files.get(owner) ?? '').replace('return [{ source:', 'return [{ beforeFiles: [] }, { source:'),
        );
      },
    },
    {
      name: 'redirect façade nonredirect status is rejected',
      expectedCodes: ['ARCH002', 'ARCH003'],
      expectedFindingCount: 3,
      expectedMessages: ['homepage redirect must use a 3xx status', 'must remain the exact thin source contract'],
      mutate(files) {
        const owner = 'src/app/api/static/homepage/route.ts';
        files.set(owner, (files.get(owner) ?? '').replace('status: 307', 'status: 200'));
      },
    },
    {
      name: 'new API-to-route edge is rejected',
      expectedCodes: ['ARCH005'],
      mutate(files) {
        const target = 'src/app/(tools)/self-test/shared.ts';
        const specifier = '@/app/(tools)/self-test/shared';
        files.set(target, 'export const value = true;\n');
        files.set('src/app/api/self-test/route.ts', `export { value } from ${JSON.stringify(specifier)};\n`);
      },
    },
    {
      name: 'baseUrl spelling cannot widen the Playground exception',
      expectedCodes: ['ARCH005'],
      expectedFindingCount: 2,
      expectedMessages: ['stale API-to-route exception', 'crosses API-to-route boundary'],
      mutate(files) {
        const exception = requiredFixtureValue(manifest.apiToMainExceptions[0], 'first API-to-route exception');
        files.set(exception.source, `import ${JSON.stringify(exception.target.replace(/\.[^.]+$/, ''))};\n`);
      },
    },
    {
      name: 'shared foundation feature dependency is rejected',
      expectedCodes: ['ARCH004'],
      expectedMessages: ['shared foundations must not depend on feature-ui code'],
      mutate(files) {
        files.set('src/components/features/other/private.ts', 'export const value = true;\n');
        files.set('src/lib/bad-shared.ts', "import '@/components/features/other/private';\n");
      },
    },
    {
      name: 'domain dependency on UI is rejected',
      expectedCodes: ['ARCH004'],
      expectedMessages: ['content code must not depend on React UI or routes'],
      mutate(files) {
        files.set('src/components/features/catalog/private.ts', 'export const value = true;\n');
        files.set('src/content/catalog/private.ts', "import '@/components/features/catalog/private';\n");
      },
    },
    {
      name: 'cross-feature private import is rejected',
      expectedCodes: ['ARCH004'],
      expectedMessages: ["features must not reach into another context's private files"],
      mutate(files) {
        files.set('src/components/features/beta/private.ts', 'export const value = true;\n');
        files.set('src/components/features/alpha/private.ts', "import '@/components/features/beta/private';\n");
      },
    },
    {
      name: 'Shares dependency on provider internals is rejected',
      expectedCodes: ['ARCH004'],
      expectedMessages: ['[SHR-001] Shares must remain self-contained'],
      mutate(files) {
        files.set('src/services/llm-provider/private.ts', 'export const value = true;\n');
        files.set('src/components/features/shares/private.ts', "import '@/services/llm-provider/private';\n");
      },
    },
    {
      name: 'other context cannot import private Shares content',
      expectedCodes: ['ARCH004'],
      expectedMessages: ['other contexts may use only a public Shares entry point'],
      mutate(files) {
        files.set('src/content/shares/private.ts', 'export const value = true;\n');
        files.set('src/app/catalog/page.ts', "import '@/content/shares/private';\n");
      },
    },
    {
      name: 'other context may import public Shares content',
      expectedCodes: [],
      mutate(files) {
        files.set('src/content/shares/index.ts', 'export const value = true;\n');
        files.set('src/app/catalog/page.ts', "import '@/content/shares';\n");
      },
    },
    {
      name: 'unrelated practice-like tokens do not trigger compatibility findings',
      expectedCodes: [],
      mutate(files) {
        files.set('src/app/unrelated-token.ts', "export const value = 'bg-practiceship-primary';\n");
      },
    },
    {
      name: 'string-named retired export is rejected',
      expectedCodes: ['ARCH001'],
      expectedMessages: ['retired runtime name LegacyPageWrapper must not return (string-named export)'],
      mutate(files) {
        files.set('src/app/string-export.ts', "const value = true;\nexport { value as 'LegacyPageWrapper' };\n");
      },
    },
    {
      name: 'computed retired runtime assignment is rejected',
      expectedCodes: ['ARCH001'],
      expectedMessages: ['retired runtime name LegacyPageWrapper must not return (computed assignment name)'],
      mutate(files) {
        files.set(
          'src/app/computed-runtime-name.cjs',
          "const name = ['LegacyPage', 'Wrapper'].join('');\nexports[name] ??= true;\n",
        );
      },
    },
    {
      name: 'aliased defineProperty retired runtime name is rejected',
      expectedCodes: ['ARCH001'],
      expectedMessages: ['retired runtime name LegacyPageWrapper must not return (defined runtime property name)'],
      mutate(files) {
        files.set(
          'src/app/defined-runtime-name.cjs',
          "const define = Object.defineProperty;\nconst name = ['LegacyPage', 'Wrapper'].join('');\ndefine(exports, name, { value: true });\n",
        );
      },
    },
    {
      name: 'alternate route-group compatibility owner is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: ['App Router owner recreates compatibility route /home'],
      mutate(files) {
        files.set('src/app/(alternate)/home/page.tsx', 'export default function AlternateHome() { return null; }\n');
      },
    },
    {
      name: 'independent compatibility route after manifest removal is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: ['App Router owner recreates compatibility route /home'],
      mutateManifest(candidate) {
        candidate.compatibility.facades = candidate.compatibility.facades.filter(facade => facade.route !== '/home');
      },
      mutate(files) {
        const facade = requiredFixtureValue(
          manifest.compatibility.facades.find(entry => entry.route === '/home'),
          '/home compatibility façade',
        );
        files.delete(facade.owner);
        files.set(
          'src/app/(replacement)/home/page.tsx',
          'export default function ReplacementHome() { return null; }\n',
        );
      },
    },
    {
      name: 'dead homepage iframe decoy is rejected',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 2,
      expectedMessages: [
        'missing rendered homepage composition contract frame-return',
        'dead homepage composition reference frame-return',
      ],
      mutate(files) {
        const owner = frozenHomepageComposition.owner;
        const content = files.get(owner) ?? '';
        const iframeReturn = `return <iframe src=${JSON.stringify(manifest.externalHomepage.publicPath)} sandbox=${JSON.stringify(manifest.externalHomepage.iframeSandbox)} allow=${JSON.stringify(manifest.externalHomepage.iframeAllow)} referrerPolicy=${JSON.stringify(manifest.externalHomepage.iframeReferrerPolicy)} />;`;
        files.set(owner, content.replace(iframeReturn, `if (false) ${iframeReturn}\n  return null;`));
      },
    },
    {
      name: 'dead homepage parent composition decoy is rejected',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 2,
      expectedMessages: [
        'missing rendered homepage composition contract parent-call',
        'dead homepage composition reference parent-call',
      ],
      mutate(files) {
        const owner = frozenHomepageComposition.owner;
        const content = files.get(owner) ?? '';
        const parentReturn = `return activeSection === ${JSON.stringify(frozenHomepageComposition.activeSection)} ? <${frozenHomepageComposition.frameComponent} /> : null;`;
        files.set(owner, content.replace(parentReturn, `if (false) ${parentReturn}\n  return null;`));
      },
    },
    {
      name: 'Tailwind compatibility mapping mutation is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: ['Tailwind compatibility mappings must not be mutated after initialization'],
      mutate(files) {
        const owner = requiredFixtureValue(
          manifest.compatibility.tailwindMappings[0],
          'first Tailwind compatibility mapping',
        ).owner;
        appendFixture(files, owner, "config.theme.extend.colors['practices-accent'] = '#ffffff';\n");
      },
    },
    {
      name: 'design-token practices mutation is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: ['practices design-token entries must not be mutated after initialization'],
      mutate(files) {
        const owner = requiredFixtureValue(
          manifest.compatibility.designTokenEntries[0],
          'first design-token compatibility entry',
        ).owner;
        appendFixture(files, owner, 'colorTokenGroups.practices.length = 0;\n');
      },
    },
    {
      name: 'absolute homepage artifact URL is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: [
        'unauthorized network reference to homepage artifact https://example.test/static/cc4pm-homepage.html',
      ],
      mutate(files) {
        files.set(
          'src/app/absolute-homepage-consumer.ts',
          "void fetch('https://example.test/static/cc4pm-homepage.html');\n",
        );
      },
    },
    {
      name: 'local compatibility-route consumer is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: ['network reference uses compatibility route /home'],
      mutate(files) {
        files.set(
          'src/app/compatibility-network-consumer.ts',
          "void globalThis.fetch('http://localhost:3000/home');\n",
        );
      },
    },
    {
      name: 'commented CSS compatibility token is ignored',
      expectedCodes: [],
      mutate(files) {
        appendFixture(files, 'src/app/globals.css', '/* :root { --color-practices-commented: #fff; } */\n');
      },
    },
    {
      name: 'nested CSS compatibility declaration is rejected',
      expectedCodes: ['ARCH003'],
      expectedFindingCount: 2,
      expectedMessages: ['missing compatibility token definition', 'must remain in a top-level :root block'],
      mutate(files) {
        const definition = requiredFixtureValue(
          manifest.compatibility.tokenDefinitions[0],
          'first compatibility token definition',
        );
        const owner = definition.owner;
        const declaration = `  ${definition.name}: ${definition.value};\n`;
        const content = files.get(owner) ?? '';
        files.set(
          owner,
          content.replace(declaration, '') +
            `@media (min-width: 1px) { :root { ${definition.name}: ${definition.value}; } }\n`,
        );
      },
    },
    {
      name: 'missing compatibility alias base target is rejected',
      expectedCodes: ['ARCH003'],
      expectedMessages: ['targets missing live custom property'],
      mutate(files) {
        const definitionNames = new Set(manifest.compatibility.tokenDefinitions.map(definition => definition.name));
        const alias = requiredFixtureValue(
          manifest.compatibility.tokenAliases.find(entry => !definitionNames.has(entry.target)),
          'compatibility alias with an external base target',
        );
        const content = files.get(alias.owner) ?? '';
        files.set(alias.owner, content.replace(`  ${alias.target}: #000000;\n`, ''));
      },
    },
    {
      name: '.gitignore retired-root glob is rejected',
      expectedCodes: ['ARCH001'],
      expectedMessages: ['ignore pattern "src/legacy/**" hides retired root src/legacy'],
      mutate(files) {
        files.set('.gitignore', 'src/legacy/**\n');
      },
    },
    {
      name: 'exported ESLint ignore alias is rejected',
      expectedCodes: ['ARCH001'],
      expectedMessages: ['ignore pattern "src/legacy/**" hides retired root src/legacy'],
      mutate(files) {
        files.set(
          'eslint.config.js',
          "const ignores = ['src/legacy/**'];\nconst config = [{ ignores }];\nexport { config as default };\n",
        );
      },
    },
    {
      name: 'CommonJS synchronous filesystem consumer is rejected',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 2,
      expectedMessages: [
        'readFileSync targets protected homepage path',
        'path public/static/cc4pm-homepage.html bypasses',
      ],
      mutate(files) {
        files.set(
          'scripts/synchronous-homepage-consumer.cjs',
          "const fs = require('node:fs');\nfs.readFileSync('public/static/cc4pm-homepage.html', 'utf8');\n",
        );
      },
    },
    {
      name: 'fs promises alias consumer is rejected',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 2,
      expectedMessages: ['readFile targets protected homepage path', 'path public/static/cc4pm-homepage.html bypasses'],
      mutate(files) {
        files.set(
          'scripts/promises-homepage-consumer.mjs',
          "import fs from 'node:fs';\nconst fsp = fs.promises;\nawait fsp.readFile('public/static/cc4pm-homepage.html', 'utf8');\n",
        );
      },
    },
    {
      name: 'new URL module-relative filesystem consumer is rejected',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 2,
      expectedMessages: [
        'static path public/static/cc4pm-homepage.html bypasses',
        'readFile targets protected homepage path',
      ],
      mutate(files) {
        files.set(
          'src/app/new-url-homepage-consumer.mjs',
          "import { readFile } from 'node:fs/promises';\nimport { fileURLToPath } from 'node:url';\nawait readFile(fileURLToPath(new URL('../../public/static/cc4pm-homepage.html', import.meta.url)), 'utf8');\n",
        );
      },
    },
    {
      name: 'createRequire homepage package consumer is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ['executable require of @cc4pm/homepage is forbidden'],
      mutate(files) {
        files.set(
          'src/app/create-require-homepage.mjs',
          "import { createRequire } from 'node:module';\nconst localRequire = createRequire(import.meta.url);\nlocalRequire('@cc4pm/homepage');\n",
        );
      },
    },
    {
      name: 'require resolve homepage package consumer is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ['executable require-resolve of @cc4pm/homepage is forbidden'],
      mutate(files) {
        files.set('scripts/resolve-homepage.cjs', "require.resolve('@cc4pm/homepage');\n");
      },
    },
    {
      name: 'Python homepage artifact consumer is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: [
        'non-JavaScript executable source references protected homepage value /static/cc4pm-homepage.html',
      ],
      mutate(files) {
        files.set('scripts/homepage_consumer.py', "url = '/static/cc4pm-homepage.html'\n");
      },
    },
    {
      name: 'imported JSON homepage value laundering is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ['imported JSON src/app/protected-homepage.json launders protected homepage value'],
      mutate(files) {
        files.set('src/app/protected-homepage.json', `${JSON.stringify({ path: manifest.externalHomepage.source })}\n`);
        files.set('src/app/json-homepage-consumer.ts', "import data from './protected-homepage.json';\nvoid data;\n");
      },
    },
    {
      name: 'external package declarations are outside repository context boundaries',
      expectedCodes: [],
      mutate(files) {
        files.set(
          'node_modules/architecture-external/package.json',
          `${JSON.stringify({ types: 'index.d.ts' }, null, 2)}\n`,
        );
        files.set('node_modules/architecture-external/index.d.ts', 'export declare const value: boolean;\n');
        files.set(
          'src/app/external-package-consumer.ts',
          "import { value } from 'architecture-external';\nvoid value;\n",
        );
      },
    },
    {
      name: 'repository-root bridge laundering is rejected',
      expectedCodes: ['ARCH004'],
      expectedFindingCount: 2,
      expectedMessages: [
        'unclassified source cannot bridge into content code',
        'must not launder context access through unclassified source',
      ],
      mutate(files) {
        files.set('src/content/shares/private.ts', 'export const value = true;\n');
        files.set('src/bridge.ts', "export { value } from '@/content/shares/private';\n");
        files.set('src/app/catalog/page.ts', "import { value } from '../../bridge';\nvoid value;\n");
      },
    },
    {
      name: 'unawaited atomic sync is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ['atomic output operations must remain active and ordered'],
      mutate(files) {
        const adapter = manifest.externalHomepage.adapter;
        files.set(adapter, (files.get(adapter) ?? '').replace('await temporaryFile.sync();', 'temporaryFile.sync();'));
      },
    },
    {
      name: 'reordered output path verification is rejected',
      expectedCodes: ['ARCH002'],
      expectedMessages: ['atomic output operations must remain active and ordered'],
      mutate(files) {
        const adapter = manifest.externalHomepage.adapter;
        const content = files.get(adapter) ?? '';
        files.set(
          adapter,
          content.replace(
            'await verifyOutputDirectoryPath(false);\n    await verifyOutputFile();',
            'await verifyOutputFile();\n    await verifyOutputDirectoryPath(false);',
          ),
        );
      },
    },
    {
      name: 'dead output file verification is rejected',
      expectedCodes: ['ARCH002'],
      expectedFindingCount: 2,
      expectedMessages: [
        'must actively call verifyOutputFile() exactly once',
        'atomic output operations must remain active and ordered',
      ],
      mutate(files) {
        const adapter = manifest.externalHomepage.adapter;
        files.set(
          adapter,
          (files.get(adapter) ?? '').replace('await verifyOutputFile();', 'if (false) await verifyOutputFile();'),
        );
      },
    },
    {
      name: 'stale API-to-route exception is rejected',
      expectedCodes: ['ARCH005'],
      mutate(files) {
        const exception = requiredFixtureValue(manifest.apiToMainExceptions[0], 'first API-to-route exception');
        files.set(exception.source, 'export {};\n');
      },
    },
  ];

  /** @type {ManifestSelfTestCase[]} */
  const manifestCases = [
    {
      name: 'unexpected homepage field is rejected',
      expectedErrors: ['manifest.externalHomepage.unexpected is not allowed'],
      mutate(candidate) {
        candidate.externalHomepage.unexpected = true;
      },
    },
    {
      name: 'malformed homepage reference is rejected',
      expectedErrors: ['manifest.externalHomepage.references[2] must be an object'],
      mutate(candidate) {
        candidate.externalHomepage.references.push(null);
      },
    },
    {
      name: 'malformed façade is rejected',
      expectedErrors: ['manifest.compatibility.facades[4] must be an object'],
      mutate(candidate) {
        candidate.compatibility.facades.push(null);
      },
    },
    {
      name: 'malformed ambient declaration is rejected',
      expectedErrors: ['manifest.compatibility.ambientDeclarations[1] must be an object'],
      mutate(candidate) {
        candidate.compatibility.ambientDeclarations.push(null);
      },
    },
    {
      name: 'malformed token definition is rejected',
      expectedErrors: ['manifest.compatibility.tokenDefinitions[11] must be an object'],
      mutate(candidate) {
        candidate.compatibility.tokenDefinitions.push(null);
      },
    },
    {
      name: 'malformed token alias is rejected',
      expectedErrors: ['manifest.compatibility.tokenAliases[10] must be an object'],
      mutate(candidate) {
        candidate.compatibility.tokenAliases.push(null);
      },
    },
    {
      name: 'malformed Tailwind mapping is rejected',
      expectedErrors: ['manifest.compatibility.tailwindMappings[3] must be an object'],
      mutate(candidate) {
        candidate.compatibility.tailwindMappings.push(null);
      },
    },
    {
      name: 'malformed design-token entry is rejected',
      expectedErrors: ['manifest.compatibility.designTokenEntries[3] must be an object'],
      mutate(candidate) {
        candidate.compatibility.designTokenEntries.push(null);
      },
    },
    {
      name: 'malformed forbidden root is rejected',
      expectedErrors: ['manifest.forbiddenRoots[5] must be a non-empty string'],
      mutate(candidate) {
        candidate.forbiddenRoots.push(null);
      },
    },
    {
      name: 'malformed forbidden file is rejected',
      expectedErrors: ['manifest.forbiddenFiles[5] must be a non-empty string'],
      mutate(candidate) {
        candidate.forbiddenFiles.push(null);
      },
    },
    {
      name: 'malformed forbidden symbol is rejected',
      expectedErrors: ['manifest.forbiddenSymbols[1] must be a non-empty string'],
      mutate(candidate) {
        candidate.forbiddenSymbols.push(null);
      },
    },
    {
      name: 'required retired file cannot be removed',
      expectedErrors: ['manifest.forbiddenFiles must include required retired file scripts/build-client.js'],
      mutate(candidate) {
        candidate.forbiddenFiles = candidate.forbiddenFiles.filter(entry => entry !== 'scripts/build-client.js');
      },
    },
    {
      name: 'required retired symbol cannot be removed',
      expectedErrors: ['manifest.forbiddenSymbols must include required retired symbol LegacyPageWrapper'],
      mutate(candidate) {
        candidate.forbiddenSymbols = [];
      },
    },
    {
      name: 'malformed API exception is rejected',
      expectedErrors: ['manifest.apiToMainExceptions[1] must be an object'],
      mutate(candidate) {
        candidate.apiToMainExceptions.push(null);
      },
    },
    {
      name: 'absolute repository path is rejected',
      expectedErrors: ['manifest.forbiddenRoots[5] must be a normalized repository-relative path'],
      mutate(candidate) {
        candidate.forbiddenRoots.push('/outside');
      },
    },
    {
      name: 'repository traversal is rejected',
      expectedErrors: ['manifest.forbiddenRoots[5] must be a normalized repository-relative path'],
      mutate(candidate) {
        candidate.forbiddenRoots.push('src/client/../outside');
      },
    },
    {
      name: 'bracket glob is rejected',
      expectedErrors: ['manifest.forbiddenRoots[5] must not contain glob or wildcard syntax'],
      mutate(candidate) {
        candidate.forbiddenRoots.push('src/[a-z]legacy');
      },
    },
    {
      name: 'duplicate entry is rejected',
      expectedErrors: ['manifest.forbiddenRoots[5] duplicates shared/scripts/generated'],
      mutate(candidate) {
        candidate.forbiddenRoots.push('shared/scripts/generated');
      },
    },
    {
      name: 'required retired root cannot be removed',
      expectedErrors: ['manifest.forbiddenRoots must include required retired root src/client'],
      mutate(candidate) {
        candidate.forbiddenRoots = candidate.forbiddenRoots.filter(entry => entry !== 'src/client');
      },
    },
    {
      name: 'frozen homepage core cannot move',
      expectedErrors: ['manifest.externalHomepage.package must remain "@cc4pm/homepage"'],
      mutate(candidate) {
        candidate.externalHomepage.package = '@cc4pm/homepage-next';
      },
    },
    {
      name: 'frozen homepage sandbox cannot widen',
      expectedErrors: ['manifest.externalHomepage.iframeSandbox must remain "allow-popups allow-scripts"'],
      mutate(candidate) {
        candidate.externalHomepage.iframeSandbox += ' allow-same-origin';
      },
    },
    {
      name: 'frozen homepage response sandbox cannot widen',
      expectedErrors: [
        'manifest.externalHomepage.contentSecurityPolicy must remain "sandbox allow-scripts allow-popups"',
      ],
      mutate(candidate) {
        candidate.externalHomepage.contentSecurityPolicy += ' allow-same-origin';
      },
    },
    {
      name: 'homepage consumer budget cannot grow',
      expectedErrors: ['manifest.externalHomepage.references[2] is outside the closed compatibility budget'],
      mutate(candidate) {
        candidate.externalHomepage.references.push({ source: 'src/app/new-homepage-consumer.ts', kind: 'iframe-src' });
      },
    },
    {
      name: 'façade budget cannot grow',
      expectedErrors: ['manifest.compatibility.facades[4] is outside the closed compatibility budget'],
      mutate(candidate) {
        candidate.compatibility.facades.push({
          route: '/legacy-new',
          owner: 'src/app/legacy-new/page.tsx',
          kind: 'redirect',
          target: '/',
          targetOwner: 'src/app/(site)/page.tsx',
        });
      },
    },
    {
      name: 'ambient declaration budget cannot grow',
      expectedErrors: ['manifest.compatibility.ambientDeclarations[1] is outside the closed compatibility budget'],
      mutate(candidate) {
        candidate.compatibility.ambientDeclarations.push({
          module: '@cc4pm/homepage/extra',
          owner: 'types/cc4pm-homepage-extra.d.ts',
        });
      },
    },
    {
      name: 'token definition budget cannot grow',
      expectedErrors: ['manifest.compatibility.tokenDefinitions[11] is outside the closed compatibility budget'],
      mutate(candidate) {
        candidate.compatibility.tokenDefinitions.push({
          owner: 'src/app/globals.css',
          name: '--color-practices-new',
          value: '#000000',
        });
      },
    },
    {
      name: 'token alias budget cannot grow',
      expectedErrors: ['manifest.compatibility.tokenAliases[10] is outside the closed compatibility budget'],
      mutate(candidate) {
        candidate.compatibility.tokenAliases.push({
          owner: 'src/app/globals.css',
          alias: '--bp-new',
          target: '--color-practices-accent',
        });
      },
    },
    {
      name: 'Tailwind mapping budget cannot grow',
      expectedErrors: ['manifest.compatibility.tailwindMappings[3] is outside the closed compatibility budget'],
      mutate(candidate) {
        candidate.compatibility.tailwindMappings.push({
          owner: 'tailwind.config.ts',
          name: 'practices-new',
          cssVariable: '--color-practices-accent',
        });
      },
    },
    {
      name: 'design-token budget entries cannot be replaced',
      expectedErrors: ['manifest.compatibility.designTokenEntries[0] is outside the closed compatibility budget'],
      mutate(candidate) {
        const entry = requiredFixtureValue(
          candidate.compatibility.designTokenEntries[0],
          'first mutable design-token compatibility entry',
        );
        entry.usage = 'expanded compatibility use';
      },
    },
    {
      name: 'API exception budget cannot grow',
      expectedErrors: ['manifest.apiToMainExceptions[1] is outside the closed compatibility budget'],
      mutate(candidate) {
        candidate.apiToMainExceptions.push({
          source: 'src/app/api/new/route.ts',
          specifier: '@/app/(tools)/new/_lib/request',
          target: 'src/app/(tools)/new/_lib/request.ts',
        });
      },
    },
    {
      name: 'non-normalized API specifier is rejected',
      expectedErrors: [
        'manifest.apiToMainExceptions[0] is outside the closed compatibility budget',
        'manifest.apiToMainExceptions[0].specifier must be an exact normalized module specifier',
      ],
      mutate(candidate) {
        const exception = requiredFixtureValue(candidate.apiToMainExceptions[0], 'first mutable API-to-route exception');
        exception.specifier = '@/app/(tools)/playground/../playground/_lib/playgroundRequest';
      },
    },
  ];

  let passed = 0;
  try {
    for (const manifestCase of manifestCases) {
      const candidate = JSON.parse(JSON.stringify(manifest));
      manifestCase.mutate(candidate);
      const manifestErrors = validateManifest(candidate);
      const expectedErrors = [...manifestCase.expectedErrors].sort(compareText);
      if (manifestErrors.length !== expectedErrors.length || manifestErrors.join('\0') !== expectedErrors.join('\0')) {
        logError(`[SELFTEST] ${manifestCase.name}: expected exact manifest errors`);
        for (const error of manifestErrors) {
          logError(`[ARCH003] ${error}`);
        }
        return 1;
      }
      passed += 1;
    }

    for (const [index, testCase] of cases.entries()) {
      const caseRoot = join(suiteRoot, String(index + 1));
      const caseManifest = JSON.parse(JSON.stringify(manifest));
      const files = baseFixtureFiles(manifest);
      testCase.mutateManifest?.(caseManifest);
      testCase.mutate?.(files);
      await writeFixture(caseRoot, files);
      await testCase.afterWrite?.(caseRoot, files);
      const findings = await validateRepository(caseRoot, caseManifest);
      const expectedMessages = testCase.expectedMessages ?? [];
      const expectedFindingCount = testCase.expectedFindingCount ?? (testCase.expectedCodes.length === 0 ? 0 : 1);
      const messagesMatch = expectedMessages.every(expected =>
        findings.some(finding => finding.message.includes(expected)),
      );

      if (!sameCodes(findings, testCase.expectedCodes) || findings.length !== expectedFindingCount || !messagesMatch) {
        logError(
          `[SELFTEST] ${testCase.name}: expected ${testCase.expectedCodes.join(', ') || 'no findings'} ` +
            `(${expectedFindingCount} findings)`,
        );
        for (const finding of findings) {
          logError(`[${finding.code}] ${finding.message}`);
        }
        return 1;
      }
      passed += 1;
    }
  } finally {
    await rm(suiteRoot, { recursive: true, force: true });
  }

  log(`architecture self-test passed (${passed} cases)`);
  return 0;
}

/** @returns {Promise<ArchitectureManifest>} */
async function readManifest() {
  return JSON.parse(await readFile(manifestPath, 'utf8'));
}

/** @returns {Promise<number>} */
async function main() {
  const argumentsList = process.argv.slice(2);
  if (argumentsList.length > 1 || (argumentsList.length === 1 && argumentsList[0] !== '--self-test')) {
    logError('[ARCH003] usage: node scripts/validate-architecture.mjs [--self-test]');
    return 1;
  }

  const manifest = await readManifest();
  const manifestErrors = validateManifest(manifest);
  if (manifestErrors.length > 0) {
    for (const error of manifestErrors) {
      logError(`[ARCH003] architecture/compatibility-manifest.json: ${error}`);
    }
    return 1;
  }

  if (argumentsList[0] === '--self-test') {
    return runSelfTest();
  }

  const findings = await validateRepository(repositoryRoot, manifest);
  if (findings.length > 0) {
    for (const finding of findings) {
      logError(`[${finding.code}] ${finding.message}`);
    }
    logError(`architecture check failed (${findings.length} findings)`);
    return 1;
  }

  log('architecture check passed');
  return 0;
}

try {
  process.exitCode = await main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  logError(`[ARCH003] architecture validator could not run: ${message}`);
  process.exitCode = 1;
}
