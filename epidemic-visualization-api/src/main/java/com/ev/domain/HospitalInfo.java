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
public class HospitalInfo {

    @Id
    private String id;

    //医院等级
    private String rank;

    //电话
    private String phoneNumber;

    //地址
    private String address;

    //坐标
    private String coordinate;

    //医院名称
    private String hospitalName;


}
