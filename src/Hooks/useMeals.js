import { useEffect, useState } from "react";

const useMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = '/foods.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    return [meals, setMeals]
}
export default useMeals;