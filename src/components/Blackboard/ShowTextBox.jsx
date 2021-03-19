import React from 'react';
import styled from 'styled-components';

export const ShowTextBox = ({text}) => {
	return (
		<Box>
			<TextBox>{text}</TextBox>
		</Box>
	);
};

const Box = styled.div`
	display : flex;
	justify-content: center;
	align-items: center;
	background: green;
	width: 800px;
	height: 400px;
`;
const TextBox = styled.div`
	color: white;
`;