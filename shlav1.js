console.clear()

const {createStore}  = Redux;

const initState = { 
  customers:[],
  posts:[],
  last_action:"initialize",
  counter : 0
}

function myReducer(state = initState, action) {
  console.log('reducer func executed...')
  console.log('==== incoming state')
  console.log(state)
  console.log(action)
  if (action.type =='ADD')
  {
    result_state = {
      customers:[...state.customers, action],
      posts:[],
      counter:state.counter+1,
      last_action:"new customer added",
    }
  }
  else {
     result_state = {
      customers:[],
      posts:[],
      counter:state.counter+1
    }    
  }
    
  console.log('==== output state')
  console.log(result_state)  
  return result_state
}

const store = createStore(myReducer)

store.subscribe(() => {
  // when last action was delete then console.error('delete')
  console.log('========= store got dispatched...')
  console.log(store.getState())
  console.log(`what happend? ${store.getState().last_action}`)
})

store.dispatch({ type : 'ADD', id : 1, name : 'itay' }) // id not exist
// remove
// update

//createStore()

console.log('success')
