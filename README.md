# 08-cheque



## Frontend (Vue)

`User Side`
- `/cheque_usermenu`
  > Have a button for a user to submit the cheque
  > Have a bouttn for user to Listing all the submited cheque(current user) including the detail and status.
 
- `/cheque_submit` 
  > Page for user to sumbit the cheque , by inputing cheque info and  cheque img


`Staff Side`
- `/cheque_staffmenu` 
  > List all the pending cheque that await for a staff to approve, including the button to approve status for each cheque 
- `/cheque_verify` 
  > page for Staff to verify the cheque , by comparing the cheque info that user input in  and the cheque info on the cheque img that     user give and approve the cheque



## Backend (Servlet)
 ### Show the cheque detail based on input id

>  Get the chequed information based on given id
- **URL** : `/api/cheque_data`
- **Method** : `GET`
- **Auth required** : YES
- **Parameters** : 
     - id=<String> `Required`
- **Body** : None
- **Functions Involved** :  
  - getChequeDetail(String cheque_id)


#### Success Response

- **Status code** : `200`

  **Response body** :
   ```json
 {  
   
      "id": <Integer>,
      "type_cheque": <String>,
      "amount": <Integer>,
      "date_of_cheque": <String>,
      "submitted_at": <String>,
      "cheque_image": <String>,
      "payee_account_id": <String>,
      "payer_account_id": <String>,
      "status": <String>,
      "owner_id": <Integer>,
      "payee_name": <String>,
      "payer_name":<String>,
      "payer_customer_id":<String>,
      "database_sig":<String>
      
    
    
    
  }
  ```
  ```

 

#### Error Response

- **Status code** : `400`

  **Response body** : None
  
  
- **Status code** : `503`

  **Response body** : None
  



---



 ### Show the list of the cheques that current user have sumbited

>  Get the Array of all the cheques that current user have submitted
- **URL** : `/api/cheque_list`
- **Method** : `GET`
- **Auth required** : YES
- **Parameters** : 
     - id=<String> `Required`
- **Body** : None
- **Functions Involved** :  
  - getTotalCheque(String customer_id)

#### Success Response

- **Status code** : `200`

  **Response body** :

 **Response body** :
   ```json
 {  
    cheques_user:[
    {
      "id": <Integer>,
      "type_cheque": <String>,
      "amount": <Integer>,
      "date_of_cheque": <String>,
      "submitted_at": <String>,
      "cheque_image": <String>,
      "payee_account_id": <String>,
      "payer_account_id": <String>,
      "status": <String>,
      "owner_id": <Integer>
    },
     {
      "id": <Integer>,
      "type_cheque": <String>,
      "amount": <Integer>,
      "date_of_cheque": <String>,
      "submitted_at": <String>,
      "cheque_image": <String>,
      "payee_account_id": <String>,
      "payer_account_id": <String>,
      "status": <String>,
      "owner_id": <Integer>
    },
    {
      "id": <Integer>,
      "type_cheque": <String>,
      "amount": <Integer>,
      "date_of_cheque": <String>,
      "submitted_at": <String>,
      "cheque_image": <String>,
      "payee_account_id": <String>,
      "payer_account_id": <String>,
      "status": <String>,
      "owner_id": <Integer>
    },.... so on
   ]
    
  }
  ```
  ```

#### Error Response

- **Status code** : `400`

  **Response body** : None
  
  
- **Status code** : `503`

  **Response body** : None
  
---

 ### Show all cheque that have in the database (For Staff Side)

> Get all the array of cheque data in database

- **URL** : `/api/cheque_stafflist`
- **Method** : `GET`
- **Auth required** : YES
- **Parameters** : 
- **Body** : None
- **Functions Involved** :  
  - getAllCheque()

#### Success Response

