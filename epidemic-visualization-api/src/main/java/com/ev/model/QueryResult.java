package com.ev.model;

import lombok.Data;
import lombok.ToString;

import java.util.List;

/**
 * Created by fucheng on 2020/2/14.
 */
@Data
@ToString
public class QueryResult<T> {
    //数据列表
    private List<T> list;
    //数据总数
    private long total;
}
