import { CardState } from './Profile';

export type CardProps = {
	card: CardState;
	onChange: (name: string, value: string) => void;
	loading:boolean,
				error: boolean,
				updating: boolean,
				saveError: boolean,
				onSaveCard: (card: CardState, token: string) => void
};