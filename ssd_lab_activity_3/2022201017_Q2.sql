select
    CONCAT(e1.Fname, " ", e1.Minit, " ", e1.Lname) AS Full_Name,
    e1.ssn AS SSN,
    e1.Dno AS Dept_Number,
    count(*) AS Number_of_Employees
from
    EMPLOYEE e1
    JOIN EMPLOYEE e2
where
    e1.ssn = e2.Super_ssn
group by
    e1.ssn,
    e1.Fname,
    e1.Minit,
    e1.Lname,
    e1.Dno
ORDER BY
    Number_of_Employees;