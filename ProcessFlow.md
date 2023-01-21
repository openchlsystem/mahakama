# Legal Case Management System

## Case intake: 

The process begins with the initial intake of a new case, where information about the parties involved, the nature of the dispute, and any relevant documentation is collected.

- Required at this stage: client information, case information, and relevant documents.


Additionally

##### Case assignment: 
The case is then assigned to a specific attorney or legal team for further review and management.

- Required at this stage: case information, attorney or legal team assignment.
```sql
CREATE TABLE Cases (
  case_number VARCHAR(255) PRIMARY KEY,
  citation VARCHAR(255) NOT NULL,
  nature_of_case VARCHAR(255) NOT NULL,
  issues_for_determination VARCHAR(255) NOT NULL,
  odpc_internal_action VARCHAR(255) NOT NULL,
  case_attendance_outcome VARCHAR(255) NOT NULL,
  current_status VARCHAR(255) NOT NULL
 

);
```

```sql
create case documents.
CREATE TABLE Case_Documents (
  document_id INT PRIMARY KEY,
  FOREIGN KEY (document_type_id) REFERENCES Cases(document_type)
  case_number VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  file VARCHAR(255) NOT NULL,
  FOREIGN KEY (case_number) REFERENCES Cases(case_number)
  
);
```

```sql
CREATE TABLE case_parties (
    party_id INT PRIMARY KEY,
    case_id INT NOT NULL,
    party_name VARCHAR(255) NOT NULL,
    party_type VARCHAR(255) NOT NULL,
    advocate_name VARCHAR(255),
    FOREIGN KEY (case_id) REFERENCES cases(case_id)
);
```





#####Investigation and research: 

The attorney or legal team will conduct an investigation and research the relevant laws and precedents related to the case.

- Required at this stage: case information, legal research and investigation.

## Pleadings and motions: 

The attorney will then draft and file any necessary pleadings and motions, such as complaints, answers, and motions for summary judgment.

- Required at this stage: pleadings and motions, court filing fees.




```sql
create case documents.
CREATE TABLE Case_Documents (
  document_id INT PRIMARY KEY,
  FOREIGN KEY (document_type_id) REFERENCES Cases(document_type)
  case_number VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  file VARCHAR(255) NOT NULL,
  FOREIGN KEY (case_number) REFERENCES Cases(case_number)
  
);
```

```sql
CREATE TABLE Case_Administration_Fees (
  fee_id INT PRIMARY KEY,
  case_number VARCHAR(255) NOT NULL,
  fee_name VARCHAR(255) NOT NULL,
  amount FLOAT NOT NULL,
  FOREIGN KEY (case_number) REFERENCES Cases(case_number)
);
```

```sql
CREATE TABLE case_timeline (
    event_id INT PRIMARY KEY,
    case_id INT NOT NULL,
    event_name VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL,
    event_description VARCHAR(255),
    FOREIGN KEY (case_id) REFERENCES cases(case_id)
);
```

##### Discovery: 

The attorney will conduct discovery, which includes the process of gathering evidence from the opposing party, such as through depositions, document requests, and interrogatories.

- Required at this stage: discovery requests, evidence.

##### Pretrial conference: 

The attorney and opposing counsel may participate in a pretrial conference to discuss the case, resolve disputes, and plan for trial.

- Required at this stage: case information, attorney and opposing counsel availability.

## Trial: 

If the case is not resolved before trial, it will proceed to trial, where both parties present their evidence and argue their positions before a judge or jury.

- Required at this stage: evidence, witnesses, legal arguments.

witnesses
```sql
CREATE TABLE case_parties (
    party_id INT PRIMARY KEY,
    case_id INT NOT NULL,
    party_name VARCHAR(255) NOT NULL,
    party_type VARCHAR(255) NOT NULL,
    advocate_name VARCHAR(255),
    FOREIGN KEY (case_id) REFERENCES cases(case_id)
);

```
```sql
legal arguments.
CREATE TABLE case_documents (
    document_id INT PRIMARY KEY,
    case_id INT NOT NULL,
    document_name VARCHAR(255) NOT NULL,
    document_url VARCHAR(255) NOT NULL,
    upload_date DATE NOT NULL,
    FOREIGN KEY (case_id) REFERENCES cases(case_id)
);
```


