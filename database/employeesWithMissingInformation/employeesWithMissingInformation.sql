SELECT e.employee_id
FROM Employees AS e
LEFT JOIN Salaries s ON e.employee_id = s.employee_id
WHERE s.employee_id IS NULL

UNION

SELECT s.employee_id
FROM Salaries AS s
LEFT JOIN Employees e ON e.employee_id = s.employee_id
WHERE e.employee_id IS NULL
ORDER BY employee_id