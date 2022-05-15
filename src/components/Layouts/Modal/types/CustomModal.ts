export type ModalProps = {
	open: boolean;
	styles?: any | undefined;
	close: (bool: boolean) => void;
	children?: any | undefined;
	title?: string | undefined;
	actions?: any;
	loading?: boolean;
	updating?: boolean;
}