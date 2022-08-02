package com.greenart.book_service.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.greenart.book_service.data.BookInfoVO;
import com.greenart.book_service.data.BookLikeVO;
import com.greenart.book_service.data.CategoryInfoVO;

@Mapper
public interface BookMapper {
    public List<BookInfoVO> selectBookInfo(Integer offset, String keyword);
    public Integer getBookInfo(String keyword);
    public BookInfoVO getBookDetail(Integer seq);
    public void insertBookLike(BookLikeVO data);
    public void updateBookLike(BookLikeVO data);
    public List<BookLikeVO> selectBookLikeInfo(Integer seq);
    public List<BookInfoVO> selectBookBest(Integer seq);
    public List<CategoryInfoVO> selectCateInfo();
}
