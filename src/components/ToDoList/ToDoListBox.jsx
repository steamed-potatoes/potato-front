import React from 'react';
import styled from 'styled-components';
import ToDoListItem from './ToDoListItem';

export const ToDoListBox = ({todos,onRemove}) => {
	return (
		<ListBox>
			{todos.map((todo)=>(
				<ToDoListItem todo={todo} key={todo.id} onRemove={onRemove} />
			))}
		</ListBox>
	);
};

const ListBox = styled.div`
	display: flex;
	flex-direction: column;
`;
