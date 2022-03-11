export default function logger(reducer) {
  return (prevstate, action, args) => {
    console.group(action)
    console.log('Prev State', prevstate)
    console.log('action arguments', args)

    const nextState = reducer(prevstate, action, args)
    console.log('Next State', nextState)
    return nextState
  }
}
