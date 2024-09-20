import React from 'react'

const FilterTodo = ({changingview}) => {
    return (
        
             <div className="container mt-5" >
        <div className=" d-flex justify-content-between ">
          <h3 className=" d-sm-inline-flex">My Todos</h3>
          <div className="d-flex">
            <h3 className="me-2"> Status:</h3>
            <select onChange={changingview} className="btn btn-danger dropdown-toggle">
              <option value='All'>All</option>
              <option value='Not Completed'>Not Completed </option>
              <option value='Completed'>Completed</option>
            </select>
          </div>
        </div>
      </div>
        
    );
};


export default FilterTodo