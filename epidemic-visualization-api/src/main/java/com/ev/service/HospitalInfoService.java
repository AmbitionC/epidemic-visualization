package com.ev.service;


import com.ev.dao.HospitalInfoRepository;
import com.ev.domain.HospitalInfo;
import com.ev.model.CommonCode;
import com.ev.model.QueryResponseResult;
import com.ev.model.QueryResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by fucheng on 2020/2/14.
 */
@Service
public class HospitalInfoService {

    @Autowired
    HospitalInfoRepository hospitalInfoRepository;


    /**
     * 查询所有医院信息
     */
    public QueryResponseResult findHospitalList(){

        List<HospitalInfo> all = hospitalInfoRepository.findAll();
        QueryResult queryResult = new QueryResult();
        queryResult.setList(all);//数据列表
        queryResult.setTotal(all.size());//数据总记录数
        QueryResponseResult queryResponseResult = new QueryResponseResult(CommonCode.SUCCESS,queryResult);
        return queryResponseResult;
    }

}
