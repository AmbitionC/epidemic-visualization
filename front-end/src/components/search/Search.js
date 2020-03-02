import React, { useContext } from 'react';
import {CountContext} from 'containers/Head';
import { AutoComplete, Icon, Button } from 'antd';
import { variableMap } from 'global/variable';
import { requestHospital } from 'global/url';

const SearchBox = () =>{
  const {pot,setPot} = useContext(CountContext);
  
  
  return(
    <div className="global-search-wrapper" style={{height:'48px',width:'200px',paddingTop:'8px',position:"relative"}}>
      <AutoComplete
        className="global-search"
        style={{ width: '100%',position:"absolute" }}
        dataSource={variableMap.hospitalName}
        onSelect={(value,option)=>{
          setPot(value)
        }}
        placeholder="请输入地点"
        defaultOpen={false}
        filterOption={(inputValue, option) => 
          option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
      <Button
        className="search-btn"
        style={{ position:"absolute",marginLeft:'200px'}}
        type="primary"
        onClick={() => {console.log(pot)}}
      >
        <Icon type="search" />
      </Button>
    </div>
    // <div>{val}</div>
  );
}
export default SearchBox;
