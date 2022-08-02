package com.greenart.book_service.data;

import java.util.Date;

import lombok.Data;

@Data
public class CommentInfoVO {
    private Integer cmi_seq;
    private Integer cmi_ui_seq;
    private Integer cmi_bi_seq;
    private String cmi_summary;
    private Integer cmi_score;
    private Date cmi_reg_dt;
    private Date cmi_mod_dt;

    private String ui_id;
    private String ui_nickname;
    private Integer bi_seq;
    private Integer cl_status;
    private Integer cl_seq;
    private Integer cl_ui_seq;
    private Integer cl_cmi_seq;
    private Integer like_cnt;
}
