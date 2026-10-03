export interface PageAction {
	id: string;
	label: string;
	icon: string;
	ariaLabel?: string;
	onActivate: () => void;
}
