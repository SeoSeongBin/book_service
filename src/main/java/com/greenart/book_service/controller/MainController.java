package com.greenart.book_service.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.greenart.book_service.mapper.BookMapper;

@Controller
public class MainController {
    @Autowired BookMapper book_mapper;
    @GetMapping ("/")
    public String getIndex() {

        return "/index";
    }

    @GetMapping ("/login")
    public String getJoin() {

        return "/login";
    }

    @GetMapping ("/join")
    public String getLogin() {

        return "/join";
    }

    @GetMapping ("/library/library")
    public String getLibrary() {

        return "/library/library";
    }

    @GetMapping ("/book/book")
    public String getBook(Model model, @RequestParam @Nullable Integer page, @RequestParam @Nullable String keyword) {
        // if(page == null) page=1;
        // model.addAttribute("page", page);
        // model.addAttribute("keyword", keyword);
        // model.addAttribute("list", book_mapper.selectBookInfo((page-1)*10, keyword));
        return "/book/book";
    }

    @GetMapping ("/book/book_detail")
    public String getBookdetail(@RequestParam @Nullable Integer seq) {

        return "/book/book_detail";
    }

    @GetMapping("/logout")
    public String getAccountLogout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }

    @GetMapping("/mypage")
    public String getMypage() {
        
        return "/mypage/mypage";
    }

}
