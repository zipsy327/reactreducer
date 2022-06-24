import React from 'react';

const Student = ({name,dispatch,id,isHere}) => {
    return (
        <div>
            <div className='form-inline' style={{marginBottom:'5px'}}>
                <span style={{
                    textDecoration:isHere?'line-through':'none',cursor:'pointer',
                    color:isHere?'gray':'black',width:'100px',display:'inline-block'
                }}
                onClick={()=>{
                    dispatch({type:'mark-student',payload:{id}})
                }}>{name}</span>

                <button type='button' className='btn btn-danger btn-xs'
                style={{marginLeft:'10px'}}
                onClick={()=>{
                    dispatch({type:'delete-student',payload:{id}})
                }}>삭제</button>                
            </div>            
        </div>
    );
};

export default Student;