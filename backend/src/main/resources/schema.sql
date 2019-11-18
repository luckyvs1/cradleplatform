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
    CONSTRAINT hasValidPregnantValue CHECK (
            (pregnant IS TRUE AND current_gestational_age > 0 AND gestational_age_unit != 'none')
            OR (pregnant IS FALSE AND current_gestational_age = 0 AND gestational_age_unit = 'none')
        ),
    CONSTRAINT hasValidAttestationNumberOrName CHECK (
            (attestation_no IS NOT NULL) OR
            (first_name IS NOT NULL AND last_name IS NOT NULL)
        ),
    CONSTRAINT hasValidAge CHECK (
            (age >= 18)
        ),
    PRIMARY KEY (id)
);

CREATE TABLE Drug_History (
    id          INTEGER     NOT NULL AUTO_INCREMENT,
    patient_id  INTEGER NOT NULL,
    history     TEXT,
    UNIQUE(patient_id),
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
    app_version     VARCHAR(32),
    date_last_saved TIMESTAMP       NOT NULL,
    date_recheck_vitals_needed TIMESTAMP,
    device_info     VARCHAR(128),
    gestational_age_unit  ENUM('weeks', 'months', 'none'),
    gestational_age INTEGER,
    manually_changed_OCR_results VARCHAR(16),
    path_to_photo   VARCHAR(128),
    total_OCR_seconds   FLOAT       NOT NULL,
    region          VARCHAR(32),
    OCR_enabled     BOOLEAN         NOT NULL,
    upload_images   BOOLEAN         NOT NULL,
    reading_analysis  ENUM('Green',
                          'Yellow_up',
                          'Yellow_down',
                          'Red_up',
                          'Red_down'),
    diagnosis       TEXT,
    CONSTRAINT hasValidGestationalAgeUnits CHECK (
        ((gestational_age_unit != 'none' AND gestational_age > 0) OR (gestational_age_unit = 'none' AND gestational_age = 0))
        ),
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
insert into User values ('5', 'DebZuluka', 'justTesting');
insert into User values ('6', 'BazilioOkello', 'justTesting');
insert into User values ('7', 'CKitumba', 'justTesting');
insert into User values ('8', 'DWakikona', 'justTesting');
insert into User values ('9', 'EKakooza', 'justTesting');
insert into User values ('10', 'GabrielM', 'justTesting');

insert into User_Info values ('1',
                              'Geoffrey',
                              'Bukenya',
                              '1980-01-01',
                              'Uganda',
                              '077-241-8761',
                              'vht@healthclinic.com',
                              'VHT');

insert into User_Info values ('2',
                              'Jessica',
                              'Nasasira',
                              '1985-01-01',
                              'Uganda',
                              '077-241-8762',
                              'worker@healthclinic.com',
                              'Healthworker');

insert into User_Info values ('3',
                              'Hilary',
                              'Alupo',
                              '1975-01-01',
                              'Uganda',
                              '077-241-8763',
                              'admin@healthclinic.com',
                              'Admin');

insert into User_Info values ('4',
                              'Ester',
                              'Masane',
                              '1970-10-28',
                              'Uganda',
                              '077-241-8764',
                              'admin2@healthclinic.com',
                              'Admin');

insert into User_Info values ('5',
                              'Deborah',
                              'Zuluka',
                              '1970-04-03',
                              'Uganda',
                              '077-241-8765',
                              'vht2@healthclinic.com',
                              'VHT');

insert into User_Info values ('6',
                              'Bazilio',
                              'Olara-Okello',
                              '1965-04-03',
                              'Uganda',
                              '077-241-8766',
                              'vht3@healthclinic.com',
                              'VHT');

insert into User_Info values ('7',
                              'Christine',
                              'Kitumba',
                              '1960-04-03',
                              'Uganda',
                              '077-241-8767',
                              'worker2@healthclinic.com',
                              'Healthworker');

insert into User_Info values ('8',
                              'David',
                              'Wakikona',
                              '1955-04-03',
                              'Uganda',
                              '077-241-8768',
                              'worker3@healthclinic.com',
                              'Healthworker');

insert into User_Info values ('9',
                              'Ezra',
                              'Kakooza',
                              '1960-03-03',
                              'Uganda',
                              '077-241-8766',
                              'vht3@healthclinic.com',
                              'VHT');

insert into User_Info values ('10',
                              'Gabriel',
                              'Mukisa',
                              '1955-03-03',
                              'Uganda',
                              '077-241-8766',
                              'vht4@healthclinic.com',
                              'VHT');

insert into VHT values ('1');
insert into VHT values ('5');
insert into VHT values ('6');
insert into VHT values ('9');
insert into VHT values ('10');

insert into Healthworker values ('2');
insert into Healthworker values ('7');
insert into Healthworker values ('8');

insert into Admin values ('3');
insert into Admin values ('4');

insert into Patient values (1,
                            '17182982734',
                            'Mary',
                            'Sue',
                            'V001',
                            'Z001',
                            'H001',
                            'B001',
                            'T001',
                            'MS',
                            'F',
                            26,
                            '1993-01-05',
                            True,
                            '2019-08-10',
                            'months',
                            3);

insert into Patient values (2,
                            '23078123183',
                            'Paskal',
                            'Siakam',
                            'V001',
                            'Z001',
                            'H002',
                            '',
                            'T001',
                            'PS',
                            'M',
                            25,
                            '1994-01-05',
                            False,
                            null,
                            'none',
                            0);

insert into Patient values (3,
                            '49886151953',
                            'Kizza',
                            'Makubaya',
                            'V003',
                            'Z003',
                            'H003',
                            'B001',
                            'T001',
                            'KM',
                            'Other',
                            43,
                            '1976-01-05',
                            False,
                            null,
                            'none',
                            0);

insert into Patient values (4,
                            '67958437492',
                            'Maria',
                            'Mutagamba',
                            'V001',
                            'Z001',
                            'H001',
                            'B001',
                            'T001',
                            'MM',
                            'F',
                            22,
                            '1997-01-05',
                            True,
                            '2019-10-26',
                            'weeks',
                            3);

insert into Patient values (5,
                            '',
                            'Musa',
                            'Adrisi',
                            'V001',
                            'Z001',
                            'H002',
                            '',
                            'T001',
                            'MA',
                            'M',
                            51,
                            '1968-04-05',
                            False,
                            null,
                            'none',
                            0);

insert into Patient values (6,
                            '',
                            'Jesca',
                            'Eriyo',
                            'V001',
                            'Z001',
                            'H002',
                            '',
                            'T001',
                            'JE',
                            'F',
                            18,
                            '2001-05-05',
                            False,
                            null,
                            'none',
                            0);

/*
Patients with minimum fields
 */
insert into Patient values (7,
                            '86979421630',
                            '',
                            '',
                            'V001',
                            'Z001',
                            '',
                            '',
                            '',
                            'AP',
                            'F',
                            67,
                            null,
                            False,
                            null,
                            'none',
                            0);

insert into Patient values (8,
                            '77217719981',
                            '',
                            '',
                            'V002',
                            'Z004',
                            '',
                            '',
                            '',
                            'ZA',
                            'M',
                            37,
                            null,
                            False,
                            null,
                            'none',
                            0);

insert into Patient values (9,
                            '01685214073',
                            '',
                            '',
                            'V002',
                            'Z004',
                            '',
                            '',
                            '',
                            'FG',
                            'Other',
                            23,
                            null,
                            False,
                            null,
                            'none',
                            0);

insert into Patient values (10,
                            '00740758493',
                            'Kahinda',
                            'Otafiire',
                            'V002',
                            'Z004',
                            '',
                            '',
                            '',
                            'KO',
                            'M',
                            32,
                            '1987-04-14',
                            False,
                            null,
                            'none',
                            0);

insert into Reading values (1,
                            '1',
                            1,
                            '2019-10-24',
                            'Bleeding',
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

insert into Reading values (2,
                            '1',
                            1,
                            '2019-11-01',
                            'No Symptoms',
                            '',
                            140,
                            85,
                            126,
                            '',
                            False,
                            'CradlePlatform1.0',
                            '2019-11-01',
                            null,
                            'Google Pixel',
                            'months',
                            4,
                            '4',
                            '/photos',
                            3.14,
                            'Northern Uganda',
                            True,
                            True,
                            'Yellow_down',
                            '');

insert into Reading values (3,
                            '1',
                            1,
                            '2019-11-15',
                            'Blurred Vision,Feverish,Unwell',
                            '',
                            115,
                            85,
                            196,
                            'Shock',
                            True,
                            'CradlePlatform1.0',
                            '2019-11-15',
                            null,
                            'Google Pixel',
                            'months',
                            4,
                            '4',
                            '/photos',
                            3.14,
                            'Northern Uganda',
                            True,
                            True,
                            'Red_down',
                            '');

insert into Reading values (4,
                            '1',
                            1,
                            '2019-11-16',
                            'Headache',
                            'Nausea',
                            140,
                            90,
                            117,
                            '',
                            True,
                            'CradlePlatform1.0',
                            '2019-11-16',
                            null,
                            'Google Pixel',
                            'months',
                            4,
                            '4',
                            '/photos',
                            3.14,
                            'Northern Uganda',
                            True,
                            True,
                            'Yellow_up',
                            '');

insert into Reading values (5,
                            '1',
                            1,
                            '2019-11-17',
                            'Abdominal pain',
                            '',
                            160,
                            85,
                            139,
                            '',
                            True,
                            'CradlePlatform1.0',
                            '2019-11-17',
                            null,
                            'Google Pixel',
                            'months',
                            4,
                            '4',
                            '/photos',
                            3.14,
                            'Northern Uganda',
                            True,
                            True,
                            'Red_up',
                            '');

insert into Reading values (6,
                            '1',
                            2,
                            '2019-11-17',
                            'Abdominal pain',
                            '',
                            140,
                            90,
                            117,
                            '',
                            True,
                            'CradlePlatform1.0',
                            '2019-11-17',
                            null,
                            'Google Pixel',
                            'months',
                            4,
                            '4',
                            '/photos',
                            3.14,
                            'Northern Uganda',
                            True,
                            True,
                            'Yellow_up',
                            '');

insert into Reading values (7,
                            '5',
                            4,
                            '2019-11-18',
                            'No Symptoms',
                            '',
                            135,
                            85,
                            117,
                            'Good vitals',
                            False,
                            'CradlePlatform1.0',
                            '2019-11-18',
                            null,
                            'Google Pixel',
                            'weeks',
                            3,
                            '4',
                            '/photos',
                            3.14,
                            'Southern Uganda',
                            True,
                            True,
                            'Green',
                            '');

insert into Reading values (8,
                            '6',
                            6,
                            '2019-11-18',
                            'No Symptoms',
                            '',
                            135,
                            85,
                            117,
                            'Good vitals',
                            False,
                            'CradlePlatform1.0',
                            '2019-11-18',
                            null,
                            'Google Pixel',
                            'none',
                            0,
                            '4',
                            '/photos',
                            3.14,
                            'Southern Uganda',
                            True,
                            True,
                            'Green',
                            '');

insert into Reading values (9,
                            '5',
                            4,
                            '2019-11-19',
                            'Abdominal pain',
                            'Very sick',
                            160,
                            85,
                            139,
                            '',
                            True,
                            'CradlePlatform1.0',
                            '2019-11-19',
                            null,
                            'Google Pixel',
                            'weeks',
                            3,
                            '4',
                            '/photos',
                            3.14,
                            'Southern Uganda',
                            True,
                            True,
                            'Red_up',
                            '');

insert into Reading values (10,
                            '6',
                            6,
                            '2019-11-20',
                            'Abdominal pain',
                            'Very sick',
                            135,
                            85,
                            117,
                            'Good vitals',
                            True,
                            'CradlePlatform1.0',
                            '2019-11-20',
                            null,
                            'Google Pixel',
                            'none',
                            0,
                            '4',
                            '/photos',
                            3.14,
                            'Southern Uganda',
                            True,
                            True,
                            'Green',
                            'Take prescribed medication and stay hydrated');

insert into FollowUp values (1,
                             1,
                             'Vitals to be rechecked',
                             True,
                             'Once a week',
                             'High blood pressure',
                             'Take medicine as prescribed');

insert into FollowUp values (2,
                             2,
                             'Vitals to be rechecked',
                             True,
                             'Once a month',
                             '',
                             'Take medicine as prescribed');

 insert into FollowUp values (3,
                             4,
                             'Vitals to be rechecked',
                             True,
                             'Once a month',
                             'High blood pressure',
                             'Take medicine as prescribed');

 insert into FollowUp values (4,
                             6,
                             'Vitals to be rechecked',
                             True,
                             'Once a month',
                             '',
                             'Take medicine as prescribed');

insert into Referral values (1, '1', 1, 3, '2019-11-15', 'Bidibidi', 'Patient was unwell', '');
insert into Referral values (2, '1', 1, 4, '2019-11-16', 'Bidibidi', 'Patient had nausea', '');
insert into Referral values (3, '1', 1, 5, '2019-11-17', 'Bidibidi', 'Patient had abdominal pain', '');
insert into Referral values (4, '1', 2, 6, '2019-11-18', 'Bidibidi', 'Patient had abdominal pain', '');
insert into Referral values (5, '5', 4, 9, '2019-11-19', 'Bidibidi', 'Patient is very sick', '');
insert into Referral values (6, '6', 6, 10, '2019-11-20', 'Bidibidi', 'Patient is very sick', 'Told them to drink more water');

insert into Drug_History values (1, 1, 'Trial of various blood pressure reduction medications');
insert into Drug_History values (2, 2, '');
insert into Drug_History values (3, 3, '');
insert into Drug_History values (4, 4, '');
insert into Drug_History values (5, 5, '');
insert into Drug_History values (6, 6, 'No medications prescribed to date');
insert into Drug_History values (7, 7, 'No medications prescribed to date');
insert into Drug_History values (8, 8, 'No medications prescribed to date');
insert into Drug_History values (9, 9, 'No medications prescribed to date');
insert into Drug_History values (10, 10, 'No medications prescribed to date');

insert into Medication values (1, 1, 'Bumetanide', '2 tablets once per day', '2019-11-11', '2019-12-11');
insert into Medication values (2, 1, 'Chlorthalidone', '1 tablet twice per day', '2019-11-11', '2019-12-11');
insert into Medication values (3, 1, 'Indapamide', '1 tablet once per day', '2019-11-11', '2019-12-11');
insert into Medication values (4, 1, 'Advil', '1 tablet once per month', '2019-11-11', null);
insert into Medication values (5, 2, 'Bumetanide', '2 tablets once per day', '2019-11-11', '2019-12-11');
insert into Medication values (6, 2, 'Chlorthalidone', '1 tablet twice per day', '2019-11-11', '2019-12-11');
insert into Medication values (7, 3, 'Indapamide', '1 tablet once per day', '2019-11-11', '2019-12-11');
insert into Medication values (8, 3, 'Advil', '1 tablet once per month', '2019-11-11', null);
insert into Medication values (9, 4, 'Indapamide', '1 tablet once per day', '2019-11-11', '2019-12-11');
insert into Medication values (10, 5, 'Advil', '1 tablet once per month', '2019-11-11', null);

insert into Medical_History values (1, 1, 'Immunizations: Flu vaccine yearly. Pneumovax 2006
Allergic to Penicillin-developed a diffuse rash after an injection');
insert into Medical_History values (2, 2, 'Immunizations: Flu vaccine yearly.');

insert into Monitor values ('1', 1);
insert into Monitor values ('1', 2);
insert into Monitor values ('1', 3);
insert into Monitor values ('1', 9);
insert into Monitor values ('5', 4);
insert into Monitor values ('5', 5);
insert into Monitor values ('5', 10);
insert into Monitor values ('6', 6);
insert into Monitor values ('6', 7);
insert into Monitor values ('9', 8);