- **Status code** : `200`


 **Response body** :
   ```json
 {  
    cheques_all:[
    {
      "id": <Integer>,
      "type_cheque": <String>,
      "amount": <Integer>,
      "date_of_cheque": <String>,
      "submitted_at": <String>,
      "cheque_image": <String>,
      "payee_account_id": <String>,
      "payer_account_id": <String>,
      "status": <String>,
      "owner_id": <Integer>
    },
     {
      "id": <Integer>,
      "type_cheque": <String>,
      "amount": <Integer>,
      "date_of_cheque": <String>,
      "submitted_at": <String>,
      "cheque_image": <String>,
      "payee_account_id": <String>,
      "payer_account_id": <String>,
      "status": <String>,
      "owner_id": <Integer>
    },
    {
      "id": <Integer>,
      "type_cheque": <String>,
      "amount": <Integer>,
      "date_of_cheque": <String>,
      "submitted_at": <String>,
      "cheque_image": <String>,
      "payee_account_id": <String>,
      "payer_account_id": <String>,
      "status": <String>,
      "owner_id": <Integer>
    },.... so on
   ]
    
  }
  ```
  ```

#### Error Response

- **Status code** : `400`

  **Response body** : None
  
  
- **Status code** : `503`

  **Response body** : None
  


---

 ### Create new cheque

> create new cheque 

- **URL** : `/api/cheque_submit`

- **Method** : `POST`

- **Auth required** : YES

- **Parameters** : 

      -type= <String> 
      -amount= <String> 
      -date = <String> 
      -payeeid= <String> 
      -payerid= <String>
  ------- Use Formdata -----------
      -img file
    Sending the cheque img file to backend
  
- **Body** : 

  ```json
  {
  --------SEND THIS VIA FormData-------
      fd.append("type", this.type);
      fd.append("amount", this.amount);
      fd.append("date", this.date);
      fd.append("payeeid", this.select);
      fd.append("payerid", this.payerid);
      fd.append("image", this.selectedFile, this.selectedFile.name);
  }
  ```

- **Functions Involved** :  
  - addCheque()

#### Success Response

- **Status code** : `200`

  **Response body** : None

#### Error Response

- **Status code** : `400`

  **Response body** : None
  
  
- **Status code** : `503`

  **Response body** : None
  
---
---
### List all the options of the current user account IDs , for the user to select in Cheque Submit form (Select which account they want to receive moeny from the cheque)

>  Get the Array of user accountID based on current session user ID
- **URL** : `/api/cheque_submit`
- **Method** : `GET`
- **Auth required** : YES
- **Parameters** : None
- **Body** : None
- **Functions Involved** :  
  - getUserAccountForCheque(String customerID)


#### Success Response

- **Status code** : `200`

  **Response body** :
   ```json
 {      acID=<String>
       
 
      [ "accID1", "accID2", "accID3",... so on ]
 
    
  }
  #### Error Response

- **Status code** : `400`

  **Response body** : None
  
  
- **Status code** : `503`

  **Response body** : None
  
  ```
  ```



---

 ### Approve/disapprove the cheque 
>  set the cheque status to approve or disapprove

- **URL** : `/api/cheque_approval`

- **Method** : `POST`

- **Auth required** : YES

- **Parameters** : 
    - id(cheque)=<String> `Required`
    -check=<Array> `Required` (the  Array contianing the value of correctness of each section of the cheque)
    -payer_customer_id=<String> `Required`(to get the original siganture of the payer from database)
    -payer_account_id=<String> `Required`
    -payee_account_id=<String> `Required`
    -amount=<String> `Required`

- **Body** : 

  ```json
  {
  
        ---------------- USE FORM DATA TO SEND ----------------
        fd.append("cheque_id", this.id);
        fd.append("check", this.check);
        fd.append("payer_customer_id", this.info.data.payer_customer_id);
        fd.append("payer_account_id", this.info.data.payer_account_id);
        fd.append("payee_account_id", this.info.data.payee_account_id);
        fd.append("amount", this.info.data.amount);
  }
  ```

- **Functions Involved** :  
  - approveStatus(String id,String status)
  (FROM GROUP 07)
  -transfer(payer_customer_id,payer_account_id,payee_account_id,amount,note) 
#### Success Response

- **Status code** : `200`

  **Response body** : None

#### Error Response


- **Status code** : `400`

  **Response body** : None
  
  
- **Status code** : `503`

  **Response body** : None
  
---
 ### get CHEQUE+ SIGANTURE IMG FROM SERVER

>  Get the chequed img or signature img based on url
- **URL** : `/api/cheque_data`
- **Method** : `GET`
- **Auth required** : YES
- **Parameters** : 
     - cheque_img =<String> `Required` (get the path url  of the img)
- **Body** : None
- **Functions Involved** :  
  - get the img file from the given url and send the base64 code of that img
 
#### Success Response

- **Status code** : `200`

  **Response body** :
   ```json
 {  
    base 64 code of the given img   
    
  }
  ```
  ```

#### Error Response

- **Status code** : `400`

  **Response body** : None
  
  
- **Status code** : `503`

  **Response body** : None
  




##  Functions (Model)

### getAllCheque()

- **Description** : `return the arrays  of all the cheque in database`
- **Package** : `model.ChequeQueryModel`

### getTotalCheque(String customer_id)

- **Description** : `Using customer_id to search and return the Arrays of total cheques that customer submit`
- **Package** : `model.ChequeQueryModel`

### addCheque(String type_cheque, String amount, String date_of_cheque, String submitted_at,
                          String cheque_image, String payee_account_id, String payer_account_id, String owner_id)

- **Description** : `Create new cheque by using input information`
- **Package** : `model.ChequeQueryModel`

### getChequeDetail(String cheque_id)

- **Description** : ``Using cheque_id to search and return the Cheque object macthing that id``
- **Package** : `model.ChequeQueryModel`

### approveStatus(int cheque_id,String status)

- **Description** : `Set checque status of ihe input cheque_id  if the status change to success then call the transfer method (From Group 07 QueryModel)to add money to user and remove money from payer (in approval process) ` 
- **Package** : `model.ChequeQueryModel`

##getUserAccountForCheque(String customerID)
- **Description** : `Get the array of user accID based on the given customerID ` 
- **Package** : `model.ChequeQueryModel`


  (FROM GROUP 07)
  -transfer(String account_id,  String payee_id, String amount, String note)


  - **Description** : Create two transaction. First transaction, create a withdraw transaction from owner account. Then, create another   transaction for depositing money into destination account. After that, update the database.
  - **Package** : model.BasicBankingModel

