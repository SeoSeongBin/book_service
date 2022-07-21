package com.greenart.book_service.data.request;


import com.greenart.book_service.data.BookImgVO;
import com.greenart.book_service.data.BookInfoVO;
import com.greenart.book_service.data.SummaryInfoVO;

import lombok.Data;


@Data
public class BookAddRequest {
    private BookInfoVO book_info;
    private BookImgVO book_img;
    private SummaryInfoVO book_summary;
}
