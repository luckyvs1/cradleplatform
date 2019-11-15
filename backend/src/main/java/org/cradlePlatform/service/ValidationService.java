/**
 * ValidationService handles the common helpers required for custom validationsof fields
 */

package org.cradlePlatform.service;

import org.cradlePlatform.model.Patient;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.cradlePlatform.repository.PatientRepository;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.Optional;
import org.springframework.util.StringUtils;

@Service
public class ValidationService {

    @Autowired
    private PatientRepository patientRepository;

    // If attestation number is valid digits of length 11 use the current else use empty string
    public String getValidAttestationNo(Patient patient){
        int ATTESTATION_NO_LENGTH = 11;
        String zeroOrMoreDigitsPattern = "[0-9]*";
        Pattern pattern = Pattern.compile(zeroOrMoreDigitsPattern);

        if (patient.getAttestationNo() == null){
            throw new IllegalArgumentException("Attestation number cannot be null");
        }

        // Converts variations of whitespace to empty string
        String formattedAttestationNo = StringUtils.trimAllWhitespace(patient.getAttestationNo());
        Matcher matcher = pattern.matcher(formattedAttestationNo);

        if (!matcher.matches()){
            throw new IllegalArgumentException("Attestation number cannot contain non digits: " + patient.getAttestationNo());
        }

        if (!StringUtils.isEmpty(formattedAttestationNo) && formattedAttestationNo.length() == ATTESTATION_NO_LENGTH) {
            Optional<Patient> optionalPatient = patientRepository.findUserByAttestationNo(formattedAttestationNo);
            if (optionalPatient.isPresent()) {
                throw new IllegalArgumentException("Attestation number already exists: " + formattedAttestationNo);
            }
        } else if (!StringUtils.isEmpty(formattedAttestationNo) && formattedAttestationNo.length() != ATTESTATION_NO_LENGTH ) {
            throw new IllegalArgumentException(String.format("Attestation number must be of length %d: %s", ATTESTATION_NO_LENGTH, formattedAttestationNo));
        }

        return formattedAttestationNo;
    }
}
