package com.hansen.mobileplan.ctrlr;
import java.util.Iterator;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hansen.mobileplan.dao.MobilePlanDao;
import com.hansen.mobileplan.model.MobilePlan;
import com.hansen.mobileplan.srvc.MobilePlanSrvc;

@RestController
@RequestMapping("/mp")
public class MobilePlanController {
	private Log logger = LogFactory.getLog(MobilePlanController.class);
	@Autowired
	MobilePlanSrvc mpSrvc;

	@Autowired
	MobilePlanDao mobilePlanDao;

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<String> create(@RequestBody MobilePlan inputentity) {
		logger.info("Inside add method");
		ResponseEntity<String> mpResponse;
		Object mobilePlan = mpSrvc.create(inputentity);
		if (mobilePlan != null) {
			mpResponse = new ResponseEntity<String>("MobilePlan Created", null, HttpStatus.CREATED);
			return mpResponse;
		} else {
			mpResponse = new ResponseEntity<String>("MobilePlan alraedy Present for this id", null, HttpStatus.NOT_ACCEPTABLE);
			return mpResponse;
		}
	}
	
	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> read(@PathVariable(value = "id") Long id) {
		logger.info("Inside search method");
		ResponseEntity<Object> mpResponse = null;
		
		Object mobilePlan= mpSrvc.read(id);
		if(mobilePlan!=null)
		{
			mpResponse = new ResponseEntity<Object>(mobilePlan, null, HttpStatus.CREATED);
			return mpResponse;
		}
		else
		{
			mpResponse = new ResponseEntity<Object>("ID not present", null, HttpStatus.NOT_FOUND);
			return mpResponse;
		}
	}
			
	

	@RequestMapping(method = RequestMethod.GET)
	
	public ResponseEntity<Object> readAll() {
        logger.info("Inside readAll method");
        ResponseEntity<Object> mpResponse = null;

       
        Iterable<MobilePlan> mobilePlanList=mpSrvc.readAll();
    
        
        Iterator<MobilePlan>itr=mobilePlanList.iterator();
        if(itr.hasNext()== true)
        {
            mpResponse = new ResponseEntity<Object>(mobilePlanList, null, HttpStatus.CREATED);
            
            return mpResponse;
        }
        else
        {
            mpResponse = new ResponseEntity<Object>("no plan", null, HttpStatus.NOT_FOUND);
            
            return mpResponse;
        }
        
    }

	

	@RequestMapping(method = RequestMethod.PATCH) // OR PUT
	public ResponseEntity<String> update(@RequestBody MobilePlan tobemerged) {
		logger.info("Inside update method");
		ResponseEntity<String> planResponse = null;
		
		//TODO Homework... write the code to update
		
		Object mobilePlanList = mpSrvc.update(tobemerged);
				
		if(mobilePlanList!= null) {
			planResponse = new ResponseEntity<String>(" Updated mobileplan list", null, HttpStatus.CREATED);
			
			return planResponse;
		}
		else {
			planResponse = new ResponseEntity<String>("id Not Present for update", null, HttpStatus.NOT_FOUND);
			
			return planResponse;
		}	
	}
		

	@RequestMapping(value = "{planid}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> delete(@PathVariable(value = "planid") Long planid) {
		logger.info("Inside delete method");
		ResponseEntity<Object> bookResponse = null;
		
		//TODO Homework... write the code to delete
		boolean mobilePlan = mpSrvc.delete(planid);
		if(mobilePlan) {
			bookResponse = new ResponseEntity<Object>("mobile plan deleted", null , HttpStatus.OK);
		}
		else{
			bookResponse = new ResponseEntity<Object>("id not present for delete", null, HttpStatus.NOT_ACCEPTABLE);
		}
		
		return bookResponse;
	  
		
	}

}