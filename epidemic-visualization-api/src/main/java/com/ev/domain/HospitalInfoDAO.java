package com.ev.domain;

import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by fucheng on 2020/2/14.
 */
@Data
@ToString
@Document(collection = "hospital_info")
public class HospitalInfoDAO {

    @Id
    private String id;

    //医院等级 1-10个等级
    //三级特等 10
    //三级甲等 9
    //三级乙等 8
    //三级丙等 7
    //二级甲等 6
    //二级乙等 5
    //二级丙等 4
    //一级甲等 3
    //一级乙等 2
    //一级丙等 1
    private String rank;

    //电话
    private String phoneNumber;

    //地址
    private String address;

    //坐标
    private String coordinate;

    //医院名称
    private String hospitalName;

    //医院备注
    private  String info;


}
