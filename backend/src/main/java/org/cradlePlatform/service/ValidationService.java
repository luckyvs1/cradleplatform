package org.cradlePlatform.service;

import org.cradlePlatform.model.Patient;
import org.springframework.stereotype.Service;

@Service
public class ValidationService {

    /* Attestation Number is unique, but design allows it to be empty
     * MySql UNIQUE constraint does not treat two empty strings as non unique
     * but allows nulls to be unique if not null not added to the schema field
     */
    public String getValidAttestationNo(Patient patient) {
        if (patient.getAttestationNo().isBlank()) {
            patient.setAttestationNo(null);
        }
        return patient.getAttestationNo();
    }
}
