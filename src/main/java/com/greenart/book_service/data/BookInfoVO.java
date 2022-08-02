package com.greenart.book_service.data;

import java.util.Date;

import lombok.Data;

@Data
public class BookInfoVO {
    private Integer bi_seq;
    private Integer bi_li_seq;
    private Integer bi_ci_seq;
    private String bi_name;
    private String bi_author;
    private String bi_publisher;
    private Date bi_publication_dt;
    private String bi_publication_str;
    
    private Integer bi_status;
    private Date bi_reg_dt;

    private String bimg_file_name;
    private String ci_name;
    private String si_summary;
    private String li_name;

    private Integer book_like_cnt;
    private Integer blk_status;
    private Integer blk_ui_seq;
    private Integer blk_seq;
}
