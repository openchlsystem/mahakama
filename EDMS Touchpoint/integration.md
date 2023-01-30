

# Contents

[EDMS – CMS Integration Documentation 2](#_Toc125730114)

[1. Add Document 2](#_Toc125730115)

[2. Retrieve Document 3](#_Toc125730116)

[Below is a sample. 3](#_Toc125730117)

#

# EDMS – CMS Integration Documentation

This document provides the various integration points needed for the integration between EDMS and CMS at ODPC

The following will be captured.

- Add documents to EDMS
- Retrieve/View documents from EDMS

1.
## Add Document

The below documentation assumes that documents will be scanned directly to CMS temporary folders with a given naming convention for the document types and the case number references. The CMS will provide events that will push the documents to the EDMS touchpoint. The EDMS API will add documents to the respective repositories (to be discussed) at send back a response to be consumed by the CMS endpoint.

| **Name** | **Description** | **Comments/changes** |
| --- | --- | --- |
| UAT URL | http://\<IP\>:\<port\>edms/rest/services/addDocument |
 |
| Method | POST |
 |
| Request Media Type | Application/JSON |
 |
| URL Params | None |
 |
| Data Params |
1. CaseNumber
2. ImageName
3. ImageFormat
4. ImageDate
 | More details to be sent to update EDMS |
| Sample Request body | {"CaseNumber" : "CMS000001","ImageName" : "Minutes", "ImageFormat" : "pdf","ImageData" :" \<Encoded Data\>"} |
 |
| Sample Response | {"Upload": "Success","DocumentID": "123456","FolderID": "654321"} |
 |

1.
## Retrieve Document

Depending on the user rights structure in CMS, users will be able to retrieve documents from the EDMS. CMS will implement a document viewer that will display the decoded image data from the response.

Below is a sample.

| **Name** | **Description** | **Comments/Changes** |
| --- | --- | --- |
| UAT URL | http://\<IP\>:\<port\>edms/rest/services/viewDocument |
 |
| Method | POST |
 |
| Request Media Type | Application/JSON |
 |
| URL Params | None |
 |
| Data Params |
1. DocumentID
 |
 |
| Sample Request body | {"DocumentID" : "123456",} |
 |
| Sample Response | {"Retrieve": "Success","DocumentID": "123456","DocumentData": "\<Encoded Image Data\>"} |
 |

##


3 **|** Page