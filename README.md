# Web time's up app

## Import datas in mysql database
After you have created the database, you can import the datas in the database.  
```bash
cd ./datas
cat data.csv | awk -F';' '{ print "INSERT INTO Card (name,fileName) VALUES (\"" $1 "\",\"" $2 "\");" }' > data.sql
```
Now, you can import data.sql in your mysql database in the mysql command line, with the following command:
```mysql
use database_name;
source data.sql;
```