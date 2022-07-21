package com.greenart.book_service.api;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class BookAPIController {
    @GetMapping("/book")
    public Map<String, Object> getBookInfo(@RequestParam @Nullable Integer page, @RequestParam @Nullable String keyword) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();

        
        // m.put(key, value)
        
        return m;
    }
}
