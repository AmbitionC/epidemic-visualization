package com.ev.test;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.poi.ss.usermodel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileInputStream;

/**
 * Created by fucheng on 2020/2/15.
 */
public class excel2json {

    private final static Logger logger = LoggerFactory.getLogger(excel2json.class);

    private final static ObjectMapper mapper = new ObjectMapper();

    public static void main(String[] args) {
        try {
            FileInputStream inp = new FileInputStream("D:\\user\\code\\疫情可视化\\医院信息.xlsx");
            Workbook workbook = WorkbookFactory.create(inp);
            //获取sheet数
            int sheetNum = workbook.getNumberOfSheets();
            JSONObject jsonObject = new JSONObject();
            for (int s = 0; s < sheetNum; s++) {
                // Get the Sheet of s.
                Sheet sheet = workbook.getSheetAt(s);
                //获取最大行数
                int rownum = sheet.getPhysicalNumberOfRows();
                if (rownum <= 1) {
                    continue;
                }
                //获取第一行
                Row row1 = sheet.getRow(0);
                //获取最大列数
                int colnum = row1.getPhysicalNumberOfCells();
                JSONArray jsonArray = new JSONArray();
                for (int i = 1; i < rownum; i++) {
                    Row row = sheet.getRow(i);
                    if (row != null) {
//                    List<Object> list = new ArrayList<>();
                        JSONObject rowObj = new JSONObject();
                        //循环列
                        for (int j = 0; j < colnum; j++) {
                            Cell cellData = row.getCell(j);
                            if (cellData != null) {
                                //判断cell类型
                                switch (cellData.getCellType()) {
                                    case Cell.CELL_TYPE_NUMERIC: {
                                        rowObj.put(row1.getCell(j).getStringCellValue(), cellData.getNumericCellValue());
                                        break;
                                    }
                                    case Cell.CELL_TYPE_FORMULA: {
                                        //判断cell是否为日期格式
                                        if (DateUtil.isCellDateFormatted(cellData)) {
                                            //转换为日期格式YYYY-mm-dd
                                            rowObj.put(row1.getCell(j).getStringCellValue(), cellData.getDateCellValue());
                                        } else {
                                            //数字
                                            rowObj.put(row1.getCell(j).getStringCellValue(), cellData.getNumericCellValue());
                                        }
                                        break;
                                    }
                                    case Cell.CELL_TYPE_STRING: {
                                        rowObj.put(row1.getCell(j).getStringCellValue(), cellData.getStringCellValue());
                                        break;
                                    }
                                    default:
                                        rowObj.put(row1.getCell(j).getStringCellValue(), "");
                                }
                            } else {
                                rowObj.put(row1.getCell(j).getStringCellValue(), "");

                            }
                        }
                        jsonArray.add(rowObj);
                    }
                }
                logger.info(jsonArray.toJSONString());
                jsonObject.put(sheet.getSheetName(), jsonArray);
            }
            logger.info(jsonObject.toJSONString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
