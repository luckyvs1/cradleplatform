package org.cradlePlatform.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonInclude(JsonInclude.Include.NON_NULL) 	//  ignore all null fields
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum VitalsTrafficLight {
	Green("Patient is likely healthy",
			"Continue normal care",
			"Patient is likely healthy.  Continue normal care."),
	Yellow_up("Raised BP",
			"Monitor for preeclampsia.  Transfer to health centre within 24h.",
			"This is raised BP this patient may have preeclapsia.  Action is needed.  Manage" +
					" as you would normally e.g. measure urine dipstick, check for signs and symptoms (e.g. headaches, " +
					"visual disturbance) and act accordingly.  If in the community transfer when practical " +
					"(preferably within 24 hours)."),
	Yellow_down("Low BP",
			"Common but assess for infection, bleeding, anaemia, and dehydration.",
			"This result can be common in pregnant women, however, it may indicate that the mother is " +
					"developing infection or bleeding.  The patient needs to be assessed to decide what actions is " +
					"required.  If she is well (no bleeding, no signs of infection, feels well) she may have " +
					"anaemia, dehydration, an irregular heart rhythm or endocrine disease or her blood pressure may be " +
					"low in pregnancy.  Consider undertaking routine checks for these when possible.  If she is unwell " +
					"e.g. vaginal bleeding, fever, discharge, constant abdominal pain or if she feels unwell e.g. " +
					"feverish, pale, sweaty, breathless", new String[] {"* Resuscitate as necessary e.g. keep warm, elevate legs",
					"* Transfer urgently (preferably within 4 hours)", "* If bleeding, uterine massage after delivery " +
					"of placenta, control of bleeding e.g. misoprostol, oxytocin, depending on what's available",
					"* If sepsis, consider starting antibiotics if available"}),
	Red_up("Very raised BP",
			"Urgent action needed.  Transfer to health centre within 4h.  Monitor baby.",
			"This is very raised BP and indicates urgent action is needed.  Manage as you would " +
					"normally e.g. measure urine dipstick, check for signs and symptoms and act accordingly  Give " +
					"antihypertensives if available e.g. methyidopa, nifedipine, labetolol  Consider magnesium " +
					"sulphate (intramuscular) if available.  If in the community transfer as soon as possible " +
					"(preferably within 4 hours).  Monitor the baby.  If BP remains uncontrolled and gestation " +
					"appropriate, seek senior advice regarding need to deliver."),
	Red_down("In sever shock",
			"Urgent action needed.  Get help and assess mother.  Immediately transfer to health centre within 1h.", new String[]
			{"* Stay calm. Do NOT leave the woman alone", "* Get HELP", "* Assess the " +
					"mother", "* Is she pale, sweaty, cold, breathing fast, drowsy or confused?", "* Is she unwell e.g. vaginal bleeding, fever, discharge, constant pain?"}, new String[]{"* Keep her warm and elevate legs if " +
			"possible", "* Organise immediate transfer (within 1 hour)", "* If bleeding, uterine massage after delivery " +
			"of placenta, give medication to contract uterus if available e.g. misoprostil 600mcg orally", "* If sepsis," +
			" consider starting antibiotics"}, new String[]
			{"* Stay calm. Do NOT leave the woman alone", "* Get HELP", "* Assess the mother",
					"* Is she pale, sweaty, cold, breathing fast, drowsy or confused? ", "* Is she unwell e.g. vaginal bleeding, fever, discharge, constant pain?"}, new String[]
			{"* Keep her warm and elevate legs if possible", "* Oxygen", "* IV fluids give quickly through a large bore cannula e.g. 2 litres in first hour", "* Collect blood to test hemoglobin, do an immediate cross-match", "* Catheterise the bladder to monitor input/output", "* Decide on the cause of shock and manage as you would normally",
					"* If bleeding transfuse blood, give uterotonics such as IV oxytocin, misoprostil or carboprost" +
							"* Consider operative interventions if appropriate and available", "* If severe infection, keep hydrated, " +
					"give IV antibiotics"});

	@JsonProperty("analysis")
	private String analysisText;

	@JsonProperty("briefAdvice")
	private String briefAdviceText;

	@JsonProperty("adviceDetails")
	private String adviceDetailsText;

	@JsonProperty("adviceDetailsBullets")
	private String[] adviceDetailsBulletsText;

	@JsonProperty("communityAdvice")
	private String[] communityAdviceText;

	@JsonProperty("communityTreatment")
	private String[] communityTreatmentText;

	@JsonProperty("hospitalAdvice")
	private String[] hospitalAdviceText;

	@JsonProperty("hospitalTreatment")
	private String[] hospitalTreatmentText;

	VitalsTrafficLight(String analysisText, String briefAdviceText, String adviceDetailsText) {
		this.analysisText = analysisText;
		this.briefAdviceText = briefAdviceText;
		this.adviceDetailsText = adviceDetailsText;
	}

	VitalsTrafficLight(String analysisText, String briefAdviceText, String adviceDetailsText, String[] adviceDetailsBulletsText) {
		this.analysisText = analysisText;
		this.briefAdviceText = briefAdviceText;
		this.adviceDetailsText = adviceDetailsText;
		this.adviceDetailsBulletsText = adviceDetailsBulletsText;
	}

	VitalsTrafficLight(String analysisText, String briefAdviceText, String[] communityAdviceText, String[] communityTreatmentText, String[] hospitalAdviceText, String[] hospitalTreatmentText) {
		this.analysisText = analysisText;
		this.briefAdviceText = briefAdviceText;
		this.communityAdviceText = communityAdviceText;
		this.communityTreatmentText = communityTreatmentText;
		this.hospitalAdviceText = hospitalAdviceText;
		this.hospitalTreatmentText = hospitalTreatmentText;
	}

	@JsonGetter("analysis")
	public String getAnalysisText() {
		return analysisText;
	}

	@JsonGetter("briefAdvice")
	public String getBriefAdviceText() {
		return briefAdviceText;
	}

	@JsonGetter("adviceDetails")
	public String getAdviceDetailsText() {
		return adviceDetailsText;
	}

	@JsonGetter("communityAdvice")
	public String[] getCommunityAdviceText() {
		return communityAdviceText;
	}

	@JsonGetter("hospitalAdvice")
	public String[] getHospitalAdviceText() {
		return hospitalAdviceText;
	}

	@JsonGetter("communityTreatment")
	public String[] getCommunityTreatmentText() {
		return communityTreatmentText;
	}

	@JsonGetter("adviceDetailsBullets")
	public String[] getAdviceDetailsBulletsText() {
		return adviceDetailsBulletsText;
	}

	@JsonGetter("hospitalTreatment")
	public String[] getHospitalTreatmentText() {
		return hospitalTreatmentText;
	}
}
