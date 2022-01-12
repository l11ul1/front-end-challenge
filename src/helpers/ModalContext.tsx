import React, { createContext, useState } from "react";
import Card from "../screens/Main_Screen/Types/Card";

type ModalContextType = {
	isShown: boolean;
	card: Card;
	setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
	setCard: React.Dispatch<React.SetStateAction<Card>>;
};

export const ModalContext = createContext({} as ModalContextType);

export const ModalContextProvider: React.FC = ({ children }) => {
	const [isShown, setIsShown] = useState<boolean>(false);
	const [card, setCard] = useState<Card>({} as Card);

	return (
		<ModalContext.Provider value={{ isShown, setIsShown, card, setCard }}>
			{children}
		</ModalContext.Provider>
	);
};
