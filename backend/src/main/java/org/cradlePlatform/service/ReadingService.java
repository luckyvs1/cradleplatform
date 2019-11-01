package org.cradlePlatform.service;

import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.VitalsTrafficLight;
import javax.validation.constraints.NotNull;
import org.springframework.stereotype.Service;

@Service
public class ReadingService {
//    Green,
//    Yellow_up,
//    Yellow_down,
//    Red_up,
//    Red_down;

    // Green
    //         < 140 systolic and < 90 diastolic and shock index < 0.9
    // Yellow UP
    //         >= 140 systolic BP and <= 159 and/or
    //         diastolic BP >= 90 and <= 109
    // Yellow DOWN
    //         shock index >= 0.9 and < 1.7
    // Red UP
    //         systolic >= 160 and/or diastolic >= 110
    // Red DOWN
    //         shock index >= 1.7

    // Break points for determining Green/Yellow/Red Up/Down
    // source: CRADLE VSA Manual (extracted spring 2019)
    private static final int RED_SYSTOLIC = 160;
    private static final int RED_DIASTOLIC = 110;
    private static final int YELLOW_SYSTOLIC = 140;
    private static final int YELLOW_DIASTOLIC = 90;
    private static final double SHOCK_HIGH = 1.7;
    private static final double SHOCK_MEDIUM = 0.9;

    public static final int MAX_SYSTOLIC = 300;
    public static final int MIN_SYSTOLIC = 10;
    public static final int MAX_DIASTOLIC = 300;
    public static final int MIN_DIASTOLIC = 10;
    public static final int MAX_HEART_RATE = 200;
    public static final int MIN_HEART_RATE = 40;

//    public boolean isUp() {
//        return this == vitalsTrafficLight.Yellow_up || this == Red_up;
//    }
//    public boolean isDown() {
//        return this == Yellow_down || this == Red_down;
//    }
//    public boolean isGreen() {
//        return this == Green;
//    }
//    public boolean isYellow() {
//        return this == Yellow_up|| this == Yellow_down;
//    }
//    public boolean isRed() {
//        return this == Red_up || this == Red_down;
//    }

//    @Autowired
//    public VitalsTrafficLight vitalsTrafficLight;

    // Analysis Functions
    @NotNull
    public static Boolean isValidTrafficLight(Reading reading){
// TODO: Removed guard since at worst reading values can be 0, but constraint range check in place to guard against that as well
//        // Guard no currentReading:
//        if (reading.getSystolicBloodPressure() == null || reading.getDiastolicBloodPressure() == null || reading.getPulseRate() == null) {
//            // Invalid reading for the server
//            return None;
//        }

        boolean isValid = false;

        int systolicBloodPressure = reading.getSystolicBloodPressure();
        int diastolicBloodPressure = reading.getDiastolicBloodPressure();

        double shockIndex = getShockIndex(reading);

        boolean isBpVeryHigh = (systolicBloodPressure >= RED_SYSTOLIC) || (diastolicBloodPressure >= RED_DIASTOLIC);
        boolean isBpHigh = (systolicBloodPressure >= YELLOW_SYSTOLIC) || (diastolicBloodPressure >= YELLOW_DIASTOLIC);
        boolean isSevereShock = (shockIndex >= SHOCK_HIGH);
        boolean isShock = (shockIndex >= SHOCK_MEDIUM);

//        // Return analysis based on priority:
//        Reading validAnalysis = new Reading();
//        if (isSevereShock) {
//            validAnalysis.setVitalsTrafficLight(VitalsTrafficLight.Red_down);
//        } else if (isBpVeryHigh) {
//            validAnalysis.setVitalsTrafficLight(VitalsTrafficLight.Red_up);
//        } else if (isShock) {
//            validAnalysis.setVitalsTrafficLight(VitalsTrafficLight.Yellow_down);
//        } else if (isBpHigh) {
//            validAnalysis.setVitalsTrafficLight(VitalsTrafficLight.Yellow_up);
//        } else {
//            validAnalysis.setVitalsTrafficLight(VitalsTrafficLight.Green);
//        }

        // Set analysis based on priority:
        VitalsTrafficLight validTrafficLight;
        if (isSevereShock) {
            validTrafficLight = VitalsTrafficLight.Red_down;
        } else if (isBpVeryHigh) {
            validTrafficLight = VitalsTrafficLight.Red_up;
        } else if (isShock) {
            validTrafficLight = VitalsTrafficLight.Yellow_down;
        } else if (isBpHigh) {
            validTrafficLight = VitalsTrafficLight.Yellow_up;
        } else {
            validTrafficLight = VitalsTrafficLight.Green;
        }

        if (reading.getVitalsTrafficLight() == validTrafficLight) {
            isValid = true;
        }

        return isValid;
    }

    @NotNull
    private static double getShockIndex(Reading reading) {
        // Div-zero guard:
        if (reading.getSystolicBloodPressure() == 0) {
            return 0;
        }
        return (double) reading.getPulseRate() / (double) reading.getSystolicBloodPressure();
    }

    public boolean isValidReferralToHealthCentreRecommended(Reading reading) {
        return (reading.getVitalsTrafficLight() == VitalsTrafficLight.Yellow_up && reading.getNeedFollowUp())
                || (reading.getVitalsTrafficLight() == VitalsTrafficLight.Red_up && reading.getNeedFollowUp())
                || (reading.getVitalsTrafficLight() == VitalsTrafficLight.Red_down && reading.getNeedFollowUp());
    }
}
