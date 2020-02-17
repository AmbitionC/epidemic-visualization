package com.ev.dao;


import com.ev.domain.HospitalInfoDAO;
import org.springframework.data.mongodb.repository.MongoRepository;


/**
 * Created by fucheng on 2020/2/14.
 */
public interface HospitalInfoRepository extends MongoRepository<HospitalInfoDAO,String> {
}
