SELECT DISTINCT
    author_id as id
FROM Views
WHERE Views.author_id = Views.viewer_id
ORDER BY id