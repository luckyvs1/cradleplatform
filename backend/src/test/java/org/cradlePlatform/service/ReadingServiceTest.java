package test.java.org.cradlePlatform.service;

import static org.junit.Assert.*;
import org.junit.Test;
import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.VitalsTrafficLight;
import org.cradlePlatform.service.ReadingService;
import org.springframework.beans.factory.annotation.Autowired;

public class ReadingServiceTest {

    @Test
    public void validGreenAnalysis() {
        Reading reading = new Reading();
        ReadingService readingService = new ReadingService();
        reading.setSystolicBloodPressure(readingService.YELLOW_SYSTOLIC - 5);
        reading.setDiastolicBloodPressure(readingService.YELLOW_DIASTOLIC - 5);
        reading.setPulseRate((int)(readingService.SHOCK_MEDIUM * reading.getSystolicBloodPressure() - 5));
        reading.setVitalsTrafficLight(VitalsTrafficLight.Green);
        reading.setNeedFollowUp(false);

        int shockIndex = reading.getPulseRate()/reading.getSystolicBloodPressure();

        assertTrue(shockIndex < 0.9);
        assertTrue(readingService.isValidTrafficLight(reading));
        assertTrue(readingService.isValidReferralToHealthCentreRecommended(reading));
    }

    @Test
    public void validYellowUpAnalysis() {
        Reading reading = new Reading();
        ReadingService readingService = new ReadingService();
        reading.setSystolicBloodPressure(readingService.YELLOW_SYSTOLIC);
        reading.setPulseRate((int)(readingService.SHOCK_MEDIUM * reading.getSystolicBloodPressure() - 5));
        reading.setVitalsTrafficLight(VitalsTrafficLight.Yellow_up);
        reading.setNeedFollowUp(true);

        assertTrue(readingService.isValidReferralToHealthCentreRecommended(reading));

        // Systolic triggers Yellow up
        assertTrue(readingService.isValidTrafficLight(reading));

        reading.setDiastolicBloodPressure(readingService.YELLOW_DIASTOLIC);
        reading.setSystolicBloodPressure(readingService.YELLOW_SYSTOLIC - 5);

        // Diastolic triggers Yellow up
        assertTrue(readingService.isValidTrafficLight(reading));

        reading.setSystolicBloodPressure(readingService.YELLOW_SYSTOLIC);

        // Systolic and Diastolic triggers Yellow up
        assertTrue(readingService.isValidTrafficLight(reading));
    }

    @Test
    public void validRedUpAnalysis() {
        Reading reading = new Reading();
        ReadingService readingService = new ReadingService();
        reading.setSystolicBloodPressure(readingService.RED_SYSTOLIC);
        reading.setPulseRate((int)(readingService.SHOCK_MEDIUM * reading.getSystolicBloodPressure() - 5));
        reading.setVitalsTrafficLight(VitalsTrafficLight.Red_up);
        reading.setNeedFollowUp(true);

        assertTrue(readingService.isValidReferralToHealthCentreRecommended(reading));

        // Systolic triggers Red up
        assertTrue(readingService.isValidTrafficLight(reading));

        reading.setDiastolicBloodPressure(readingService.RED_DIASTOLIC);
        reading.setSystolicBloodPressure(readingService.RED_SYSTOLIC - 5);

        // Diastolic triggers Red up
        assertTrue(readingService.isValidTrafficLight(reading));

        reading.setSystolicBloodPressure(readingService.RED_SYSTOLIC);

        // Systolic and Diastolic triggers Red up
        assertTrue(readingService.isValidTrafficLight(reading));
    }
}
