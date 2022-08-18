select
    temp.Dnumber,
    temp.Dname,
    count(*) as Number_of_Locations
from
    DEPT_LOCATIONS dl,
(
        select
            *
        from
            DEPARTMENT d1,
            (
                select
                    Essn,
                    Sex
                from
                    DEPENDENT
                where
                    Sex = 'F'
                GROUP BY
                    Essn,
                    Sex
                HAVING
                    COUNT(*) >= 2
            ) d2
        where
            d1.Mgr_ssn = d2.Essn
    ) AS temp
where
    dl.Dnumber = temp.Dnumber
GROUP BY
    temp.Dnumber,
    temp.Dname;