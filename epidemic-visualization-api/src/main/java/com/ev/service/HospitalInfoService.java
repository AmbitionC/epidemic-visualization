package com.ev.service;


import com.ev.dao.HospitalInfoRepository;
import com.ev.domain.HospitalInfoDAO;
import com.ev.domain.HospitalInfoDTO;
import com.ev.model.CommonCode;
import com.ev.model.QueryResponseResult;
import com.ev.model.QueryResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

        List<HospitalInfoDAO> daoList = hospitalInfoRepository.findAll();
        List<HospitalInfoDTO> dtoList  = new ArrayList<>();
        for(HospitalInfoDAO dao:daoList){
            HospitalInfoDTO temp = new HospitalInfoDTO();
            temp.setId(dao.getId());
            temp.setHospitalName(dao.getHospitalName());
            temp.setGrade(dao.getRank());
            temp.setInfo(dao.getInfo());
            temp.setAddress(dao.getAddress());
            temp.setPhoneNumber(dao.getPhoneNumber());
            String[] coordinate = dao.getCoordinate().split(",");
            temp.setLongitude(coordinate[0]);
            temp.setLatitude(coordinate[1]);
            dtoList.add(temp);
        }
        QueryResult queryResult = new QueryResult();
        queryResult.setList(dtoList);//数据列表
        queryResult.setTotal(dtoList.size());//数据总记录数
        QueryResponseResult queryResponseResult = new QueryResponseResult(CommonCode.SUCCESS,queryResult);
        return queryResponseResult;
    }

}
