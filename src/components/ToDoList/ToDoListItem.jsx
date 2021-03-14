import React from 'react';
import styled from 'styled-components';

const ToDoListItem = ({ todo,onRemove }) => {
	const { text,id } = todo;
	
	return (
		<ListItem>
			<CloseBar><CloseBtn onClick={()=>onRemove(id)}>X</CloseBtn></CloseBar>
			<ItemBox>{text}</ItemBox>
		</ListItem>
	);
};
const ListItem = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 32px;
	width : 864px;
	border : 1px solid black;
`;
const CloseBar = styled.div`
	background: yellow;
	text-align:right;
	
`;
const CloseBtn = styled.button`
	color: red;
	cursor:pointer;
	background: none;
	border: none;
`;
const ItemBox = styled.div`
	border-top : 1px solid black;
	height : 64px;
	font-weight: bold;
	display: flex;
	justify-content:center;
	align-items:center;
`;
export default ToDoListItem;