import React from 'react';
import { Input } from 'antd';



function SearchBox(){
  const { Search } = Input;
  return(
    <div style={{height:'48px'}}>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width:'200px'}}
      />
    </div>
  )
}
export default SearchBox;
