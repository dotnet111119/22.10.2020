console.clear()

const {createStore} = Redux;

const initState = { 
  customers:[],
  posts:[],
  counter : 0
}

function myReducer(state = initState, action) {
  console.log('reducer func executed...')
  console.log('==== incoming state')
  console.log(state)
  console.log(action)
  //if (action.type =='ADD')
  result_state = {
    customers:[],
    posts:[],
    counter:state.counter+1
  }
  console.log('==== output state')
  console.log(result_state)  
  return result_state
  
}

const store = createStore(myReducer)
 
store.dispatch({ type : 'ADD', id : 1, name : 'itay' }) // id not exist
// remove
// update

//createStore()
console.log('success')
