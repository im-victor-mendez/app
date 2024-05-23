SELECT ir.ingredient_name,
    SUM(ir.ingredient_weight) AS total_usage
FROM ingredient_recipe ir
GROUP BY ir.ingredient_name;