package com.appspot.badukpan.common.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
 

public class CommonController extends AbstractController {
	protected final Log logger = LogFactory.getLog(getClass());
    @Override
	protected ModelAndView handleRequestInternal(HttpServletRequest request, HttpServletResponse response)
                                                                             			throws Exception {
        logger.info("index.do 예제 정상동작");
        System.out.println("CommonController");
		request.setAttribute("view", "index");
        return new ModelAndView("index" );
    } 
}
