SELECT
    EmployeeUNI.unique_id,
    Employees.name
FROM
    Employees
        LEFT JOIN
    EmployeeUNI ON Employees.id = EmployeeUNI.id