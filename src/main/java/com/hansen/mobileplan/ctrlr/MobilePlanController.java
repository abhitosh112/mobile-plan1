package com.hansen.mobileplan.ctrlr;
import java.util.Date;
import java.util.Iterator;
import org.springframework.web.client.RestTemplate;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
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
import com.hansen.mobileplan.model.Auditlog;

@RestController
@RequestMapping("/mp")
public class MobilePlanController {
	private Log logger = LogFactory.getLog(MobilePlanController.class);
	@Autowired
	MobilePlanSrvc mpSrvc;

	@Autowired
	MobilePlanDao mobilePlanDao;
	
	RestTemplate restTemplate = new RestTemplate();
	
	Date date =new Date();

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Object> create(@RequestBody MobilePlan inputentity) {
		logger.info("Inside add method");
		ResponseEntity<Object> mpResponse;
		System.out.print(date);
		Object mobilePlan = mpSrvc.create(inputentity);
		if (mobilePlan != null) {
			mpResponse = new ResponseEntity<Object>(mobilePlan, null, HttpStatus.CREATED);
			
			// audit log using RestTemplate
			HttpEntity<Auditlog> request = new HttpEntity<Auditlog>(new Auditlog("CREATED",mpResponse.getBody().toString(),date));
			restTemplate.postForObject("http://localhost:8081/audit", request, Auditlog.class);
			
		} else {
			mpResponse = new ResponseEntity<Object>("MobilePlan already Present for this id", null, HttpStatus.NOT_ACCEPTABLE);
			
		}
		return mpResponse;
	}
	
	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> read(@PathVariable(value = "id") Long id) {
		logger.info("Inside search method");
		ResponseEntity<Object> mpResponse = null;
		
		Object mobilePlan= mpSrvc.read(id);
		if(mobilePlan!=null)
		{
			mpResponse = new ResponseEntity<Object>(mobilePlan, null, HttpStatus.OK);
//			
			//HttpEntity<Auditlog> request = new HttpEntity<Auditlog>(new Auditlog("READ BY ID",mpResponse.getBody().toString(),date));
			//restTemplate.postForObject("http://localhost:8081/audit", request, Auditlog.class);
			
		}
		else
		{
			mpResponse = new ResponseEntity<Object>("ID not present", null, HttpStatus.NOT_FOUND);
			
		}
		return mpResponse;
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
//            
            //HttpEntity<Auditlog> request = new HttpEntity<Auditlog>(new Auditlog("READ ALL",mpResponse.getBody().toString().substring(0, 100),date));
			//restTemplate.postForObject("http://localhost:8081/audit", request, Auditlog.class);
           
        }
        else
        {
            mpResponse = new ResponseEntity<Object>("No single plan presents", null, HttpStatus.NOT_FOUND);
            
        }
        return mpResponse;
    }

	

	@RequestMapping(method = RequestMethod.PATCH) // OR PUT
	public ResponseEntity<Object> update(@RequestBody MobilePlan tobemerged) {
		logger.info("Inside update method");
		ResponseEntity<Object> planResponse = null;
		
		//TODO Homework... write the code to update
		
		Object mobilePlanList = mpSrvc.update(tobemerged);
				
		if(mobilePlanList!= null) {
			planResponse = new ResponseEntity<Object>(mobilePlanList, null, HttpStatus.CREATED);
			
			HttpEntity<Auditlog> request = new HttpEntity<Auditlog>(new Auditlog("UPDATED",planResponse.getBody().toString(),date));
			restTemplate.postForObject("http://localhost:8081/audit", request, Auditlog.class);
		}
		else {
			planResponse = new ResponseEntity<Object>("ID Not Present for update", null, HttpStatus.NOT_FOUND);	
		}
		return planResponse;
	}
		

	@RequestMapping(value = "{planid}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> delete(@PathVariable(value = "planid") Long planid) {
		logger.info("Inside delete method");
		ResponseEntity<Object> bookResponse = null;
		
		MobilePlan mp= (MobilePlan) mpSrvc.read(planid);
		
		//TODO Homework... write the code to delete
		boolean mobilePlan = mpSrvc.delete(planid);
		if(mobilePlan) {
			bookResponse = new ResponseEntity<Object>("Mobile plan deleted", null , HttpStatus.OK);
			
			HttpEntity<Auditlog> request = new HttpEntity<Auditlog>(new Auditlog("DELETED",mp.toString(),date));
			restTemplate.postForObject("http://localhost:8081/audit", request, Auditlog.class);
		}
		else{
			bookResponse = new ResponseEntity<Object>("ID Not present for delete", null, HttpStatus.NOT_ACCEPTABLE);
		}
		
		return bookResponse;
	  
		
	}

}
