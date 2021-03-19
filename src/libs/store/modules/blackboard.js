// 칠판 모듈 작성

// 1. 액션 타입 만들기
const CHANGE_TEXT = 'blackboard/CHANGE_TEXT';

// 2. 액션 생성 함수 만들기
export const changeText = (text) =>({
    type:CHANGE_TEXT,text
})

// 3. 초기값 설정
const initialState = {
    text : '연습'
}
// 4. 리듀서 생성
export default function blackboard(state=initialState,action){
    switch(action.type){
        case CHANGE_TEXT : 
            return({
                text: action.text
            })
        default : 
            return state;
    }
}