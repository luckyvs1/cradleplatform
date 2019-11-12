package org.cradlePlatform.service;

import org.cradlePlatform.model.Reading;
import org.cradlePlatform.model.VitalsTrafficLight;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;

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

    public static final int MAX_SYSTOLIC = 300;
    public static final int MIN_SYSTOLIC = 10;
    public static final int MAX_DIASTOLIC = 300;
    public static final int MIN_DIASTOLIC = 10;
    public static final int MAX_HEART_RATE = 200;
    public static final int MIN_HEART_RATE = 40;

    // Analysis Functions
    public static Boolean isValidTrafficLight(@NotNull Reading reading) {
        VitalsTrafficLight validTrafficLight = getVitalsTrafficLight(reading);
        return (reading.getVitalsTrafficLight() == VitalsTrafficLight.getVitalsTrafficLightText(validTrafficLight));
    }

    public static VitalsTrafficLight getVitalsTrafficLight(@NotNull Reading reading) {

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

    public static double getShockIndex(@NotNull Reading reading) {
        // Div-zero guard:
        if (reading.getSystolicBloodPressure() == 0) {
            return 0;
        }
        return (double) reading.getPulseRate() / (double) reading.getSystolicBloodPressure();
    }

    public boolean isValidReferralToHealthCentre(@NotNull Reading reading) {
        return ((reading.getVitalsTrafficLight() == VitalsTrafficLight.getVitalsTrafficLightText(VitalsTrafficLight.Yellow_up) && reading.getNeedFollowUp() == true)
                || (reading.getVitalsTrafficLight() == VitalsTrafficLight.getVitalsTrafficLightText(VitalsTrafficLight.Red_up) && reading.getNeedFollowUp() == true)
                || (reading.getVitalsTrafficLight() == VitalsTrafficLight.getVitalsTrafficLightText(VitalsTrafficLight.Red_down) && reading.getNeedFollowUp() == true)
                || (reading.getVitalsTrafficLight() == VitalsTrafficLight.getVitalsTrafficLightText(VitalsTrafficLight.Yellow_down) && reading.getNeedFollowUp() == false)
                || (reading.getVitalsTrafficLight() == VitalsTrafficLight.getVitalsTrafficLightText(VitalsTrafficLight.Green) && reading.getNeedFollowUp() == false));
    }

    public boolean isReferralToHealthCentreRecommended(@NotNull VitalsTrafficLight vitalsTrafficLight) {
        return ((vitalsTrafficLight == VitalsTrafficLight.Yellow_up)
                || (vitalsTrafficLight == VitalsTrafficLight.Red_up)
                || (vitalsTrafficLight == VitalsTrafficLight.Red_down));
    }

    public boolean isValidReadingValues(@NotNull Reading reading) {
        return ((reading.getSystolicBloodPressure() >= MIN_SYSTOLIC)
                && (reading.getSystolicBloodPressure() <= MAX_SYSTOLIC)
                && (reading.getDiastolicBloodPressure() >= MIN_DIASTOLIC)
                && (reading.getDiastolicBloodPressure() <= MAX_DIASTOLIC)
                && (reading.getPulseRate() >= MIN_HEART_RATE)
                && (reading.getPulseRate() <= MAX_HEART_RATE));
    }

    public String getValidationResponse(VitalsTrafficLight vitalsTrafficLight, Boolean followUpRequired) {
        return String.format("{" +
                "\"vitalsTrafficLight\":\"%s\"," +
                "\"needFollowUp\":\"%b\"" +
                "}", vitalsTrafficLight, followUpRequired);
    }
}
