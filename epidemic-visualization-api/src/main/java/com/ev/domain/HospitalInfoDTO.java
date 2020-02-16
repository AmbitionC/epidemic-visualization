package com.ev.domain;

import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;

/**
 * Created by fucheng on 2020/2/14.
 */
@Data
@ToString
public class HospitalInfoDTO {

    //id
    private String id;

    //医院等级
    private String grade;

    //电话
    private String phoneNumber;

    //地址
    private String address;

    //经度
    private String longitude;

    //纬度
    private String latitude;

    //医院名称
    private String hospitalName;

    //备注信息
    private String info;


}
