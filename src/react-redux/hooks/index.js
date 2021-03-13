import { useContext } from 'react'
import store from '/redux/store'
import AppContext from '/react-redux/context'

export const useDispatch = () => {
    
    return store.dispatch
}

export const useSelector = (callBack=()=>{}) => {
    const state = useContext(AppContext)
    return callBack(state)
}