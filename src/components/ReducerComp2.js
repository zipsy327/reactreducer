import React, { useReducer, useState } from 'react';
import Student from './Student';

const initialState={
    count:1,
    students:[
        {
            id:Date.now(),
            name:'Candy',
            isHere:false
        }
    ]
}

//reducer 설정-학교역할
const reducer=(state,action)=>{
    console.log(state,action);

    switch(action.type){
        case 'add-student':
            //dispatch에서 전달하는 name을 변수 name에저장
            const name=action.payload.name;
            //학생정보를 생성해서 배열에 추가
            const addStudent={
                id:Date.now(),
                name,
                isHere:false
            };
            return {
                count:state.count+1,
                students:[...state.students,addStudent]
            };
        
        case 'delete-student':
            return {
                count:state.count-1,
                students:state.students.filter(student=>student.id!==action.payload.id)
            };
        case 'mark-student':
            return {
                count:state.count,
                students:state.students.map(student=>{
                    if(student.id===action.payload.id){
                        return {...student,isHere:!student.isHere}
                    }
                    return student;
                })
            }
        default:
            return state;
            
    }

}

const ReducerComp2 = () => {
    const [name,setName]=useState('');
    const [studentInfo,dispatch]=useReducer(reducer,initialState);
    return (
        <div>
            <h3>Reducer 학교에 오신걸 환영합니다!!!!</h3>
            <h4>총 학생수 : {studentInfo.count}</h4>

            <div className='form-inline'>
                <input type={'text'} className="form-control"
                style={{width:'120px'}} placeholder="이름입력"
                defaultValue={name} onChange={(e)=>{
                    setName(e.target.value);
                }}/>

                <button type='button' className='btn btn-success btn-sm'
                style={{marginLeft:'10px'}}
                onClick={()=>{
                    dispatch({'type':'add-student',payload:{name}})
                }}>추가</button>

                <br/><br/>
                {
                    studentInfo.students.map(student=>{
                        return (
                            <Student name={student.name} key={student.id}
                            dispatch={dispatch} id={student.id} isHere={student.isHere}/>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default ReducerComp2;