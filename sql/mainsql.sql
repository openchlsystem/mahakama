CREATE TABLE Cases (
  case_number VARCHAR(255) PRIMARY KEY,
  citation VARCHAR(255) NOT NULL,
  nature_of_case VARCHAR(255) NOT NULL,
  issues_for_determination VARCHAR(255) NOT NULL,
  odpc_internal_action VARCHAR(255) NOT NULL,
  case_attendance_outcome VARCHAR(255) NOT NULL,
  current_status VARCHAR(255) NOT NULL
  FOREIGN KEY (party_id) REFERENCES Cases(party_name)
  FOREIGN KEY (court_id) REFERENCES Cases(court_name)

);

CREATE TABLE Parties (
    party_id INT PRIMARY KEY,
    party_name VARCHAR(255) NOT NULL,
    party_type VARCHAR(255) NOT NULL, --- create a party_type table
    contact_info VARCHAR(255) NOT NULL,
    representation VARCHAR(255) NOT NULL,
    case_info VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    notes VARCHAR(255)
  
);

CREATE TABLE Court (
  court_id INT PRIMARY KEY,
    court_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    jurisdiction VARCHAR(255) NOT NULL,
    contact_information VARCHAR(255) NOT NULL,
    judiciary_information VARCHAR(255) NOT NULL,
    court_rules VARCHAR(255) NOT NULL,
    online_services VARCHAR(255) NOT NULL
);

CREATE TABLE Case_Advocates (
  case_advocate_id INT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(255),
  demographics JSON,
  interests VARCHAR(255),
  expertise VARCHAR(255),
  influence VARCHAR(255),
  org_history VARCHAR(255),
  social_media JSON,
  impact_metrics JSON,
  notes TEXT,
  tags VARCHAR(255)
);

CREATE TABLE Case_Documents (
  document_id INT PRIMARY KEY,
  case_number VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  file VARCHAR(255) NOT NULL,
  FOREIGN KEY (case_number) REFERENCES Cases(case_number)
  
);

CREATE TABLE Case_Administration_Fees (
  fee_id INT PRIMARY KEY,
  case_number VARCHAR(255) NOT NULL,
  fee_name VARCHAR(255) NOT NULL,
  amount FLOAT NOT NULL,
  FOREIGN KEY (case_number) REFERENCES Cases(case_number)
);

CREATE TABLE Case_Profiles (
  case_profile_id INT PRIMARY KEY,
  case_number VARCHAR(255) NOT NULL,
  case_history VARCHAR(255) NOT NULL,
  additional_information VARCHAR(255) NOT NULL,
  notes VARCHAR(255) NOT NULL,
  FOREIGN KEY (case_number) REFERENCES Cases(case_number)
);
