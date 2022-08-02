package com.greenart.book_service.api;

import java.nio.channels.SeekableByteChannel;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.greenart.book_service.data.CommentInfoVO;
import com.greenart.book_service.data.CommentLikeVO;
import com.greenart.book_service.data.CommentReportVO;
import com.greenart.book_service.mapper.CommentMapper;

@RestController
@RequestMapping("/api/comment")
public class CommentAPIController {
    @Autowired CommentMapper comment_mapper;
    @GetMapping("/comment_list")
    public Map<String, Object> getCommentList(@RequestParam Integer seq, @RequestParam Integer page, @RequestParam @Nullable Integer ui_seq) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        if(page == null) page = 1;
        m.put("list", comment_mapper.selectCommentList((page-1)*10, seq, ui_seq));
        m.put("pageCnt", comment_mapper.selectCommentBySeq(seq));
        m.put("satatus", true);
        return m;
    }

    @PutMapping("/comment_add")
    public Map<String, Object> putComment(@RequestBody CommentInfoVO data) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        
        comment_mapper.insertComment(data);
        m.put("status", true);
        m.put("message", "등록되었습니다.");

        return m;
    }

    @GetMapping("/report_info")
    public Map<String, Object> getCommentReportInfo(@RequestParam Integer seq) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();

        // comment_mapper.selectCommentReportInfo(cmi_seq);
        m.put("ComInfo", comment_mapper.selectCommentReportInfo(seq));

        return m;
    }

    @PutMapping("/report")
    public Map<String, Object> putCommentReport(@RequestBody CommentReportVO data) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();

        comment_mapper.insertReport(data);
        m.put("status", true);
        m.put("msg", "신고하였습니다.");

        return m;
    }

    @DeleteMapping("/delete")
    public Map<String, Object> deleteComment(@RequestParam Integer seq) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
    
        comment_mapper.deleteComment(seq);
        m.put("status", true);
        m.put("msg", "삭제되었습니다.");

        return m;
    }

    @PatchMapping("/update")
    public Map<String, Object> patchComment(@RequestBody CommentInfoVO data) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        comment_mapper.updateComment(data);
        m.put("status", true);
        m.put("msg", "수정되었습니다.");
        return m;
    }

    @PutMapping("/like")
    public Map<String, Object> putCommentLike(@RequestBody CommentLikeVO data) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        
        comment_mapper.insertCommentLike(data);
        m.put("status", true);

        return m;
    }

    @PatchMapping("/like/update")
    public Map<String, Object> patchCommentLike(@RequestBody CommentLikeVO data) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        comment_mapper.updateCommentLike(data);
        m.put("status", true);
        return m;
    }

    @GetMapping("/best")
    public Map<String, Object> getMapping(@RequestParam Integer seq) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        m.put("list", comment_mapper.selectCommentBest(seq));
        m.put("status", true);
        return m;
    }
}
