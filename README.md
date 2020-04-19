# 08-cheque



## Frontend (Vue)

`User Side`
- `/cheque_usermenu`
  > Listing all the submited cheque of current user including the button to check status for each cheque 
  > Also have a button to sumbit a cheque
  
- `/cheque_status`
  > the page use to show current check status : pending , success, fail .
 

- `/cheque_submit` 
  > page for user to sumbit the cheque , by inputing cheque info and  cheque img


`Staff Side`
- `/cheque_staffmenu` 
  > List all the pending cheque that await for a staff to approve, including the button to approve status for each cheque 
- `/cheque_verify` 
  > page for Staff to verify the cheque , by comparing the cheque info that user input in  and the cheque info on the cheque img that     user give 
- `/cheque_approve` 
  > page for staff to aprrove the cheque by compare the signature on database and signature on the cheque img .


## Backend (Servlet)
 ### Show the cheques based on input id

>  Get the Array of the chequed that current user have upload
- **URL** : `/api/cheque_data`
- **Method** : `GET`
- **Auth required** : YES
- **Parameters** : 
     - id=<String> `Required`
- **Body** : None
- **Functions Involved** :  
  - getChequeDetail(int cheque_id)


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
      "owner_id": <Integer>
    
    
    
  }
  ```
  ```

 

#### Error Response

- **Status code** : `401`

  **Response body** : None
  
- **Status Code**: `404`

  **Response body** : None


---



 ### Show the list of the cheques that current user have sumbited

>  Get the Array of the chequed that current user have upload
- **URL** : `/api/cheque_list`
- **Method** : `GET`
- **Auth required** : YES
- **Parameters** : 
     - id=<String> `Required`
- **Body** : None
- **Functions Involved** :  
  - getTotalCheque(int customer_id)

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

- **Status code** : `401`

  **Response body** : None

- **Status Code**: `404`

  **Response body** : None

---

 ### Show all cheque that have in the database

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

- **Status code** : `401`

  **Response body** : None

- **Status Code**: `404`

  **Response body** : 

  ```json
  {
      "error": "cheque in database not found "
  }
  ```

---

 ### Create new cheque

> create new cheque 

- **URL** : `/api/cheque_submit`

- **Method** : `POST`

- **Auth required** : YES

- **Parameters** : 


      -type_cheque= <String> 
      -amount= <Integer> 
      -cheque_image= <String> 
      -payee_account_id= <String> 
      -payer_account_id= <String>
  
- **Body** : 

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
      "owner_id": <Integer>
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

- **Status Code**: `401`

  **Response body** : None

---

---

 ### Approve/disapprove the cheque 
>  set the cheque status to approve or disapprove

- **URL** : `/api/cheque_approval`

- **Method** : `POST`

- **Auth required** : YES

- **Parameters** : 
    - id(cheque)=<String> `Required`
    - status=<String> `Required`


- **Body** : 

  ```json
  {
      "id": <Integer>,
      "type_cheque": <String>,
      "payee_account_id": <String>,
      "payer_account_id": <String>,
      "status": <String>,
      "owner_id": <Integer>
  }
  ```

- **Functions Involved** :  
  - setStatus(int cheque_id,String status)

#### Success Response

- **Status code** : `200`

  **Response body** : None

#### Error Response

- **Status code** : `400`

  **Response body** : None

- **Status Code**: `401`

  **Response body** : None

---





##  Functions (Model)

### getAllCheque()

- **Description** : `return the arrays  of all the cheque in database`
- **Package** : `model.QueryModel`

### getTotalCheque(int customer_id)

- **Description** : `Using customer_id to search and return the Arrays of total cheques that customer submit`
- **Package** : `model.QueryModel`

### addCheque(Cheque c)

- **Description** : `Create new cheque by using information from Cheque object`
- **Package** : `model.QueryModel`

### getChequeDetail(int cheque_id)

- **Description** : ``Using cheque_id to search and return the Cheque object macthing that id``
- **Package** : `model.QueryModel`

### setStatus(int cheque_id,String status)

- **Description** : `Set checque status of ihe input cheque_id  if the status change to success then call the transaction method to add money to user and remove money from payer (in approval process) ` 
- **Package** : `model.QueryModel`





