package com.appspot.badukpan.review.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
 

public class ReviewController extends AbstractController {
	protected final Log logger = LogFactory.getLog(getClass());
    @Override
	protected ModelAndView handleRequestInternal(HttpServletRequest request, HttpServletResponse response)
                                                                             			throws Exception {
        System.out.println("ReviewController");
		request.setAttribute("view", "review");
        return new ModelAndView("review");
    } 
}
