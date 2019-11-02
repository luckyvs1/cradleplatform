package test.java.org.cradlePlatform.service;

import static org.junit.Assert.*;
import org.junit.Test;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.VitalsTrafficLight;
import org.cradlePlatform.service.ReadingService;

public class ReadingServiceTest {

    // Reduce threshold boundary from invalid to valid by subtracting a small offset
    int MINOR_OFFSET = 5;

    @Test
    public void validGreenAnalysis() {
        Reading reading = new Reading();
        ReadingService readingService = new ReadingService();
        reading.setSystolicBloodPressure(readingService.YELLOW_SYSTOLIC - MINOR_OFFSET);
        reading.setDiastolicBloodPressure(readingService.YELLOW_DIASTOLIC - MINOR_OFFSET);
        reading.setPulseRate((int)(readingService.SHOCK_MEDIUM * reading.getSystolicBloodPressure() - MINOR_OFFSET));
        reading.setVitalsTrafficLight(VitalsTrafficLight.Green);
        reading.setNeedFollowUp(false);
        double shockIndex = readingService.getShockIndex(reading);

        assertTrue(shockIndex < readingService.SHOCK_MEDIUM);
        assertTrue(readingService.isValidTrafficLight(reading));
        assertTrue(readingService.isValidReferralToHealthCentre(reading));
    }

    @Test
    public void validYellowUpAnalysis() {
        Reading reading = new Reading();
        ReadingService readingService = new ReadingService();
        reading.setSystolicBloodPressure(readingService.YELLOW_SYSTOLIC);
        reading.setPulseRate((int)(readingService.SHOCK_MEDIUM * reading.getSystolicBloodPressure() - MINOR_OFFSET));
        reading.setVitalsTrafficLight(VitalsTrafficLight.Yellow_up);
        reading.setNeedFollowUp(true);

        assertTrue(readingService.isValidReferralToHealthCentre(reading));

        // Systolic triggers Yellow up
        assertTrue(readingService.isValidTrafficLight(reading));

        reading.setDiastolicBloodPressure(readingService.YELLOW_DIASTOLIC);
        reading.setSystolicBloodPressure(readingService.YELLOW_SYSTOLIC - MINOR_OFFSET);

        // Diastolic triggers Yellow up
        assertTrue(readingService.isValidTrafficLight(reading));

        reading.setSystolicBloodPressure(readingService.YELLOW_SYSTOLIC);

        // Systolic and Diastolic triggers Yellow up
        assertTrue(readingService.isValidTrafficLight(reading));
    }

    @Test
    public void validYellowDownAnalysis() {
        Reading reading = new Reading();
        ReadingService readingService = new ReadingService();
        reading.setSystolicBloodPressure(readingService.YELLOW_SYSTOLIC);
        reading.setPulseRate((int)(readingService.SHOCK_MEDIUM * reading.getSystolicBloodPressure()));
        reading.setVitalsTrafficLight(VitalsTrafficLight.Yellow_down);
        reading.setNeedFollowUp(false);
        double shockIndex = readingService.getShockIndex(reading);

        assertTrue(shockIndex >= readingService.SHOCK_MEDIUM);
        assertTrue(readingService.isValidTrafficLight(reading));
        assertTrue(readingService.isValidReferralToHealthCentre(reading));
    }

    @Test
    public void validRedUpAnalysis() {
        Reading reading = new Reading();
        ReadingService readingService = new ReadingService();
        reading.setSystolicBloodPressure(readingService.RED_SYSTOLIC);
        reading.setPulseRate((int)(readingService.SHOCK_MEDIUM * reading.getSystolicBloodPressure() - MINOR_OFFSET));
        reading.setVitalsTrafficLight(VitalsTrafficLight.Red_up);
        reading.setNeedFollowUp(true);

        assertTrue(readingService.isValidReferralToHealthCentre(reading));

        // Systolic triggers Red up
        assertTrue(readingService.isValidTrafficLight(reading));

        reading.setDiastolicBloodPressure(readingService.RED_DIASTOLIC);
        reading.setSystolicBloodPressure(readingService.RED_SYSTOLIC - MINOR_OFFSET);

        // Diastolic triggers Red up
        assertTrue(readingService.isValidTrafficLight(reading));

        reading.setSystolicBloodPressure(readingService.RED_SYSTOLIC);

        // Systolic and Diastolic triggers Red up
        assertTrue(readingService.isValidTrafficLight(reading));
    }

    @Test
    public void validRedDownAnalysis() {
        Reading reading = new Reading();
        ReadingService readingService = new ReadingService();
        reading.setSystolicBloodPressure(readingService.RED_SYSTOLIC);
        reading.setPulseRate((int)(readingService.SHOCK_HIGH * reading.getSystolicBloodPressure()));
        reading.setVitalsTrafficLight(VitalsTrafficLight.Red_down);
        reading.setNeedFollowUp(true);
        double shockIndex = readingService.getShockIndex(reading);

        assertTrue(shockIndex >= readingService.SHOCK_HIGH);
        assertTrue(readingService.isValidTrafficLight(reading));
        assertTrue(readingService.isValidReferralToHealthCentre(reading));
    }
}
