package com.appspot.badukpan.d3Test2.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
 

public class D3Test2Controller extends AbstractController {
	protected final Log logger = LogFactory.getLog(getClass());
    @Override
	protected ModelAndView handleRequestInternal(HttpServletRequest request, HttpServletResponse response)
                                                                             			throws Exception {
        System.out.println("D3Test2Controller");
        request.setAttribute("view", "d3Test2");
        return new ModelAndView("test/d3Test2");
    } 
}
