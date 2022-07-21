package com.greenart.book_service.data;

import lombok.Data;

@Data
public class CategoryInfoVO {
    private Integer ci_seq;	
    private String ci_name;

    private Integer ci_count;
}
