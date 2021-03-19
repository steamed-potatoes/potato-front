import React from 'react';
import styled from 'styled-components';
import {ShowTextBox,InputBox} from 'components/Blackboard'
import { useSelector,useDispatch } from 'react-redux';
import {changeText} from'libs/store/modules/blackboard'

// 이 컴포넌트가 containner 컴포넌트임
const Blackboard = () => {
	const text = useSelector(state=>state.blackboard.text)
	const dispatch = useDispatch();
	const onChangeText = (e) => {
		dispatch(changeText(e.target.value))
	}

	return (
		<BlackboardWrap>
			<Title>디지털 칠판</Title>
			<ShowTextBox text={text} />
			<InputBox handleChange={onChangeText} />
		</BlackboardWrap>
	);
};

const BlackboardWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction : column;
`;
const Title = styled.p`
	font-size : 64px;
`;

export default Blackboard;