/*
    For creating tables in database
 */

CREATE TABLE User (
    id          VARCHAR (32)    NOT NULL,
    username    VARCHAR (16)    NOT NULL,
    password    VARCHAR (60)    NOT NULL,
    UNIQUE (username),
    PRIMARY KEY (id)
);

CREATE TABLE User_Info (
    id                  VARCHAR (32)    NOT NULL,
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
    id                  INTEGER   AUTO_INCREMENT,
    attestation_no      VARCHAR (32),
    first_name          VARCHAR (32),
    last_name           VARCHAR (32),
    village_no          VARCHAR (32)    NOT NULL,
    zone_no             VARCHAR (32)    NOT NULL,
    household_no        VARCHAR (32),
    block_no            VARCHAR (32),
    tank_no             VARCHAR (32),
    initials            VARCHAR (4)     NOT NULL,
    sex                 ENUM('F', 'M', 'Other'),
    age                 INTEGER,
    dob                 DATE,
    pregnant            BOOLEAN,
    gestational_start_date DATE,
    gestational_age_unit  ENUM('weeks', 'months', 'none'),
    current_gestational_age       INTEGER,
    CHECK (
            (pregnant IS TRUE AND current_gestational_age IS NOT NULL) OR
            (pregnant IS FALSE AND current_gestational_age = 0)
        ),
    CHECK (
            (attestation_no IS NOT NULL) OR
            (first_name IS NOT NULL AND last_name IS NOT NULL)
        ),
    UNIQUE (attestation_no),
    PRIMARY KEY (id)
);

CREATE TABLE Drug_History (
    id          INTEGER     NOT NULL AUTO_INCREMENT,
    patient_id  INTEGER NOT NULL,
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
    patient_id  INTEGER NOT NULL,
    history     TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (patient_id) REFERENCES Patient(id) ON DELETE CASCADE
);

CREATE TABLE FollowUp (
    id          INTEGER     NOT NULL AUTO_INCREMENT,
    patient_id  INTEGER NOT NULL,
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
    patient_id      INTEGER    NOT NULL,
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
    gestational_age_unit  ENUM('weeks', 'months', 'none'),
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
    diagnosis       TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (reader_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (patient_id) REFERENCES Patient(id) ON DELETE CASCADE
);

CREATE TABLE Referral (
    id          INTEGER         NOT NULL AUTO_INCREMENT,
    referrer_id VARCHAR (32)    NOT NULL,
    patient_id  INTEGER    NOT NULL,
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
    patient_id     INTEGER    NOT NULL,
    UNIQUE (VHT_id, patient_id),
    PRIMARY KEY (VHT_id, patient_id),
    FOREIGN KEY (VHT_id) REFERENCES VHT(id) ON DELETE CASCADE,
    FOREIGN KEY (patient_id) REFERENCES Patient(id) ON DELETE CASCADE
);

/*
    Insert test data
*/

insert into User values ('1', 'VHT_user', 'password123');
insert into User values ('2', 'HealthWorker', 'password123');
insert into User values ('3', 'Admin_user', 'password123');
insert into User values ('4', 'customerTesting', 'justTesting');

insert into User_Info values ('1',
                              'Bob',
                              'Smith',
                              '1980-01-01',
                              'Uganda',
                              '077-241-8761',
                              'vht@healthclinic.com',
                              'VHT');

insert into User_Info values ('2',
                              'Sally',
                              'Jane',
                              '1985-01-01',
                              'Uganda',
                              '077-241-8762',
                              'worker@healthclinic.com',
                              'Healthworker');

insert into User_Info values ('3',
                              'Mary',
                              'Anne',
                              '1975-01-01',
                              'Uganda',
                              '077-241-8763',
                              'admin@healthclinic.com',
                              'Admin');

insert into User_Info values ('4',
                              'Test',
                              'User',
                              '2019-10-28',
                              'Uganda',
                              '077-241-8764',
                              'admin2@healthclinic.com',
                              'Admin');

insert into VHT values ('1');
insert into Healthworker values ('2');
insert into Admin values ('3');

insert into Patient values (1,
                            '1234',
                            'Mary',
                            'Sue',
                            'village0',
                            'zone0',
                            'house0',
                            'block0',
                            'tank0',
                            'MS',
                            'F',
                            26,
                            '1993-01-05',
                            True,
                            '2019-06-01',
                            'months',
                            3);

insert into Reading values (1,
                            '1',
                            1,
                            '2019-10-24',
                            ('Bleeding'),
                            'Confusion',
                            135,
                            85,
                            117,
                            'Good vitals',
                            False,
                            'CradlePlatform1.0',
                            '2019-10-24',
                            '2019-10-26',
                            'Google Pixel',
                            'months',
                            3,
                            '4',
                            '/photos',
                            3.14,
                            'Northern Uganda',
                            True,
                            True,
                            'Green',
                            '');

insert into FollowUp values (2,
                             1,
                             'Vitals to be rechecked',
                             True,
                             'Once a month',
                             'High blood pressure',
                             'Take medicine as prescribed');

insert into Referral values (1, '1', 1, 1, '2019-01-01', 'healthfacility1', 'notes', 'notes2');
insert into Drug_History values (1, 1, 'Patient 1 Drug History');
insert into Medication values (1, 1, 'Advil', '15mg per day', '2019-11-11', '2019-12-11');
insert into Medical_History values (1, '1', 'my medical history');
insert into Monitor values ('1', 1);
