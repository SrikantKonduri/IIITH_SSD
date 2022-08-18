select
    w.Essn as "Manager_SSN",
    COUNT(*) as "Number_of_Projects"
from
    WORKS_ON w
where
    w.Essn in (
        select
            Mgr_ssn
        from
            DEPARTMENT d
        where
            d.Dnumber in (
                select
                    Dnum
                from
                    Project
                where
                    Pname = 'ProductY'
            )
    )
GROUP BY
    w.Essn;