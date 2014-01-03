package com.appspot.badukpan.scopeTest.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
 

public class ScopeTestController extends AbstractController {
	protected final Log logger = LogFactory.getLog(getClass());
    @Override
	protected ModelAndView handleRequestInternal(HttpServletRequest request, HttpServletResponse response)
                                                                             			throws Exception {
        System.out.println("ScopeTestController");
        request.setAttribute("view", "scopeTest"); 
        return new ModelAndView("test/scopeTest");
    } 
}
