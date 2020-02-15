package com.ev.model;

import lombok.Data;
import lombok.ToString;

/**
 * Created by fucheng on 2020/2/14.
 */
@Data
@ToString
public class QueryResponseResult<T> extends ResponseResult {

    QueryResult<T> queryResult;

    public QueryResponseResult(ResultCode resultCode,QueryResult queryResult){
        super(resultCode);
        this.queryResult = queryResult;
    }

}

