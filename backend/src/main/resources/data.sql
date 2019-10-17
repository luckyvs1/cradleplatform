/*
    For inserting initial data into tables.

    Ex:
    INSERT INTO User (id, username, password) VALUES ('1', 'adminuser', 'password123!');
    INSERT INTO User (id, username, password) VALUES ('2', 'vhtuser', 'password123!');
    INSERT INTO User (id, username, password) VALUES ('3', 'healthworkeruser', 'password123!');


    INSERT INTO Patient (id,attestation_no,first_name,last_name,village_no,zone_no,initials,sex,age,dob,pregnant,gestational_start_date,gestational_age_unit,current_gestational_age )
    VALUES ("22","1234","bob","builder","1", "1","BB",'M', 22, "2019-1-1",true,"2019-1-1","week",1);

    INSERT INTO FollowUp (id,patient_id,notes,required,frequency,diagnosis,treatment)
    VALUES (22,"22","Hello Im broken" ,true,"once a month","advil  every half an hour","trx 778");

    INSERT INTO User (id, username,password)
    VALUES ("1","faraz","coolguy");

    INSERT INTO User_Info (id,at_a_station_no,first_name,last_name,dob,country,phone,email,role)
    VALUES ("1" , "1" , "farrra" ,"ferrero" ,"1998-6-6","iran","6044402037","noway@noway.com" ,"Admin");

    INSERT INTO Admin (id)
    VALUES ("1");

    INSERT INTO Healthworker(id)
    VALUES ("11");

    INSERT INTO VHT (id)
    VALUES ("111");

    INSERT INTO Drug_History (id,patient_id,history)
    VALUES (22, "22", "bad history");

    INSERT INTO Monitor (VHT_id,patient_id)
    VALUES ();

    INSERT INTO Referral (id,referrer_id,patient_id,reading_id,timestamp,health_facility,notes_reason,notes_action)
    VALUES ();

    INSERT INTO Reading (id,reader_id,patient_id,timestamp,symptoms,other_symptoms,systolic_bp,diastolic_bp,pulse_rate,notes,need_followup,app_version,date_last_saved,date_recheck_vitals_needed,device_info,gestational_age_unit,gestational_age,manually_changed_OCR_results,path_to_photo,total_OCR_seconds,region,OCR_enabled,upload_images,reading_analysis)
    VALUES ();

    INSERT INTO Medical_History(id ,patient_id,history )
    VALUES ();

    INSERT INTO Medication (id,drug_history_id,drug_name,dosage,start_date,end_date)
    VALUES ();
 */

