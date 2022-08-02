package com.greenart.book_service.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.greenart.book_service.data.UserInfoVO;

@Mapper
public interface UserMapper {
    public void insetUserInfo(UserInfoVO data);
    public UserInfoVO loginUser(UserInfoVO data);
    public UserInfoVO selectUserInfo(Integer seq);
    public void updateUserInfo(UserInfoVO data);
}
