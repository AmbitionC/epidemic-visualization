import React, { useEffect,useState, cloneElement, useContext, useReducer,useImperativeHandle } from 'react';
import { Input } from 'antd';
import { render } from '@testing-library/react';
import {CountContext} from 'containers/App';
import { AutoComplete } from 'antd';
import {options} from 'global/variable';

const SearchBox = () =>{

  // const { Search } = Input;

  const [val, setVal] = useState("123");
  const {count,setCount} = useContext(CountContext);

  return(
    <div style={{height:'48px'}}>
      {/* <Search
        placeholder="input search text"
        onSearch={value => setCount(value)}
        style={{ width:'200px'}}
      >
      </Search> */}
      <AutoComplete
        style={{ width: 200 }}
        dataSource={options}
        // onSearch={()=>console.log("aaa")}
        onSelect={(value,option)=>{
          setCount(value)
        }}
        placeholder="try to type `b`"
        filterOption={(inputValue, option) =>
          option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </div>
    // <div>{val}</div>
  );
}
export default SearchBox;
