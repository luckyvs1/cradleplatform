package org.cradlePlatform.service;

import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.VitalsTrafficLight;
import javax.validation.constraints.NotNull;
import org.springframework.stereotype.Service;

@Service
public class ReadingService {
    // Break points for determining Green/Yellow/Red Up/Down
    // source: CRADLE VSA Manual (extracted spring 2019)
    public static final int RED_SYSTOLIC = 160;
    public static final int RED_DIASTOLIC = 110;
    public static final int YELLOW_SYSTOLIC = 140;
    public static final int YELLOW_DIASTOLIC = 90;
    public static final double SHOCK_HIGH = 1.7;
    public static final double SHOCK_MEDIUM = 0.9;

    // Analysis Functions
    @NotNull
    public static Boolean isValidTrafficLight(Reading reading){
        boolean isValid = false;
        VitalsTrafficLight validTrafficLight = getVitalsTrafficLight(reading);

        if (reading.getVitalsTrafficLight() == validTrafficLight) {
            isValid = true;
        }

        return isValid;
    }

    @NotNull
    public static VitalsTrafficLight getVitalsTrafficLight(Reading reading){

        int systolicBloodPressure = reading.getSystolicBloodPressure();
        int diastolicBloodPressure = reading.getDiastolicBloodPressure();

        double shockIndex = getShockIndex(reading);

        boolean isBpVeryHigh = (systolicBloodPressure >= RED_SYSTOLIC) || (diastolicBloodPressure >= RED_DIASTOLIC);
        boolean isBpHigh = (systolicBloodPressure >= YELLOW_SYSTOLIC) || (diastolicBloodPressure >= YELLOW_DIASTOLIC);
        boolean isSevereShock = (shockIndex >= SHOCK_HIGH);
        boolean isShock = (shockIndex >= SHOCK_MEDIUM);

        // Set traffic light based on priority:
        VitalsTrafficLight vitalsTrafficLight;
        if (isSevereShock) {
            vitalsTrafficLight = VitalsTrafficLight.Red_down;
        } else if (isBpVeryHigh) {
            vitalsTrafficLight = VitalsTrafficLight.Red_up;
        } else if (isShock) {
            vitalsTrafficLight = VitalsTrafficLight.Yellow_down;
        } else if (isBpHigh) {
            vitalsTrafficLight = VitalsTrafficLight.Yellow_up;
        } else {
            vitalsTrafficLight = VitalsTrafficLight.Green;
        }

        return vitalsTrafficLight;
    }

    @NotNull
    public static double getShockIndex(Reading reading) {
        // Div-zero guard:
        if (reading.getSystolicBloodPressure() == 0) {
            return 0;
        }
        return (double) reading.getPulseRate() / (double) reading.getSystolicBloodPressure();
    }

    @NotNull
    public boolean isValidReferralToHealthCentre(Reading reading) {
        return ((reading.getVitalsTrafficLight() == VitalsTrafficLight.Yellow_up && reading.getNeedFollowUp() == true)
                || (reading.getVitalsTrafficLight() == VitalsTrafficLight.Red_up && reading.getNeedFollowUp() == true)
                || (reading.getVitalsTrafficLight() == VitalsTrafficLight.Red_down && reading.getNeedFollowUp() == true)
                || (reading.getVitalsTrafficLight() == VitalsTrafficLight.Yellow_down && reading.getNeedFollowUp() == false)
                || (reading.getVitalsTrafficLight() == VitalsTrafficLight.Green && reading.getNeedFollowUp() == false));
    }

    @NotNull
    public boolean isReferralToHealthCentreRecommended(VitalsTrafficLight vitalsTrafficLight) {
        return ((vitalsTrafficLight == VitalsTrafficLight.Yellow_up)
                || (vitalsTrafficLight == VitalsTrafficLight.Red_up)
                || (vitalsTrafficLight == VitalsTrafficLight.Red_down));
    }

    public String getValidationResponse(VitalsTrafficLight vitalsTrafficLight, Boolean followUpRequired) {
        return String.format("{" +
                "\"vitalsTrafficLight\":\"%s\"," +
                "\"needFollowUp\":\"%b\"" +
                "}", vitalsTrafficLight, followUpRequired);
    }
}
