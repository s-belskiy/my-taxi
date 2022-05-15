import { CardState } from './../types/Profile';
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://loft-taxi.glitch.me/',
});

export const fetchGetCardInformation = async (token: string) => {
	return await api.get(`/card?token=${token}`);
};

export const fetchSaveCardInformation = async (data: CardState, token: string) => {
	const newData = { ...data, token };
	return await api.post(`/card`, newData);
};
