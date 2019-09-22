CREATE TABLE User (
    id          INTEGER     NOT NULL AUTO_INCREMENT,
    username    VARCHAR(16) NOT NULL,
    password    VARCHAR(32) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE UserInfo (
    id                  INTEGER         NOT NULL,
    at_a_station_no     INTEGER         NOT NULL,
    first_name          VARCHAR (32)    NOT NULL,
    last_name           VARCHAR (32)    NOT NULL,
    dob                 DATE            NOT NULL,
    country             VARCHAR (32)    NOT NULL,
    phone               VARCHAR (16)    NOT NULL,
    email               VARCHAR (32),
    role                ENUM('Admin', 'Healthworker', 'VHT'),
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES User(id)
);

CREATE TABLE Admin (
    uid INTEGER NOT NULL,
    PRIMARY KEY (uid),
    FOREIGN KEY (uid) REFERENCES User(id)
);

CREATE TABLE Healthworker (
    uid INTEGER NOT NULL,
    PRIMARY KEY (uid),
    FOREIGN KEY (uid) REFERENCES User(id)
);

CREATE TABLE VHT (
    uid INTEGER NOT NULL,
    PRIMARY KEY (uid),
    FOREIGN KEY (uid) REFERENCES User(id)
);

CREATE TABLE Patient (
    id                  INTEGER     NOT NULL AUTO_INCREMENT,
    village_no          INTEGER     NOT NULL,
    initials            VARCHAR (4) NOT NULL,
    sex                 ENUM('F', 'M', 'Other'),
    age                 INTEGER     NOT NULL,
    pregnant            BOOLEAN,
    gestation_age_unit  ENUM('week', 'month', 'none'),
    gestation_age       INTEGER,
    CHECK (
            (pregnant IS TRUE AND gestation_age IS NOT NULL) OR
            (pregnant IS FALSE AND gestation_age IS NULL)
    ),
    PRIMARY KEY (id)
);

CREATE TABLE DrugHistory (
    id          INTEGER NOT NULL AUTO_INCREMENT,
    patient     INTEGER NOT NULL,
    notes       TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (patient) REFERENCES Patient(id)
);

CREATE TABLE Medication (
    id              INTEGER         NOT NULL AUTO_INCREMENT,
    drug_history    INTEGER         NOT NULL,
    drug_name       VARCHAR (32)    NOT NULL,
    dosage          VARCHAR (32)    NOT NULL,
    start_date      DATE            NOT NULL,
    end_date        DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (history_id) REFERENCES DrugHistory(id)
);

CREATE TABLE MedicalHistory (
    id          INTEGER NOT NULL AUTO_INCREMENT,
    patient     INTEGER NOT NULL,
    notes       TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (patient) REFERENCES Patient(id)
);

CREATE TABLE FollowUp (
    id          INTEGER NOT NULL AUTO_INCREMENT,
    patient     INTEGER NOT NULL,
    notes       TEXT,
    required    BOOLEAN,
    frequency   TEXT,
    diagnosis   TEXT,
    treatment   TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (patient) REFERENCES Patient(id)
);

CREATE TABLE Referral (
    id          INTEGER     NOT NULL AUTO_INCREMENT,
    referrer    INTEGER     NOT NULL,
    reading     INTEGER     NOT NULL,
    timestamp   TIMESTAMP   NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (referrer) REFERENCES User(id),
    FOREIGN KEY (reading) REFERENCES Reading(id)
);

CREATE TABLE Reading (
    id              INTEGER     NOT NULL AUTO_INCREMENT,
    vht             INTEGER     NOT NULL,
    patient         INTEGER     NOT NULL,
    timestamp       TIMESTAMP   NOT NULL,
    symptoms        SET,
    other_symptoms  TEXT,
    systolic_bp     INTEGER     NOT NULL,
    diastolic_bp    INTEGER     NOT NULL,
    pulse_rate      INTEGER     NOT NULL,
    notes           TEXT,
    need_followup   BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY (vht) REFERENCES User(id),
    FOREIGN KEY (patient) REFERENCES Patient(id)
);