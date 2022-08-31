function reducer(state,action){
   switch (action.type) {
    case 'add':
      return {count:state.count+1}
    case 'jian':
      return {count:state.count-1}
    default:
      return {...state}
   }
}
function useReducer(reducer,initState){
 const [state,setState]=useState(initState);
 const dispatch=(action)=>{
     let newstate= reducer(state,action)
     console.log('newstate',newstate);
     setState(newstate)
 }
 return [state,dispatch]
}

function App(){
  const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <div> 
      {state.count}
      <button onClick={()=>dispatch({type:'add'})}>+1</button>
      <button onClick={()=>dispatch({type:'jian'})}>-1</button>
    </div>
  )
}
