package org.cradlePlatform.model;

public enum VitalsTrafficLight {
	Green ("Patient is likely healthy",
			"Continue normal care",
			"Patient is likely healthy. \n Continue normal care."),
	Yellow_up ("Raised BP",
			"Monitor for preeclampsia. \n Transfer to health centre within 24h.",
			"This is raised BP this patient may have preeclapsia. \n Action is needed. \n Manage" +
					"as you would normally e.g. measure urine dipstick, check for signs and symptoms (e.g. headaches, visual disturbance) and act accordingly. \n" +
					"If in the community transfer when practical (preferably within 24 hours)."),
	Yellow_down ("Low BP",
			"Common but assess for infection, bleeding, anaemia, and dehydration.",
			"This result can be common in pregnant women, however, it may indicate that the mother is developing infection or bleeding. \n" +
					"The patient needs to be assessed to decide what actions is required. \n If she is well (no bleeding, no signs of infection, feels well) she may have " +
					"anaemia, dehydration, an irregular heart rhythm or endocrine disease or her blood pressure may be low in pregnancy. Consider undertaking routine checks for these when possible. \n" +
					"If she is unwell e.g. vaginal bleeding, fever, discharge, constant abdominal pain or if she feels unwell e.g. feverish, pale, sweaty, breathless \n" +
					"* Resuscitate as necessary e.g. keep warm, elevate legs \n * Transfer urgently (preferably within 4 hours)" +
					"\n * If bleeding, uterine massage after delivery of placenta, control of bleeding e.g. misoprostol, oxytocin, depending on what's available" +
					"\n * If sepsis, consider starting antibiotics if available"),
	Red_up ("Very raised BP", "Urgent action needed. Transfer to health centre within 4h. Monitor baby.",
			"This is very raised BP and indicates urgent action is needed. \n Manage as you would normally e.g. measure urine dipstick, check for signs and symptoms" +
					"and act accordingly \n Give antihypertensives if available e.g. methyidopa, nifedipine, labetolol" +
					"\n Consider magnesium sulphate (intramuscular) if available. \n If in the community transfer as soon as possible (preferably within 4 hours) \n" +
					"Monitor the baby. \n If BP remains uncontrolled and gestation appropriate, seek senior advice regarding need to deliver."),
	Red_down ("In sever shock", "Urgent action needed. Get help and assess mother. Immediately transfer to health centre within 1h.",
	"Community Version \n * Stay calm. Do NOT leave the woman alone \n * Get HELP \n * Assess the mother \n * Is she pale, sweaty, cold, breathing fast, drowsy or confused? \n" +
			"* Is she unwell e.g. vaginal bleeding, fever, discharge, constant pain? \n Treatment \n * Keep her warm and elevate legs if possible \n * Organise immediate transfer (within 1 hour) \n * If bleeding, uterine massage after delivery of placenta, give medication to contract uterus " +
			"if available e.g. misoprostil 600mcg orally \n * If sepsis, consider starting antibiotics \n Hospital Version \n * Stay calm. Do NOT leave the woman alone \n * Get HELP \n * Assess the mother \n * Is she pale, sweaty, cold, breathing fast, drowsy or confused? \n" +
			"* Is she unwell e.g. vaginal bleeding, fever, discharge, constant pain? \n Treatment \n * Keep her warm and elevate legs if possible \n * Oxygen \n * IV fluids give quickly through a large bore cannula e.g. 2 litres in first hour \n * Collect blood to test hemoglobin." +
			"do an immediate cross-match \n * Catheterise the bladder to monitor input/output \n * Decide on the cause of shock and manage as you would normally \n " +
			"* If bleeding transfuse blood, give uterotonics such as IV oxytocin, misoprostil or carboprost \n * Consider operative interventions if appropriate and available \n * If severe infection, keep hydrated, give IV antibiotics");

	// Fields
	private final String analysisText;
	private final String briefAdviceText;
	private final String adviceDetailsText;

	VitalsTrafficLight(String analysisText, String briefAdviceText, String adviceDetailsText) {
		this.analysisText = analysisText;
		this.briefAdviceText = briefAdviceText;
		this.adviceDetailsText = adviceDetailsText;
	}

	public String getAnalysisText() {
		return analysisText;
	}

	public String getBriefAdviceText() {
		return briefAdviceText;
	}
	public String getAdviceDetailsText() {
		return adviceDetailsText;
	}

}
