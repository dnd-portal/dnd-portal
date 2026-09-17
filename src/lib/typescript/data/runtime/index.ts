import { runtimeChildren, runtimeLinks, type RuntimeLinkMetadata } from './generated';

export type { RuntimeLinkMetadata } from './generated';

export function getRuntimeData(path: string): RuntimeLinkMetadata {
	const value = runtimeLinks[path];

	if (!value) {
		throw new Error(`Runtime metadata path "${path}" does not exist.`);
	}

	return value;
}

export function getRuntimeChildren(path: string): readonly string[] {
	return runtimeChildren[path] ?? [];
}

export { runtimeLinks } from './generated';
