import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
    const dispatch=useDispatch()
    const handleFilterValue=(e)=>{
        dispatch(setFilterValue(e.currentTarget.value))
    }

    return (<div className={css.filter_container}>
        <div><h3>Filter</h3>
        <input type="text" name="filter" onChange={handleFilterValue} />
        </div></div>)
}

export default Filter;