/*
    For inserting initial data into tables.

    Ex:
    INSERT INTO User (id, username, password) VALUES ('1', 'adminuser', 'password123!');
    INSERT INTO User (id, username, password) VALUES ('2', 'vhtuser', 'password123!');
    INSERT INTO User (id, username, password) VALUES ('3', 'healthworkeruser', 'password123!');


    INSERT INTO Patient (id,attestation_no,first_name,last_name,village_no,zone_no,initials,sex,age,dob,pregnant,gestational_start_date,gestational_age_unit,current_gestational_age )
    VALUES ("22","1234","bob","builder","1", "1","BB",'M', 22, "2019-1-1",true,"2019-1-1","week",1);
 //follow up
    INSERT INTO FollowUp (id,patient_id,notes,required,frequency,diagnosis,treatment)
    VALUES (22,"22","Hello Im broken" ,true,"once a month","advil  every half an hour","trx 778");
 */



