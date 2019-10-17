/*
    For creating tables in database
 */

CREATE TABLE User (
    id          VARCHAR (32)    NOT NULL,
    username    VARCHAR (16)    NOT NULL,
    password    VARCHAR (32)    NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE User_Info (
    id                  VARCHAR (32)    NOT NULL,
    at_a_station_no     VARCHAR (32)    NOT NULL,
    first_name          VARCHAR (32)    NOT NULL,
    last_name           VARCHAR (32)    NOT NULL,
    dob                 DATE            NOT NULL,
    country             VARCHAR (32)    NOT NULL,
    phone               VARCHAR (16)    NOT NULL,
    email               VARCHAR (32),
    role                ENUM('Admin', 'Healthworker', 'VHT'),
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES User(id) ON DELETE CASCADE
);

CREATE TABLE Admin (
    id VARCHAR (32) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES User(id) ON DELETE CASCADE
);

CREATE TABLE Healthworker (
    id VARCHAR (32) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES User(id) ON DELETE CASCADE
);

CREATE TABLE VHT (
    id VARCHAR (32) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES User(id) ON DELETE CASCADE
);

CREATE TABLE Patient (
    id                  VARCHAR (32)    NOT NULL,
    attestation_no      VARCHAR (32),
    first_name          VARCHAR (32),
    last_name           VARCHAR (32),
    village_no          VARCHAR (32)    NOT NULL,
    zone_no             VARCHAR (32)    NOT NULL,
    initials            VARCHAR (4)     NOT NULL,
    sex                 ENUM('F', 'M', 'Other'),
    age                 INTEGER,
    dob                 DATE,
    pregnant            BOOLEAN,
    gestational_start_date DATE           NOT NULL,
    gestational_age_unit  ENUM('week', 'month', 'none'),
    current_gestational_age       INTEGER   NOT NULL,
    CHECK (
            (pregnant IS TRUE AND current_gestational_age IS NOT NULL) OR
            (pregnant IS FALSE AND current_gestational_age = 0)
        ),

    CHECK (
            (attestation_no IS NOT NULL) OR
            (first_name IS NOT NULL AND last_name IS NOT NULL)
        ),
    PRIMARY KEY (id)
);

CREATE TABLE Drug_History (
    id          INTEGER     NOT NULL AUTO_INCREMENT,
    patient_id  VARCHAR(32) NOT NULL,
    history     TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (patient_id) REFERENCES Patient(id) ON DELETE CASCADE
);

CREATE TABLE Medication (
    id              INTEGER         NOT NULL AUTO_INCREMENT,
    drug_history_id INTEGER         NOT NULL,
    drug_name       VARCHAR (32)    NOT NULL,
    dosage          VARCHAR (32)    NOT NULL,
    start_date      DATE            NOT NULL,
    end_date        DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (drug_history_id) REFERENCES Drug_History(id) ON DELETE CASCADE
);

CREATE TABLE Medical_History (
    id          INTEGER     NOT NULL AUTO_INCREMENT,
    patient_id  VARCHAR(32) NOT NULL,
    history     TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (patient_id) REFERENCES Patient(id) ON DELETE CASCADE
);

CREATE TABLE FollowUp (
    id          INTEGER     NOT NULL AUTO_INCREMENT,
    patient_id  VARCHAR(32) NOT NULL,
    notes       TEXT,
    required    BOOLEAN,
    frequency   TEXT,
    diagnosis   TEXT,
    treatment   TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (patient_id) REFERENCES Patient(id) ON DELETE CASCADE
);

CREATE TABLE Reading (
    id              INTEGER         NOT NULL AUTO_INCREMENT,
    reader_id       VARCHAR (32)    NOT NULL,
    patient_id      VARCHAR (32)    NOT NULL,
    timestamp       TIMESTAMP       NOT NULL,
    symptoms        SET('No Symptoms',
                        'Headache',
                        'Blurred vision',
                        'Abdominal pain',
                        'Bleeding',
                        'Feverish',
                        'Unwell'),
    other_symptoms  TEXT,
    systolic_bp     INTEGER         NOT NULL,
    diastolic_bp    INTEGER         NOT NULL,
    pulse_rate      INTEGER         NOT NULL,
    notes           TEXT,
    need_followup   BOOLEAN         NOT NULL,
    app_version     VARCHAR(32)     NOT NULL,
    date_last_saved TIMESTAMP       NOT NULL,
    date_recheck_vitals_needed TIMESTAMP    NOT NULL,
    device_info     VARCHAR(32)     NOT NULL,
    gestational_age_unit  ENUM('week', 'month', 'none'),
    gestational_age INTEGER,
    manually_changed_OCR_results VARCHAR(16)   NOT NULL,
    path_to_photo   VARCHAR(128)    NOT NULL,
    total_OCR_seconds   FLOAT       NOT NULL,
    region          VARCHAR(32)     NOT NULL,
    OCR_enabled     BOOLEAN         NOT NULL,
    upload_images   BOOLEAN         NOT NULL,
    reading_analysis  ENUM('Green',
                          'Yellow_up',
                          'Yellow_down',
                          'Red_up',
                          'Red_down'),
    PRIMARY KEY (id),
    FOREIGN KEY (reader_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (patient_id) REFERENCES Patient(id) ON DELETE CASCADE
);

CREATE TABLE Referral (
    id          INTEGER         NOT NULL AUTO_INCREMENT,
    referrer_id VARCHAR (32)    NOT NULL,
    patient_id  VARCHAR (32)    NOT NULL,
    reading_id  INTEGER         NOT NULL,
    timestamp   TIMESTAMP       NOT NULL,
    health_facility VARCHAR (32) NOT NULL,
    notes_reason    TEXT,
    notes_action    TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (referrer_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (reading_id) REFERENCES Reading(id) ON DELETE CASCADE,
    FOREIGN KEY (patient_id) REFERENCES Patient(id) ON DELETE CASCADE
);

CREATE TABLE Monitor (
    VHT_id         VARCHAR (32)    NOT NULL,
    patient_id     VARCHAR (32)    NOT NULL,
    UNIQUE (VHT_id, patient_id),
    PRIMARY KEY (VHT_id, patient_id),
    FOREIGN KEY (VHT_id) REFERENCES VHT(id) ON DELETE CASCADE,
    FOREIGN KEY (patient_id) REFERENCES Patient(id) ON DELETE CASCADE
);