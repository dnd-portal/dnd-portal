
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const ACSetupSvcPort: string;
	export const npm_lifecycle_event: string;
	export const npm_config_package: string;
	export const Path: string;
	export const INIT_CWD: string;
	export const ACSvcPort: string;
	export const NODE_ENV: string;
	export const ALLUSERSPROFILE: string;
	export const NVM_SYMLINK: string;
	export const npm_config_cache: string;
	export const CODEX_INTERNAL_ORIGINATOR_OVERRIDE: string;
	export const APPDATA: string;
	export const CODEX_CI: string;
	export const NODE: string;
	export const CODEX_APP_TOOLS_PIPE_PATH: string;
	export const LC_CTYPE: string;
	export const HOMEDRIVE: string;
	export const ProgramFiles: string;
	export const CODEX_MCP_NODE_PATH: string;
	export const npm_config_npm_version: string;
	export const CODEX_PERMISSION_PROFILE: string;
	export const npm_config_allow_scripts: string;
	export const CODEX_SAGE_BACKFILL_TRACKER_TAB_REUSE: string;
	export const npm_config_global_prefix: string;
	export const HOME: string;
	export const CODEX_SANDBOX_NETWORK_DISABLED: string;
	export const USERNAME: string;
	export const ComSpec: string;
	export const CODEX_SESSION_ID: string;
	export const npm_config_globalconfig: string;
	export const CODEX_THREAD_ID: string;
	export const COLOR: string;
	export const EDITOR: string;
	export const npm_config_local_prefix: string;
	export const CommonProgramW6432: string;
	export const COLORTERM: string;
	export const CommonProgramFiles: string;
	export const npm_config_userconfig: string;
	export const COMPUTERNAME: string;
	export const DriverData: string;
	export const GH_PAGER: string;
	export const LOGONSERVER: string;
	export const GIT_PAGER: string;
	export const HOMEPATH: string;
	export const OneDrive: string;
	export const LANG: string;
	export const LC_ALL: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const LOCALAPPDATA: string;
	export const LOG_FORMAT: string;
	export const npm_package_name: string;
	export const NODE_PATH: string;
	export const npm_execpath: string;
	export const npm_config_node_gyp: string;
	export const NODE_REPL_TRUSTED_BROWSER_CLIENT_SHA256S: string;
	export const npm_config_init_module: string;
	export const NVM_HOME: string;
	export const NO_COLOR: string;
	export const npm_command: string;
	export const npm_config_noproxy: string;
	export const npm_config_prefix: string;
	export const npm_config_user_agent: string;
	export const npm_config_yes: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const OS: string;
	export const PAGER: string;
	export const PATHEXT: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const PNPM_HOME: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const TERM: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const RlsSvcPort: string;
	export const RUST_LOG: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERPROFILE: string;
	export const VBOX_MSI_INSTALL_PATH: string;
	export const windir: string;
	export const _VOLTA_TOOL_RECURSION: string;
	export const SVELTEKIT_FORK: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		ACSetupSvcPort: string;
		npm_lifecycle_event: string;
		npm_config_package: string;
		Path: string;
		INIT_CWD: string;
		ACSvcPort: string;
		NODE_ENV: string;
		ALLUSERSPROFILE: string;
		NVM_SYMLINK: string;
		npm_config_cache: string;
		CODEX_INTERNAL_ORIGINATOR_OVERRIDE: string;
		APPDATA: string;
		CODEX_CI: string;
		NODE: string;
		CODEX_APP_TOOLS_PIPE_PATH: string;
		LC_CTYPE: string;
		HOMEDRIVE: string;
		ProgramFiles: string;
		CODEX_MCP_NODE_PATH: string;
		npm_config_npm_version: string;
		CODEX_PERMISSION_PROFILE: string;
		npm_config_allow_scripts: string;
		CODEX_SAGE_BACKFILL_TRACKER_TAB_REUSE: string;
		npm_config_global_prefix: string;
		HOME: string;
		CODEX_SANDBOX_NETWORK_DISABLED: string;
		USERNAME: string;
		ComSpec: string;
		CODEX_SESSION_ID: string;
		npm_config_globalconfig: string;
		CODEX_THREAD_ID: string;
		COLOR: string;
		EDITOR: string;
		npm_config_local_prefix: string;
		CommonProgramW6432: string;
		COLORTERM: string;
		CommonProgramFiles: string;
		npm_config_userconfig: string;
		COMPUTERNAME: string;
		DriverData: string;
		GH_PAGER: string;
		LOGONSERVER: string;
		GIT_PAGER: string;
		HOMEPATH: string;
		OneDrive: string;
		LANG: string;
		LC_ALL: string;
		NUMBER_OF_PROCESSORS: string;
		LOCALAPPDATA: string;
		LOG_FORMAT: string;
		npm_package_name: string;
		NODE_PATH: string;
		npm_execpath: string;
		npm_config_node_gyp: string;
		NODE_REPL_TRUSTED_BROWSER_CLIENT_SHA256S: string;
		npm_config_init_module: string;
		NVM_HOME: string;
		NO_COLOR: string;
		npm_command: string;
		npm_config_noproxy: string;
		npm_config_prefix: string;
		npm_config_user_agent: string;
		npm_config_yes: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_json: string;
		OS: string;
		PAGER: string;
		PATHEXT: string;
		pnpm_config_verify_deps_before_run: string;
		PNPM_HOME: string;
		PNPM_SCRIPT_SRC_DIR: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		TERM: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		RlsSvcPort: string;
		RUST_LOG: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERPROFILE: string;
		VBOX_MSI_INSTALL_PATH: string;
		windir: string;
		_VOLTA_TOOL_RECURSION: string;
		SVELTEKIT_FORK: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
