package com.greenart.book_service.api;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.greenart.book_service.data.BookLikeVO;
import com.greenart.book_service.mapper.BookMapper;

@RestController
@RequestMapping("/api/book")
public class BookAPIController {
    @Autowired BookMapper book_mapper;
    @GetMapping("/book_list")
    public Map<String, Object> getBookInfo(@RequestParam @Nullable Integer page, @RequestParam @Nullable String keyword) {
        if(page == null) page=1;
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        // m.put("page", page);
        // m.put("keyword", keyword);
        m.put("list", book_mapper.selectBookInfo((page-1)*10, keyword));
        m.put("pageCnt", book_mapper.getBookInfo(keyword));
        m.put("status", true);
        m.put("message", "연결됨");
        
        return m;
    }

    @GetMapping("/book_detail")
    public Map<String, Object> getBookdetailPage(@RequestParam Integer seq) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        m.put("pageInfo", book_mapper.getBookDetail(seq));
        return m;
    }

    @PutMapping("/book_like")
    public Map<String, Object> putBookLike(@RequestBody BookLikeVO data) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        book_mapper.insertBookLike(data);
        m.put("satatus", true);
        return m;
    }

    @PatchMapping("/book_like/update")
    public Map<String, Object> patchBookLike(@RequestBody BookLikeVO data) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        book_mapper.updateBookLike(data);
        m.put("status", true);
        return m;
    }

    @GetMapping("/book_detail/like_info")
    public Map<String, Object> getBookLikeInfo(@RequestParam @Nullable Integer seq) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        m.put("likeList", book_mapper.selectBookLikeInfo(seq));
        m.put("status", true);
        return m;
    }

    @GetMapping("/mainList")
    public Map<String, Object> getBookBestList(@RequestParam @Nullable Integer seq) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        m.put("cateList", book_mapper.selectCateInfo());
        m.put("BookBestList", book_mapper.selectBookBest(seq));
        return m;
    }
}
