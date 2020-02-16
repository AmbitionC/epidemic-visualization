package com.ev.dao;


import com.ev.domain.HospitalInfoDAO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.Optional;

@SpringBootTest
@RunWith(SpringRunner.class)
public class HospitalInfoRepositoryTest {

    @Autowired
    HospitalInfoRepository hospitalInfoRepository;

    @Test
    public void testFindAll(){
        List<HospitalInfoDAO> all = hospitalInfoRepository.findAll();
        System.out.println(all);

    }

    //分页查询
    @Test
    public void testFindPage(){
        //分页参数
        int page = 1;//从0开始
        int size = 10;
        Pageable pageable = PageRequest.of(page,size);
        Page<HospitalInfoDAO> all = hospitalInfoRepository.findAll(pageable);
        System.out.println(all);
    }


    //修改
    @Test
    public void testUpdate() {
        //查询对象
        Optional<HospitalInfoDAO> optional = hospitalInfoRepository.findById("5b4b1d8bf73c6623b03f8cec");
        if(optional.isPresent()){
            HospitalInfoDAO hospitalInfo = optional.get();
            //设置要修改值
            hospitalInfo.setAddress("test01");
            //...
            //修改
            HospitalInfoDAO save = hospitalInfoRepository.save(hospitalInfo);
            System.out.println(save);
        }

    }
}
