SELECT
    D.name AS Department,
    E.name AS Employee,
    E.salary AS Salary
FROM Employee AS E
JOIN Department AS D ON E.departmentId = D.id
WHERE E.salary = (
    SELECT MAX(E2.salary)
    FROM Employee AS E2
    WHERE E2.departmentId = E.departmentId
);
