package com.ev.controller;


import com.ev.model.QueryResponseResult;
import com.ev.service.HospitalInfoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


/**
 * Created by fucheng on 2020/2/14.
 */
@Api(value="医院信息管理接口",description = "医院信息操作")
@RestController
@RequestMapping("/api")
public class HostpitalInfoController  {
    @Autowired
    HospitalInfoService pageService;


    @ApiOperation("获取所有医院信息的列表")
//    @ApiImplicitParams({
//            @ApiImplicitParam(name="id",value = "唯一值",required=true,paramType="path",dataType="int"),
//            @ApiImplicitParam(name="name",value = "名字",required=true,paramType="path",dataType="int")
//    })
    @RequestMapping(value="/hospital/info/list",method = RequestMethod.GET)
    public QueryResponseResult findHospitalList() {

        return pageService.findHospitalList();

    }
}
