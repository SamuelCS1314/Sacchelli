#### USERS

/\* Usuários \*/

btn-ADD btn-Edit - btn-Delete - filtre

ID PK AUTO\_INCREMENT

NOME COMPLETO VARCHAR(100)

MATRICULA INT

DEPARTAMENTO\_ID FK\_FROM\_DEPARTAMENTOS



/\* DETALHE \*/

TIPO DE USER (NORMAL) (20) Apenas Terceirizado{

DATA DE INICIAL E DATE

FINAL VALIDADE 	  DATE

}

CPF		  VARCHAR(11)	  

CELULAR E INT

EMAIL	VARCHAR(30)

OBSERVAÇÃO (200)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

/\* Deptos \*/

ID PK AUTO\_INCREMENT

DEPARTAMENTO (30)

TELEFONE INT

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

/\* Visitas \*/

ID PK AUTO\_INCREMENT

NOME COMPLETO VARCHAR(100)

CPF		  VARCHAR(11)

CELULAR E INT

EMAIL	VARCHAR(30)

DATA DE INICIAL E DATE

FINAL VALIDADE 	  DATE

MATRICULA PK AUTO\_INCREMENT



\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

/\* Credenciais \*/

NIVEL\_CREDENCIAL VARCHAR(12)

NUMERO\_CARTAO INT

OBSERVAÇÃO (200)

#### 



#### Dispositivos

