package com.greenart.book_service.api;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.greenart.book_service.data.UserInfoVO;
import com.greenart.book_service.mapper.UserMapper;
import com.greenart.book_service.utils.AESAlgorithm;

@RestController
@RequestMapping("/api/user")
public class UserAPIController {
    @Autowired UserMapper user_mapper;
    @PutMapping("/join")
    public ResponseEntity<Map<String, Object>> putUserJoin(@RequestBody UserInfoVO data) throws Exception {
        Map<String, Object> m = new LinkedHashMap<String, Object>();

        String pwd = data.getUi_pwd();
        pwd = AESAlgorithm.Encrypt(pwd);
        data.setUi_pwd(pwd);
        System.out.println(data);
        try{
            user_mapper.insetUserInfo(data);
        }
        catch(DuplicateKeyException e) {
            m.put("status", false);
            m.put("message", data.getUi_id()+"은(는) 이미 등록된 아이디입니다.");
            return new ResponseEntity<Map<String, Object>>(m,HttpStatus.BAD_REQUEST);
        }
        System.out.println(data);
        m.put("status", true);
        m.put("message", "회원가입이 되었습니다.");
        return new ResponseEntity<Map<String, Object>>(m,HttpStatus.OK);
    }

    @PostMapping("/login")
    public Map<String, Object> postLoginUser(@RequestBody UserInfoVO data, HttpSession session) throws Exception {
        Map<String, Object> m = new LinkedHashMap<String, Object>();

        data.setUi_pwd(AESAlgorithm.Encrypt(data.getUi_pwd()));
        UserInfoVO user = user_mapper.loginUser(data);

        if(user == null) {
            m.put("status", false);
            m.put("message", "아이디 혹은 비밀번호 오류입니다.");
        } else {
            m.put("status", true);
            // resultMap.put("ip", ip);
            m.put("message", "로그인 성공");
            session.setAttribute("loginUser", user);
        }

        return m;
    }

    @GetMapping("/user_info")
    public Map<String, Object> getUserInfo(@RequestParam Integer seq) {
        Map<String, Object> m = new LinkedHashMap<String, Object>();
        m.put("userInfo", user_mapper.selectUserInfo(seq));
        return m;
    }

    @PatchMapping("/update")
    public ResponseEntity<Map<String, Object>> patchUserInfo(@RequestBody UserInfoVO data) throws Exception {
        Map<String, Object> m = new LinkedHashMap<String, Object>();

        if(data.getUi_pwd() == null || data.getUi_pwd().equals("")) {
            m.put("status", false);
            m.put("message", "비밀번호를 입력하지 않았음.");
            return new ResponseEntity<Map<String, Object>>(m,HttpStatus.BAD_REQUEST);
        }
        if(data.getUi_name() == null || data.getUi_name().equals("")) {
            m.put("status", false);
            m.put("message", "이름을 입력하지 않았음.");
            return new ResponseEntity<Map<String, Object>>(m,HttpStatus.BAD_REQUEST);
        }

        String pwd = data.getUi_pwd();
        pwd = AESAlgorithm.Encrypt(pwd);
        data.setUi_pwd(pwd);

        user_mapper.updateUserInfo(data);
        m.put("status", true);
        m.put("message", "수정완료되었습니다.");

        return new ResponseEntity<Map<String, Object>>(m,HttpStatus.OK);
    }
}
