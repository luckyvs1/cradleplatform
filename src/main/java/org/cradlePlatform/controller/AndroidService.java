/**
 * AndroidService handles interfacing with the CRADLE Android app, and sending and receiving data
 * to and from it.
 */
package org.cradlePlatform.controller;

import org.cradlePlatform.model.ReadingUploadWrapper;
import org.cradlePlatform.model.SyncDataWrapper;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.google.gson.Gson;

@RestController
public class AndroidService {


	/**
	 * Receive a single reading from a VHT's Cradle Android app.
	 * @param reading The incoming reading.
	 */
	@PostMapping(path = "/api/readings", consumes = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public void uploadReading(@RequestBody ReadingUploadWrapper reading) {
		System.out.println(reading.getUsername() + " " + reading.getReading().getPatientId() + " " + reading.getReading().getGestationalAge().getTimeUnit());
	}

	/**
	 * Receive patient, referral, and follow-up data from a VHT's Cradle Android app
	 * during a server-app sync process.
	 */
	@PostMapping(path = "/api/sync", consumes = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public void uploadSyncData(@RequestBody SyncDataWrapper data) {

	}
}
