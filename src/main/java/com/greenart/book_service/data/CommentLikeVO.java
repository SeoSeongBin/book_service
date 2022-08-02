package com.greenart.book_service.data;

import lombok.Data;

@Data
public class CommentLikeVO {
    private Integer cl_seq;
    private Integer cl_ui_seq;
    private Integer cl_cmi_seq;
    private Integer cl_status;
}
