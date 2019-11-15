package test.java.org.cradlePlatform.service;

import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.Ignore;
import org.cradlePlatform.service.ValidationService;
import org.cradlePlatform.model.Patient;

public class ValidationServiceTest {

    @Test (expected = IllegalArgumentException.class)
    public void nullAttestationNumber() throws Exception {
        ValidationService validationService = new ValidationService();
        Patient patient = new Patient();
        validationService.getValidAttestationNo(patient);
    }

    @Test (expected = IllegalArgumentException.class)
    public void nonDigitAttestationNumber() throws Exception {
        ValidationService validationService = new ValidationService();
        Patient patient = new Patient();
        String nonNumericAttestationNumber = "NonDigits1";
        patient.setAttestationNo(nonNumericAttestationNumber);
        validationService.getValidAttestationNo(patient);
    }

    @Test (expected = IllegalArgumentException.class)
    public void invalidAttestationNumberLength() throws Exception {
        ValidationService validationService = new ValidationService();
        Patient patient = new Patient();
        String invalidLengthAttestationNumber = "123456789";
        patient.setAttestationNo(invalidLengthAttestationNumber);
        validationService.getValidAttestationNo(patient);
    }

    @Test
    public void trimWhiteSpaceAttestationNumber() {
        ValidationService validationService = new ValidationService();
        Patient patient = new Patient();
        String defaultAttestationNumber = "";
        String whiteSpaceAttestationNumber = " ";
        patient.setAttestationNo(whiteSpaceAttestationNumber);
        assertEquals(validationService.getValidAttestationNo(patient), defaultAttestationNumber);
    }

    // TODO: Connection between server and database not established to do integration test
    @Ignore // Test could fail if attestation number is no longer in the schema
    @Test (expected = IllegalArgumentException.class)
    public void duplicateAttestationNumber() throws Exception {
        ValidationService validationService = new ValidationService();
        Patient patient = new Patient();
        // Default attestation number which already exists in schema
        String invalidAttestationNumber = "17182982734";
        patient.setAttestationNo(invalidAttestationNumber);
        validationService.getValidAttestationNo(patient);
    }

    // TODO: Connection between server and database not established to do integration test
    @Ignore // Test could fail if attestation number already exists in the system after implementation of test
    @Test
    public void validAttestationNumber() {
        ValidationService validationService = new ValidationService();
        Patient patient = new Patient();
        // Test could fail if this attestation number already exists in the system
        String attestationNumber = "999999999999";
        patient.setAttestationNo(attestationNumber);
        assertEquals(validationService.getValidAttestationNo(patient), attestationNumber);
    }

}
