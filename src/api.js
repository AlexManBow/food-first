import { API_URL } from './config'
import { logDOM } from '@testing-library/react'

const getMealById = async (mealId) => {
	const response = await fetch(API_URL + 'lookup.php?i=' + mealId)
	return await response.json()
}

const getAllCategories = async () => {
	const response = await fetch(API_URL + 'categories.php')
	return await response.json()
	return null
}

const getFilteredCategory = async (categoryName) => {
	const response = await fetch(API_URL + 'filter.php?c=' + categoryName)
	return await response.json()
}

export { getMealById, getAllCategories, getFilteredCategory }
