package com.greenart.book_service.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
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
    public String getBook() {

        return "/book/book";
    }

    @GetMapping ("/book/book_detail")
    public String getBookdetail() {

        return "/book/book_detail";
    }

}
