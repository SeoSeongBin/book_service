package com.greenart.book_service.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.greenart.book_service.data.CommentInfoVO;
import com.greenart.book_service.data.CommentLikeVO;
import com.greenart.book_service.data.CommentReportVO;

@Mapper
public interface CommentMapper {
    public List<CommentInfoVO> selectCommentList(Integer offset, Integer seq, Integer ui_seq);
    public Integer selectCommentBySeq(Integer seq);
    public void insertComment(CommentInfoVO data);
    public CommentInfoVO selectCommentReportInfo(Integer seq);
    public void insertReport(CommentReportVO data);
    public void deleteComment(Integer seq);
    public void updateComment(CommentInfoVO data);
    public void insertCommentLike(CommentLikeVO data);
    public void updateCommentLike(CommentLikeVO data);
    public List<CommentInfoVO> selectCommentBest(Integer seq);
}
