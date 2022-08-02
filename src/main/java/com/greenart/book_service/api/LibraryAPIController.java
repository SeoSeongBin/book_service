package com.greenart.book_service.api;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.greenart.book_service.mapper.LibraryMapper;

@RestController
@RequestMapping("/api/library")
public class LibraryAPIController {
    @Autowired LibraryMapper li_mapper;
    @GetMapping("/library_list")
    public Map<String, Object> getLibraryList(@RequestParam @Nullable String keyword, @RequestParam @Nullable Integer page) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        if(page==null) page = 1;
        // m.put("keyword", keyword);
        // m.put("page", page);
        m.put("list", li_mapper.selectLibraryList(keyword, (page-1)*6));
        m.put("pageCnt", li_mapper.selectLibraryPageCnt(keyword));
        m.put("satus", true);
        m.put("message", "연결됨");
        
        return m;
    }
}
