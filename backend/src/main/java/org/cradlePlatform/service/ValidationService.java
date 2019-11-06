package org.cradlePlatform.service;

import org.cradlePlatform.model.Patient;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.cradlePlatform.repository.PatientRepository;
import org.springframework.util.StringUtils;

import java.util.Optional;

@Service
public class ValidationService {

    @Autowired
    private PatientRepository patientRepository;

    // If attestation number is valid digits of length 11 use the current else use empty string
    public String getValidAttestationNo(Patient patient) {
        int ATTESTATION_NO_LENGTH = 11;
        String emptyString = "";
        String nonDigitsPattern = "\\D";

        if(patient.getAttestationNo().isBlank()) {
            patient.setAttestationNo(emptyString);
        }

        String formattedAttestationNo =  StringUtils.trimAllWhitespace(patient.getAttestationNo().replaceAll(nonDigitsPattern, ""));

        if (!formattedAttestationNo.isBlank() && formattedAttestationNo.length() == ATTESTATION_NO_LENGTH) {
            Optional<Patient> optionalPatient = patientRepository.findUserByAttestationNo(formattedAttestationNo);
            if (optionalPatient.isPresent()) {
                throw new IllegalArgumentException("Attestation number already exists: " + formattedAttestationNo);
            }
        } else if (!formattedAttestationNo.isBlank() && formattedAttestationNo.length() != ATTESTATION_NO_LENGTH ) {
            throw new IllegalArgumentException("Attestation number must be of length eleven: " + formattedAttestationNo);
        }

        return formattedAttestationNo;
    }
}