## Post-trial: 

After the trial, the judge will issue a ruling, and the attorney will handle any necessary post-trial motions or appeals.

- Required at this stage: judge's ruling, post-trial motions or appeals.

```sql
legal arguments.
CREATE TABLE case_documents (
    document_id INT PRIMARY KEY,
    case_id INT NOT NULL,
    document_name VARCHAR(255) NOT NULL,
    document_url VARCHAR(255) NOT NULL,
    upload_date DATE NOT NULL,
    FOREIGN KEY (case_id) REFERENCES cases(case_id)
);
```

##  Case Closure: 

Once the case is resolved, the attorney will close the case and file any necessary paperwork.

- Required at this stage: case resolution, case closure paperwork.

## Dependancies


```sql
CREATE TABLE advocates (
  id INT PRIMARY KEY,
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

```

```sql
CREATE TABLE court_profiles (
    court_id INT PRIMARY KEY,
    court_name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    jurisdiction VARCHAR(255) NOT NULL,
    contact_information VARCHAR(255) NOT NULL,
    judiciary_information VARCHAR(255) NOT NULL,
    court_rules VARCHAR(255) NOT NULL,
    online_services VARCHAR(255) NOT NULL
);


```

<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;page&quot;:0,&quot;toolbar&quot;:&quot;pages zoom layers tags lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;Electron\&quot; modified=\&quot;2023-01-21T09:28:34.855Z\&quot; agent=\&quot;5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/20.8.10 Chrome/106.0.5249.199 Electron/21.3.5 Safari/537.36\&quot; version=\&quot;20.8.10\&quot; etag=\&quot;iEnbtPnfQYCnWNDKtwxD\&quot; type=\&quot;device\&quot; pages=\&quot;10\&quot;&gt;&lt;diagram id=\&quot;8yPpKuRlVWXWhYJcRqZx\&quot; name=\&quot;Overview\&quot;&gt;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&lt;/diagram&gt;&lt;diagram id=\&quot;kyetfcqkx9p1HPa82S-c\&quot; name=\&quot;Process Flow \&quot;&gt;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&lt;/diagram&gt;&lt;diagram id=\&quot;Mro5qOK4aE4KiXvPEu8m\&quot; name=\&quot;Case_Parties\&quot;&gt;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&lt;/diagram&gt;&lt;diagram name=\&quot;Advocates Profile\&quot; id=\&quot;EfoONNhnIJR64SPIiys2\&quot;&gt;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&lt;/diagram&gt;&lt;diagram id=\&quot;RUsdCZOu3zReGZ4Bv2Yf\&quot; name=\&quot;Courts\&quot;&gt;xZZtb9owEMc/TaT2RaWQNJS3JGUtGmUTpFv7qvJik3hzfJHj8PTpd8EOJEVTt44xCQX7x/n+d3a4s+NH+fpOkSJ7AMqE47l07fi3jucNggE+a7AxoO/eGJAqTg1yD2DOt8zAXkMrTllpmUEaQGhedGECUrJEdxhRClZdswUI2gEFSdkRmCdEHNOvnOqsScs98HvG06xR7rn2l5w0xhaUGaGwaiF/5Hh9x/PXxPFDp2ZvffxIAeh3LOw6ydcRE/UpdU/gw+kd73dPMan/sVb8lG3H214axsHz1t8o/+mGXHkmgCURlT1QVBUYSphhbP20HkVQKY1GnxUsOJ67NcAgDzYNLPaLZqNhjCm48TCcjHYvIHp5KYyPEsFFy1HxSz/4TfICB/JbWTQ7cYSMc8zUc8fTuI51Nn4Yzp5x9HGEz+jkWpLkuBPul+Esuh/OLrwguMTp9FMtPn2cTE6rKSAhmoM8n+L3SvGS8uS8qlilNEnwJOUCVH72lDFfTtTm/8ib90pV5t9xJlGQgkv2UjK15Mlbwr+hetmCXcNdidebpm9ott5VGZ0LBD0cllrBDxaBAIVEgkTLEIuFeIXKgiRcpgiCwywGTOj2qq584Srjms2R11Ir7LrIYMnUQuzaS8YpZRKZgkpSVldHdx9huxLb4owrMdgW+rvK/LpK3zHImVYbnFuR66BvlO2VoNe3kawODdYf2K6ZtZqrf23vDsQ29XTv+yQtBX3YrvKe1oyr/6A7W7XWpckf/QQ=&lt;/diagram&gt;&lt;diagram name=\&quot;Case_Documents\&quot; id=\&quot;CX_4PHVfvwgDoynEChOn\&quot;&gt;1ZZtb9owEMc/TaTyAikkJeUtBPqgtWwDummvKjc2iYVjp44DYZ9+Z+yUpHQFOlZtEgrJz8797+xz7hw/TMsribLkTmDCHM/FpeMPHc/rdXtw1WBtQOBeGBBLig1yt2BKfxIDOxUtKCa5ZQYpIZiiWRNGgnMSqQZDUopVc9pcMNwAGYrJDphGiO3S7xSrpArL3fJrQuOkUu64diRF1WQL8gRhsaohf+R4geP5JXL8gaPZvp8fSiHUO15sGknLkDC9S9UOXCYXX6/8one3iF1UPnUuWblsG7cvP0jteZ0l4eqf8cozXi0RK2w+gCoD/wYJOBzEaiNuSJ4hrrdZrW3uBE+F3qzBI4oWsRQFx+1IMCEdv691OVUUMWPAzqxMhignMGUooiLVy+EFKM2A88c8qynCOhjRpiOAd707qb9wjLhq55vDqsc6XlbWBlb2QOghLmT6mygrRx7lKxH8z4GFk1F/BvnpzvqDW/0fwX4+YLubOYCzPZG+uiS7kWY18CJD3FcQpLrn3oxncP0yubnrT37A3acRXMOaTPaWyqkz/TDHq6V7UOtMH4xv/Ul43Z+ced1uCx7Hn3VI4/vb22YkB6/smyEf4x9H6RH+nUw207Xmw2SLjAmEHzBSm4+USfW/JdY6yFZrz35iujwoERrzvEaOe4qUm++NSiGVhx19DpQUCxKaTB9ywWHmYE4Ze4EgDyPKYwDd7dNMQITDti5Gg1VCFZkC11Ir6KOAiSWRc7ZpGBKKMeHANkeL6ILlPnu4t2LaygrmIIJaU/NnFfRlNb0iIiVKruHZipx3A6NsO79OYD1Zbfsov2ebo6TWQ/nntkVEtneLn22fpPSDDVv939OBwdtHNGFWrdYb+6Nf&lt;/diagram&gt;&lt;diagram id=\&quot;OL10l-ND-pGQCxJF_y4c\&quot; name=\&quot;Case Stages\&quot;&gt;5VrbcqM4EP0aamceUoVhbGcefUkmqU2yU3Z2U/vkklEbtCMQI4Qv8/XbEgJDSCZzSewUSaVAOhJ0i0OfbqI4/iTefpIkja4FBe54Lt06/tTxvIE3wKMGdgXQ83p+gYSS0QJz98CcfQM7sURzRiGzWAEpIbhiaRMMRJJAoBoYkVJsmtNWgtMGkJIQWsA8ILyN3jGqIov2XHc/cAEsjKzp074diEk52QJZRKjY1CD/zNGPx98Sxx87Gnvq159IIdQvXNi8SbydANc0NRk4f/4bV09PQqJe2NZdz1t8vLjre3dfXbFyw9M5pyfWgTXhuSUUrXJ0ZRzh0CDUrQsglCVhOYDO7cdKMC2ByexsdIuuu7ej8ZU+ZwrfgAwb72o3SB+9Hs8kTrGRLLO0XHkLwjV57uXNLR4/zy6vR7N/sfXnGR4nz2jFuI7nf0azycVo9s7r999j9+Yvbffm76urFzC3wGgOJEsVE8nhTAcSiAK6oHjE7rSg8KWtLXffX+EPGHxfA5sTjaSoXalTCrbmrVYxR6CHzUxJ8QUmgguJSCISnDleMc7vQVlKAv36+9P+vncrcC3TEx1p403EFMwR16Y2KPOIiTXIFTdyFjFKIUFMijyhoKNRX8XJEviYBF9Cg5dGMeLPzU+1iLo4lOEKEtdTg35PLO4LxycQMSip2bFGhh+8wrJNU54/LPqbveZ7H62QRzW59z5YkNg8E1b3fhaVw3tYoTuMXnptvRyOC8M9zaoz8ZyRuWPV8AZfc52UxqUSln3HH+nx/hPXtxtPWfyRRtOrllNVP4QEJOELlqyExJxtZKmabGThuTxpKN9j/mCccKxjTD5yrXOatLp7LlmKXOFZRVrNApLVF/izD3v6C6s8JEOcZcXjOCIr8yACmvOClfpTx4JSakKMLBBZTDCQkkwz11la7HKzI0dLQvMyWlIJJ/apuw951zECSJpyFhhJOC4J58wGBkl02SphzWBjkYaPOMR1YaSjQ7wV+UqEYgFkCyUWWSQ2i4DkzfUenK/LLMsLeqxvJR9YiSm272p3DT95TekCLM0IM0koaL16HaMuxrr06NF1XTjxQOpZAlICe1TkUlU85an+1smqqEylCCVkXaZLmgR9XLb2sVV545qSLRalCBZ8PKbeHeOEwgqSI+vdZ3zvdRDVIsi69UfW/fzzX05D0Ep23MCYQULB1se6Wq7cKgPkTRQD+j2EJDj258xlnIpsz4X1Cu5RIZI1C4pyTVcGuw7zgmoMhL/mMrpwzxWrip9aBHWWFyFRNF5LRi+dcd/iZ8wK4Nif+rU/jNmaluyKblX63nOyaxwwDotYrFtRf/iPErF+6G9h6J8+SRGbVFJUWjp32ERvwoXgV2cE8vd4+t4V/cb4cPrYXslD+xq1/ZPXszsx6DU2J07aexP9vt/emxieDl7t3oS5+ic2s6212j8Z+Gf/Aw==&lt;/diagram&gt;&lt;diagram id=\&quot;go-bineaT2K03aBX-Ycr\&quot; name=\&quot;File_Movement\&quot;&gt;ddHNEoIgEADgp+GOYmN3s7p48tCZkU2YQddBGq2nDwfMGOvE8u3C8kNY0c0XwwdZoQBNUipmwk4kTZOMZW5Y5OnlmOceWqNEKNqgVi8ISIM+lIAxKrSI2qohxgb7HhobGTcGp7jsjjruOvAWdlA3XO/1poSV4RYHuvkVVCvXzgkNmY6vxQFGyQVOX8RKwgqDaH3UzQXo5fHWd/Hrzn+yn4MZ6O2PBS7Y9naT6IdY+QY=&lt;/diagram&gt;&lt;diagram id=\&quot;KijHp7TkB7Y9rlxXi4wv\&quot; name=\&quot;New_Case\&quot;&gt;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&lt;/diagram&gt;&lt;diagram id=\&quot;FCi1SGAsH6xIpZlhe9Lw\&quot; name=\&quot;Admin Fees\&quot;&gt;rdK7DoMgFAbgp2FHsLe19LZ0cuhMhCoJegzSSPv01Yq1xKHpJSEh+fjhkAOIssLtDa/yIwipEcHCIbpBhETRKm6nTq69LOKoh8wo4UMjJOomPWKvFyVkHQQtgLaqCjGFspSpDYwbA00YO4MOq1Y8kxNIUq6nelLC5r0uZ3j0g1RZPlSOsF8p+BD2UOdcQPNCdIvIHBHqOKJr1Nm7QZkBsF9sDA8pHJO6e6bhBfob7v5/8LN7Rpb211qUtfs+aMAjH3xMur0D&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>
