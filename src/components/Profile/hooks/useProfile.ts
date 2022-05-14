import { useState } from 'react';
import { useCallback } from 'react';
import { CardState, initialState } from './../types/Profile';


const useProfile = () => {

  const [card, setCard] = useState<CardState>(initialState);

  const handleChangeCard = useCallback((name: string, value: string) => {
    setCard((prev) => ({ ...prev, [name]: value }));
  }, []);

  return {
    card,
    handleChangeCard
  }
}

export default useProfile;