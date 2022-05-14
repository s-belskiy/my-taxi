import { CardState } from './Profile';

export type CardProps = {
	card: CardState;
	onChange: (name: string, value: string) => void;
};