import { useMutation } from 'react-query';
import { useTypedSelector } from './../../../store/hooks/useTypedSelector';
import { useState } from 'react';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { CardState, initialState } from './../types/Profile';
import * as api from '../api/card.api';

const useProfile = () => {
	const [card, setCard] = useState<CardState>(initialState);

	const token = useTypedSelector(state => state.auth.token);

	const { isLoading: loading, isError: error } = useQuery(
		['card', token],
		() => api.fetchGetCardInformation(token || ''),
		{
			onSuccess: ({ data }) => setCard(data),
		}
	);

	const {
		mutate,
		isLoading: updating,
		isError: saveError,
	} = useMutation(() => api.fetchSaveCardInformation(card, token || ''));

	const handleChangeCard = useCallback((name: string, value: string) => {
		setCard(prev => ({ ...prev, [name]: value }));
	}, []);

	const handleSaveCard = useCallback(() => {
		mutate();
	}, [mutate]);

	return {
		card,
		handleChangeCard,
		loading,
		error,
		updating,
		saveError,
		handleSaveCard
	};
};

export default useProfile;
