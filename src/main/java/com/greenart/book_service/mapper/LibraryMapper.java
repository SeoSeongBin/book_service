package com.greenart.book_service.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.greenart.book_service.data.LibraryInfoVO;

@Mapper
public interface LibraryMapper {
    public List<LibraryInfoVO> selectLibraryList(String keyword, Integer offset);
    public Integer selectLibraryPageCnt(String keyword);
}
